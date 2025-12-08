import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  TrendingUp,
  Globe,
  Shield,
  Zap,
  Building2,
  Target,
  Star,
  MapPin,
  Sparkles,
  ChevronRight,
  Play,
  Users as Partnership
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardHeader, CardContent } from '@/components/ui/Card'

export const NewHome: React.FC = () => {
  const stats = [
    { icon: Users, value: '30+', label: 'Years Experience', color: 'from-blue-500 to-blue-600' },
    { icon: Award, value: 'RM 500M+', label: 'Projects Completed', color: 'from-accent-500 to-accent-600' },
    { icon: Globe, value: '10+', label: 'Countries Served', color: 'from-purple-500 to-purple-600' },
    { icon: Building2, value: 'PKK A', label: 'Class A Certified', color: 'from-orange-500 to-orange-600' },
  ]

  const services = [
    {
      icon: Building2,
      title: 'Infrastructure Development',
      description: 'Major infrastructure projects including tunnels, roads, bridges, and urban development with proven track record.',
      features: ['Tunnel Construction', 'Road Infrastructure', 'Urban Development', 'Bridge Engineering'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: CheckCircle,
      title: 'Water Treatment Solutions',
      description: 'Comprehensive water and wastewater treatment facilities with capacity up to 150,000 PE.',
      features: ['Wastewater Treatment', 'Water Supply Systems', 'Environmental Engineering', 'Sustainable Solutions'],
      gradient: 'from-accent-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Power & Electrical Engineering',
      description: 'Professional electrical engineering services with certified competent engineers up to 275kV.',
      features: ['Substation Construction', 'Power Distribution', 'Renewable Energy', 'Electrical Systems'],
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'International Partnerships',
      description: 'Strategic partnerships with Chinese state enterprises and access to Fortune 500 company resources.',
      features: ['Global Partnerships', 'Technology Transfer', 'International Standards', 'Cross-border Projects'],
      gradient: 'from-purple-500 to-pink-500'
    }
  ]

  const certifications = [
    {
      title: 'PKK Class A (Bumiputra)',
      description: 'Registered with Pusat Khidmat Kontraktor with highest classification',
      icon: Shield,
      badge: 'Class A'
    },
    {
      title: 'CIDB Grade G7',
      description: 'Construction Industry Development Board Grade G7 certification',
      icon: Award,
      badge: 'Grade G7'
    },
    {
      title: 'Electrical Engineer 275kV',
      description: 'Certified Competent Electrical Engineer up to 275kV systems',
      icon: Zap,
      badge: '275kV'
    },
    {
      title: 'Water Treatment Specialist',
      description: 'Suruhanjaya Perkhidmatan Air Negara Permit IPA Jenis C1',
      icon: CheckCircle,
      badge: 'IPA C1'
    }
  ]

  const projects = [
    {
      title: 'TRX Tunnel Project',
      value: 'RM 111.86M',
      location: 'Kuala Lumpur',
      status: 'Completed 2023',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
      category: 'Infrastructure'
    },
    {
      title: 'Johor Wastewater Plant',
      value: 'RM 95.24M',
      location: 'Johor Bahru',
      status: 'Design & Build',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop',
      category: 'Water Treatment'
    },
    {
      title: 'PMU 275/132/33KV Substation',
      value: 'RM 108M',
      location: 'Kuala Terengganu',
      status: 'Ongoing',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop',
      category: 'Power Engineering'
    }
  ]

  const partnerships = [
    {
      name: 'CCEPC (Wuhan City Environment Protection Engineering)',
      description: 'Fortune 500 environmental protection and engineering company specializing in water treatment, waste-to-energy, and power generation projects.',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop',
      projects: ['Malaysia China-Kuantan Industrial Park', 'Waste Heat Recovery Power Plants', 'Water Treatment Facilities'],
      established: '2017 in Malaysia'
    },
    {
      name: 'Hunan Construction Engineering Group (HCEG)',
      description: 'Large state-owned enterprise with expertise in infrastructure development, building construction, and international project contracting.',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop',
      projects: ['Country Garden Danga Bay Project', 'Andorra Specialist Hospital', 'Central Spine Road Projects'],
      established: '2014 in Malaysia'
    },
    {
      name: 'GTS Contractor Sdn. Bhd.',
      description: 'PKK Class A and CIDB G7 certified contractor specializing in water treatment, civil engineering, and building works.',
      logo: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=200&h=100&fit=crop',
      projects: ['Johor Centralized Wastewater Treatment Plant', 'Civil Engineering Works', 'Water Infrastructure'],
      established: '1994'
    },
    {
      name: 'Sino-Hunan International Engineering (SHICO)',
      description: 'International engineering contractor with projects across 30+ countries, specializing in infrastructure and trade development.',
      logo: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=200&h=100&fit=crop',
      projects: ['Roads and Bridges', 'Water Conservancy', 'International Trade'],
      established: 'Global Operations'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-800/60 to-transparent"></div>

        {/* Partner Logos Floating */}
        <div className="absolute top-1/4 left-10 opacity-10">
          <div className="w-24 h-12 bg-white/20 rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-bold">CCEPC</span>
          </div>
        </div>
        <div className="absolute top-1/3 right-16 opacity-10">
          <div className="w-24 h-12 bg-white/20 rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-bold">HCEG</span>
          </div>
        </div>
        <div className="absolute bottom-1/3 left-1/4 opacity-10">
          <div className="w-24 h-12 bg-white/20 rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-bold">GTS</span>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-500"></div>

        <div className="relative z-10 container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
            >
              <Sparkles className="w-5 h-5 mr-2 text-accent-400" />
              <span className="text-sm font-semibold">Malaysia's Premier Construction & Engineering Company</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Building Tomorrow's
              <span className="block bg-gradient-to-r from-accent-400 to-blue-400 bg-clip-text text-transparent">
                Infrastructure Today
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              PKK Class A & CIDB G7 certified construction and engineering excellence.
              Delivering mega projects worth RM 500M+ across Malaysia and beyond.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <a
                href="https://wa.me/60196226068?text=Hello!%20I%20would%20like%20to%20start%20a%20project%20with%20Greencap%20Group."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="accent" size="xl" className="group">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Link to="/projects">
                <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
                  View Our Projects
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
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
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-primary-800 mb-2">{stat.value}</h3>
                <p className="text-primary-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-800 mb-6">
              Our <span className="bg-gradient-to-r from-accent-600 to-blue-600 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              Comprehensive engineering and construction solutions backed by decades of experience and cutting-edge technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="modern" className="h-full group cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className={`w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-primary-800 mb-3 group-hover:text-accent-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-primary-600 leading-relaxed mb-4">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-accent-100 text-accent-700 text-sm rounded-full font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center text-accent-600 font-semibold group-hover:translate-x-2 transition-transform">
                      Learn More <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-800 mb-6">
              Certified <span className="bg-gradient-to-r from-accent-600 to-blue-600 bg-clip-text text-transparent">Excellence</span>
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              Our certifications demonstrate our commitment to the highest industry standards and regulatory compliance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="modern" className="text-center h-full group">
                  <CardContent>
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <cert.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-accent-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {cert.badge}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-primary-800 mb-3">{cert.title}</h3>
                    <p className="text-primary-600 text-sm leading-relaxed">{cert.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partnerships */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-800 mb-6">
              Strategic <span className="bg-gradient-to-r from-accent-600 to-blue-600 bg-clip-text text-transparent">Partnerships</span>
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              Collaborating with Fortune 500 companies and leading international contractors to deliver world-class engineering solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerships.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="modern" className="h-full group cursor-pointer">
                  <CardContent>
                    <div className="flex items-start space-x-6 mb-6">
                      <div className="w-20 h-12 bg-gradient-to-r from-primary-100 to-accent-100 rounded-xl flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary-800 mb-2 group-hover:text-accent-600 transition-colors">
                          {partner.name}
                        </h3>
                        <div className="text-sm text-accent-600 font-medium mb-3">
                          Established: {partner.established}
                        </div>
                      </div>
                    </div>

                    <p className="text-primary-600 leading-relaxed mb-6">
                      {partner.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-primary-800 mb-3">Key Projects:</h4>
                      <div className="space-y-2">
                        {partner.projects.map((project, idx) => (
                          <div key={idx} className="flex items-center text-sm text-primary-600">
                            <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                            {project}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center text-accent-600 font-semibold group-hover:translate-x-2 transition-transform">
                      Learn More <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-accent-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary-800 mb-4">
                Global Network of Excellence
              </h3>
              <p className="text-primary-600 mb-6 max-w-2xl mx-auto">
                Our strategic partnerships span across Fortune 500 companies, state-owned enterprises, and specialized contractors,
                enabling us to deliver comprehensive solutions for the most complex engineering challenges.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-accent-600">500+</div>
                  <div className="text-sm text-primary-600">Fortune 500 Access</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">30+</div>
                  <div className="text-sm text-primary-600">Countries Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600">15+</div>
                  <div className="text-sm text-primary-600">Strategic Partners</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600">RM 2B+</div>
                  <div className="text-sm text-primary-600">Combined Capacity</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gradient-to-br from-primary-800 to-accent-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="text-accent-400">Projects</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Showcasing our most impactful projects that define Malaysia's infrastructure landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-accent-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {project.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                      {project.status}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-accent-400 text-sm mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </div>
                    <div className="text-2xl font-bold text-accent-400 mb-4">
                      {project.value}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/projects">
              <Button variant="secondary" size="lg" className="bg-white text-primary-800 hover:bg-gray-100">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-600 to-blue-600">
        <div className="container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Let's discuss how our expertise can bring your vision to life. From concept to completion,
              we're your trusted partner in engineering excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://wa.me/60196226068?text=Hello!%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="xl" className="bg-white text-accent-600 hover:bg-gray-100">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link to="/about">
                <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-accent-600">
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