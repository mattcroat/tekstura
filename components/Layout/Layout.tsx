import styled from '@emotion/styled'

import { Header } from '@/root/components/Header'
import { screenSize } from '@/root/styles/mediaQueries'

type Props = {
  children: React.ReactNode
}

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  overflow: hidden;

  ${screenSize.sm} {
    grid-template-rows: repeat(2, 1fr);
  }

  ${screenSize.lg} {
    h1 {
      font-size: var(--font-size-40);
    }

    h2 {
      font-size: var(--font-size-32);
    }

    h3 {
      font-size: var(--font-size-24);
    }
  }
`

export function Layout({ children }: Props) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  )
}
