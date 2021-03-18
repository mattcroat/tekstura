import { Header } from '@/root/components/Header'

type LayoutProps = {
  children: React.ReactNode
  layout?: { landingPage: boolean }
}

export function Layout({ children, layout }: LayoutProps) {
  if (layout?.landingPage) {
    return (
      <div className="h-screen flex flex-col">
        <Header />
        {children}
      </div>
    )
  }

  return (
    <>
      <div className="xl:max-w-7xl xl:mx-auto">
        <Header />
        {children}
      </div>
    </>
  )
}
