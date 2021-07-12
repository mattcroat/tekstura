import { About } from '@/root/components/About'
import { getTranslatedText } from '@/root/lib/api/sanity'

import type { Params, TranslatedAboutText } from '@/root/types/recipe'

type AboutPageProps = {
  translatedText: TranslatedAboutText
}

export default function AboutPage({ translatedText }: AboutPageProps) {
  return <About translatedText={translatedText} />
}

export async function getStaticProps({ locale }: Params) {
  const query = `
    *[_type == 'aboutPage' && _lang == $language][0] {
      title,
      description
    }
  `

  const translatedText = await getTranslatedText(locale, query)

  return {
    props: {
      translatedText,
    },
  }
}
