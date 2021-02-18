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
    --size-16: 1rem;
    --size-20: 1.25rem;
    --size-24: 1.5rem;
    --size-32: 2rem;
    --size-40: 2.5rem;
    /* line height */
    --text-height: 1.6;
    /* letter spacing */
    --letter-spacing: 2px;
    /* colors */
    --highlight: hsl(44, 90%, 50%);
    --text: hsl(0, 0%, 13%);
    --text-muted: hsl(0, 0%, 28%);
    --text-on-dark-bg: hsl(0, 0%, 100%);
    --primary-bg: hsl(0, 0%, 100%);
    --secondary-bg: hsl(0, 0%, 98%);
    --overlay-bg: hsla(0, 0%, 10%, 60%);
    --input-text: hsl(0, 0%, 52%);
    --input-bg: hsl(0, 0%, 99%);
    --input-border: hsla(0, 0%, 78%, 20%);
    --primary-border: 1px solid hsla(0, 0%, 0%, 10%);
    /* box shadow */
    --shadow-lg: 0px 4px 20px rgba(0, 0, 0, 0.1);
    /* radius */
    --radius-base: 4px;
  }

  [data-theme='dark'] {
    :root {
      --highlight: hsl(44, 90%, 50%);
      --text: hsl(0, 0%, 100%);
      --text-muted: hsl(0, 0%, 100%);
      --primary-bg: hsl(44, 10%, 10%);
      --secondary-bg: hsl(0, 0%, 16%);
      --primary-border: 1px solid hsla(0, 0%, 100%, 10%);
    }
  }

  html {
    scrollbar-color: var(--highlight) transparent;
    scrollbar-width: thin;
  }

  body {
    font-family: 'Merriweather', serif;
    font-size: var(--size-16);
    color: var(--text);
    background-color: var(--primary-bg);
    transition: color 1s, background-color 1s;
  }

  h1,
  h2,
  h3 {
    font-family: 'Playfair Display', serif;
  }

  h2,
  h3 {
    color: var(--text-muted);
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
    margin: var(--spacing-32) 0;
    font-weight: 300;
    line-height: var(--text-height);
  }

  img {
    display: block;
    height: 100%;
    width: 100%;
  }

  ul {
    list-style: none;
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
    box-shadow: 0 0 0 2px var(--highlight);
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: none;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--highlight);
  }
`
