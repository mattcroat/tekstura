export function debounce(callback: (...args: any[]) => void, delay: number) {
  let timer: NodeJS.Timeout

  return (...args: any[]) => {
    clearTimeout(timer)
    timer = setTimeout(() => callback(...args), delay)
  }
}
