import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import aboutPage from './documents/aboutPage'
import homePage from './documents/homePage'
import recipe from './documents/recipe'
import recipePage from './documents/recipePage'
import recipeSearchPage from './documents/recipeSearchPage'
import settingsPage from './documents/settingsPage'

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
    homePage,
    recipePage,
    recipeSearchPage,
    aboutPage,
    settingsPage,
  ]),
})
