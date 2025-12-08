import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

interface WhatsAppFloatingButtonProps {
    phoneNumber: string
    message?: string
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({
    phoneNumber,
    message = 'Hello! I would like to inquire about your services.',
}) => {
    const handleClick = () => {
        const encodedMessage = encodeURIComponent(message)
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
        window.open(whatsappUrl, '_blank')
    }

    return (
        <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={handleClick}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl flex items-center justify-center group hover:shadow-green-500/50 transition-all duration-300"
            aria-label="Contact us on WhatsApp"
        >
            <div className="absolute inset-0 bg-green-400 rounded-full opacity-0 group-hover:opacity-20 animate-ping"></div>
            <MessageCircle className="w-8 h-8 text-white" />
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">!</span>
            </div>
        </motion.button>
    )
}
