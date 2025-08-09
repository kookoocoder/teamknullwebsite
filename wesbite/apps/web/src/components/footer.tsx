"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Linkedin,
  Github,
  ArrowUp
} from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Websites', href: '#services' },
    { name: 'Web Apps', href: '#services' },
    { name: 'E-commerce', href: '#services' },
    { name: 'Custom Dev', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Work', href: '#portfolio' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#contact' },
  ],
  resources: [
    { name: 'Blog', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Support', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Disclaimer', href: '#' },
  ]
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
];

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <footer className="bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Main Footer Content */}
          <div className="pt-16 pb-8">
            <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
              {/* Company Info */}
              <motion.div variants={itemVariants} className="lg:col-span-2">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">W</span>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    WebForge
                  </h3>
                </div>
                
                <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                  We create innovative web solutions that help businesses grow and connect with their audiences. 
                  From websites to full-stack applications, we bring your digital vision to life.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-400">
                    <Mail size={16} className="text-purple-400" />
                    <span>hello@webforge.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Phone size={16} className="text-purple-400" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <MapPin size={16} className="text-purple-400" />
                    <span>123 Design Street, Creative District</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4 mt-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 bg-gray-800/50 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-cyan-500/20 border border-gray-700 hover:border-purple-500/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 interactive"
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Services */}
              <motion.div variants={itemVariants}>
                <h4 className="text-white font-semibold mb-6">Services</h4>
                <ul className="space-y-3">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300 interactive"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Company */}
              <motion.div variants={itemVariants}>
                <h4 className="text-white font-semibold mb-6">Company</h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300 interactive"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Resources & Legal Combined */}
              <motion.div variants={itemVariants}>
                <h4 className="text-white font-semibold mb-6">Resources</h4>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300 interactive"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            variants={itemVariants}
            className="border-t border-gray-800 py-8"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Stay Updated</h4>
                <p className="text-gray-400">
                  Subscribe to our newsletter for the latest design trends and tips.
                </p>
              </div>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 interactive"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Footer */}
          <motion.div
            variants={itemVariants}
            className="border-t border-gray-800 py-6"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-gray-400 text-sm">
                © 2024 WebForge. All rights reserved.
              </div>
              
              <div className="flex items-center gap-6">
                {footerLinks.legal.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300 interactive"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 interactive z-50"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
}
