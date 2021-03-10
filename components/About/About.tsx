import React from 'react'
import { motion } from 'framer-motion'

import { Layout } from '@/root/components/Layout'

const variants = {
  about: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.3,
      },
    },
  },
}

export function About() {
  return (
    <Layout>
      <motion.main
        className="mt-8 p-8 md:m-16 bg-yellow-400"
        initial="hidden"
        animate="show"
        variants={variants.about}
      >
        <img
          className="h-16 w-16 mx-auto object-cover rounded-full"
          src="/images/avatar.webp"
          alt="Placeholder"
        />

        <section className="mt-8 space-y-8 md:w-1/2 md:mx-auto">
          <h1 className="text-center text-2xl md:text-3xl md:text-gray-800">
            Što je Tekstura?
          </h1>
          <p>
            Distinctio amet, rerum, accusantium saepe quam, ducimus possimus
            sint libero odio dolore assumenda. Dolores quibusdam nobis, quidem
            minima quasi cupiditate quia accusantium praesentium ea similique
            vero.
          </p>
          <p>
            Aliquid atque corrupti iure voluptatibus voluptate consequuntur quo
            expedita nobis et quibusdam esse neque iste soluta labore, tempore a
            blanditiis minus magnam necessitatibus dignissimos cum ipsum ullam
            dolore odio.
          </p>
        </section>
      </motion.main>
    </Layout>
  )
}
