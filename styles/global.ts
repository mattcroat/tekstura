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
    --size-16: 1rem;
    --size-20: 1.25rem;
    --size-24: 1.5rem;
    --size-32: 2rem;
    --size-40: 2.5rem;
    /* light variants */
    --color-highlight: hsl(43, 89.2%, 63.5%);
    --color-text-dark: hsl(0, 0%, 13%);
    --color-text-dark-muted: hsl(0, 0%, 28%);
    --color-text-light: hsl(0, 0%, 100%);
    --color-bg-light: hsl(0, 0%, 100%);
    --color-bg-gray: hsl(0, 0%, 98%);
    --color-bg-overlay: hsla(0, 0%, 10%, 60%);
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
    font-size: var(--size-16);
    color: var(--color-text-dark);
    background-color: var(--color-bg-light);
  }

  h1,
  h2,
  h3 {
    font-family: 'Playfair Display', serif;
  }

  h2,
  h3 {
    color: var(--color-text-dark-muted);
  }

  h1 {
    font-size: var(--size-32);
  }

  h2 {
    font-size: var(--size-24);
  }

  h3 {
    font-size: var(--size-20);
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
    background-color: var(--color-text-dark);
    transition: width 0.3s;
  }

  a:hover::after {
    width: 100%;
  }
`
