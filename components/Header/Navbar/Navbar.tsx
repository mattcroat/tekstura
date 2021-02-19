import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { ThemeToggle } from '@/root/components/shared/ThemeToggle'
import { screenSize } from '@/root/styles/mediaQueries'

const Container = styled(motion.header)`
  display: none;
  z-index: 2;

  ${screenSize.md} {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    /* padding: var(--spacing-32) var(--spacing-64) var(--spacing-32)
      var(--spacing-64); */
    /* margin-top: var(--spacing-64); */

    ul {
      display: flex;
      align-items: center;
      gap: var(--spacing-32);
      font-weight: 700;
      list-style: none;
    }

    li::after {
      content: '';
      display: block;
      height: 1px;
      width: 0;
      background-color: var(--color-text);
      transition: width 0.3s;
    }

    li:hover::after {
      width: 100%;
    }
  }
`

export function Navbar() {
  return (
    <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1>Tekstura</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Početna</a>
            </Link>
          </li>
          <li>
            <Link href="/recipes">
              <a>Recepti</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>O nama</a>
            </Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </Container>
  )
}
