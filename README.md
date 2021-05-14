# Tekstura

The project uses:

- [Next.js](https://nextjs.org/) (front-end)
- [Sanity Studio](https://www.sanity.io/studio) (front-end for [Sanity](https://www.sanity.io/) CMS)
- [Vercel](https://vercel.com/) for deployment

## Credentials

Rename `.env.example` to `.env`:

```sh
cd tekstura && mv .env.example .env
```

You're going to be presented with:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
```

These can be found in the dashboard of your Sanity project.

## Tekstura (site frontend)

Install dependencies:

```sh
cd tekstura && npm i
```

Start development:

```sh
cd tekstura && npm run dev
```

This runs Tekstura on port [http://localhost:3000/](http://localhost:3000/), and Sanity Studio on port [http://localhost:3333/](http://localhost:3333/).

You can also access Sanity Studio if you visit [http://localhost:3000/studio](http://localhost:3000/studio) in development, and the real site in production.

## Sanity (CMS frontend)

```sh
cd sanity
```

Using `@sanity/cli` we have a lot of options.

To see all available options:

```sh
sanity --help
```

Install dependencies:

```sh
sanity install
```

Update Sanity Studio:

```sh
sanity upgrade
```

Login to Sanity (same as logout):

```sh
sanity login
```

Manage project (opens site where you can find the project ID, and dataset):

```sh
sanity manage
```

## Build

This project gets deployed to [Vercel](https://vercel.com/) whenever you push to GitHub, alongside Sanity Studio — since it's just static assets that get output, and served from Next.js's `public` folder.

Build Tekstura (only for testing production):

```sh
cd tekstura && npm run build
```

Build Sanity Studio (when you make a change to Sanity Studio):

```sh
cd tekstura && npm run build:sanity
```
