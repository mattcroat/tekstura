import { motion } from 'framer-motion'
interface Props {
  isOpen: boolean
  toggle: () => void
}

const variants = {
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

export function MenuButton({ isOpen = false, toggle }: Props) {
  const variant = isOpen ? 'opened' : 'closed'
  const lineProps = {
    strokeWidth: 2,
    vectorEffect: 'non-scaling-stroke',
    initial: 'closed',
    animate: variant,
  }
  const unitHeight = 4
  const unitWidth = 5

  return (
    <button onClick={toggle} className="text-gray-800">
      <motion.svg
        className="h-6 w-6"
        viewBox={`0 0 ${unitWidth} ${unitHeight}`}
        overflow="visible"
        stroke="currentColor"
        fill="currentColor"
      >
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="0"
          y2="0"
          variants={variants.top}
          {...lineProps}
        />
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="2"
          y2="2"
          variants={variants.center}
          {...lineProps}
        />
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="4"
          y2="4"
          variants={variants.bottom}
          {...lineProps}
        />
      </motion.svg>
    </button>
  )
}
