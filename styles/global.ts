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
    /* font size */
    --text-16: 1rem;
    --text-24: 1.5rem;
    --text-32: 2rem;
    --text-40: 2.5rem;
    /* light variants */
    --color-gold: hsl(43, 37%, 50%);
    --color-text: hsl(0, 0%, 13%);
    --color-text-muted: hsl(0, 0%, 28%);
    --color-text-light: hsl(0, 0%, 100%);
    --color-primary-bg: hsl(0, 0%, 99%);
    --color-secondary-bg: hsl(0, 0%, 100%);
    --color-overlay-bg: hsla(0, 0%, 10%, 60%);
    --color-input-text: hsl(0, 0%, 52%);
    --color-input-bg: hsl(0, 0%, 99%);
    --color-input-border: hsla(0, 0%, 78%, 20%);
    /* box shadow */
    --shadow-lg: 0px 4px 20px rgba(0, 0, 0, 0.1);
    /* radius */
    --radius-base: 4px;
  }

  body {
    font-family: 'Merriweather', serif;
    font-size: var(--text-16);
    color: var(--color-text);
    background-color: var(--color-primary-bg);
  }

  h1,
  h2,
  h3 {
    font-family: 'Playfair Display', serif;
  }

  h1,
  h2 {
    text-transform: capitalize;
  }

  h1 {
    font-size: var(--text-40);
  }

  h2 {
    font-size: var(--text-32);
  }

  h3 {
    font-size: var(--text-24);
  }

  p {
    font-weight: 300;
    line-height: 1.6;
  }

  img {
    display: block;
    height: 100%;
    width: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a::after {
    content: '';
    display: block;
    height: 1px;
    width: 0;
    background-color: var(--color-text);
    transition: width 0.3s;
  }

  a:hover::after {
    width: 100%;
  }
`
