import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { ThemeToggle } from '@/root/components/shared/ThemeToggle'
import { screen } from '@/root/styles/media'

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
}

const StyledNavbar = styled(motion.header)`
  grid-area: header;
  display: none;

  ${screen.md} {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
`

const List = styled.ul`
  display: flex;
  align-items: center;
  gap: var(--spacing-32);
  font-weight: 700;
  list-style: none;
`

const Item = styled.li`
  &:not(:last-child)::after {
    content: '';
    display: block;
    height: 1px;
    width: 0;
    background-color: var(--color-text);
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`

export function Navbar() {
  return (
    <StyledNavbar variants={variants.navbar} initial="hidden" animate="show">
      <h1>Tekstura</h1>
      <nav>
        <List>
          <Item>
            <Link href="/">
              <a>Početna</a>
            </Link>
          </Item>
          <Item>
            <Link href="/recepti">
              <a>Recepti</a>
            </Link>
          </Item>
          <Item>
            <Link href="/vise">
              <a>Saznaj više</a>
            </Link>
          </Item>
          <Item>
            <ThemeToggle />
          </Item>
        </List>
      </nav>
    </StyledNavbar>
  )
}
