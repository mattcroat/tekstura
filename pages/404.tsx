import React from 'react'
import { useRouter } from 'next/router'

import { Layout } from '@/root/components/Layout'

export default function NotFound() {
  const router = useRouter()

  React.useEffect(() => {
    setTimeout(() => router.replace('/'), 4000)
  }, [router])

  return (
    <Layout>
      <div className="px-8 mt-8 text-center md:px-0 md:mt-16 lg:px-16 dark:text-white">
        <h1 className="text-2xl md:text-3xl">404: Stranica ne postoji</h1>
        <img
          className="mt-8 md:mx-auto max-h-96"
          src="/images/404.svg"
          alt="Not found"
        />
      </div>
    </Layout>
  )
}
