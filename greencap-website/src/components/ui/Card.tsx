import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  variant?: 'default' | 'glass' | 'modern'
}

export const Card: React.FC<CardProps> = ({ children, className, hover = true, variant = 'modern' }) => {
  const variants = {
    default: 'bg-white rounded-xl shadow-lg',
    glass: 'bg-white/95 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl',
    modern: 'bg-white rounded-2xl border border-primary-100 shadow-lg hover:shadow-2xl hover:border-accent-200'
  }
  
  return (
    <div
      className={cn(
        'p-8 transition-all duration-500',
        variants[variant],
        hover && 'hover:-translate-y-2 transform',
        className
      )}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  )
}

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

export const CardContent: React.FC<CardContentProps> = ({ children, className }) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  )
}