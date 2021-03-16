type Props = {
  children: React.ReactNode
}

export function Layout({ children }: Props) {
  return <div className="xl:max-w-7xl xl:mx-auto">{children}</div>
}
