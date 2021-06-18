import S from '@sanity/desk-tool/structure-builder'
import { FiFileText } from 'react-icons/fi'

export default S.listItem()
  .icon(FiFileText)
  .title('Home')
  .child(
    S.document()
      .title('Landing Page')
      .id('home')
      .schemaType('home')
      .documentId('home')
  )
