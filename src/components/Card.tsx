import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div className={cn(
      'card',
      hover && 'hover:transform hover:scale-105',
      className
    )}>
      {children}
    </div>
  )
}