import S from '@sanity/desk-tool/structure-builder'

import { RecipePreview } from '../components/RecipePreview'

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
    .showIcons(false)
    .title('Options')
    .items([
      ...S.documentTypeListItems().filter(
        (listItem: any) => !['siteSettings'].includes(listItem.getId())
      ),
      S.divider(),
      S.listItem()
        .title('Settings')
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings')
        ),
    ])
