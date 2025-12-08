import React from 'react'
import { motion } from 'framer-motion'
import {
  Users,
  TrendingUp,
  FileText,
  Lightbulb,
  Brain,
  Building,
  Wrench,
  MessageSquare,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'
import { Card, CardHeader, CardContent } from '@/components/ui/Card'

export const Services: React.FC = () => {
  const services = [
    {
      title: "Commercial & Technical Advisory",
      description: "Acting as a trusted advisor throughout the entire project lifecycle, from initial pursuit and bidding to meticulous execution and post-completion support. We provide strategic guidance to ensure project success.",
      icon: Users,
      features: ["Project Lifecycle Management", "Strategic Planning", "Risk Assessment", "Quality Assurance"]
    },
    {
      title: "Power Engineering Market Entry",
      description: "Assisting clients in successfully entering and navigating the complex power engineering market, leveraging our extensive experience and strong public relations within Malaysia.",
      icon: TrendingUp,
      features: ["Market Analysis", "Entry Strategy", "Regulatory Navigation", "Partnership Development"]
    },
    {
      title: "Project Documentation & Bidding Support",
      description: "Comprehensive support in preparing and reviewing bidding documents, project proposals, environmental and social impact assessments, feasibility studies, and other critical project documentation.",
      icon: FileText,
      features: ["Bid Preparation", "Technical Documentation", "Feasibility Studies", "Compliance Review"]
    },
    {
      title: "Regulatory & Approval Facilitation",
      description: "Assisting in obtaining necessary approvals from relevant government, cabinet, and parliamentary authorities, ensuring compliance and smooth project progression.",
      icon: Lightbulb,
      features: ["Government Relations", "Permit Acquisition", "Compliance Management", "Policy Navigation"]
    },
    {
      title: "Financial Institution Negotiation Support",
      description: "Providing crucial assistance in negotiating loan agreements with banks and financial institutions, and facilitating the finalization of financing agreements for projects.",
      icon: Brain,
      features: ["Loan Structuring", "Financial Modeling", "Risk Mitigation", "Investor Relations"]
    },
    {
      title: "Contract Execution & Management",
      description: "Supporting clients during contract negotiation and execution stages, ensuring rights are fulfilled, payments are collected, and all related matters are efficiently managed.",
      icon: Building,
      features: ["Contract Negotiation", "Performance Monitoring", "Payment Management", "Dispute Resolution"]
    },
    {
      title: "On-site Problem Resolution",
      description: "Assisting in overcoming on-site obstacles, including force majeure events, delays, technical issues, claims, price adjustments, and local social challenges like land acquisition and civil disputes.",
      icon: Wrench,
      features: ["Technical Problem Solving", "Crisis Management", "Stakeholder Mediation", "Operational Support"]
    },
    {
      title: "Public Relations & Reputation Management",
      description: "Guiding public media and opinion positively, and improving client reputation within the region, especially during challenging situations or negative incidents.",
      icon: MessageSquare,
      features: ["Media Relations", "Crisis Communication", "Stakeholder Engagement", "Brand Management"]
    }
  ]

  const processSteps = [
    { step: "01", title: "Discovery", description: "Understanding your needs and challenges" },
    { step: "02", title: "Strategy", description: "Developing tailored solutions" },
    { step: "03", title: "Implementation", description: "Executing with precision and care" },
    { step: "04", title: "Support", description: "Ongoing assistance and optimization" }
  ]

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-accent-600">Comprehensive Services</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From strategic consulting to technical implementation, we provide end-to-end solutions that drive success across every phase of your project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full group cursor-pointer hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start mb-4">
                      <div className="w-14 h-14 bg-accent-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-accent-600 transition-colors duration-300 flex-shrink-0">
                        <service.icon className="h-7 w-7 text-accent-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-accent-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 mr-2 flex-shrink-0 text-accent-600 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-br from-primary-800 via-primary-900 to-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Our Process</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We follow a proven methodology that ensures successful project delivery and exceeds client expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center relative"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-accent-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto shadow-xl">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[calc(50%+2.5rem)] w-[calc(100%+2rem)] h-0.5 bg-white/20"></div>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss how our comprehensive services can help you achieve your project goals and drive success.
            </p>
            <motion.a
              href="https://wa.me/60196226068?text=Hello!%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-accent-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl"
            >
              Contact Our Experts
              <ArrowRight className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}