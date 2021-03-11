interface Props {
  isOpen: boolean
  toggle: () => void
}

export function MenuButton({ isOpen, toggle }: Props) {
  const btnTextColor = isOpen
    ? 'text-gray-800'
    : 'text-gray-800 dark:text-gray-50'

  return (
    <button className={btnTextColor} onClick={toggle}>
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h8m-8 6h16"
        />
      </svg>
    </button>
  )
}
