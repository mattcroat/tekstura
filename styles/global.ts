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
    --spacing-16: 1rem;
    --spacing-32: 2rem;
    --spacing-64: 4rem;
    /* font size */
    --text-18: 1.125rem;
    --text-24: 1.5rem;
    --text-32: 2rem;
    --text-40: 2.5rem;
  }

  body {
    font-family: 'Inter', sans-serif;
    color: hsl(0, 0%, 98%);
    background-color: hsl(200, 10%, 10%);
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
    font-size: var(--text-18);
    line-height: 1.6;
  }

  img {
    display: block;
    height: 100%;
    width: 100%;
  }
`
