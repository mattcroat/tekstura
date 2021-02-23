import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { Header } from '@/root/components/Header'
import { screenSize } from '@/root/styles/mediaQueries'

const StyledHome = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto 1fr 1fr 50vh;
  grid-column-gap: var(--spacing-32);
  grid-template-areas:
    '... header ...'
    '... byline ...'
    'newsletter newsletter newsletter'
    'recipe recipe recipe';

  ${screenSize.md} {
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

  h3 {
    margin-top: var(--spacing-8);
  }

  ${screenSize.sm} {
    text-align: center;
  }
`

const Newsletter = styled(motion.section)`
  grid-area: newsletter;
  min-width: 340px;
  display: grid;
  justify-items: center;
  align-content: center;
  margin-top: var(--spacing-32);
  padding: 0 var(--spacing-24);
  text-align: center;
  background-color: var(--color-secondary-bg);
  transition: color 1s, background-color 1s;
  z-index: 1;

  img {
    height: 84px;
    width: 84px;
    object-fit: cover;
    border-radius: 50%;
    margin: 0 auto;
  }

  h3 {
    margin: var(--spacing-8) 0;
  }

  form {
    display: inline-block;
    margin-top: var(--spacing-8);
    background-color: var(--color-input-bg);
    border: 1px solid var(--color-input-border);
    border-radius: var(--radius-base);
  }

  label {
    display: none;
  }

  input {
    width: 200px;
    padding: var(--spacing-8);
    font-size: inherit;
    color: var(--color-input-text);
    background-color: var(--color-input-bg);
    border: none;
  }

  button {
    height: 40px;
    padding: var(--spacing-8);
    font-family: inherit;
    font-weight: 700;
    font-size: inherit;
    background-color: var(--color-primary-gold-light);
    border: none;
    border-left: 1px solid var(--color-input-border);
    cursor: pointer;
  }

  ${screenSize.sm} {
    box-shadow: var(--shadow-lg);
    border-radius: var(--radius-base);
  }

  ${screenSize.md} {
    margin: -110px auto;
  }
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

  img {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -2;
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

      <Byline
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h1>Recepti, savjeti i više</h1>
        <h3>Tekstura je namijenjena za dijeljenje izvrsne hrane sa drugima</h3>
      </Byline>

      <Newsletter
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', bounce: 0 }}
      >
        <img src="/images/avatar.webp" alt="Avatar" />
        <h3>Besplatno primajte obavijesti u sandučić:</h3>
        <form>
          <label aria-hidden="false" htmlFor="email">
            Email
          </label>
          <input type="text" id="email" placeholder="mail@mail.com" />
          <button type="button">Prijava</button>
        </form>
      </Newsletter>

      <Recipe
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <img src="/images/dish.webp" alt="Dish" />
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
