import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import about from './documents/about'
import home from './documents/home'
import recipe from './documents/recipe'
import recipeSearch from './documents/recipeSearch'
import settings from './documents/settings'
import recipePage from './documents/recipePage'

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
    home,
    recipePage,
    recipeSearch,
    about,
    settings,
  ]),
})
