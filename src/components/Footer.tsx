import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Greencap AI Group Sdn. Bhd.</h3>
                <p className="text-sm text-gray-400">(1608960-K)</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading construction and engineering firm providing professional infrastructure development, power engineering, and strategic consultancy services across Malaysia since 1994.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { path: '/about', label: 'About Us' },
                { path: '/services', label: 'Services' },
                { path: '/team', label: 'Our Team' },
                { path: '/projects', label: 'Projects' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Construction Excellence</li>
              <li>Power Engineering</li>
              <li>Water Treatment Facilities</li>
              <li>Infrastructure Development</li>
              <li>Strategic Consultancy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4">
              {/* HQ Address */}
              <div>
                <p className="text-xs text-gray-500 font-semibold mb-2">Headquarters</p>
                <div className="flex items-start space-x-3">
                  <MapPin size={16} className="text-primary-400 mt-1 flex-shrink-0" />
                  <div className="text-sm text-gray-400">
                    <p>No.32 Wisma SPS, Jalan Imbi</p>
                    <p>55100 Kuala Lumpur, Malaysia</p>
                  </div>
                </div>
              </div>

              {/* Branch Address */}
              <div>
                <p className="text-xs text-gray-500 font-semibold mb-2">Branch Office</p>
                <div className="flex items-start space-x-3">
                  <MapPin size={16} className="text-primary-400 mt-1 flex-shrink-0" />
                  <div className="text-sm text-gray-400">
                    <p>16A, Jalan Ronggeng 11</p>
                    <p>Taman Skudai Baru 81300</p>
                    <p>Skudai, Johor, Malaysia</p>
                  </div>
                </div>
              </div>

              {/* Contact Numbers */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-primary-400 flex-shrink-0" />
                  <span className="text-sm text-gray-400">+60-19-6226068</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-primary-400 flex-shrink-0" />
                  <span className="text-sm text-gray-400">+607-5596107</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-primary-400 flex-shrink-0" />
                  <span className="text-sm text-gray-400">greencap.captain@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Greencap AI Group Sdn. Bhd. (1608960-K). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}