"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Emily Carter",
    role: "Founder of Blossom Beauty",
    company: "Blossom Beauty",
    rating: 5,
    text: "Working with this design team has been a game-changer for our brand. Their creative vision and attention to detail have elevated our online presence and brought our brand to life.",
    avatar: "EC"
  },
  {
    id: 2,
    name: "Sarah Thompson", 
    role: "CEO of GreenLeaf",
    company: "GreenLeaf",
    rating: 5,
    text: "Working with this design team has been a game-changer for our brand. Their creative vision and attention to detail have elevated our online presence and brought our brand to life.",
    avatar: "ST"
  },
  {
    id: 3,
    name: "Alex Kim",
    role: "COO of TechFlow",
    company: "TechFlow",
    rating: 5,
    text: "The motion designs created by this team have brought our promotional videos to life. The animations are engaging and professional, capturing our brand perfectly.",
    avatar: "AK"
  },
  {
    id: 4,
    name: "Michael Lee",
    role: "Creative Director at Apex Advertising",
    company: "Apex Advertising",
    rating: 5,
    text: "The custom illustrations and graphics have added a unique flair to our marketing materials. We couldn't be happier with the results and the impact they've had on our campaigns.",
    avatar: "ML"
  },
  {
    id: 5,
    name: "David Reynolds",
    role: "Marketing Director at Tech Innovators",
    company: "Tech Innovators",
    rating: 5,
    text: "The logo and branding services we received were exceptional. The team took our ideas and transformed them into a cohesive and striking brand identity that has resonated with our audience.",
    avatar: "DR"
  },
  {
    id: 6,
    name: "Jonathan Perez",
    role: "Owner of Coastal Ventures",
    company: "Coastal Ventures",
    rating: 5,
    text: "The graphic design services provided have been outstanding. Every piece they create is visually striking and aligned perfectly with our brand's message. We've received numerous compliments from our customers.",
    avatar: "JP"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300 mb-6"
            >
              <Quote size={16} />
              Testimonials
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
              What Our Clients Are Saying
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how our design solutions have transformed businesses and brought visions to life through our clients' experiences.
            </p>
          </motion.div>

          {/* Testimonials Carousel */}
          <motion.div
            variants={itemVariants}
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Main Testimonial */}
            <div className="relative overflow-hidden rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
                >
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="w-12 h-12 text-purple-400 opacity-50" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 font-medium">
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-gray-400">
                        {testimonials[currentIndex].role}
                      </div>
                      <div className="text-purple-400 text-sm">
                        {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800/80 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-all duration-300 group interactive"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800/80 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-all duration-300 group interactive"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 interactive ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500 scale-110'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mt-6 w-full bg-gray-800 rounded-full h-1 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 to-cyan-500"
                initial={{ width: "0%" }}
                animate={{ width: isAutoPlaying ? "100%" : "0%" }}
                transition={{ duration: 5, ease: "linear" }}
                key={currentIndex}
              />
            </div>
          </motion.div>

          {/* Testimonial Grid Preview */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid md:grid-cols-3 gap-6"
          >
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-900/50 border border-white/10 rounded-xl p-6 cursor-pointer interactive"
                onClick={() => goToTestimonial(index)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                    <div className="text-gray-400 text-xs">{testimonial.company}</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
