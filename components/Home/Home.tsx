import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { Layout } from '@/root/components/Layout'
import { screenSize } from '@/root/styles/mediaQueries'

const Main = styled.main`
  display: grid;
  grid-template-rows: auto 1fr 1fr;
  gap: var(--spacing-24);
  z-index: 1;

  ${screenSize.sm} {
    height: 100%;
    width: 100%;
    position: absolute;
    grid-template-rows: none;
    gap: var(--spacing-32);
    justify-content: center;
    align-content: center;
  }

  ${screenSize.lg} {
    gap: var(--spacing-64);
  }
`

const Byline = styled(motion.div)`
  padding: 0 var(--spacing-24);

  h3 {
    margin-top: var(--spacing-8);
  }

  ${screenSize.sm} {
    padding: 0;
    text-align: center;
  }
`

const Newsletter = styled(motion.section)`
  min-width: 340px;
  display: grid;
  justify-items: center;
  align-content: center;
  padding: var(--spacing-24);
  text-align: center;
  background-color: var(--color-secondary-bg);
  transition: color 1s, background-color 1s;

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
    max-width: 400px;
    margin: 0 auto;
    box-shadow: var(--shadow-lg);
    border-radius: var(--radius-base);
  }
`

const Recipe = styled(motion.div)`
  display: none;
  color: var(--color-primary-bg);
  text-align: center;

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

  ${screenSize.sm} {
    display: block;
  }
`

const RecipeHidden = styled.div`
  position: relative;
  display: grid;
  gap: var(--spacing-24);
  place-content: center;
  place-items: center;
  padding: 0 var(--spacing-24);
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

  ${screenSize.sm} {
    display: none;
    height: 100%;
    padding: 0;
  }
`

const Cover = styled(motion.section)`
  position: relative;
  height: 400px;
  display: none;
  gap: var(--spacing-24);
  place-content: center;
  place-items: center;
  padding: 0 var(--spacing-24);
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

  ${screenSize.sm} {
    height: 100%;
    display: grid;
    padding: 0;
  }
`

export function Home() {
  return (
    <Layout>
      <Main>
        <Byline
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h1>Recepti, savjeti i više</h1>
          <h3>
            Tekstura je namijenjena za dijeljenje izvrsne hrane sa drugima
          </h3>
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
          <h2>Svako Jutro Jedno Jaje Organizmu Snagu Daje</h2>
          <h3>
            <Link href="/recipes/name-of-recipe">
              <a>recept</a>
            </Link>
          </h3>
        </Recipe>

        <RecipeHidden>
          <img src="/images/dish.webp" alt="Dish" />
          <h2>Svako Jutro Jedno Jaje Organizmu Snagu Daje</h2>
          <h3>
            <Link href="/recipes/name-of-recipe">
              <a>recept</a>
            </Link>
          </h3>
        </RecipeHidden>
      </Main>

      <Cover
        initial={{ y: '100vh' }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', bounce: 0 }}
      >
        <img src="/images/dish.webp" alt="Dish" />
      </Cover>
    </Layout>
  )
}
