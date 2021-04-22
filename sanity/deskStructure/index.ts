import S from '@sanity/desk-tool/structure-builder'

import { RecipePreview } from '../components/RecipePreview'

export function getDefaultDocumentNode({ schemaType }) {
  if (schemaType === 'recipe') {
    return S.document().views([
      S.view.form(),
      S.view.component(RecipePreview).title('Preview'),
    ])
  }
}

export default S.defaults()
