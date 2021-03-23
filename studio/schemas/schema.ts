import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blockContent from './blockContent'
import recipe from './recipe'
import recipeIngredient from './recipeIngredient'
import recipeStep from './recipeStep'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    blockContent,
    recipe,
    recipeIngredient,
    recipeStep,
  ]),
})
