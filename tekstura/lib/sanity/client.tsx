import {
  createClient,
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
} from 'next-sanity'

import { RecipeStep } from '@/root/components/shared/RecipeStep'

type Config = {
  apiVersion: string
  dataset: string
  projectId: string
  useCdn: boolean
}

type URL = string

type RecipeStepNode = {
  node: {
    _key: string
    _type: string
    number: number
    step: {
      [key: string]: unknown
    }[]
  }
}

type UsePreview = boolean

// config
const config: Config = {
  apiVersion: 'v1',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? '',
  useCdn: true,
}

// hooks
export const usePreviewSubscription = createPreviewSubscriptionHook(config)

// helpers
export function urlFor(source: URL) {
  return createImageUrlBuilder(config).image(source)
}

// portable text components
export const PortableText = createPortableTextComponent({
  ...config,
  serializers: {
    types: {
      recipeStep: ({ node }: RecipeStepNode) => (
        <RecipeStep stepNumber={node.number} stepText={node.step} />
      ),
    },
  },
})

// client
export const sanityClient = createClient(config)

// preview client
export const previewClient = createClient({
  ...config,
  useCdn: false,
})

// easily switch between normal client, and preview client
export function getClient(usePreview?: UsePreview) {
  return usePreview ? previewClient : sanityClient
}
