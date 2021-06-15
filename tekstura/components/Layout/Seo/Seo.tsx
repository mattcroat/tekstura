import Head from 'next/head'
import { useRouter } from 'next/router'

interface SeoProps {
  [key: string]: any
}

export function Seo({ ...metadata }: SeoProps) {
  const { asPath, locale } = useRouter()

  const meta = {
    title: 'Tekstura',
    description: `Tekstura je namijenjena za dijeljenje izvrsne hrane sa drugima`,
    image: 'https://tekstura.vercel.app/images/og-image.webp',
    type: 'website',
    ...metadata,
  }

  return (
    <Head>
      <title>{meta.title}</title>
      <link
        rel="alternate"
        hrefLang="hr"
        href={`https://tekstura.vercel.app/${locale}${asPath}`}
      />
      <link
        rel="alternate"
        hrefLang="en"
        href={`https://tekstura.vercel.app/${locale}${asPath}`}
      />
      <meta name="robots" content="index, follow" />
      <meta name="description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:image" content={meta.image} />
      <meta
        property="og:url"
        content={`https://tekstura.vercel.app${asPath}`}
      />
      <meta property="og:description" content={meta.description} />
      <meta property="og:site_name" content="Tekstura" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
    </Head>
  )
}
