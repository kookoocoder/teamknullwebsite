"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Palette, 
  Code, 
  Smartphone, 
  Search, 
  Video, 
  Package,
  ArrowRight,
  Sparkles 
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: "Unlimited Request",
    description: "Make as many design requests as you need without any limits.",
    features: ["No Request Limits", "Queue Management", "Priority System", "24/7 Submission"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Palette,
    title: "Unique Designs",
    description: "Stand out with custom, one-of-a-kind designs tailored specifically for your brand.",
    features: ["Custom Design", "Brand Aligned", "Original Work", "Multiple Concepts"],
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: Smartphone,
    title: "Fast Delivery",
    description: "Get your designs quickly and efficiently, ensuring your projects stay on track.",
    features: ["48hr Average", "Rush Options", "Quick Turnaround", "Efficient Workflow"],
    gradient: "from-green-500 to-teal-500"
  },
  {
    icon: Package,
    title: "Conversion Friendly",
    description: "Our designs are optimized to drive engagement and boost conversions.",
    features: ["User Focused", "Performance Driven", "A/B Tested", "Analytics Ready"],
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Video,
    title: "Full Solution",
    description: "From concept to completion, we provide design solutions to cover all your needs.",
    features: ["End-to-End", "Complete Package", "All Formats", "Ready to Use"],
    gradient: "from-violet-500 to-purple-500"
  },
  {
    icon: Code,
    title: "Full Satisfaction",
    description: "Your satisfaction is our top priority. We'll revise the designs until you're 100% satisfied.",
    features: ["Unlimited Revisions", "Money Back Guarantee", "Quality Assurance", "Client First"],
    gradient: "from-amber-500 to-orange-500"
  }
];

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={cardVariants}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300 mb-6"
            >
              <Sparkles size={16} className="animate-pulse" />
              Benefits
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
              Membership Benefits
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our membership comes with the promise of endless creativity and dedicated support.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="relative h-full bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-300 group-hover:border-white/20 group-hover:shadow-2xl group-hover:shadow-purple-500/10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.div
                    className="flex items-center gap-2 text-purple-400 font-medium group-hover:text-cyan-400 transition-colors duration-300 interactive"
                    whileHover={{ x: 5 }}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.div>

                  {/* Hover Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={cardVariants}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 interactive"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
