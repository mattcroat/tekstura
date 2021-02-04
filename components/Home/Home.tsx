import styled from '@emotion/styled'
import Link from 'next/link'

import { screenSize } from '@/root/styles/mediaQueries'

const Layout = styled.div`
  ${screenSize.sm} {
    height: 100vh;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
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

const Header = styled.header`
  height: 100px;
  padding: var(--spacing-24);
  z-index: 2;

  nav {
    display: none;
  }

  ${screenSize.sm} {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: var(--spacing-32) var(--spacing-64) var(--spacing-32)
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

const Main = styled.main`
  /* take heading into consideration */
  height: calc(100vh - 100px);
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

const Byline = styled.div`
  padding: 0 var(--spacing-24);

  h3 {
    margin-top: var(--spacing-8);
  }

  ${screenSize.sm} {
    padding: 0;
    text-align: center;
  }
`

const Newsletter = styled.section`
  min-width: 340px;
  padding: var(--spacing-24);
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
    margin: var(--spacing-8) 0;
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
    margin: 0 auto;
    background-color: var(--color-bg-light);
    box-shadow: var(--shadow-lg);
    border-radius: var(--radius-base);
  }
`

const Recipe = styled.div`
  display: none;
  color: var(--color-text-light);
  text-align: center;

  h2 {
    color: var(--color-highlight);
  }

  h3 {
    display: inline-block;
    margin-top: var(--spacing-8);
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
  color: var(--color-text-light);
  text-align: center;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--color-bg-overlay);
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
    display: none;
    height: 100%;
    padding: 0;
  }
`

const Cover = styled.section`
  position: relative;
  height: 400px;
  display: none;
  gap: var(--spacing-24);
  place-content: center;
  place-items: center;
  padding: 0 var(--spacing-24);
  color: var(--color-text-light);
  text-align: center;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--color-bg-overlay);
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

      <Cover>
        <img src="/images/dish.webp" alt="Dish" />
      </Cover>
    </Layout>
  )
}
