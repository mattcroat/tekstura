import styled from '@emotion/styled'
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

const StyledRecipes = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 64px;
  margin-top: var(--spacing-64);
  padding: 0 var(--spacing-128);
`

const RecipesSearch = styled.section`
  padding: 32px;
  border: 1px solid #292929;
  border-radius: 4px;

  input {
    font-size: 18px;
    margin-top: 8px;
    background: #292929;
    color: snow;
    border: 1px solid #181818;
    box-shadow: 0 4px 4px hsla(0, 0%, 0%, 10%);
    padding: 16px;
    border-radius: 4px;
    width: 100%;
  }
`

const RecipesCards = styled.main`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 8px;
  margin-bottom: var(--spacing-64);
`

const RecipeCard = styled.article`
  height: 280px;
  position: relative;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: var(--color-overlay-bg);
  }
`

const RecipeCardTitle = styled.h3`
  max-width: 340px;
  position: absolute;
  bottom: 16px;
  left: 16px;
`

const RecipeCardImage = styled.img`
  object-fit: cover;
`

export function Recipes() {
  return (
    <StyledRecipes>
      <Header />

      <RecipesSearch>
        <h2>Pretraga</h2>
        {/* <label htmlFor="recipe-search">Search</label> */}
        <input
          type="text"
          id="recipe-search"
          name="recipe-search"
          placeholder="🔎 Pretražite recepte"
        />
      </RecipesSearch>

      <RecipesCards>
        {recipes.map(({ title, src }) => (
          <RecipeCard key={title}>
            <RecipeCardTitle>
              <Link href="#">
                <a>{title}</a>
              </Link>
            </RecipeCardTitle>
            <RecipeCardImage src={src} alt={title} />
          </RecipeCard>
        ))}
      </RecipesCards>
    </StyledRecipes>
  )
}
