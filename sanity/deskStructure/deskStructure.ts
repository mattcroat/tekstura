import { FaFileAlt } from 'react-icons/fa'
import * as Structure from 'sanity-plugin-intl-input/lib/structure'
import S from '@sanity/desk-tool/structure-builder'

import about from './about'
import home from './home'
import settings from './settings'

import { RecipePreview } from '../components/RecipePreview'
import { hiddenDocumentTypes } from '../utils'

export function getDefaultDocumentNode({ schemaType }) {
  const [, translations] = Structure.getDocumentNodeViewsForSchemaType(
    schemaType
  )

  if (schemaType === 'recipe') {
    return S.document().views([
      // default form for editing a document
      S.view.form(),
      // preview
      S.view.component(RecipePreview).title('Preview'),
      // translations
      translations,
    ])
  }

  return S.document()
}

export default () =>
  S.list()
    // left side pane
    .title('Options')
    .items([
      ...S.documentTypeListItems().filter((document: any) =>
        hiddenDocumentTypes(document, { document: true })
      ),
      // pages category
      S.listItem()
        .icon(FaFileAlt)
        .title('Pages')
        .child(S.list().title('Pages').items([home, about])),
      S.divider(),
      // settings category
      settings,
    ])
