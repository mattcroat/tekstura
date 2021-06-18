import { FiEdit, FiLayers } from 'react-icons/fi'

import * as Structure from 'sanity-plugin-intl-input/lib/structure'
import S from '@sanity/desk-tool/structure-builder'

import about from './about'
import home from './home'
import recipeSearch from './recipeSearch'
import settings from './settings'

import { RecipePreview } from '../components/RecipePreview'
import { i18n } from '../schemas/translation/documentTranslation'

export function getDefaultDocumentNode({ schemaType }) {
  // returns the form and translations view
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
      // recipes category
      S.listItem()
        .title('Recipes')
        .icon(FiEdit)
        .schemaType('recipe')
        .child(
          S.documentList()
            .title('Posts')
            .filter(
              // get all recipe documents for the base language
              '_type == "recipe" && (!defined(_lang) || _lang == $baseLang)'
            )
            .params({ baseLang: i18n.base })
            .canHandleIntent((_name: any, params: any, _context: any) => {
              // can handle all actions for recipe documents
              return params.type === 'recipe'
            })
        ),
      // pages category
      S.listItem()
        .icon(FiLayers)
        .title('Pages')
        .child(S.list().title('Pages').items([home, recipeSearch, about])),
      S.divider(),
      // settings category
      settings,
    ])
