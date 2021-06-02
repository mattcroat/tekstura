import S from '@sanity/desk-tool/structure-builder'
import { FaFileAlt } from 'react-icons/fa'

export default S.listItem()
  .icon(FaFileAlt)
  .title('Home')
  .child(
    S.document()
      .title('Landing Page')
      .id('home')
      .schemaType('home')
      .documentId('home')
  )
