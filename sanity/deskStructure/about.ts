import S from '@sanity/desk-tool/structure-builder'
import { FiFileText } from 'react-icons/fi'

export default S.listItem()
  .icon(FiFileText)
  .title('About')
  .child(
    S.document()
      .title('About Page')
      .id('about')
      .schemaType('about')
      .documentId('about')
  )
