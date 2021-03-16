import React from 'react'
import { motion } from 'framer-motion'

import { Layout } from '@/root/components/Layout'

export function About() {
  return (
    <Layout>
      <main className="mt-8 md:m-16">
        <section className="mt-8 p-8 space-y-8 lg:w-1/2 lg:mx-auto dark:text-gray-50 md:border border-gray-200 dark:border-gray-700 shadow-sm transition">
          <img
            className="h-16 w-16 mx-auto object-cover rounded-full"
            src="/images/avatar.webp"
            alt="Placeholder"
          />
          <h1 className="text-2xl md:text-3xl text-yellow-400 text-center ">
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
      </main>
    </Layout>
  )
}
