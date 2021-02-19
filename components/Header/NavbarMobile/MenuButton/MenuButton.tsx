import { motion } from 'framer-motion'
import styled from '@emotion/styled'

import { screenSize } from '@/root/styles/mediaQueries'

interface Props {
  height?: number
  width?: number
  isOpen: boolean
  onClick: () => void
}

const Button = styled.button`
  height: 28px;
  width: 28px;
  background: none;
  border: none;
  cursor: pointer;

  svg {
    stroke: var(--color-text);
    transition: stroke 1s;
  }

  ${screenSize.sm} {
    display: none;
  }
`

export function MenuButton({
  isOpen = false,
  height = 20,
  width = 20,
  ...props
}: Props) {
  const variant = isOpen ? 'opened' : 'closed'

  const lines = {
    top: {
      closed: {
        rotate: 0,
        translateY: 0,
      },
      opened: {
        rotate: 45,
        translateY: 2,
      },
    },
    center: {
      closed: {
        rotate: 0,
        opacity: 1,
      },
      opened: {
        rotate: 45,
        opacity: 0,
      },
    },
    bottom: {
      closed: {
        rotate: 0,
        translateY: 0,
      },
      opened: {
        rotate: -45,
        translateY: -2,
      },
    },
  }

  const lineProps = {
    strokeWidth: 2,
    vectorEffect: 'non-scaling-stroke',
    initial: 'closed',
    animate: variant,
  }

  const unitHeight = 4
  const unitWidth = 5

  return (
    <Button>
      <motion.svg
        viewBox={`0 0 ${unitWidth} ${unitHeight}`}
        overflow="visible"
        height={height}
        width={width}
        {...props}
      >
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="0"
          y2="0"
          variants={lines.top}
          {...lineProps}
        />
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="2"
          y2="2"
          variants={lines.center}
          {...lineProps}
        />
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="4"
          y2="4"
          variants={lines.bottom}
          {...lineProps}
        />
      </motion.svg>
    </Button>
  )
}
