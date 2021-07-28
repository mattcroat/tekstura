import { Layout } from '@/root/components/Layout'
import { PortableText } from '@/root/lib/sanity/client'

import type {
  TranslatedAboutText,
  TranslatedHeaderText,
} from '@/root/types/recipe'

type AboutProps = {
  translatedText: TranslatedAboutText
  translatedHeaderText: TranslatedHeaderText
}

export function About({ translatedText, translatedHeaderText }: AboutProps) {
  return (
    <Layout translatedText={translatedHeaderText}>
      <main className="m-8 md:m-16 dark:text-gray-50">
        <section className="lg:w-1/2">
          <h1 className="text-2xl">{translatedText.title}</h1>
          <div className="w-16 h-1 mt-2 bg-gold"></div>
          <div className="mt-8 space-y-8">
            <PortableText
              blocks={translatedText.description}
              className="mt-8 space-y-8"
            />
          </div>
        </section>
      </main>
    </Layout>
  )
}
