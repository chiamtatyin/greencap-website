import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Award, GraduationCap } from 'lucide-react'
import { Card, CardHeader, CardContent } from '@/components/ui/Card'

export const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Dato Ir Prof. Dr Hj. ROHAIZI BIN HJ MOHD JUSOH",
      title: "Managing Director",
      email: "Zrohaizi@gmail.com",
      phone: "+60-13-7308812",
      bio: "Dato Ir Prof. Dr Hj. ROHAIZI BIN HJ MOHD JUSOH is a distinguished industry leader with over 30 years of exceptional experience spanning international and local construction sectors. He holds a PhD in Business Administration (Cooperative) from Sabi University France, B.Eng (Hons) Civil Engineering from University of Glasgow, Diploma in Civil Engineering from UTM, and Certificate in Human Resource from USM. His career began as an Engineer with Wimpey Construction Ltd in the UK (1990-1992), followed by senior roles at MARA and various leadership positions at CIDB Malaysia including Regional Manager, Director, General Manager, and CEO of CREAM. He served as Director in the Prime Minister's Department (Technical) from 2014-2018, retiring in 2022 after an illustrious career.",
      expertise: ["Construction Industry Development", "Business Administration", "Strategic Planning", "Industry Leadership", "Policy Development", "Educational Leadership"],
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Hishamuddin Bin Selamat",
      title: "Managing Director",
      email: "hishamuddin640102@gmail.com",
      phone: "+60-16-7487889",
      bio: "Hishamuddin Bin Selamat has a long and successful career in the construction industry, with experience in project management, coating, waterproofing, and fire protection. He is currently the Managing Director of Greencap AI Group Sdn Bhd.",
      expertise: ["Project Management", "Construction Technology", "Waterproofing Systems", "Fire Protection"],
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Captain (R) Tan Chee Hian 陳志賢",
      title: "Director",
      email: "greencap.captain@gmail.com",
      phone: "+60-19-6226068",
      bio: "Captain (R) Tan Chee Hian has a Master's Degree in Structural Engineering and Environmental Engineering from UM, Malaysia. He has a distinguished career in the military and the private sector, with expertise in precast technology and construction management.",
      expertise: ["Structural Engineering", "Environmental Engineering", "Precast Technology", "Military Leadership"],
      avatar: "/images/captain-tan.png"
    },
    {
      name: "Mohd Shukor Bin Mohd Said",
      title: "Senior Electrical Engineer",
      email: "shukorsaid68@gmail.com",
      phone: "011-61364012",
      bio: "Mohd Shukor Bin Mohd Said is a highly experienced electrical engineer with over 34 years in the industry. Former Assistant Electrical Engineer at Jabatan Kerja Raya Malaysia, he holds a Diploma in Electrical Power from Kementerian Pendidikan Malaysia. His expertise spans electrical design (ACAD), project management for HT/LV/ELV systems, facilities asset management, and ISO 9002 procurement. He received the APC Year Award for Government in 2016.",
      expertise: ["Electrical Design (ACAD)", "Project Management (HT/LV/ELV)", "Facilities Asset Management", "ISO 9002 Procurement"],
      avatar: "/images/mohd-shukor.png"
    },
    {
      name: "Mohd Faidzullah Bin Yusof@ Mohd",
      title: "Senior Advisor",
      phone: "012-7157973",
      bio: "Mohd Faidzullah Bin Yusof@ Mohd has a background in research management and public administration. He is currently the Penghulu Kanan at Pejabat Daerah Batu Pahat.",
      expertise: ["Public Administration", "Research Management", "Government Relations", "Community Leadership"],
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face"
    }
  ]

  const stats = [
    { number: "150+", label: "Combined Years Experience" },
    { number: "500+", label: "Projects Led" },
    { number: "25+", label: "Industry Certifications" },
    { number: "10+", label: "Countries Worked" }
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
              Meet Our <span className="text-primary-600">Expert Team</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our leadership team brings decades of combined experience in engineering, construction, and strategic consulting to deliver exceptional results for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                      <div className="relative">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-24 h-24 rounded-full object-cover border-4 border-primary-100"
                        />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                          <Award className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                        <p className="text-primary-600 font-semibold mb-3">{member.title}</p>
                        <div className="flex flex-col sm:flex-row gap-3 text-sm text-gray-600">
                          {member.email && (
                            <div className="flex items-center justify-center sm:justify-start">
                              <Mail className="w-4 h-4 mr-2 text-primary-600" />
                              <a href={`mailto:${member.email}`} className="hover:text-primary-600 transition-colors">
                                {member.email}
                              </a>
                            </div>
                          )}
                          <div className="flex items-center justify-center sm:justify-start">
                            <Phone className="w-4 h-4 mr-2 text-primary-600" />
                            <span>{member.phone}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed mb-4">{member.bio}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <GraduationCap className="w-4 h-4 mr-2 text-primary-600" />
                        Areas of Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Our Leadership Philosophy</h2>
            <p className="text-xl leading-relaxed opacity-90">
              We believe in leading by example, fostering innovation, and building lasting relationships with our clients and partners. Our diverse leadership team brings together expertise from engineering, construction, military service, and public administration to provide comprehensive solutions that address every aspect of complex projects.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}