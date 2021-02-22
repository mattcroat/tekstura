import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { Header } from '@/root/components/Header'
import { screenSize } from '@/root/styles/mediaQueries'

const recipes = [
  {
    title: 'Svako Jutro Jedno Jaje Organizmu Snagu Daje',
    src: '/images/dish.webp',
  },
  {
    title: 'Osveta je Najbolje Servirana Hladna',
    src: '/images/dish.webp',
  },
  {
    title: 'Jelo Utopljeno u Umaku, ti si Idući',
    src: '/images/dish.webp',
  },
  {
    title: 'Svako Jutro Jedno Jaje Organizmu Snagu Daje',
    src: '/images/dish.webp',
  },
  {
    title: 'Osveta je Najbolje Servirana Hladna',
    src: '/images/dish.webp',
  },
  {
    title: 'Jelo Utopljeno u Umaku, ti si Idući',
    src: '/images/dish.webp',
  },
]

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },
}

const cardsFadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.4,
      staggerChildren: 0.3,
    },
  },
}

const cardFadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

const StyledRecipes = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: var(--spacing-32);
  padding-top: var(--spacing-32);
  padding: 0 var(--spacing-32);

  ${screenSize.md} {
    gap: var(--spacing-64);
    margin-top: var(--spacing-64);
    padding: 0 var(--spacing-64);
  }

  ${screenSize.lg} {
    padding: 0 var(--spacing-128);
  }
`

const SearchBar = styled.div`
  position: relative;
  margin-top: var(--spacing-32);
`

const SearchLabel = styled.label`
  display: none;
`

const SearchIcon = styled.svg`
  position: absolute;
  top: var(--spacing-24);
  left: var(--spacing-24);
  color: var(--color-input-text);
`

const SearchInput = styled.input`
  width: 100%;
  margin-top: var(--spacing-8);
  padding: var(--spacing-16);
  padding-left: var(--spacing-64);
  font-family: inherit;
  font-size: 18px;
  color: var(--color-input-text);
  background-color: var(--color-input-bg);
  border: 1px solid var(--color-input-border);
  border-radius: var(--radius-base);
  transition: width 0.3s;

  &:hover {
    width: 100%;
  }

  ${screenSize.md} {
    width: 300px;
  }
`

const RecipesCards = styled(motion.main)`
  display: grid;
  gap: var(--spacing-16);
  margin-bottom: var(--spacing-64);

  ${screenSize.md} {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
`

const RecipeCard = styled(motion.article)`
  height: 280px;
  position: relative;
  transition: scale 0.3s;

  &:hover {
    scale: 1.04;
    z-index: 1;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 1;
    background: var(--color-overlay-bg);
    transition: opacity 0.3s;
  }

  &:hover::before {
    opacity: 0;
  }
`

const RecipeCardTitle = styled.h3`
  max-width: 340px;
  position: absolute;
  bottom: var(--spacing-16);
  left: var(--spacing-16);
  color: var(--color-text-on-dark-bg);
  text-transform: capitalize;
`

const RecipeCardImage = styled.img`
  object-fit: cover;
`

export function Recipes() {
  return (
    <StyledRecipes>
      <Header />

      <motion.div variants={fadeIn} initial="hidden" animate="show">
        <h2>Recepti</h2>

        <SearchBar>
          <SearchLabel aria-hidden="false" htmlFor="recipe-search">
            Search
          </SearchLabel>
          <SearchIcon
            height="24"
            width="24"
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M508.875 493.792L353.089 338.005c32.358-35.927 52.245-83.296 52.245-135.339C405.333 90.917 314.417 0 202.667 0S0 90.917 0 202.667s90.917 202.667 202.667 202.667c52.043 0 99.411-19.887 135.339-52.245l155.786 155.786a10.634 10.634 0 007.542 3.125c2.729 0 5.458-1.042 7.542-3.125 4.166-4.167 4.166-10.917-.001-15.083zM202.667 384c-99.979 0-181.333-81.344-181.333-181.333S102.688 21.333 202.667 21.333 384 102.677 384 202.667 302.646 384 202.667 384z"
            />
          </SearchIcon>
          <SearchInput
            type="text"
            id="recipe-search"
            name="recipe-search"
            placeholder="Pretražite recepte"
          />
        </SearchBar>
      </motion.div>

      <RecipesCards variants={cardsFadeIn} initial="hidden" animate="show">
        {recipes.map(({ title, src }) => (
          <Link key={title} href="#">
            <a>
              <RecipeCard variants={cardFadeIn}>
                <RecipeCardTitle>{title}</RecipeCardTitle>
                <RecipeCardImage src={src} alt={title} />
              </RecipeCard>
            </a>
          </Link>
        ))}
      </RecipesCards>
    </StyledRecipes>
  )
}
