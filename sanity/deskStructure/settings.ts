import S from '@sanity/desk-tool/structure-builder'
import { FaWrench } from 'react-icons/fa'

export default S.listItem()
  .icon(FaWrench)
  .title('Settings')
  .child(
    S.document()
      .title('Site Settings')
      .id('settings')
      .schemaType('settings')
      .documentId('settings')
  )
