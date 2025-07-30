import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, MapPin, Calendar, DollarSign, Users, Filter } from 'lucide-react'
import { Card, CardHeader, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    {
      title: "Tun Razak Exchange Tunnel Project",
      category: "Infrastructure",
      location: "Kuala Lumpur, Malaysia",
      year: "2019-2023",
      value: "RM 111.86 Million",
      description: "Construction of partial entry and exit tunnels connecting Tun Razak Exchange development with Jalan Tun Razak Kuala Lumpur (Design & Build).",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      status: "Completed",
      highlights: ["Tunnel Construction", "Design & Build", "Urban Infrastructure", "Traffic Management"],
      client: "Dewan Bandaraya Kuala Lumpur (DBKL)"
    },
    {
      title: "Johor Bahru Centralized Wastewater Treatment Plant",
      category: "Water Treatment",
      location: "Johor Bahru, Johor",
      year: "2020-2024",
      value: "RM 95.24 Million",
      description: "Design and build centralized wastewater treatment plant with 150,000 PE capacity and related works.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
      status: "Ongoing",
      highlights: ["Design & Build", "150,000 PE Capacity", "Environmental Engineering", "Water Treatment"],
      client: "Pihak Berkuasa Wilayah Pembangunan ISKANDAR (IRDA)"
    },
    {
      title: "Kelantan Water Treatment Facilities",
      category: "Water Treatment",
      location: "Multiple Sites, Kelantan",
      year: "2018-2024",
      value: "RM 50+ Million",
      description: "Multiple water treatment plant upgrades and construction across Kelantan state including Taman Kurnia Jaya, Taman Bendahara, and other sites.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      status: "Multiple Projects",
      highlights: ["Multiple Sites", "Water Treatment", "Infrastructure Upgrade", "Community Service"],
      client: "Various Government Agencies"
    },
    {
      title: "Sungai Ara Military Camp Wastewater Upgrade",
      category: "Water Treatment",
      location: "Pulau Pinang, Malaysia",
      year: "2024-2025",
      value: "RM 11.83 Million",
      description: "Upgrade works for wastewater treatment plant and related piping works at Kem Sungai Ara.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
      status: "Current",
      highlights: ["Military Infrastructure", "Wastewater Treatment", "Piping Systems", "Government Project"],
      client: "Kementerian Pertahanan Malaysia"
    },
    {
      title: "Pahang Slope Repair Works",
      category: "Infrastructure",
      location: "Pahang, Malaysia",
      year: "2003-2004",
      value: "RM 3.43 Million",
      description: "Slope repair and related works at KM 99 (Section 261) and KM 101 (Section 259).",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
      status: "Completed",
      highlights: ["Slope Stabilization", "Road Safety", "Geotechnical Engineering", "Infrastructure Maintenance"],
      client: "Jabatan Kerja Raya Negeri Pahang"
    },
    {
      title: "Selangor Water Pipeline Replacement",
      category: "Water Infrastructure",
      location: "Gombak, Selangor",
      year: "Historical Project",
      value: "RM 942,378",
      description: "Replacement of 150mm asbestos cement pipes with 300mm steel pipes from Simpang Batu Arang to Bandar Baru Kundang.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
      status: "Completed",
      highlights: ["Pipeline Replacement", "Water Supply", "Infrastructure Upgrade", "Public Health"],
      client: "Jabatan Bekalan Air Selangor"
    }
  ]

  const categories = ['All', 'Infrastructure', 'Water Treatment', 'Water Infrastructure', 'Power Engineering']

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
              <ExternalLink className="w-4 h-4 mr-2" />
              RM 500M+ in Completed Projects
            </div>
            <h1 className="text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Our <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed mb-8">
              Delivering Excellence Across Malaysia
            </p>
            <p className="text-lg text-gray-500 max-w-4xl mx-auto leading-relaxed">
              From mega infrastructure projects to specialized water treatment facilities, explore our portfolio of successful engineering and construction projects that have shaped Malaysia's development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === 'Completed' ? 'bg-green-100 text-green-700' :
                        project.status === 'Ongoing' ? 'bg-blue-100 text-blue-700' :
                        project.status === 'Current' ? 'bg-orange-100 text-orange-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-full font-medium">
                        {project.category}
                      </span>
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-emerald-600 transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{project.year}</span>
                    </div>
                    <div className="text-2xl font-black text-emerald-600 mb-3">{project.value}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-900 mb-2">Client:</p>
                      <p className="text-sm text-gray-600">{project.client}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
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
              Ready for Your Next Project?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Partner with Malaysia's leading construction and engineering group for your infrastructure needs
            </p>
            <Button 
              size="lg" 
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg"
            >
              Start Your Project Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}