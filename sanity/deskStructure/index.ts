import S from '@sanity/desk-tool/structure-builder'

import about from './about'
import home from './home'
import settings from './settings'

import { RecipePreview } from '../components/RecipePreview'
import { hiddenDocumentTypes } from '../utils'

// adds live preview tab to any recipe
export function getDefaultDocumentNode({ schemaType }) {
  if (schemaType === 'recipe') {
    return S.document().views([
      S.view.form(),
      S.view.component(RecipePreview).title('Preview'),
    ])
  }
}

// left sidebar in studio
export default () =>
  S.list()
    .title('Options')
    .items([
      ...S.documentTypeListItems().filter((document: any) =>
        hiddenDocumentTypes(document, { document: true })
      ),
      S.divider(),
      home,
      about,
      S.divider(),
      settings,
    ])
