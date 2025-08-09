"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, ArrowRight, Star, Zap } from 'lucide-react';
import { Button } from './ui/button';

const plans = [
  {
    name: "Basic",
    price: "$1500",
    period: "Per month",
    description: "Perfect for small businesses and startups",
    features: [
      "Unlimited requests",
      "One request at a time", 
      "Average 48 hour delivery",
      "Unlimited revisions",
      "Framer development",
      "Unlimited meetings",
      "Slack channel",
      "Cancel anytime"
    ],
    popular: false,
    cta: "Get Started"
  },
  {
    name: "Pro", 
    price: "$3600",
    period: "Per month",
    description: "Most popular plan for growing businesses",
    features: [
      "Unlimited requests",
      "One request at a time",
      "Average 48 hour delivery", 
      "Unlimited revisions",
      "Framer development",
      "Weekly meetings",
      "Slack Channel",
      "Cancel anytime"
    ],
    popular: true,
    cta: "Get Started"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "Per month", 
    description: "For large teams and complex projects",
    features: [
      "Unlimited requests",
      "Multiple request at a time",
      "Same day delivery",
      "Dedicated account manager",
      "Dedicated designer",
      "Regular meetings",
      "Business Consulting",
      "Cancel anytime"
    ],
    popular: false,
    cta: "Book a call"
  }
];

export default function PricingSection() {
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
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
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
              Plans To Suits Your Needs
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our flexible pricing options to find the best fit for your business and elevate your brand with our comprehensive design services.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div
            variants={containerVariants}
            className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative group ${
                  plan.popular 
                    ? 'ring-2 ring-purple-500/50' 
                    : ''
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Star size={14} className="fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className={`h-full bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular 
                    ? 'border-purple-500/50 shadow-2xl shadow-purple-500/10' 
                    : 'border-white/10 group-hover:border-white/20'
                }`}>
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        plan.popular 
                          ? 'bg-gradient-to-br from-purple-600 to-cyan-600' 
                          : 'bg-gray-700/50'
                      }`}>
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                      {plan.price}
                    </div>
                    <div className="text-gray-400 text-sm mb-4">{plan.period}</div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check size={12} className="text-white" />
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 interactive ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white'
                        : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Note */}
          <motion.div
            variants={cardVariants}
            className="text-center mt-12"
          >
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              All plans include unlimited revisions and the flexibility to pause or cancel your subscription at any time. 
              Need something custom? We'd love to discuss your specific requirements.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
