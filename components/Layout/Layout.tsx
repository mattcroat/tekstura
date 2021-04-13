import { motion } from 'framer-motion'

import { Header } from '@/root/components/Header'

type LayoutProps = {
  children: React.ReactNode
  layout?: { landingPage: boolean }
}

export function Layout({ children, layout }: LayoutProps) {
  if (layout?.landingPage) {
    return (
      <div className="flex flex-col h-screen">
        <Header />
        {children}
      </div>
    )
  }

  return (
    <>
      <motion.div className="xl:max-w-7xl xl:mx-auto">
        <Header />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {children}
        </motion.div>
      </motion.div>
    </>
  )
}
