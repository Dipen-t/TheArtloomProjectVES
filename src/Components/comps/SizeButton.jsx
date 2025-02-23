import React from 'react'
import { motion } from 'framer-motion'

function SizeButton({ text, onClick, isSelected = false }) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative w-full border-2 px-8 py-3 text-sm font-medium transition-colors
        ${isSelected ? 
          'bg-black text-white border-black' : 
          'border-gray-300 hover:border-black text-gray-800'
        }`}
      whileHover={{ 
        scale: 1.02,
        transition: { type: 'spring', stiffness: 300 }
      }}
      whileTap={{ 
        scale: 0.98
      }}
      transition={{
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }}
      aria-pressed={isSelected}
    >
      {/* Animated checkmark */}
      {isSelected && (
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute left-2 top-1/2 -translate-y-1/2"
        >
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
          </svg>
        </motion.span>
      )}

      <span className="relative block">{text}</span>
    </motion.button>
  )
}

export default SizeButton