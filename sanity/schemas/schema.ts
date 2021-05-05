import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import about from './documents/about'
import home from './documents/home'
import recipe from './documents/recipe'
import settings from './documents/settings'

import blockContent from './objects/blockContent'
import recipeIngredient from './objects/recipeIngredient'
import recipeStep from './objects/recipeStep'
import recipeStepText from './objects/recipeStepText'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    blockContent,
    recipe,
    recipeIngredient,
    recipeStep,
    recipeStepText,
    about,
    home,
    settings,
  ]),
})
