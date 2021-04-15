interface MenuButtonProps {
  isOpen: boolean
  toggle: () => void
}

export function MenuButton({ isOpen, toggle }: MenuButtonProps) {
  const btnTextColor = !isOpen
    ? 'dark:text-gray-50'
    : 'focus:outline-none focus:ring-2 focus:ring-black'

  return (
    <button className={btnTextColor} onClick={toggle}>
      <svg
        height="24"
        width="24"
        className="w-6 h-6"
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
