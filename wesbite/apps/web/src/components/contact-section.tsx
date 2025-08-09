"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
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
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
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
              Have any Question? Let's Talk
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Schedule a free discovery call to learn more how we work and how can we help you and your business.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <Label htmlFor="name" className="text-gray-300 mb-2 block">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-300 ${
                        errors.name ? 'border-red-500 focus:border-red-500' : ''
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-1 flex items-center gap-1"
                      >
                        <AlertCircle size={14} />
                        {errors.name}
                      </motion.p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="text-gray-300 mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-300 ${
                        errors.email ? 'border-red-500 focus:border-red-500' : ''
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-1 flex items-center gap-1"
                      >
                        <AlertCircle size={14} />
                        {errors.email}
                      </motion.p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <Label htmlFor="subject" className="text-gray-300 mb-2 block">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className={`bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-300 ${
                        errors.subject ? 'border-red-500 focus:border-red-500' : ''
                      }`}
                      placeholder="Project inquiry"
                    />
                    {errors.subject && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-1 flex items-center gap-1"
                      >
                        <AlertCircle size={14} />
                        {errors.subject}
                      </motion.p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-gray-300 mb-2 block">
                      Message *
                    </Label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={5}
                      className={`w-full bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 rounded-lg px-3 py-2 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none ${
                        errors.message ? 'border-red-500 focus:border-red-500' : ''
                      }`}
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-1 flex items-center gap-1"
                      >
                        <AlertCircle size={14} />
                        {errors.message}
                      </motion.p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed interactive"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <Send size={18} />
                        Send Message
                      </div>
                    )}
                  </Button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg p-3"
                    >
                      <CheckCircle size={18} />
                      <span>Message sent successfully! We'll get back to you soon.</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-3"
                    >
                      <AlertCircle size={18} />
                      <span>Failed to send message. Please try again.</span>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Email</h4>
                      <p className="text-gray-400">hello@pixellab.com</p>
                      <p className="text-gray-400">support@pixellab.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Phone</h4>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                      <p className="text-gray-400">+1 (555) 987-6543</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Office</h4>
                      <p className="text-gray-400">123 Design Street</p>
                      <p className="text-gray-400">Creative District, CD 12345</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border border-purple-500/30 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to start your project?</h3>
                <p className="text-gray-300 mb-6">
                  Book a free consultation call to discuss your needs and how we can help bring your vision to life.
                </p>
                <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 interactive">
                  Book a Call
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
