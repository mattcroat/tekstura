import { motion } from 'framer-motion'

import { Header } from '@/root/components/Header'
import { Seo } from './Seo'

type LayoutProps = {
  children: React.ReactNode
  layout?: { landingPage: boolean }
  [key: string]: any
}

export function Layout({ children, layout, ...metadata }: LayoutProps) {
  if (layout?.landingPage) {
    return (
      <>
        <Seo {...metadata} />
        <div className="flex flex-col h-screen">
          <Header />
          {children}
        </div>
      </>
    )
  }

  return (
    <>
      <Seo {...metadata} />
      <motion.div className="xl:max-w-7xl xl:mx-auto">
        <Header />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {children}
        </motion.div>
      </motion.div>
    </>
  )
}
