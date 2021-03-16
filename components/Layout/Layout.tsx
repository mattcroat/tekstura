import { Header } from '@/root/components/Header'
import { motion } from 'framer-motion'

type Props = {
  children: React.ReactNode
}

const variants = {
  pageTransition: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
}

export function Layout({ children }: Props) {
  return (
    <>
      <div className="xl:max-w-7xl xl:mx-auto">
        <Header />
        <motion.div
          initial="hidden"
          animate="show"
          variants={variants.pageTransition}
        >
          {children}
        </motion.div>
      </div>
    </>
  )
}
