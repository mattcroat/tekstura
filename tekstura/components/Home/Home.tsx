import { useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { Layout } from '@/root/components/Layout'
import { useNewsletter } from '@/root/lib/hooks/useNewsletter'

import type {
  TranslatedHeaderText,
  TranslatedHomeText,
} from '@/root/types/recipe'

type HomeProps = {
  latestRecipe: {
    title: string
    slug: string
    imageUrl: string
  }
  translatedText: TranslatedHomeText
  translatedHeaderText: TranslatedHeaderText
}

export function Home({
  latestRecipe,
  translatedText,
  translatedHeaderText,
}: HomeProps) {
  const inputEl = useRef<HTMLInputElement>(null)
  const {
    errorMessage,
    isError,
    isSubscribed,
    subscribe,
    subscribedMessage,
  } = useNewsletter(inputEl)

  const { slug, title, imageUrl } = latestRecipe

  return (
    <Layout
      layout={{ landingPage: true }}
      translatedText={translatedHeaderText}
    >
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-20 flex-1 mt-8 md:mt-16 lg:px-16"
      >
        <div className="px-8 text-left dark:text-gray-50 md:px-0 md:text-center">
          <h1 className="text-2xl md:text-3xl">{translatedText.title}</h1>
          <p className="mt-2">{translatedText.secondaryTitle}</p>
        </div>

        <aside className="flex flex-col items-center p-8 mt-8 space-y-4 transition bg-white lg:border lg:border-opacity-10 md:shadow-sm md:hover:shadow-lg lg:mt-0 lg:absolute lg:bottom-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:translate-y-1/2">
          <div className="flex items-center justify-center w-16 h-16 text-black rounded-full bg-gold">
            <svg
              height="32"
              width="32"
              className="w-8 h-8 transform rotate-45 -translate-y-0.5 translate-x-0.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </div>

          <h2 className="text-center">{translatedText.subscribeTitle}</h2>
          <form onSubmit={subscribe} className="w-full md:w-auto">
            <div className="flex flex-col space-y-4 shadow-sm md:flex-row md:space-y-0 md:border md:border-opacity-10">
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                ref={inputEl}
                className="p-2 transition bg-white border border-opacity-10 md:border-none"
                type="email"
                id="email"
                placeholder={translatedText.subscribePlaceholder}
              />
              <button
                className="p-2 text-black transition shadow-sm disabled:opacity-50 bg-gold hover:bg-gold-light"
                type="submit"
                disabled={isSubscribed && true}
              >
                {!isError && !isSubscribed && (
                  <div className="flex items-center justify-center">
                    <svg
                      height="24"
                      width="24"
                      className="inline w-6 h-6 mx-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{translatedText.subscribeCallToAction}</span>
                  </div>
                )}
                {isError && <span>{errorMessage}</span>}
                {isSubscribed && <span>{subscribedMessage}</span>}
              </button>
            </div>
          </form>
        </aside>
      </motion.section>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative text-center h-1/2"
      >
        <img
          className="object-cover w-full h-full"
          src={imageUrl}
          alt={title}
        />
        <div className="absolute top-0 z-10 flex flex-col items-center justify-center w-full h-full px-2 text-gray-50">
          <h3 className="text-2xl md:text-3xl md:pt-8 md:px-16">{title}</h3>
          <div className="mt-2 group">
            <Link href={`/recepti/${slug}`}>
              <a className="text-xl text-white font-heading">
                {translatedText.recipeLink}
              </a>
            </Link>
            <div className="h-0.5 origin-left bg-gold transform group-hover:scale-x-0 transition"></div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
      </motion.main>
    </Layout>
  )
}
