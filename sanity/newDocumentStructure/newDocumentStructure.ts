import S from '@sanity/base/structure-builder'

import { hideDocumentTypes } from '../utils/hideDocumentTypes'

export default [
  ...S.defaultInitialValueTemplateItems().filter((document: any) =>
    hideDocumentTypes(document, { newDocument: true })
  ),
]
