import { debounce } from '@/root/utils/general'

import type { TranslatedRecipesText } from '@/root/types/recipe'

type SearchProps = {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
  translatedText: TranslatedRecipesText
}

export function Search({ setSearchQuery, translatedText }: SearchProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.persist()
    setSearchQuery(event.target.value)
  }

  return (
    <div className="relative mt-4">
      <label className="sr-only" aria-hidden="false" htmlFor="recipe-search">
        Search
      </label>
      <svg
        height="24"
        width="24"
        className="absolute w-6 h-6 mx-2 text-gray-300 top-2 left-1"
        aria-hidden="true"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M508.875 493.792L353.089 338.005c32.358-35.927 52.245-83.296 52.245-135.339C405.333 90.917 314.417 0 202.667 0S0 90.917 0 202.667s90.917 202.667 202.667 202.667c52.043 0 99.411-19.887 135.339-52.245l155.786 155.786a10.634 10.634 0 007.542 3.125c2.729 0 5.458-1.042 7.542-3.125 4.166-4.167 4.166-10.917-.001-15.083zM202.667 384c-99.979 0-181.333-81.344-181.333-181.333S102.688 21.333 202.667 21.333 384 102.677 384 202.667 302.646 384 202.667 384z"
        />
      </svg>
      <input
        onChange={debounce(handleChange, 1000)}
        className="w-full py-2 pl-12 transition bg-white border border-gray-200 shadow-sm lg:w-search"
        type="text"
        id="recipe-search"
        name="recipe-search"
        placeholder={translatedText.placeholder}
      />
    </div>
  )
}
