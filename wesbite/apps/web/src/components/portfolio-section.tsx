"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Eye, X } from 'lucide-react';
import { Button } from './ui/button';

const categories = ['All', 'Web Design', 'Mobile Apps', 'Branding', 'E-commerce'];

const projects = [
  {
    id: 1,
    title: "Autogenesis Platform",
    category: "Web Design",
    description: "Revolutionize your visuals. Enter the world of Autogenesis.",
    image: "/api/placeholder/600/400",
    tags: ["React", "Next.js", "Tailwind"],
    featured: true
  },
  {
    id: 2,
    title: "Blockchain Innovation",
    category: "Web Design", 
    description: "Ignite Your Blockchain Innovations with cutting-edge technology.",
    image: "/api/placeholder/600/400",
    tags: ["Vue.js", "Web3", "DeFi"],
    featured: true
  },
  {
    id: 3,
    title: "Corporate Dashboard",
    category: "Web Design",
    description: "Innovate. Disrupt. Dominate. Modern corporate solutions.",
    image: "/api/placeholder/600/400",
    tags: ["Dashboard", "Analytics", "SaaS"],
    featured: false
  },
  {
    id: 4,
    title: "Mobile Banking App",
    category: "Mobile Apps",
    description: "Secure and intuitive mobile banking experience.",
    image: "/api/placeholder/600/400",
    tags: ["React Native", "FinTech", "Security"],
    featured: true
  },
  {
    id: 5,
    title: "E-commerce Platform",
    category: "E-commerce",
    description: "Complete online shopping solution with modern design.",
    image: "/api/placeholder/600/400",
    tags: ["Shopify", "Payment", "Mobile"],
    featured: false
  },
  {
    id: 6,
    title: "Brand Identity Design",
    category: "Branding",
    description: "Complete brand identity for a tech startup.",
    image: "/api/placeholder/600/400",
    tags: ["Logo", "Guidelines", "Print"],
    featured: false
  }
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-20 w-64 h-64 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-cyan-500 rounded-full blur-3xl" />
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
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
              One Stop Design Solution
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              From web design to branding, our expert team delivers creative solutions that elevate your brand and captivate your audience.
            </p>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 interactive ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                      : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 border border-gray-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  whileHover={{ y: -10 }}
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-300">
                    {/* Project Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-cyan-900/30 flex items-center justify-center">
                        {/* Placeholder content */}
                        <div className="text-center space-y-4">
                          <div className="text-6xl font-bold text-white/20">{project.id}</div>
                          <div className="text-lg font-medium text-white/60">{project.title}</div>
                        </div>
                      </div>
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Hover Actions */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center gap-4">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white interactive"
                          >
                            <Eye size={20} />
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white interactive"
                          >
                            <ExternalLink size={20} />
                          </motion.div>
                        </div>
                      </div>

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs font-medium rounded-full">
                          Featured
                        </div>
                      )}
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="mb-2">
                        <span className="text-sm text-purple-400 font-medium">{project.category}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Load More Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <Button
              variant="outline"
              className="border-2 border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:border-purple-400 interactive"
            >
              View All Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-800/80 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-colors interactive"
              >
                <X size={20} />
              </button>

              <div className="aspect-[16/10] bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-cyan-900/30 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-8xl font-bold text-white/20">{selectedProject.id}</div>
                  <div className="text-2xl font-medium text-white/60">{selectedProject.title}</div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                    <span className="text-purple-400 font-medium">{selectedProject.category}</span>
                  </div>
                  <div className="flex gap-4">
                    <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white interactive">
                      <ExternalLink size={16} className="mr-2" />
                      View Live
                    </Button>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
