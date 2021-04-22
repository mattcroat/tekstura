import * as React from 'react'

export function RecipePreview({ document: { displayed } }: any) {
  if (!displayed?.slug?.current) {
    return <h1>The post needs a slug before it can be previewed.</h1>
  }

  const baseURL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://tekstura.vercel.app'
  const previewURL = `${baseURL}/recepti/${displayed?.slug?.current}?preview`

  return (
    <iframe
      style={{
        border: 0,
        height: '100%',
        left: 0,
        position: 'absolute',
        top: 0,
        width: '100%',
      }}
      src={previewURL}
      frameBorder="0"
    />
  )
}
