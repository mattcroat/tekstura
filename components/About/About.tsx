import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { Header } from '@/root/components/Header'
import { screenSize } from '@/root/styles/mediaQueries'

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },
}

const StyledAbout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: var(--spacing-32);
  grid-template-areas:
    '... ... ...'
    '... header ...'
    '... main ...';

  ${screenSize.md} {
    gap: var(--spacing-64);
  }

  ${screenSize.lg} {
    grid-column-gap: var(--spacing-128);
  }
`

const Main = styled(motion.main)`
  max-width: 60ch;
  grid-area: main;
  display: grid;
  gap: var(--spacing-32);
  justify-self: center;

  ${screenSize.lg} {
    max-width: 100%;
    max-width: auto;
    grid-template-columns: 1fr 60ch;
  }
`

const Image = styled.img`
  height: 140px;
  width: 140px;
  object-fit: cover;
  border-radius: 50%;
  place-self: center;

  ${screenSize.lg} {
    height: 240px;
    width: 240px;
  }
`

const Title = styled.h1`
  color: var(--color-primary-gold);
  text-align: center;

  ${screenSize.lg} {
    text-align: left;
  }
`

export function About() {
  return (
    <StyledAbout>
      <Header />

      <Main variants={fadeIn} initial="hidden" animate="show">
        <Image src="/images/avatar.webp" alt="Placeholder" />

        <section>
          <Title>Što je Tekstura?</Title>
          <p>
            Distinctio amet, rerum, accusantium saepe quam, ducimus possimus
            sint libero odio dolore assumenda. Dolores quibusdam nobis, quidem
            minima quasi cupiditate quia accusantium praesentium ea similique
            vero.
          </p>
          <p>
            Aliquid atque corrupti iure voluptatibus voluptate consequuntur quo
            expedita nobis et quibusdam esse neque iste soluta labore, tempore a
            blanditiis minus magnam necessitatibus dignissimos cum ipsum ullam
            dolore odio.
          </p>
        </section>
      </Main>
    </StyledAbout>
  )
}
