import { Header } from '@/root/components/Header'
import { motion } from 'framer-motion'

type LayoutProps = {
  children: React.ReactNode
  layout?: { landingPage: boolean }
}

const variants = {
  pageTransition: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
}

export function Layout({ children, layout }: LayoutProps) {
  if (layout?.landingPage) {
    return (
      <div className="h-screen flex flex-col">
        <Header />
        {children}
      </div>
    )
  }

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
