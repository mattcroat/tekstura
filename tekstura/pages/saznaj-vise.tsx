import { About } from '@/root/components/About'
import {
  getTranslatedHeaderText,
  getTranslatedText,
} from '@/root/lib/api/sanity'

import type {
  Params,
  TranslatedAboutText,
  TranslatedHeaderText,
} from '@/root/types/recipe'

type AboutPageProps = {
  translatedText: TranslatedAboutText
  translatedHeaderText: TranslatedHeaderText
}

export default function AboutPage({
  translatedText,
  translatedHeaderText,
}: AboutPageProps) {
  return (
    <About
      translatedText={translatedText}
      translatedHeaderText={translatedHeaderText}
    />
  )
}

export async function getStaticProps({ locale }: Params) {
  const query = `
    *[_type == 'aboutPage' && _lang == $language][0] {
      title,
      description
    }
  `

  const translatedText = await getTranslatedText(locale, query)
  const translatedHeaderText = await getTranslatedHeaderText(locale)

  return {
    props: {
      translatedText,
      translatedHeaderText,
    },
  }
}
