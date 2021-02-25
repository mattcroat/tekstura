import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { Header } from '@/root/components/Header'
import { screenSize } from '@/root/styles/mediaQueries'

const byline = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },
}

const newsletter = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.6,
    },
  },
}

const recipe = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.6,
    },
  },
}

const StyledHome = styled.div`
  height: 100vh;
  padding-top: var(--spacing-32);
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto auto 1fr 1fr 50vh;
  grid-column-gap: var(--spacing-32);
  grid-template-areas:
    '... ... ...'
    '... header ...'
    '... byline ...'
    'newsletter newsletter newsletter'
    'recipe recipe recipe';

  ${screenSize.md} {
    padding-top: var(--spacing-64);
    grid-template-rows: auto 1fr 0 50vh;
    grid-column-gap: var(--spacing-64);
    grid-template-areas:
      '... header ...'
      '... byline ...'
      '... newsletter ...'
      'recipe recipe recipe';
  }

  ${screenSize.lg} {
    grid-column-gap: var(--spacing-128);
  }
`

const Byline = styled(motion.div)`
  grid-area: byline;
  padding-top: var(--spacing-32);

  h3 {
    margin-top: var(--spacing-8);
  }

  ${screenSize.sm} {
    text-align: center;
  }

  ${screenSize.md} {
    padding-top: var(--spacing-64);
  }
`

const Newsletter = styled(motion.section)`
  grid-area: newsletter;
  min-width: 340px;
  display: grid;
  justify-items: center;
  align-content: center;
  margin-top: var(--spacing-32);
  padding: var(--spacing-24);
  text-align: center;
  background-color: var(--color-secondary-bg);
  transition: color 1s, background-color 1s;
  z-index: 1;

  h3 {
    margin: var(--spacing-8) 0;
  }

  ${screenSize.sm} {
    box-shadow: var(--shadow-lg);
    border-radius: var(--radius-base);
  }

  ${screenSize.md} {
    margin: -120px auto;
  }
`

const Avatar = styled.img`
  height: 84px;
  width: 84px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto;
`

const Form = styled.form`
  display: inline-block;
  margin-top: var(--spacing-8);
  background-color: var(--color-input-bg);
  border: 1px solid var(--color-input-border);
  border-radius: var(--radius-base);
`

const Label = styled.label`
  display: none;
`

const Input = styled.input`
  width: 200px;
  padding: var(--spacing-8);
  font-size: inherit;
  color: var(--color-input-text);
  background-color: var(--color-input-bg);
  border: none;
`

const Button = styled.button`
  height: 40px;
  padding: var(--spacing-8);
  font-family: inherit;
  font-weight: 700;
  font-size: inherit;
  background-color: var(--color-primary-gold-light);
  border: none;
  border-left: 1px solid var(--color-input-border);
  cursor: pointer;
`

const Recipe = styled(motion.div)`
  grid-area: recipe;
  position: relative;
  color: var(--color-primary-bg);
  text-align: center;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: var(--color-overlay-bg);
    z-index: -1;
  }

  h2 {
    color: var(--color-primary-gold-light);
  }

  h3 {
    display: inline-block;
    margin-top: var(--spacing-8);
    color: var(--color-text-on-dark-bg);
  }

  h3::after {
    content: '';
    display: block;
    height: 1px;
    width: 100%;
    background-color: var(--color-text-on-dark-bg);
    transition: width 0.3s;
  }

  h3:hover::after {
    width: 0;
  }
`

const RecipeImage = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -2;
`

const Center = styled.div`
  height: 100%;
  display: grid;
  align-content: center;
  justify-items: center;
`

export function Home() {
  return (
    <StyledHome>
      <Header />

      <Byline variants={byline} initial="hidden" animate="show">
        <h1>Recepti, savjeti i više</h1>
        <h3>Tekstura je namijenjena za dijeljenje izvrsne hrane sa drugima</h3>
      </Byline>

      <Newsletter variants={newsletter} initial="hidden" animate="show">
        <Avatar src="/images/avatar.webp" alt="Placeholder" />
        <h3>Besplatno primajte obavijesti u sandučić:</h3>
        <Form>
          <Label aria-hidden="false" htmlFor="email">
            Email
          </Label>
          <Input type="text" id="email" placeholder="mail@mail.com" />
          <Button type="button">Prijava</Button>
        </Form>
      </Newsletter>

      <Recipe variants={recipe} initial="hidden" animate="show">
        <RecipeImage src="/images/dish.webp" alt="Dish" />
        <Center>
          <h2>Svako Jutro Jedno Jaje Organizmu Snagu Daje</h2>
          <h3>
            <Link href="/recipes/name-of-recipe">
              <a>recept</a>
            </Link>
          </h3>
        </Center>
      </Recipe>
    </StyledHome>
  )
}
