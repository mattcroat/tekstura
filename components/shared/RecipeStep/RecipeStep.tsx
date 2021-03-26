import { PortableText } from '@/root/lib/sanity/client'

type RecipeStepProps = {
  stepNumber: number
  stepText: unknown
}

export function RecipeStep({ stepNumber, stepText }: RecipeStepProps) {
  return (
    <div className="p-8 border border-gray-800 dark:border-gray-50 border-opacity-10 dark:border-opacity-10 md:p-0 md:border-0 md:flex md:items-center md:gap-x-8">
      <div className="h-16 w-16 flex flex-shrink-0 justify-center items-center mx-auto text-gray-800 bg-yellow-400 rounded-full">
        <span className="text-3xl font-bold">{stepNumber}</span>
      </div>
      <div className="mt-8 space-y-8 md:mt-0">
        <PortableText blocks={stepText} />
      </div>
    </div>
  )
}
