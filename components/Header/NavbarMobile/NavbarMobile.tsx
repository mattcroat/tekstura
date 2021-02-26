import { useState } from 'react'
import styled from '@emotion/styled'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

import { MenuButton } from './MenuButton'
import { ThemeToggle } from '@/root/components/shared/ThemeToggle'
import { screen } from '@/root/styles/media'
interface HeaderProps {
  isMenuOpen: boolean
}

const variants = {
  navbar: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.3,
      },
    },
  },
  menu: {
    hidden: { opacity: 0, height: 0 },
    show: {
      opacity: 1,
      height: 'auto',
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  item: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
}

const StyledNavbarMobile = styled(motion.header)<HeaderProps>`
  grid-area: header;
  padding: var(--spacing-32);
  padding-bottom: 0;
  background-color: ${({ isMenuOpen }) =>
    isMenuOpen && 'var(--color-primary-gold)'};
  transition: background-color 0.3s;

  ${screen.md} {
    display: none;
  }
`

const AlignItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

const Menu = styled(motion.nav)`
  margin: var(--spacing-32) 0;
  font-weight: 700;

  a {
    display: inline-block;
  }
`

const List = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-16);
  list-style: none;
`

const Item = styled(motion.li)``

export function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <StyledNavbarMobile
      isMenuOpen={isOpen}
      variants={variants.navbar}
      initial="hidden"
      animate="show"
    >
      <AlignItems>
        <h1>
          <Link href="/">
            <a>Tekstura</a>
          </Link>
        </h1>
        <MenuButton
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        ></MenuButton>
      </AlignItems>

      <AnimatePresence>
        {isOpen && (
          <Menu>
            <List
              initial="hidden"
              animate="show"
              variants={variants.menu}
              exit={{ opacity: 0 }}
            >
              <Item variants={variants.item}>
                <Link href="/">
                  <a>Početna</a>
                </Link>
              </Item>
              <Item variants={variants.item}>
                <Link href="/recepti">
                  <a>Recepti</a>
                </Link>
              </Item>
              <Item variants={variants.item}>
                <Link href="/vise">
                  <a>Saznaj više</a>
                </Link>
              </Item>
              <Item variants={variants.item}>
                <ThemeToggle />
              </Item>
            </List>
          </Menu>
        )}
      </AnimatePresence>
    </StyledNavbarMobile>
  )
}
