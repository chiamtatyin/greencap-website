import React from 'react'
import { motion } from 'framer-motion'
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  Globe, 
  Shield, 
  Building2, 
  Zap, 
  CheckCircle, 
  Calendar, 
  MapPin,
  TrendingUp,
  Users as Partnership,
  Star,
  Factory
} from 'lucide-react'
import { Card, CardHeader, CardContent } from '@/components/ui/Card'

export const NewAbout: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We deliver world-class engineering and construction solutions that exceed expectations and set industry standards.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our business relationships and operations, building trust through transparency.',
      gradient: 'from-accent-500 to-accent-600'
    },
    {
      icon: Shield,
      title: 'Safety',
      description: 'Safety is our top priority in every project, ensuring the well-being of our team, clients, and communities.',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'We embrace cutting-edge technology and innovative approaches to solve complex engineering challenges.',
      gradient: 'from-purple-500 to-purple-600'
    }
  ]

  const milestones = [
    {
      year: '1994',
      title: 'Company Founded',
      description: 'Greencap Group established as a construction and engineering consultancy.',
      icon: Building2
    },
    {
      year: '2014',
      title: 'International Expansion',
      description: 'Strategic partnership with Hunan Construction Engineering Group (Malaysia) established.',
      icon: Globe
    },
    {
      year: '2017',
      title: 'Fortune 500 Partnership',
      description: 'Collaboration with CCEPC (Wuhan City Environment Protection Engineering) begins.',
      icon: Partnership
    },
    {
      year: '2023',
      title: 'Major Project Completion',
      description: 'Successfully completed TRX Tunnel Project worth RM 111.86M in Kuala Lumpur.',
      icon: Award
    },
    {
      year: '2024',
      title: 'Continued Growth',
      description: 'Expanded portfolio with RM 500M+ in active projects across multiple sectors.',
      icon: TrendingUp
    }
  ]

  const partnerships = [
    {
      name: 'CCEPC',
      fullName: 'Wuhan City Environment Protection Engineering',
      description: 'Fortune 500 environmental protection and engineering company under China Minmetals Corporation (CMC), ranking 58th globally.',
      specialization: 'Environmental Protection, Water Treatment, Waste-to-Energy',
      projects: [
        'Malaysia China-Kuantan Industrial Park (2x80MW Power Plant)',
        'Jinjing Technology Glass Kiln (5MW Waste Heat Recovery)',
        'Waste to Energy EPCC Project, Jeram Selangor'
      ],
      established: '2017 in Malaysia',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=60&fit=crop'
    },
    {
      name: 'HCEG',
      fullName: 'Hunan Construction Engineering Group',
      description: 'Large state-owned enterprise with comprehensive capabilities in infrastructure development, building construction, and international contracting.',
      specialization: 'Infrastructure Development, Building Construction, International Contracting',
      projects: [
        'Country Garden Danga Bay Project (RM 167M construction)',
        'Andorra Specialist Hospital Bandar Baru Uda',
        'Central Spine Road Pakej 3: Gua Musang to Bentong'
      ],
      established: '2014 in Malaysia',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=60&fit=crop'
    },
    {
      name: 'GTS',
      fullName: 'GTS Contractor Sdn. Bhd.',
      description: 'PKK Class A (Bumiputra) and CIDB G7 certified specialist contractor with expertise in water treatment and civil engineering works.',
      specialization: 'Water Treatment, Civil Engineering, Building Works',
      projects: [
        'Johor Centralized Wastewater Treatment Plant (RM 95.24M)',
        'Water and Wastewater Treatment Facilities',
        'Civil Engineering and Infrastructure Projects'
      ],
      established: '1994',
      logo: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=100&h=60&fit=crop'
    },
    {
      name: 'SHICO',
      fullName: 'Sino-Hunan International Engineering',
      description: 'International engineering contractor with projects across 30+ countries, specializing in infrastructure development and international trade.',
      specialization: 'International Engineering, Infrastructure, Trade Development',
      projects: [
        'Roads and Bridges across multiple countries',
        'Water Conservancy Projects',
        'International Trade and Engineering Integration'
      ],
      established: 'Global Operations',
      logo: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=100&h=60&fit=crop'
    }
  ]

  const certifications = [
    {
      title: 'PKK Class A (Bumiputra)',
      description: 'Registered with Pusat Khidmat Kontraktor with highest classification for construction works',
      authority: 'Malaysian Government',
      icon: Shield
    },
    {
      title: 'CIDB Grade G7',
      description: 'Construction Industry Development Board Grade G7 certification for large-scale projects',
      authority: 'CIDB Malaysia',
      icon: Award
    },
    {
      title: 'Electrical Engineer 275kV',
      description: 'Certified Competent Electrical Engineer for high-voltage systems up to 275kV',
      authority: 'Suruhanjaya Tenaga',
      icon: Zap
    },
    {
      title: 'Water Treatment Specialist',
      description: 'Suruhanjaya Perkhidmatan Air Negara Permit IPA Jenis C1 for water treatment facilities',
      authority: 'SPAN Malaysia',
      icon: CheckCircle
    }
  ]

  const stats = [
    { number: '30+', label: 'Years of Excellence', icon: Calendar },
    { number: 'RM 500M+', label: 'Projects Delivered', icon: TrendingUp },
    { number: '15+', label: 'Strategic Partners', icon: Partnership },
    { number: '10+', label: 'Countries Served', icon: Globe }
  ]

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-800/60 to-transparent"></div>
        
        <div className="relative z-10 container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Engineering Excellence
              <span className="block bg-gradient-to-r from-accent-400 to-blue-400 bg-clip-text text-transparent">
                Since 1994
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Three decades of delivering world-class infrastructure, water treatment, and power engineering solutions 
              across Malaysia and beyond through strategic partnerships with Fortune 500 companies.
            </motion.p>
          </motion.div>
        </div>
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
                <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-primary-800 mb-2">{stat.number}</h3>
                <p className="text-primary-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-primary-800 mb-6">
                Our <span className="bg-gradient-to-r from-accent-600 to-blue-600 bg-clip-text text-transparent">Story</span>
              </h2>
              <p className="text-xl text-primary-600 leading-relaxed mb-6">
                Founded in 1994, Greencap Group has evolved from a local construction consultancy into Malaysia's premier 
                engineering and construction company, backed by strategic partnerships with Fortune 500 companies and 
                international state-owned enterprises.
              </p>
              <p className="text-lg text-primary-600 leading-relaxed mb-8">
                Our approach is built on a foundation of strong public relations within Malaysia and a comprehensive 
                understanding of local regulations and market dynamics. We work closely with our partners to ensure 
                seamless project delivery and provide unparalleled advisory services.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-accent-600">PKK A</div>
                  <div className="text-sm text-primary-600">Class A Certified</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-blue-600">CIDB G7</div>
                  <div className="text-sm text-primary-600">Grade G7 Certified</div>
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop" 
                  alt="Construction Excellence"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Building Tomorrow's Infrastructure</h3>
                  <p className="text-gray-200">Delivering excellence across Malaysia and beyond</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-800 mb-6">
              Our <span className="bg-gradient-to-r from-accent-600 to-blue-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to excellence in every project we undertake.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="modern" className="text-center h-full group">
                  <CardContent>
                    <div className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary-800 mb-4">{value.title}</h3>
                    <p className="text-primary-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partnerships */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
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
              Our success is built on strong partnerships with Fortune 500 companies, state-owned enterprises, 
              and specialized contractors from around the world.
            </p>
          </motion.div>

          <div className="space-y-8">
            {partnerships.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="modern" className="group">
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-1">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-16 h-10 bg-gradient-to-r from-primary-100 to-accent-100 rounded-xl flex items-center justify-center overflow-hidden">
                            <img 
                              src={partner.logo} 
                              alt={partner.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-primary-800 group-hover:text-accent-600 transition-colors">
                              {partner.name}
                            </h3>
                            <p className="text-sm text-accent-600 font-medium">{partner.fullName}</p>
                          </div>
                        </div>
                        <div className="text-sm text-primary-600 mb-4">
                          <strong>Established:</strong> {partner.established}
                        </div>
                        <div className="text-sm text-primary-600">
                          <strong>Specialization:</strong> {partner.specialization}
                        </div>
                      </div>

                      <div className="lg:col-span-1">
                        <p className="text-primary-600 leading-relaxed mb-4">
                          {partner.description}
                        </p>
                      </div>

                      <div className="lg:col-span-1">
                        <h4 className="font-semibold text-primary-800 mb-3">Key Projects:</h4>
                        <div className="space-y-2">
                          {partner.projects.map((project, idx) => (
                            <div key={idx} className="flex items-start text-sm text-primary-600">
                              <div className="w-2 h-2 bg-accent-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <span>{project}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-800 mb-6">
              Our <span className="bg-gradient-to-r from-accent-600 to-blue-600 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              Three decades of growth, innovation, and excellence in engineering and construction.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-500 to-blue-500 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card variant="modern" className="group">
                      <CardContent>
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <milestone.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-accent-600">{milestone.year}</div>
                            <h3 className="text-xl font-bold text-primary-800">{milestone.title}</h3>
                          </div>
                        </div>
                        <p className="text-primary-600 leading-relaxed">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-white border-4 border-accent-500 rounded-full"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-to-br from-primary-800 to-accent-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Certified <span className="text-accent-400">Excellence</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our certifications demonstrate our commitment to the highest industry standards and regulatory compliance.
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
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 group hover:bg-white/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <cert.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 text-center">{cert.title}</h3>
                  <p className="text-gray-200 text-sm leading-relaxed mb-4 text-center">{cert.description}</p>
                  <div className="text-center">
                    <span className="text-accent-400 text-xs font-medium">{cert.authority}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}