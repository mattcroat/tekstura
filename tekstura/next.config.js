module.exports = {
  i18n: {
    locales: ['hr', 'en'],
    defaultLocale: 'hr',
    localeDetection: false,
  },
  async rewrites() {
    return [
      {
        source: '/studio/:path*',
        destination:
          process.env.NODE_ENV === 'development'
            ? 'http://localhost:3333/studio/:path*'
            : '/studio/index.html',
      },
    ]
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
}
