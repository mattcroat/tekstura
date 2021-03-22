import {
  createClient,
  createImageUrlBuilder,
  createPreviewSubscriptionHook,
} from 'next-sanity'

type Config = { dataset: string; projectId: string; useCdn: boolean }
type URL = string

// config
const config: Config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? '',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '',
  useCdn: true,
}

// hooks
export const usePreviewSubscription = createPreviewSubscriptionHook(config)

// helpers
export function urlFor(source: URL) {
  return createImageUrlBuilder(config).image(source)
}

// portable text components

// client
export const sanityClient = createClient(config)
