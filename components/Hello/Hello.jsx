import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const fadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
}

const Container = styled.main`
  height: 100vh;
  display: grid;
  place-content: center;
`

export function Hello() {
  return (
    <Container>
      <motion.h1 initial="hidden" animate="show" variants={fadeIn}>
        Hello, World!
        <span aria-label="A hand waving" role="img">
          &nbsp;👋
        </span>
      </motion.h1>
    </Container>
  )
}
