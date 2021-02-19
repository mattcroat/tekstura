import { useState } from 'react'
import styled from '@emotion/styled'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

import { MenuButton } from './MenuButton'
import { ThemeToggle } from '@/root/components/shared/ThemeToggle'
import { screenSize } from '@/root/styles/mediaQueries'

type HeaderMobile = {
  isMenuOpen: boolean
}

const Container = styled(motion.header)<HeaderMobile>`
  margin: var(--spacing-32) 0;
  /* margin-bottom: var(--spacing-32); */
  /* padding: var(--spacing-24) var(--spacing-24) 0 var(--spacing-24); */
  background-color: ${({ isMenuOpen }) =>
    isMenuOpen && 'var(--color-primary-gold)'};
  transition: background-color 0.3s;
  z-index: 2;

  ${screenSize.md} {
    display: none;
  }
`

const Menu = styled(motion.nav)`
  padding: 24px 0;
  font-weight: 700;

  ul {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-8);
    list-style: none;
  }

  a {
    display: inline-block;
  }
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

export function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false)

  const menu = {
    container: {
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

  return (
    <Container
      isMenuOpen={isOpen}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Flex>
        <h1>Kužina</h1>
        <MenuButton
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        ></MenuButton>
      </Flex>

      <AnimatePresence>
        {isOpen && (
          <Menu
            initial="hidden"
            animate="show"
            variants={menu.container}
            exit={{ opacity: 0 }}
          >
            <ul>
              <motion.li variants={menu.item}>
                <Link href="/">
                  <a>Početna</a>
                </Link>
              </motion.li>
              <motion.li variants={menu.item}>
                <Link href="/recipes">
                  <a>Recepti</a>
                </Link>
              </motion.li>
              <motion.li variants={menu.item}>
                <Link href="/about">
                  <a>Što je Kužina?</a>
                </Link>
              </motion.li>
              <motion.li variants={menu.item}>
                <ThemeToggle />
              </motion.li>
            </ul>
          </Menu>
        )}
      </AnimatePresence>
    </Container>
  )
}
