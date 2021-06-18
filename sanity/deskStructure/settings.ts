import S from '@sanity/desk-tool/structure-builder'
import { FiSettings } from 'react-icons/fi'

export default S.listItem()
  .icon(FiSettings)
  .title('Settings')
  .child(
    S.document()
      .title('Site Settings')
      .id('settings')
      .schemaType('settings')
      .documentId('settings')
  )
