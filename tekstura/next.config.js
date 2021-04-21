module.exports = {
  async rewrites() {
    return [
      {
        source: '/studio/:path*',
        destination:
          process.env.NODE_ENV === 'development'
            ? 'http://localhost:3333/studio/:path*'
            : 'https://tekstura.sanity.studio',
      },
    ]
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
}
