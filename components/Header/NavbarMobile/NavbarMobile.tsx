import { useState } from 'react'
import styled from '@emotion/styled'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

import { screenSize } from '@/root/styles/mediaQueries'

type HeaderMobile = {
  isMenuOpen: boolean
}

const menu = {
  hidden: { opacity: 0, height: 0 },
  show: {
    opacity: 1,
    height: 'auto',
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const menuItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

const Container = styled(motion.header)<HeaderMobile>`
  margin-bottom: var(--spacing-32);
  padding: var(--spacing-24) var(--spacing-24) 0 var(--spacing-24);
  background-color: ${({ isMenuOpen }) =>
    isMenuOpen && 'var(--color-highlight)'};
  transition: background-color 0.3s;
  z-index: 2;

  ${screenSize.sm} {
    display: none;
  }
`

const ToggleMenuIcon = styled.button`
  height: 28px;
  width: 28px;
  background: none;
  border: none;
  cursor: pointer;

  ${screenSize.sm} {
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
  const opened = isOpen ? 'opened' : ''

  return (
    <Container
      isMenuOpen={isOpen}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Flex>
        <h1>Kužina</h1>
        <ToggleMenuIcon onClick={() => setIsOpen(!isOpen)}>
          <svg
            aria-hidden="true"
            focusable="false"
            role="img"
            viewBox="0 0 80 80"
            className={opened}
          >
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </ToggleMenuIcon>
      </Flex>

      <AnimatePresence>
        {isOpen && (
          <Menu
            initial="hidden"
            animate="show"
            variants={menu}
            exit={{ opacity: 0 }}
          >
            <ul>
              <motion.li variants={menuItem}>
                <Link href="/">
                  <a>Početna</a>
                </Link>
              </motion.li>
              <motion.li variants={menuItem}>
                <Link href="/recipes">
                  <a>Recepti</a>
                </Link>
              </motion.li>
              <motion.li variants={menuItem}>
                <Link href="/about">
                  <a>Što je Kužina?</a>
                </Link>
              </motion.li>
            </ul>
          </Menu>
        )}
      </AnimatePresence>
    </Container>
  )
}
