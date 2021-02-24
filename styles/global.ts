import { css } from '@emotion/react'

export const globalStyles = css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    /* spacing */
    --spacing-8: 0.5rem;
    --spacing-16: 1rem;
    --spacing-24: 1.5rem;
    --spacing-32: 2rem;
    --spacing-64: 4rem;
    --spacing-128: 8rem;
    /* font size */
    --font-size-16: 1rem;
    --font-size-20: 1.25rem;
    --font-size-24: 1.5rem;
    --font-size-32: 2rem;
    --font-size-40: 2.5rem;
    /* line height */
    --line-height-text: 1.6;
    /* letter spacing */
    --letter-spacing: 2px;
    /* colors */
    --color-primary-gold: hsl(42, 54%, 46%);
    --color-primary-gold-light: hsl(44, 90%, 50%);
    --color-text: hsl(0, 0%, 13%);
    --color-text-muted: hsl(0, 0%, 28%);
    --color-text-on-dark-bg: hsl(0, 0%, 100%);
    --color-primary-bg: hsl(0, 0%, 98%);
    --color-secondary-bg: hsl(0, 0%, 98%);
    --color-overlay-bg: linear-gradient(transparent, hsla(0, 0%, 0%, 90%));
    --color-input-text: hsl(0, 0%, 52%);
    --color-input-bg: hsl(0, 0%, 99%);
    --color-input-border: hsla(0, 0%, 78%, 20%);
    --color-primary-border: 1px solid hsla(0, 0%, 0%, 10%);
    /* box shadow */
    --shadow-sm: 0 0 4px hsl(0, 0%, 0%, 10%);
    --shadow-lg: 0 4px 20px hsla(0, 0%, 0%, 10%);
    /* radius */
    --radius-base: 4px;
  }

  [data-theme='dark'] {
    :root {
      --color-primary-gold: hsl(44, 90%, 50%);
      --color-text: hsl(0, 0%, 100%);
      --color-text-muted: hsl(0, 0%, 100%);
      --color-primary-bg: hsl(44, 10%, 10%);
      --color-secondary-bg: hsl(0, 0%, 16%);
      --color-input-bg: hsl(0, 0%, 20%);
      --color-primary-border: 1px solid hsla(0, 0%, 100%, 10%);
    }
  }

  html {
    scrollbar-color: var(--color-primary-gold) transparent;
    scrollbar-width: thin;
  }

  body {
    font-family: 'Merriweather', serif;
    font-size: var(--font-size-16);
    color: var(--color-text);
    background-color: var(--color-primary-bg);
    transition: color 1s, background-color 1s;
  }

  h1,
  h2,
  h3 {
    font-family: 'Playfair Display', serif;
  }

  h2,
  h3 {
    color: var(--color-text-muted);
  }

  h1 {
    font-size: var(--font-size-32);
  }

  h2 {
    font-size: var(--font-size-24);
  }

  h3 {
    font-size: var(--font-size-20);
  }

  p {
    margin: var(--spacing-32) 0;
    font-weight: 300;
    line-height: var(--line-height-text);
  }

  img {
    display: block;
    height: 100%;
    width: 100%;
  }

  ul {
    list-style: circle;
    list-style-position: inside;
  }

  a {
    position: relative;
    color: inherit;
    text-decoration: none;
  }

  a,
  input,
  button {
    transition: box-shadow 0.3s;
  }

  *:focus {
    outline: none;
    border-radius: 4px;
    box-shadow: 0 0 0 2px var(--color-primary-gold);
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: none;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-primary-gold);
  }
`
