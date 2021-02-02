import styled from '@emotion/styled'
import Link from 'next/link'

const Layout = styled.div`
  @media screen and (min-width: 500px) {
    position: relative;
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'header'
      'main';
  }
`

const Main = styled.main`
  @media screen and (min-width: 500px) {
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

  @media screen and (min-width: 500px) {
    grid-area: header;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin: var(--spacing-32) var(--spacing-64) var(--spacing-32)
      var(--spacing-64);

    nav {
      display: block;
    }

    ul {
      display: flex;
      gap: var(--spacing-32);
      list-style: none;
      font-weight: 700;
    }
  }
`

const Byline = styled.div`
  margin: var(--spacing-64) var(--spacing-24) var(--spacing-24)
    var(--spacing-24);

  @media screen and (min-width: 500px) {
    grid-area: byline;
    margin: var(--spacing-64) 0;
    text-align: center;
  }
`

const Newsletter = styled.section`
  padding: var(--spacing-24);
  margin: var(--spacing-24) 0;
  background-color: var(--color-secondary-bg);
  text-align: center;

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
    border: 1px solid var(--color-input-border);
    border-radius: var(--radius-base);
  }

  input {
    padding: 0 var(--spacing-8);
    font-size: inherit;
    color: var(--color-input-text);
    background-color: var(--color-secondary-bg);
    border: none;
  }

  button {
    padding: var(--spacing-8);
    font-family: inherit;
    font-weight: 700;
    font-size: inherit;
    background-color: var(--color-gold);
    border: none;
    border-left: 1px solid var(--color-input-border);
  }

  @media screen and (min-width: 500px) {
    z-index: 1;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    margin: 0;
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
    background-color: var(--color-overlay-bg);
  }

  img {
    z-index: -2;
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  h2 {
    color: var(--color-gold);
  }

  h3 {
    color: var(--color-bg-secondary);
    text-transform: lowercase;
  }

  a::after {
    content: '';
    display: block;
    height: 1px;
    width: 100%;
    background-color: var(--color-secondary-bg);
    transition: width 0.3s;
  }

  a:hover::after {
    width: 0;
  }

  @media screen and (min-width: 500px) {
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
          <h1>
            <Link href="/">
              <a>Cuisine</a>
            </Link>
          </h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/recipes">
                <a>Recipes</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </Header>

      <Main>
        <Byline>
          <h1>Welcome to Cuisine!</h1>
          <h3>I enjoy sharing how to make great food with others.</h3>
        </Byline>

        <Newsletter>
          <img src="/images/avatar.webp" alt="Avatar" />
          <h3>Get updates in your inbox</h3>
          <form>
            <fieldset>
              <input type="text" placeholder="mail@mail.com" />
              <button type="button">Subscribe</button>
            </fieldset>
          </form>
        </Newsletter>

        <Recipe>
          <img src="/images/dish.webp" alt="Dish" />
          <h2>You never had eggs like these</h2>
          <h3>
            <Link href="/recipes/name-of-recipe">
              <a>see recipe</a>
            </Link>
          </h3>
        </Recipe>
      </Main>
    </Layout>
  )
}
