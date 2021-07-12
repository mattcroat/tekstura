import React from 'react'

import { Navbar } from '@/root/components/Header/Navbar'
import { NavbarMobile } from '@/root/components/Header/NavbarMobile'

import type { TranslatedHeaderText } from '@/root/types/recipe'

interface HeaderProps {
  translatedText: TranslatedHeaderText
}

export function Header({ translatedText }: HeaderProps) {
  return (
    <>
      <Navbar translatedText={translatedText} />
      <NavbarMobile translatedText={translatedText} />
    </>
  )
}
