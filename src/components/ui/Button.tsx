import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95'
  
  const variants = {
    primary: 'bg-primary-800 hover:bg-primary-900 text-white shadow-lg hover:shadow-2xl focus:ring-primary-500',
    secondary: 'bg-white hover:bg-gray-50 text-primary-800 border border-primary-200 shadow-md hover:shadow-lg focus:ring-primary-500',
    outline: 'border-2 border-accent-600 text-accent-600 hover:bg-accent-600 hover:text-white focus:ring-accent-500 shadow-md hover:shadow-lg',
    ghost: 'text-primary-700 hover:text-accent-600 hover:bg-accent-50 focus:ring-accent-500',
    accent: 'bg-gradient-to-r from-accent-600 to-blue-600 hover:from-accent-700 hover:to-blue-700 text-white shadow-lg hover:shadow-2xl focus:ring-accent-500'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  }
  
  return (
    <button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}