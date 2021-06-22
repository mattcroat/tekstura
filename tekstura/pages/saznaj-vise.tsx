import { About } from '@/root/components/About'

import { sanityClient } from '@/root/lib/sanity/client'

import type { Params, TranslatedAboutText } from '@/root/types/recipe'

type AboutPageProps = {
  translatedText: TranslatedAboutText
}

export default function AboutPage({ translatedText }: AboutPageProps) {
  return <About translatedText={translatedText} />
}

export async function getStaticProps({ locale }: Params) {
  const translatedText: TranslatedAboutText = await sanityClient.fetch(
    `
    *[_type == 'aboutPage' && _lang == $language][0] {
      title,
      description
    }
  `,
    {
      language: locale === 'en' ? 'en_GB' : locale,
    }
  )

  return {
    props: {
      translatedText,
    },
  }
}
