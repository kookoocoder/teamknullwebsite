"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Award, Clock, Smile } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '1000+',
    label: 'Happy Clients',
    description: 'Satisfied customers worldwide'
  },
  {
    icon: Award,
    value: '500+',
    label: 'Projects Completed',
    description: 'Successful project deliveries'
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Support Available',
    description: 'Round-the-clock assistance'
  },
  {
    icon: Smile,
    value: '99%',
    label: 'Client Satisfaction',
    description: 'Proven track record'
  }
];

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: "100px" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"
            />
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our Simple 3-Step Process
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image/Graphic */}
            <motion.div variants={imageVariants} className="relative">
              <div className="relative group">
                {/* Placeholder for animated graphic or image */}
                <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 backdrop-blur-sm border border-white/10 aspect-square flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
                    {[...Array(9)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="bg-gradient-to-br from-purple-500/30 to-cyan-500/30 rounded-lg aspect-square"
                      />
                    ))}
                  </div>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-6 -right-6 w-12 h-12 bg-purple-500/20 rounded-full backdrop-blur-sm border border-purple-500/30"
                />
                
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-4 -left-4 w-8 h-8 bg-cyan-500/20 rounded-full backdrop-blur-sm border border-cyan-500/30"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Discover how our design solutions have transformed businesses and brought visions to life through our clients' experiences.
              </h3>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Our membership comes with the promise of endless creativity and dedicated support. 
                We deliver custom, one-of-a-kind designs tailored specifically for your brand, 
                ensuring your projects stay on track with fast delivery and unlimited revisions.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span className="text-white font-medium">Unlimited Requests</span>
                  </div>
                  <p className="text-gray-400 text-sm">No limits on design requests</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                    <span className="text-white font-medium">Fast Delivery</span>
                  </div>
                  <p className="text-gray-400 text-sm">Quick turnaround times</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center group"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full flex items-center justify-center border border-white/10 group-hover:border-purple-500/50 transition-colors duration-300">
                    <stat.icon className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                  </div>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white font-medium mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.description}</div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
