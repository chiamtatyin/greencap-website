import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Award, GraduationCap, Building, Users } from 'lucide-react'
import { Card, CardHeader, CardContent } from '@/components/ui/Card'

export const Leadership: React.FC = () => {
  const leadershipProfile = {
    name: "Dato Ir Prof. Dr Hj. ROHAIZI BIN HJ MOHD JUSOH",
    title: "Managing Director",
    email: "Zrohaizi@gmail.com",
    phone: "+60-13-7308812",
    education: [
      "PhD in Business Administration (Cooperative) - Sabi University, France",
      "B.Eng (Hons) Civil Engineering - University of Glasgow, United Kingdom", 
      "Diploma in Civil Engineering - Universiti Teknologi Malaysia (UTM)",
      "Certificate in Human Resource - Universiti Sains Malaysia (USM)",
      "Professional Engineer (Ir.) - Board of Engineers Malaysia"
    ],
    experience: "30+ Years in Construction Industry Leadership",
    positions: [
      "2025-Present: Managing Director - Greencap AI Group Sdn. Bhd.",
      "2025-Present: Director - Yaz Consultant Sdn. Bhd.",
      "2025-Present: Chairman - BK Travel Sdn. Bhd.",
      "2025-Present: Chairman - Kukh Al Ghidha Sdn. Bhd.",
      "2025-Present: Adjunct Professor - Lincoln University & Linton University",
      "2025-Present: Commissioner (Honorary) - Angkatan Pertahanan Awam",
      "2025-Present: Founder/Chairman - Sari Panglima Sdn. Bhd.",
      "2019-2022: CEO CREAM - CIDB Malaysia",
      "2018-2019: Senior General Manager - CIDB Malaysia", 
      "2014-2018: Director - Prime Minister's Department (Technical)",
      "2010-2014: General Manager - CIDB Malaysia",
      "2005-2010: Director - CIDB Johor",
      "2003-2005: COO - Construction Academy, Johor",
      "1997-2003: Regional Manager - CIDB (Southern Region)",
      "1993-1996: Engineer - MARA, Kuala Lumpur",
      "1992-1993: Engineer - Techart Sdn Bhd, Kuala Lumpur",
      "1990-1992: Engineer - Wimpey Construction Ltd, United Kingdom"
    ],
    achievements: [
      "Led major construction industry development initiatives in Malaysia",
      "Contributed to national construction industry policies and standards",
      "Pioneered cooperative business models in construction sector",
      "Mentored numerous construction industry professionals",
      "Published research on construction management and business administration"
    ],
    expertise: [
      "Construction Industry Development",
      "Business Administration & Management", 
      "Strategic Planning & Policy Development",
      "Cooperative Business Models",
      "Industry Leadership & Governance",
      "Educational Leadership",
      "Regulatory Compliance",
      "Stakeholder Management"
    ],
    bio: `Dato Ir Prof. Dr Hj. ROHAIZI BIN HJ MOHD JUSOH stands as one of Malaysia's most distinguished leaders in the construction industry. With over three decades of exceptional experience, he has been instrumental in shaping the landscape of Malaysia's construction sector through his various leadership roles and academic contributions.

His journey began with his engineering background, progressing to earn the prestigious title of Professional Engineer (Ir.) from the Board of Engineers Malaysia. His pursuit of excellence led him to France, where he obtained his PhD in Business Administration with a specialization in Cooperative models from Sabi University, making him uniquely qualified to bridge the gap between technical engineering excellence and strategic business leadership.

During his tenure at CIDB (Construction Industry Development Board) Malaysia, Dato Rohaizi played a pivotal role in developing industry standards, policies, and frameworks that continue to guide Malaysia's construction sector today. His work at CIDB involved strategic planning for industry development, establishing best practices, and fostering innovation within the construction ecosystem.

As a Professor, he has dedicated significant efforts to education and knowledge transfer, mentoring the next generation of construction professionals and contributing to academic research in construction management and business administration. His academic work focuses on sustainable construction practices, industry development strategies, and the implementation of cooperative business models in the construction sector.

In his current role as Chairman & Director of Greencap Group Sdn. Bhd., Dato Rohaizi brings his wealth of experience to guide the company's strategic direction, ensuring adherence to the highest industry standards while driving innovation and sustainable growth. His leadership philosophy emphasizes integrity, excellence, and collaborative partnerships that benefit all stakeholders.

His expertise in cooperative business models has been particularly valuable in developing strategic partnerships and fostering collaborative approaches to complex construction projects. This unique perspective allows Greencap Group to approach projects with a holistic view that considers not just technical execution but also long-term sustainability and stakeholder value creation.`
  }

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
              Leadership <span className="text-primary-600">Profile</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Meet our distinguished Chairman & Director who brings decades of industry leadership and academic excellence to Greencap Group.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Profile */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8">
                <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                      alt={leadershipProfile.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-3xl font-bold mb-2">{leadershipProfile.name}</h2>
                    <p className="text-xl text-primary-100 mb-4">{leadershipProfile.title}</p>
                    <div className="flex flex-col lg:flex-row gap-4 text-sm">
                      <div className="flex items-center justify-center lg:justify-start">
                        <Mail className="w-4 h-4 mr-2" />
                        <a href={`mailto:${leadershipProfile.email}`} className="hover:text-primary-200 transition-colors">
                          {leadershipProfile.email}
                        </a>
                      </div>
                      <div className="flex items-center justify-center lg:justify-start">
                        <Phone className="w-4 h-4 mr-2" />
                        <span>{leadershipProfile.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Education */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <GraduationCap className="w-5 h-5 mr-2 text-primary-600" />
                      Education
                    </h3>
                    <ul className="space-y-2">
                      {leadershipProfile.education.map((edu, index) => (
                        <li key={index} className="text-gray-600 text-sm leading-relaxed">
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Positions */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Building className="w-5 h-5 mr-2 text-primary-600" />
                      Key Positions
                    </h3>
                    <ul className="space-y-2">
                      {leadershipProfile.positions.map((position, index) => (
                        <li key={index} className="text-gray-600 text-sm leading-relaxed">
                          {position}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expertise */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-primary-600" />
                      Areas of Expertise
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {leadershipProfile.expertise.map((skill, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Biography */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Biography</h3>
                  <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                    {leadershipProfile.bio.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {leadershipProfile.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Award className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}