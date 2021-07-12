import { motion } from 'framer-motion'

import { Header } from '@/root/components/Header'
import { Seo } from './Seo'

import type { TranslatedHeaderText } from '@/root/types/recipe'

type LayoutProps = {
  children: React.ReactNode
  layout?: { landingPage: boolean }
  translatedText?: TranslatedHeaderText
  [key: string]: any
}

export function Layout({
  children,
  layout,
  translatedText = {},
  ...metadata
}: LayoutProps) {
  if (layout?.landingPage) {
    return (
      <>
        <Seo translatedText={translatedText} {...metadata} />
        <div className="flex flex-col h-screen">
          <Header translatedText={translatedText} />
          {children}
        </div>
      </>
    )
  }

  return (
    <>
      <Seo translatedText={translatedText} {...metadata} />
      <motion.div className="xl:max-w-7xl xl:mx-auto">
        <Header translatedText={translatedText} />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {children}
        </motion.div>
      </motion.div>
    </>
  )
}
