import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Users, Award, TrendingUp, Globe, Shield, Zap, Building2, Target, Star, MapPin, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardHeader, CardContent } from '@/components/ui/Card'

export const Home: React.FC = () => {
  const stats = [
    { icon: Users, value: '30+', label: 'Years Experience' },
    { icon: Award, value: 'RM 500M+', label: 'Projects Completed' },
    { icon: Globe, value: '10+', label: 'Countries Served' },
    { icon: Building2, value: 'PKK A', label: 'Class A Certified' },
  ]

  const certifications = [
    {
      title: 'PKK Class A (Bumiputra)',
      description: 'Registered with Pusat Khidmat Kontraktor with highest classification',
      icon: Shield
    },
    {
      title: 'CIDB Grade G7',
      description: 'Construction Industry Development Board Grade G7 certification',
      icon: Award
    },
    {
      title: 'Electrical Engineer 275kV',
      description: 'Certified Competent Electrical Engineer up to 275kV systems',
      icon: Zap
    },
    {
      title: 'Water Treatment Specialist',
      description: 'Suruhanjaya Perkhidmatan Air Negara Permit IPA Jenis C1',
      icon: CheckCircle
    }
  ]

  const features = [
    {
      title: 'Infrastructure Development',
      description: 'Major infrastructure projects including tunnels, roads, bridges, and urban development with proven track record in mega projects like TRX Tunnel.',
      icon: Building2,
      highlights: ['Tunnel Construction', 'Road Infrastructure', 'Urban Development', 'Bridge Engineering']
    },
    {
      title: 'Water Treatment Solutions',
      description: 'Comprehensive water and wastewater treatment facilities with capacity up to 150,000 PE, serving communities across Malaysia.',
      icon: CheckCircle,
      highlights: ['Wastewater Treatment', 'Water Supply Systems', 'Environmental Engineering', 'Sustainable Solutions']
    },
    {
      title: 'Power & Electrical Engineering',
      description: 'Professional electrical engineering services with certified competent engineers, substations up to 275kV, and renewable energy projects.',
      icon: Zap,
      highlights: ['Substation Construction', 'Power Distribution', 'Renewable Energy', 'Electrical Systems']
    },
    {
      title: 'International Partnerships',
      description: 'Strategic partnerships with Chinese state enterprises including CCEPC, Hunan Construction Group, and access to Fortune 500 company resources.',
      icon: Globe,
      highlights: ['Global Partnerships', 'Technology Transfer', 'International Standards', 'Cross-border Projects']
    }
  ]

  const majorProjects = [
    {
      title: 'TRX Tunnel Project',
      value: 'RM 111.86M',
      location: 'Kuala Lumpur',
      status: 'Completed 2023',
      description: 'Construction of partial entry and exit tunnels connecting Tun Razak Exchange development'
    },
    {
      title: 'Johor Wastewater Plant',
      value: 'RM 95.24M',
      location: 'Johor Bahru',
      status: 'Design & Build',
      description: 'Centralized wastewater treatment plant with 150,000 PE capacity'
    },
    {
      title: 'Kelantan Water Treatment',
      value: 'RM 50M+',
      location: 'Multiple Sites',
      status: 'Ongoing',
      description: 'Multiple water treatment facilities across Kelantan state'
    }
  ]

  const partnerships = [
    {
      name: 'CCEPC',
      description: 'Wuhan City Environment Protection Engineering',
      type: 'Environmental Engineering'
    },
    {
      name: 'Hunan Construction Group',
      description: 'State-owned construction enterprise',
      type: 'Infrastructure Development'
    },
    {
      name: 'China Minmetals Corporation',
      description: 'Fortune 500 Company (Rank 58)',
      type: 'Global Resources'
    }
  ]

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
        {/* Modern Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
        </div>

        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-emerald-100 via-transparent to-cyan-100"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                PKK Class A & CIDB G7 Certified
              </div>
              <h1 className="text-6xl lg:text-8xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
                Greencap{' '}
                <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                  Group
                </span>
              </h1>
              <p className="text-2xl lg:text-3xl text-gray-600 mb-4 font-light">
                Engineering Excellence Since 1994
              </p>
              <p className="text-lg text-gray-500 mb-10 max-w-3xl mx-auto leading-relaxed">
                Leading construction, infrastructure, and engineering solutions across Malaysia and internationally. 
                Trusted by governments and Fortune 500 companies for mega projects worth over RM 500 million.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/projects">
                  <Button size="lg" className="group bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 px-8 py-4 text-lg">
                    View Our Projects
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2 hover:bg-gray-50">
                    Start Your Project
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/4 right-10 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center"
        >
          <Building2 className="w-10 h-10 text-emerald-600" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/3 left-10 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center"
        >
          <Zap className="w-8 h-8 text-cyan-600" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-10 w-10 text-emerald-600" />
                </div>
                <h3 className="text-4xl font-black text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Industry <span className="text-emerald-600">Certifications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognized by Malaysian authorities and international standards for our expertise and quality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  <CardHeader className="text-center pb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl mb-4 mx-auto">
                      <cert.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{cert.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{cert.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Our <span className="text-emerald-600">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive engineering and construction solutions backed by decades of experience and international partnerships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-2xl flex-shrink-0">
                        <feature.icon className="w-8 h-8 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {feature.highlights.map((highlight, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-full font-medium"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Projects Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-cyan-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Major <span className="text-emerald-600">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering world-class infrastructure and engineering projects across Malaysia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {majorProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-full font-medium">
                        {project.status}
                      </span>
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-emerald-600 transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <div className="text-2xl font-black text-emerald-600 mb-3">{project.value}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{project.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects">
              <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* International Partnerships */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black mb-6">
              Global <span className="text-emerald-400">Partnerships</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic alliances with Fortune 500 companies and state enterprises
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerships.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-colors duration-300">
                  <h3 className="text-2xl font-bold mb-3 text-emerald-400">{partner.name}</h3>
                  <p className="text-gray-300 mb-2">{partner.description}</p>
                  <span className="text-sm text-gray-400">{partner.type}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-cyan-600">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-5xl font-black mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Partner with Malaysia's leading construction and engineering group for your next project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}