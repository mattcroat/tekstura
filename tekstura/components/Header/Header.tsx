import React from 'react'

import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import { Navbar } from '@/root/components/Header/Navbar'
import { NavbarMobile } from '@/root/components/Header/NavbarMobile'
import { sanityClient } from '@/root/lib/sanity/client'

import type { TranslatedHeaderText } from '@/root/types/recipe'

async function getTranslatedText({
  queryKey,
}: any): Promise<TranslatedHeaderText> {
  const [, locale] = queryKey

  const translatedSeoText = await sanityClient.fetch(
    `
    *[_type == 'seo' && _lang == $language][0] {
      title
    }
  `,
    {
      language: locale == 'en' ? 'en_GB' : locale,
    }
  )

  const translatedNavigationText = await sanityClient.fetch(
    `
    *[_type == 'navigation' && _lang == $language][0] {
      home,
      recipes,
      about
    }
  `,
    {
      language: locale == 'en' ? 'en_GB' : locale,
    }
  )

  return {
    ...translatedSeoText,
    ...translatedNavigationText,
  }
}

export function Header() {
  const { locale } = useRouter()
  const { data: translatedText } = useQuery(
    ['translatedHeaderText', locale],
    getTranslatedText
  )

  return (
    <>
      <Navbar translatedText={translatedText} />
      <NavbarMobile translatedText={translatedText} />
    </>
  )
}
