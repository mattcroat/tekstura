import { Header } from '@/root/components/Header'

type Props = {
  children: React.ReactNode
}

export function Layout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
