import { Header } from '@/root/components/Header'
import { SlideEffect } from '@/root/components/shared/SlideEffect'

type LayoutProps = {
  children: React.ReactNode
  layout?: { landingPage: boolean }
}

export function Layout({ children, layout }: LayoutProps) {
  if (layout?.landingPage) {
    return (
      <div className="flex flex-col h-screen">
        <Header />
        {children}
        <SlideEffect />
      </div>
    )
  }

  return (
    <>
      <div className="xl:max-w-7xl xl:mx-auto">
        <Header />
        {children}
        <SlideEffect />
      </div>
    </>
  )
}
