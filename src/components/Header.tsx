import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Building2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from './ui/Button'

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/team', label: 'Team' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-primary-100'
          : 'bg-transparent'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-accent-600 via-blue-600 to-primary-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <Building2 className="text-white w-7 h-7" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-accent-600 to-blue-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary-800 to-accent-600 bg-clip-text text-transparent">
                Greencap Group
              </h1>
              <p className="text-sm text-primary-600 font-medium">Engineering Excellence Since 1994</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-xl',
                  location.pathname === item.path
                    ? 'text-accent-600 bg-accent-50'
                    : 'text-primary-700 hover:text-accent-600 hover:bg-accent-50'
                )}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent-600 rounded-full"
                  />
                )}
              </Link>
            ))}
            <div className="ml-6">
              <Button variant="accent" size="md" className="font-semibold">
                Get Started
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 text-primary-700 hover:text-accent-600 hover:bg-accent-50 rounded-xl transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-primary-100 rounded-b-2xl shadow-xl"
          >
            <div className="py-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'block px-6 py-3 text-base font-semibold transition-all duration-300 rounded-xl mx-4',
                    location.pathname === item.path
                      ? 'text-accent-600 bg-accent-50'
                      : 'text-primary-700 hover:text-accent-600 hover:bg-accent-50'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 pt-4">
                <Button variant="accent" size="lg" className="w-full font-semibold">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}