"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Why wouldn't I hire a full-time designer?",
    answer: "Hiring a full-time senior designer can cost over $100,000 annually, plus benefits. With our service, you get access to top-tier design talent for a fraction of the cost, with the flexibility to pause or cancel anytime."
  },
  {
    question: "What is included in each subscription plan?",
    answer: "Each plan includes unlimited design requests, revisions, and access to our design team. Higher tiers offer faster delivery, dedicated account management, and additional services like development and consulting."
  },
  {
    question: "Can I switch plans later?",
    answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle. We'll work with you to ensure a smooth transition."
  },
  {
    question: "How does the revision process work?",
    answer: "We offer unlimited revisions on all our plans. Simply provide feedback, and we'll refine the design until you're 100% satisfied. Most revisions are completed within 24-48 hours."
  },
  {
    question: "What is the typical turnaround time for projects?",
    answer: "Most design requests are completed within 48 hours for Basic and Pro plans. Enterprise clients enjoy same-day delivery for urgent requests. Complex projects may take longer, but we'll always communicate timelines upfront."
  },
  {
    question: "Do you offer custom design services outside of the subscription plans?",
    answer: "Yes! We offer custom project pricing for unique requirements or one-time projects. Contact us to discuss your specific needs, and we'll create a tailored proposal for you."
  },
  {
    question: "How do I get started?",
    answer: "Simply choose your plan and sign up. You'll immediately get access to our project dashboard where you can submit your first design request. We'll also schedule an onboarding call to understand your brand and goals."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. Enterprise clients can also pay via bank transfer or invoice with NET 30 terms."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="faq" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
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
              <HelpCircle size={16} />
              FAQ
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Find the information you need about our services, plans, and processes. If you have more questions, feel free to reach out to us!
            </p>
          </motion.div>

          {/* FAQ Items */}
          <motion.div variants={containerVariants} className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-white/20"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between group interactive"
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors duration-300 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <motion.div
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-8 h-8 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center"
                    >
                      {openIndex === index ? (
                        <Minus size={16} className="text-purple-400" />
                      ) : (
                        <Plus size={16} className="text-purple-400" />
                      )}
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="border-t border-white/10"
                    >
                      <div className="p-6 pt-4">
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12 p-8 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border border-purple-500/30 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-gray-300 mb-6">
              Our team is here to help. Get in touch and we'll answer any questions you might have.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 interactive"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
