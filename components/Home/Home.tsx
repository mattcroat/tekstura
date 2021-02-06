import React from 'react'
import styled from '@emotion/styled'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

import { screenSize } from '@/root/styles/mediaQueries'

type HeaderMobile = {
  isMenuOpen: boolean
}

const menu = {
  hidden: { opacity: 0, height: 0 },
  show: {
    opacity: 1,
    height: 'auto',
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const menuItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

const Layout = styled.div`
  overflow: hidden;

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

const Header = styled(motion.header)`
  display: none;
  z-index: 2;

  ${screenSize.sm} {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: var(--spacing-32) var(--spacing-64) var(--spacing-32)
      var(--spacing-64);

    ul {
      display: flex;
      gap: var(--spacing-32);
      font-weight: 700;
    }
  }
`

const ToggleMenuIcon = styled.button`
  height: 28px;
  width: 28px;
  background: none;
  border: none;
  cursor: pointer;

  ${screenSize.sm} {
    display: none;
  }
`

const HeaderMobile = styled(motion.header)<HeaderMobile>`
  margin-bottom: var(--spacing-32);
  padding: var(--spacing-24) var(--spacing-24) 0 var(--spacing-24);
  background-color: ${({ isMenuOpen }) =>
    isMenuOpen && 'var(--color-highlight)'};
  transition: background-color 0.3s;
  z-index: 2;

  ${screenSize.sm} {
    display: none;
  }
`

const Menu = styled(motion.nav)`
  padding: 24px 0;
  font-weight: 700;

  ul {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-8);
  }

  a {
    display: inline-block;
  }
`

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
    height: 40px;
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
    background-color: var(--color-highlight);
    border: none;
    border-left: 1px solid var(--color-input-border);
    cursor: pointer;
  }

  ${screenSize.sm} {
    max-width: 400px;
    margin: 0 auto;
    background-color: var(--color-bg-light);
    box-shadow: var(--shadow-lg);
    border-radius: var(--radius-base);
  }
`

const Recipe = styled(motion.div)`
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

const Cover = styled(motion.section)`
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

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

export function Home() {
  const [isOpen, setIsOpen] = React.useState(false)
  const opened = isOpen ? 'opened' : ''

  return (
    <Layout>
      <Header initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1>Kužina</h1>
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

      <HeaderMobile
        isMenuOpen={isOpen}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Flex>
          <h1>Kužina</h1>
          <ToggleMenuIcon onClick={() => setIsOpen(!isOpen)}>
            <svg
              aria-hidden="true"
              focusable="false"
              role="img"
              viewBox="0 0 80 80"
              className={opened}
            >
              <path
                className="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path className="line line2" d="M 20,50 H 80" />
              <path
                className="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </ToggleMenuIcon>
        </Flex>

        <AnimatePresence>
          {isOpen && (
            <Menu
              initial="hidden"
              animate="show"
              variants={menu}
              exit={{ opacity: 0 }}
            >
              <ul>
                <motion.li variants={menuItem}>
                  <Link href="/">
                    <a>Početna</a>
                  </Link>
                </motion.li>
                <motion.li variants={menuItem}>
                  <Link href="/recipes">
                    <a>Recepti</a>
                  </Link>
                </motion.li>
                <motion.li variants={menuItem}>
                  <Link href="/about">
                    <a>Što je Kužina?</a>
                  </Link>
                </motion.li>
              </ul>
            </Menu>
          )}
        </AnimatePresence>
      </HeaderMobile>

      <Main>
        <Byline
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h1>Zdravo!</h1>
          <h3>Zovem se Šargarepa i volim dijeliti izvrsnu hranu sa drugima.</h3>
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
