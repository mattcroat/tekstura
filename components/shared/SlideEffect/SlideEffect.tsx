import { motion } from 'framer-motion'

export function SlideEffect() {
  return (
    <motion.div
      className="absolute inset-0 z-50 origin-left bg-yellow-400"
      animate={{ scaleX: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.1,
      }}
    ></motion.div>
  )
}
