import S from '@sanity/desk-tool/structure-builder'
import * as Structure from 'sanity-plugin-intl-input/lib/structure'
import { FiFileText } from 'react-icons/fi'

export default S.listItem()
  .icon(FiFileText)
  .title('Recepti')
  .child(
    S.document()
      .title('Recepti')
      .id('recipesPage')
      .schemaType('recipesPage')
      .documentId('recipesPage')
      .views(Structure.getDocumentNodeViewsForSchemaType('recipesPage'))
  )
