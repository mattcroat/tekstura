import styled from '@emotion/styled'
import Link from 'next/link'

const Landing = styled.main`
  height: 100vh;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    'top-section'
    'bottom-section';
`

const TopSection = styled.section`
  grid-area: top-section;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: var(--spacing-32) var(--spacing-64);

  ul {
    display: flex;
    gap: var(--spacing-32);
    list-style: none;
    font-weight: 700;
  }
`

const Byline = styled.div`
  margin-top: var(--spacing-64);
  text-align: center;
`

const Newsletter = styled.section`
  position: absolute;
  z-index: 1;
  width: 520px;
  display: grid;
  place-self: center;
  gap: var(--spacing-24);
  padding: var(--spacing-24);
  background-color: var(--color-secondary-bg);
  box-shadow: var(--shadow-lg);
  border-radius: var(--radius-base);
  text-align: center;

  img {
    height: 84px;
    width: 84px;
    object-fit: cover;
    border-radius: 50%;
    margin: 0 auto;
  }

  h2 {
    color: var(--color-gold);
  }

  h3 {
    margin-bottom: var(--spacing-8);
  }

  input {
    padding: var(--spacing-8);
    color: var(--color-input-text);
    background-color: var(--color-input-bg);
    border: 1px solid var(--color-input-border);
    border-radius: var(--radius-base);
  }
`

const BottomSection = styled.section`
  grid-area: bottom-section;
  position: relative;
  height: 100%;
  color: var(--color-text-light);
`

const Recipe = styled.div`
  position: relative;
  height: 100%;
  display: grid;
  gap: var(--spacing-24);
  place-content: center;
  place-items: center;

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
`

export function Home() {
  return (
    <Landing>
      <TopSection>
        <Header>
          <div>
            <h1>Cuisine</h1>
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

        <Byline>
          <div>
            <h1>Welcome to Cuisine!</h1>
            <p>I enjoy sharing how to make great food with others.</p>
          </div>
        </Byline>
      </TopSection>

      <Newsletter>
        <img src="/images/avatar.webp" alt="Avatar" />
        <h2>Like what I do?</h2>
        <form>
          <h3>Subscribe to get updates:</h3>
          <label htmlFor="newsletter">Email: </label>
          <input type="text" id="newsletter" placeholder="mail@mail.com" />
        </form>
      </Newsletter>

      <BottomSection>
        <Recipe>
          <img src="/images/dish.webp" alt="Dish" />
          <h2>You never had eggs like these</h2>
          <h3>
            <Link href="/recipes/name-of-recipe">
              <a>see recipe</a>
            </Link>
          </h3>
        </Recipe>
      </BottomSection>
    </Landing>
  )
}
