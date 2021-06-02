import S from '@sanity/base/structure-builder'

import { hiddenDocumentTypes } from '../utils'

export default [
  ...S.defaultInitialValueTemplateItems().filter((document: any) =>
    hiddenDocumentTypes(document, { newDocument: true })
  ),
]
