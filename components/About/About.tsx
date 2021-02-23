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
  grid-template-rows: auto 1fr;
  gap: var(--spacing-32);
  padding: 0 var(--spacing-32);

  ${screenSize.md} {
    gap: var(--spacing-64);
    margin-top: var(--spacing-64);
    padding: 0 var(--spacing-64);
  }

  ${screenSize.lg} {
    padding: 0 var(--spacing-128);
  }
`

const Main = styled(motion.main)`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 60ch;
  gap: var(--spacing-64);
  margin: 0 auto;
  margin-top: var(--spacing-64);
`

const Image = styled.img`
  height: 240px;
  width: 240px;
  object-fit: cover;
  border-radius: 50%;
`

const Title = styled.h1`
  color: var(--color-primary-gold);
`

export function About() {
  return (
    <StyledAbout>
      <Header />

      <Main variants={fadeIn} initial="hidden" animate="show">
        <aside>
          <Image
            src="
          https://images.unsplash.com/photo-1565853530962-ebe35dc9ba70
          "
            alt="Girl with sunglasses smiling"
          />
        </aside>

        <section>
          <Title>About</Title>
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
