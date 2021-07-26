import { useRouter } from 'next/router'
import { FormEvent, RefObject, useState } from 'react'

export function useNewsletter(inputEl: RefObject<HTMLInputElement>) {
  const { locale } = useRouter()
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  const errorMessage = locale === 'hr' ? 'Probaj opet. 🚫' : 'Try again. 🚫'
  const subscribedMessage = locale === 'hr' ? 'Uspjeh! 🎉' : 'Success! 🎉'

  async function subscribe(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()

    const response = await fetch('/api/newsletter', {
      body: JSON.stringify({
        email: inputEl.current?.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await response.json()

    if (error) {
      setIsError(true)
      return
    }

    if (inputEl.current) {
      inputEl.current.value = ''
      setIsSubscribed(true)
    }
  }

  return {
    errorMessage,
    isError,
    isSubscribed,
    subscribe,
    subscribedMessage,
  }
}
