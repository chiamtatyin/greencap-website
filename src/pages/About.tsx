import React from 'react'
import { motion } from 'framer-motion'
import { Target, Eye, Heart, Award, Globe, Shield } from 'lucide-react'
import { Card, CardHeader, CardContent } from '@/components/ui/Card'

export const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We deliver world-class engineering and construction solutions that exceed expectations and set industry standards.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our business relationships and operations, building trust through transparency.'
    },
    {
      icon: Shield,
      title: 'Safety',
      description: 'Safety is our top priority in every project, ensuring the wellbeing of our team, clients, and communities.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for perfection in every project, delivering results that exceed expectations.'
    }
  ]

  const achievements = [
    { number: '30+', label: 'Years of Excellence' },
    { number: '200+', label: 'Successful Projects' },
    { number: 'RM 1B+', label: 'Project Value' },
    { number: '100%', label: 'Client Satisfaction' }
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
              About <span className="text-primary-600">Greencap Group</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A leading consultancy firm dedicated to providing innovative and strategic solutions across various sectors, with a strong focus on the power engineering market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                <div>
                  <div className="flex items-center mb-4">
                    <Target className="h-8 w-8 text-primary-600 mr-3" />
                    <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To leverage cutting-edge technology, particularly in Artificial Intelligence, and our deep industry expertise to drive progress, optimize project outcomes, and foster a sustainable future for our clients.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center mb-4">
                    <Eye className="h-8 w-8 text-primary-600 mr-3" />
                    <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To become the most trusted and sought-after partner for complex engineering and AI-driven projects, recognized globally for our integrity, technical excellence, and unwavering commitment to client success.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Globe className="h-24 w-24 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Global Impact</h3>
                  <p className="text-gray-600">Transforming industries worldwide</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and every project we undertake.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                      <value.icon className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{value.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Expertise & Approach</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  As a commercial and technical advisor, Greencap Group brings extensive experience and reputable professional credentials to every engagement. We specialize in guiding clients through the entire project lifecycle, from initial pursuit and bidding to meticulous execution and post-completion support.
                </p>
                <p>
                  Our approach is built on a foundation of strong public relations within Malaysia and a comprehensive understanding of local regulations and market dynamics. We work closely with our partners to ensure seamless project delivery and provide unparalleled advisory services.
                </p>
                <p>
                  Our commitment extends to assisting with critical aspects like financial institution negotiations, regulatory approvals, and navigating complex technical and commercial challenges.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center p-6 bg-primary-50 rounded-xl"
                  >
                    <h3 className="text-3xl font-bold text-primary-600 mb-2">{achievement.number}</h3>
                    <p className="text-gray-700 font-medium">{achievement.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Our Commitment to Excellence</h2>
            <p className="text-xl leading-relaxed opacity-90">
              Integrity, innovation, and excellence are the pillars of our operations. We are dedicated to upholding the highest ethical standards and delivering exceptional value to our clients. Our team is adept at managing intricate details, from preparing comprehensive bidding documents and conducting feasibility studies to resolving on-site technical issues and fostering positive public relations throughout the project duration.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
