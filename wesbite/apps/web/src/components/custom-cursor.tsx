"use client";

import { useEffect, useRef } from 'react';

interface CursorTrail {
  x: number;
  y: number;
  opacity: number;
}

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<CursorTrail[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;

    const updateCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnter = () => {
      isHovering = true;
      cursor.classList.add('hover');
    };

    const handleMouseLeave = () => {
      isHovering = false;
      cursor.classList.remove('hover');
    };

    const animateCursor = () => {
      if (cursor) {
        cursor.style.left = `${mouseX - 10}px`;
        cursor.style.top = `${mouseY - 10}px`;
      }

      // Update trail
      if (trailRef.current.length > 0) {
        trailRef.current = trailRef.current.map((trail, index) => ({
          ...trail,
          opacity: Math.max(0, trail.opacity - 0.05),
        })).filter(trail => trail.opacity > 0);
      }

      // Add new trail point
      if (trailRef.current.length < 20) {
        trailRef.current.push({
          x: mouseX,
          y: mouseY,
          opacity: 0.6,
        });
      }

      // Render trails
      const existingTrails = document.querySelectorAll('.cursor-trail');
      existingTrails.forEach(trail => trail.remove());

      trailRef.current.forEach((trail, index) => {
        const trailElement = document.createElement('div');
        trailElement.className = 'cursor-trail';
        trailElement.style.left = `${trail.x - 3}px`;
        trailElement.style.top = `${trail.y - 3}px`;
        trailElement.style.opacity = trail.opacity.toString();
        trailElement.style.transform = `scale(${trail.opacity})`;
        document.body.appendChild(trailElement);
      });

      animationRef.current = requestAnimationFrame(animateCursor);
    };

    // Add event listeners
    document.addEventListener('mousemove', updateCursor);
    
    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select, .interactive');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    animateCursor();

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      // Clean up trails
      const existingTrails = document.querySelectorAll('.cursor-trail');
      existingTrails.forEach(trail => trail.remove());
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
}
