import { motion, AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import '@/root/styles/global.css'

const variants = {
  pageTransition: {
    hidden: { opacity: 0.1 },
    show: { opacity: 1 },
    yeet: { opacity: 0 },
  },
}

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AnimatePresence>
        <motion.div
          key={router.route}
          initial="hidden"
          animate="show"
          exit="yeet"
          variants={variants.pageTransition}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  )
}
