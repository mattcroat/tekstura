const documentTypes = [
  'navigation',
  'homePage',
  'recipePage',
  'recipesPage',
  'aboutPage',
  'seo',
]

type Document = any

type DocumentType = {
  document?: boolean
  newDocument?: boolean
}

export function hideDocumentTypes(
  document: Document,
  documentType: DocumentType
) {
  if (!documentType) return []

  if (documentType.document) {
    return !documentTypes.includes(document.getId())
  }

  if (documentType.newDocument) {
    return !documentTypes.includes(document.spec.templateId)
  }
}
