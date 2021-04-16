import React from 'react'
import { Layout } from '@/root/components/Layout'

export function About() {
  return (
    <Layout>
      <main className="m-8 md:m-16 dark:text-gray-50">
        <section className="lg:w-1/2">
          <h1 className="text-2xl">Što je Tekstura?</h1>
          <div className="w-16 h-1 mt-2 bg-gold"></div>
          <div className="mt-8 space-y-8">
            <p>
              Distinctio amet, rerum, accusantium saepe quam, ducimus possimus
              sint libero odio dolore assumenda. Dolores quibusdam nobis, quidem
              minima quasi cupiditate quia accusantium praesentium ea similique
              vero.
            </p>
            <p>
              Aliquid atque corrupti iure voluptatibus voluptate consequuntur
              quo expedita nobis et quibusdam esse neque iste soluta labore,
              tempore a blanditiis minus magnam necessitatibus dignissimos cum
              ipsum ullam dolore odio.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  )
}
