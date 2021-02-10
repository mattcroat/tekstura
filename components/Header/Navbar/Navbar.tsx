import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { screenSize } from '@/root/styles/mediaQueries'

const Container = styled(motion.header)`
  display: none;
  z-index: 2;

  ${screenSize.sm} {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: var(--spacing-32) var(--spacing-64) var(--spacing-32)
      var(--spacing-64);

    ul {
      display: flex;
      gap: var(--spacing-32);
      font-weight: 700;
    }
  }
`

export function Navbar() {
  return (
    <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1>Kužina</h1>
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
              <a>Što je Kužina?</a>
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
