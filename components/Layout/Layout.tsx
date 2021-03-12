import { Header } from '@/root/components/Header'

type Props = {
  children: React.ReactNode
}

export function Layout({ children }: Props) {
  return (
    <div className="xl:max-w-7xl xl:mx-auto">
      <Header />
      {children}
    </div>
  )
}
