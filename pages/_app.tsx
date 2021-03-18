import { motion, AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import '@/root/styles/global.css'

const variants = {
  fadeIn: {
    hide: { opacity: 0 },
    show: { opacity: 1 },
  },
}

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AnimatePresence exitBeforeEnter>
        <motion.div initial="hide" animate="show" variants={variants.fadeIn}>
          <Component {...pageProps} />
        </motion.div>
        <motion.div
          key={router.route}
          className="absolute inset-0 origin-right bg-yellow-400 z-50"
          initial={{ scaleX: 0 }}
          exit={{ scaleX: [0, 1] }}
          transition={{
            repeat: 1,
            repeatType: 'reverse',
            duration: 0.5,
          }}
        ></motion.div>
      </AnimatePresence>
    </>
  )
}
