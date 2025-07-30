import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ExternalLink, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Users, 
  Filter,
  Building2,
  Zap,
  Droplets,
  Factory,
  Award,
  CheckCircle,
  TrendingUp
} from 'lucide-react'
import { Card, CardHeader, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export const NewProjects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    {
      title: "Tun Razak Exchange Tunnel Project",
      category: "Infrastructure",
      location: "Kuala Lumpur, Malaysia",
      year: "2019-2023",
      value: "RM 111.86 Million",
      client: "Dewan Bandaraya Kuala Lumpur (DBKL)",
      description: "Construction of partial entry and exit tunnels connecting Tun Razak Exchange development with Jalan Tun Razak Kuala Lumpur (Design & Build).",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      status: "Completed",
      highlights: ["Tunnel Construction", "Design & Build", "Urban Infrastructure", "Traffic Management"],
      scope: "Design and construction of underground tunnel infrastructure connecting major commercial development to main arterial road",
      impact: "Improved traffic flow and connectivity for one of KL's major commercial districts"
    },
    {
      title: "Johor Centralized Wastewater Treatment Plant",
      category: "Water Treatment",
      location: "Johor Bahru, Malaysia",
      year: "2023-2025",
      value: "RM 95.24 Million",
      client: "Johor State Government",
      description: "Design and build of centralized wastewater treatment plant with 150,000 PE capacity and related infrastructure.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
      status: "Under Construction",
      highlights: ["150,000 PE Capacity", "Advanced Treatment Technology", "Environmental Compliance", "Sustainable Design"],
      scope: "Complete wastewater treatment facility including biological treatment, sludge processing, and effluent discharge systems",
      impact: "Serves 150,000 population equivalent, significantly improving water quality and environmental protection"
    },
    {
      title: "PMU 275/132/33KV Kuala Terengganu South",
      category: "Power Engineering",
      location: "Kuala Terengganu, Malaysia",
      year: "2023-2025",
      value: "RM 107.89 Million",
      client: "Tenaga Nasional Berhad (TNB)",
      description: "Establishment of Primary Main Unit (PMU) substation with 275kV, 132kV, and 33kV systems for power distribution.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
      status: "Ongoing",
      highlights: ["275kV High Voltage", "Multi-Level Distribution", "Advanced Protection Systems", "Grid Reliability"],
      scope: "Complete electrical substation including transformers, switchgear, protection systems, and control buildings",
      impact: "Enhanced power grid reliability and capacity for Terengganu state's growing energy demands"
    },
    {
      title: "Malaysia China-Kuantan Industrial Park Power Plant",
      category: "Power Engineering",
      location: "Kuantan, Pahang",
      year: "2018-2021",
      value: "RM 450+ Million",
      client: "Alliance Steel Malaysia",
      description: "2x80MW Waste Gas Reuse Power Plant - The biggest scale waste reuse power plant in Malaysia.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
      status: "Completed",
      highlights: ["2x80MW Capacity", "Waste Heat Recovery", "Environmental Innovation", "Industrial Integration"],
      scope: "Complete waste-to-energy power generation facility with advanced emission control and energy recovery systems",
      impact: "Largest waste gas reuse power plant in Malaysia, contributing to sustainable industrial development"
    },
    {
      title: "Country Garden Danga Bay Project",
      category: "Infrastructure",
      location: "Johor Bahru, Malaysia",
      year: "2015-2018",
      value: "RM 167 Million",
      client: "Country Garden Group",
      description: "Reinforced concrete shear wall structure with total construction area of 167,000m², consisting of five towers with building height of 139m.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      status: "Completed",
      highlights: ["167,000m² Construction Area", "5 Tower Complex", "139m Building Height", "Advanced Construction Methods"],
      scope: "High-rise residential and commercial complex with advanced structural engineering and construction techniques",
      impact: "Major landmark development contributing to Johor's urban skyline and economic growth"
    },
    {
      title: "Andorra Specialist Hospital",
      category: "Healthcare",
      location: "Bandar Baru Uda, Johor",
      year: "2020-2022",
      value: "RM 85 Million",
      client: "Andorra Healthcare Group",
      description: "Specialist hospital comprehensive building and parking facility EPC project with advanced medical infrastructure.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
      status: "Completed",
      highlights: ["Specialist Medical Facility", "Advanced Infrastructure", "Parking Integration", "Healthcare Excellence"],
      scope: "Complete hospital facility including medical equipment installation, specialized systems, and support infrastructure",
      impact: "Enhanced healthcare services and medical capabilities for Johor region"
    },
    {
      title: "Jinjing Technology Glass Kiln Waste Heat Recovery",
      category: "Power Engineering",
      location: "Kulim, Kedah",
      year: "2019-2020",
      value: "RM 25 Million",
      client: "Jinjing Technology",
      description: "5MW Waste Heat Recovery Power Plant for glass manufacturing facility, improving energy efficiency and sustainability.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop",
      status: "Completed",
      highlights: ["5MW Waste Heat Recovery", "Energy Efficiency", "Industrial Sustainability", "Cost Reduction"],
      scope: "Waste heat recovery system converting industrial waste heat into electrical power for manufacturing operations",
      impact: "Significant energy cost savings and reduced environmental footprint for industrial operations"
    },
    {
      title: "Waste to Energy EPCC Project",
      category: "Environmental",
      location: "Jeram, Selangor",
      year: "2021-2023",
      value: "RM 120 Million",
      client: "Selangor State Government",
      description: "Engineering, Procurement, Construction, and Commissioning of waste-to-energy facility for sustainable waste management.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop",
      status: "Completed",
      highlights: ["Waste-to-Energy Technology", "Environmental Sustainability", "EPCC Delivery", "Advanced Emissions Control"],
      scope: "Complete waste-to-energy facility including waste handling, combustion systems, power generation, and emission control",
      impact: "Sustainable waste management solution reducing landfill burden while generating renewable energy"
    }
  ]

  const categories = ['All', 'Infrastructure', 'Water Treatment', 'Power Engineering', 'Healthcare', 'Environmental']

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const stats = [
    { icon: Building2, value: '8+', label: 'Major Projects', color: 'from-blue-500 to-blue-600' },
    { icon: DollarSign, value: 'RM 1.2B+', label: 'Total Value', color: 'from-accent-500 to-accent-600' },
    { icon: MapPin, value: '6', label: 'States Covered', color: 'from-purple-500 to-purple-600' },
    { icon: Award, value: '100%', label: 'Success Rate', color: 'from-orange-500 to-orange-600' },
  ]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Infrastructure': return Building2
      case 'Water Treatment': return Droplets
      case 'Power Engineering': return Zap
      case 'Healthcare': return Users
      case 'Environmental': return Factory
      default: return Building2
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Infrastructure': return 'from-blue-500 to-blue-600'
      case 'Water Treatment': return 'from-cyan-500 to-cyan-600'
      case 'Power Engineering': return 'from-yellow-500 to-orange-500'
      case 'Healthcare': return 'from-green-500 to-green-600'
      case 'Environmental': return 'from-purple-500 to-purple-600'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>
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
              Project
              <span className="block bg-gradient-to-r from-accent-400 to-blue-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Showcasing our most impactful projects that define Malaysia's infrastructure landscape 
              and demonstrate our engineering excellence across multiple sectors.
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

      {/* Filter Section */}
      <section className="py-12 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-primary-800 mb-8">
              Filter by <span className="bg-gradient-to-r from-accent-600 to-blue-600 bg-clip-text text-transparent">Category</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => {
                const IconComponent = getCategoryIcon(category)
                return (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeFilter === category
                        ? 'bg-accent-600 text-white shadow-lg scale-105'
                        : 'bg-white text-primary-700 hover:bg-accent-50 hover:text-accent-600 shadow-md hover:shadow-lg'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{category}</span>
                  </button>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => {
              const IconComponent = getCategoryIcon(project.category)
              const categoryColor = getCategoryColor(project.category)
              
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Card variant="modern" className="h-full overflow-hidden">
                    <div className="relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <div className={`flex items-center space-x-2 bg-gradient-to-r ${categoryColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                          <IconComponent className="w-4 h-4" />
                          <span>{project.category}</span>
                        </div>
                      </div>
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          project.status === 'Completed' 
                            ? 'bg-green-500 text-white' 
                            : project.status === 'Ongoing' || project.status === 'Under Construction'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-500 text-white'
                        }`}>
                          {project.status}
                        </div>
                      </div>

                      {/* Project Value */}
                      <div className="absolute bottom-4 left-4">
                        <div className="text-white">
                          <div className="text-2xl font-bold">{project.value}</div>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-primary-800 mb-2 group-hover:text-accent-600 transition-colors">
                            {project.title}
                          </h3>
                          <div className="flex items-center text-primary-600 text-sm mb-2">
                            <MapPin className="w-4 h-4 mr-2" />
                            {project.location}
                          </div>
                          <div className="flex items-center text-primary-600 text-sm mb-4">
                            <Calendar className="w-4 h-4 mr-2" />
                            {project.year}
                          </div>
                        </div>
                      </div>

                      <p className="text-primary-600 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-primary-800 mb-3">Project Highlights:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {project.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center text-sm text-primary-600">
                              <CheckCircle className="w-4 h-4 mr-2 text-accent-500" />
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-primary-800 mb-2">Client:</h4>
                        <p className="text-primary-600 text-sm">{project.client}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-primary-800 mb-2">Project Scope:</h4>
                        <p className="text-primary-600 text-sm leading-relaxed">{project.scope}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-primary-800 mb-2">Impact:</h4>
                        <p className="text-primary-600 text-sm leading-relaxed">{project.impact}</p>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-primary-100">
                        <div className="flex items-center text-accent-600 font-semibold group-hover:translate-x-2 transition-transform">
                          <span>View Details</span>
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </div>
                        <div className="flex items-center space-x-2">
                          {project.status === 'Completed' && (
                            <div className="flex items-center text-green-600 text-sm">
                              <Award className="w-4 h-4 mr-1" />
                              <span>Completed</span>
                            </div>
                          )}
                          {(project.status === 'Ongoing' || project.status === 'Under Construction') && (
                            <div className="flex items-center text-blue-600 text-sm">
                              <TrendingUp className="w-4 h-4 mr-1" />
                              <span>In Progress</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
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
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Let's discuss how our proven track record and expertise can bring your vision to life. 
              From concept to completion, we deliver excellence in every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="secondary" size="xl" className="bg-white text-accent-600 hover:bg-gray-100">
                Start Your Project
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-accent-600">
                Download Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}