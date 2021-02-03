import styled from '@emotion/styled'
import Link from 'next/link'

import { screenSize } from '@/root/styles/mediaQueries'

const Layout = styled.div`
  ${screenSize.sm} {
    position: relative;
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'header'
      'main';
  }

  ${screenSize.lg} {
    h1 {
      font-size: var(--size-40);
    }

    h2 {
      font-size: var(--size-32);
    }

    h3 {
      font-size: var(--size-24);
    }
  }
`

const Main = styled.main`
  ${screenSize.sm} {
    display: grid;
    grid-template-rows: 1fr 50vh;
    grid-template-areas:
      'byline'
      'recipe';
  }
`

const Header = styled.header`
  margin: var(--spacing-24);

  nav {
    display: none;
  }

  ${screenSize.sm} {
    grid-area: header;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin: var(--spacing-32) var(--spacing-64) var(--spacing-32)
      var(--spacing-64);

    ul {
      display: flex;
      gap: var(--spacing-32);
      list-style: none;
      font-weight: 700;
    }
  }

  ${screenSize.md} {
    nav {
      display: block;
    }
  }
`

const Byline = styled.div`
  margin: var(--spacing-64) var(--spacing-24);

  h3 {
    margin-top: var(--spacing-8);
  }

  ${screenSize.sm} {
    grid-area: byline;
    margin: var(--spacing-24) 0 0 0;
    text-align: center;
  }
`

const Newsletter = styled.section`
  min-width: 340px;
  padding: var(--spacing-24);
  margin: var(--spacing-64) 0;
  text-align: center;
  background-color: var(--color-bg-gray);

  img {
    height: 84px;
    width: 84px;
    object-fit: cover;
    border-radius: 50%;
    margin: 0 auto;
  }

  h3 {
    margin: var(--spacing-16) 0;
  }

  fieldset {
    display: inline-block;
    margin-top: var(--spacing-8);
    background-color: var(--color-input-bg);
    border: 1px solid var(--color-input-border);
    border-radius: var(--radius-base);
  }

  input {
    width: 200px;
    padding: 0 var(--spacing-8);
    font-size: inherit;
    color: var(--color-input-text);
    background-color: var(--color-input-bg);
    border: none;
  }

  button {
    padding: var(--spacing-8);
    font-family: inherit;
    font-weight: 700;
    font-size: inherit;
    background-color: var(--color-highlight);
    border: none;
    border-left: 1px solid var(--color-input-border);
  }

  ${screenSize.sm} {
    max-width: 400px;

    z-index: 1;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    margin: 0;
    background-color: var(--color-bg-light);
    box-shadow: var(--shadow-lg);
    border-radius: var(--radius-base);
  }
`

const Recipe = styled.div`
  position: relative;
  height: 400px;
  display: grid;
  gap: var(--spacing-24);
  place-content: center;
  place-items: center;
  padding: 0 var(--spacing-24);
  color: var(--color-text-light);
  text-align: center;

  &::before {
    content: '';
    display: block;
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--color-bg-overlay);
  }

  img {
    z-index: -2;
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  h2 {
    color: var(--color-highlight);
  }

  h3 {
    color: var(--color-bg-secondary);
  }

  a::after {
    content: '';
    display: block;
    height: 1px;
    width: 100%;
    background-color: var(--color-bg-light);
    transition: width 0.3s;
  }

  a:hover::after {
    width: 0;
  }

  ${screenSize.sm} {
    grid-area: recipe;
    height: 100%;
    padding: 0;
  }
`

export function Home() {
  return (
    <Layout>
      <Header>
        <div>
          <h1>Kužina</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Početna</a>
              </Link>
            </li>
            <li>
              <Link href="/recipes">
                <a>Recepti</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>Što je Kužina?</a>
              </Link>
            </li>
          </ul>
        </nav>
      </Header>

      <Main>
        <Byline>
          <h1>Zdravo!</h1>
          <h3>Zovem se Šargarepa i volim dijeliti izvrsnu hranu sa drugima.</h3>
        </Byline>

        <Newsletter>
          <img src="/images/avatar.webp" alt="Avatar" />
          <h3>Besplatno primajte obavijesti u sandučić:</h3>
          <form>
            <fieldset>
              <input type="text" placeholder="mail@mail.com" />
              <button type="button">Prijava</button>
            </fieldset>
          </form>
        </Newsletter>

        <Recipe>
          <img src="/images/dish.webp" alt="Dish" />
          <h2>Svako Jutro Jedno Jaje Organizmu Snagu Daje</h2>
          <h3>
            <Link href="/recipes/name-of-recipe">
              <a>recept</a>
            </Link>
          </h3>
        </Recipe>
      </Main>
    </Layout>
  )
}
