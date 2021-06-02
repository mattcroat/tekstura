import S from '@sanity/desk-tool/structure-builder'
import { FaFileAlt } from 'react-icons/fa'

export default S.listItem()
  .icon(FaFileAlt)
  .title('About')
  .child(
    S.document()
      .title('About Page')
      .id('about')
      .schemaType('about')
      .documentId('about')
  )
