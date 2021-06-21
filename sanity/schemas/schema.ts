import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import aboutPage from './documents/pages/aboutPage'
import homePage from './documents/pages/homePage'
import recipePage from './documents/pages/recipePage'
import recipeSearchPage from './documents/pages/recipesPage'

import navigation from './documents/navigation'
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
    navigation,
    homePage,
    recipePage,
    recipeSearchPage,
    aboutPage,
    settings,
  ]),
})
