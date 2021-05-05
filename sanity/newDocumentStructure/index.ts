import S from '@sanity/base/structure-builder'

function hiddenDocumentTypes(document: any) {
  return !['about', 'home', 'settings'].includes(document.spec.templateId)
}

export default [
  ...S.defaultInitialValueTemplateItems().filter(hiddenDocumentTypes),
]
