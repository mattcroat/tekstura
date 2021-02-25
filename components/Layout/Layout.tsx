import styled from '@emotion/styled'

import { Header } from '@/root/components/Header'
import { screen } from '@/root/styles/media'

type Props = {
  children: React.ReactNode
  page: string
}

const Home = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto 1fr 1fr 50vh;
  grid-column-gap: var(--spacing-32);
  grid-template-areas:
    'header header header'
    '... byline ...'
    'newsletter newsletter newsletter'
    'recipe recipe recipe';

  ${screen.md} {
    padding-top: var(--spacing-64);
    grid-template-rows: auto 1fr 0 50vh;
    grid-column-gap: var(--spacing-64);
    grid-template-areas:
      '... header ...'
      '... byline ...'
      '... newsletter ...'
      'recipe recipe recipe';
  }

  ${screen.lg} {
    grid-column-gap: var(--spacing-128);
  }
`

const Recipe = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: var(--spacing-32);
  grid-template-areas:
    'header header header'
    '... hero ...'
    '... main ...'
    '... ... ...';

  ${screen.md} {
    grid-template-rows: auto auto 400px 1fr auto;
    gap: var(--spacing-64);
    grid-template-areas:
      '... ... ...'
      '... header ...'
      '... hero ...'
      '... main ...'
      '... ... ...';
  }

  ${screen.lg} {
    grid-column-gap: var(--spacing-128);
  }
`

const Recipes = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: var(--spacing-32);
  grid-template-areas:
    'header header header'
    '... search ...'
    '... recipes ...'
    '... ... ...';

  ${screen.md} {
    gap: var(--spacing-64);
    grid-template-areas:
      '... ... ...'
      '... header ...'
      '... search ...'
      '... recipes ...'
      '... ... ...';
  }

  ${screen.lg} {
    grid-column-gap: var(--spacing-128);
  }
`

const About = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: var(--spacing-32);
  grid-template-areas:
    'header header header'
    '... main ...';

  ${screen.md} {
    gap: var(--spacing-64);
    grid-template-areas:
      '... ... ...'
      '... header ...'
      '... main ...';
  }

  ${screen.lg} {
    grid-column-gap: var(--spacing-128);
  }
`

export function Layout({ children, page }: Props) {
  switch (page) {
    case 'home': {
      return (
        <Home>
          <Header />
          {children}
        </Home>
      )
    }
    case 'recipe': {
      return (
        <Recipe>
          <Header />
          {children}
        </Recipe>
      )
    }
    case 'recipes': {
      return (
        <Recipes>
          <Header />
          {children}
        </Recipes>
      )
    }
    case 'about': {
      return (
        <About>
          <Header />
          {children}
        </About>
      )
    }
    default:
      return null
  }
}
