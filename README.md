# PixellLab - Dynamic Portfolio/Agency Website

A modern, highly interactive, and visually appealing website built with Next.js, React, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and a sophisticated dark aesthetic with vibrant accents.

## ✨ Features

### 🎨 Design & Animations
- **Dark Mode Theme** - Sophisticated dark aesthetic with vibrant purple/cyan accents
- **Smooth Animations** - Powered by Framer Motion with scroll-triggered reveals
- **Custom Cursor** - Interactive cursor with hover effects and particle trails
- **Background Effects** - Animated particle system and liquid blob animations
- **Responsive Design** - Fully responsive across all devices and screen sizes

### 🚀 Sections
- **Hero Section** - Animated text reveals with floating elements
- **Process Section** - How it works with animated stats
- **Benefits Section** - Membership benefits with hover cards
- **Services Portfolio** - Filterable project grid with modals
- **Testimonials** - Auto-playing carousel with navigation
- **Pricing** - Subscription plans with hover effects
- **FAQ** - Expandable accordion with smooth animations
- **Contact** - Form with validation and submission feedback
- **Footer** - Complete footer with social links and newsletter

### 🛠 Technical Features
- **Next.js 15** - Latest version with App Router
- **TypeScript** - Fully typed for better development experience
- **Tailwind CSS 4** - Latest version for styling
- **Framer Motion** - Advanced animations and page transitions
- **React Intersection Observer** - Scroll-triggered animations
- **Shadcn/UI Components** - Modern UI component library
- **Three.js Ready** - Background animations and 3D effects

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Website
   ```

2. **Install dependencies**
   ```bash
   cd wesbite/apps/web
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3001`

## 📁 Project Structure

```
wesbite/apps/web/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   │   ├── ui/               # Shadcn UI components
│   │   ├── hero-section.tsx  # Hero component
│   │   ├── about-section.tsx # Process/About component
│   │   ├── services-section.tsx # Benefits component
│   │   ├── portfolio-section.tsx # Services showcase
│   │   ├── testimonials-section.tsx # Client testimonials
│   │   ├── pricing-section.tsx # Pricing plans
│   │   ├── faq-section.tsx   # FAQ accordion
│   │   ├── contact-section.tsx # Contact form
│   │   ├── footer.tsx        # Footer component
│   │   ├── header.tsx        # Navigation header
│   │   ├── custom-cursor.tsx # Custom cursor effect
│   │   └── background-animation.tsx # Particle effects
│   ├── lib/                  # Utilities
│   └── index.css            # Global styles
├── package.json
└── ...config files
```

## 🎨 Key Features Breakdown

### Custom Cursor System
- Dynamic cursor that changes on hover
- Particle trail following mouse movement
- Smooth scaling and color transitions
- Performance optimized with RAF

### Animation System
- Scroll-triggered animations using Intersection Observer
- Staggered reveals for lists and grids
- Custom easing functions and spring physics
- Reduced motion support for accessibility

### Background Effects
- Canvas-based particle system
- WebGL-ready for enhanced effects
- Responsive and performance optimized
- Subtle ambient animations

### Form Handling
- Real-time validation
- Error states with animations
- Loading and success states
- Accessible form structure

## 🛠 Customization

### Colors & Theme
Modify the color scheme in `src/index.css`:
```css
--primary: oklch(0.7 0.3 280); /* Purple */
--accent: oklch(0.6 0.4 200);  /* Cyan */
```

### Animations
Adjust animation settings in component files:
```tsx
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};
```

### Content
Update content in each section component:
- Hero text in `hero-section.tsx`
- Services/benefits in `services-section.tsx`
- Portfolio projects in `portfolio-section.tsx`
- Testimonials in `testimonials-section.tsx`
- FAQ items in `faq-section.tsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## ⚡ Performance

- **Optimized Assets** - Lazy loading for images and sections
- **Efficient Animations** - 60fps performance with proper RAF usage
- **Code Splitting** - Automatic code splitting with Next.js
- **SEO Ready** - Proper meta tags and semantic HTML

## 🌟 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using Next.js, React, TypeScript, and Tailwind CSS.
