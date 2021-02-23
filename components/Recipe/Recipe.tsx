import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { Header } from '@/root/components/Header'
import { screenSize } from '@/root/styles/mediaQueries'

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },
}

const ingredients = [
  {
    amount: '278',
    ingredient: 'bijela riža',
    unit: 'g',
  },
  {
    amount: '1',
    ingredient: 'rižin vinski ocat',
    unit: 'žlica',
  },
  {
    amount: '2',
    ingredient: 'ulje sezama',
    unit: 'žlica',
  },
  {
    amount: '1',
    ingredient: 'brašno',
    unit: 'kg',
  },
  {
    amount: '1',
    ingredient: 'čili umak',
    unit: 'žlićica',
  },
  {
    amount: '4',
    ingredient: 'Japanska majoneza',
    unit: 'žlićica',
  },
  {
    amount: '1/2',
    ingredient: 'krastavac',
    unit: '',
  },
  {
    amount: '',
    ingredient: 'morska sol',
    unit: '',
  },
  {
    amount: '',
    ingredient: 'crni papar',
    unit: '',
  },
  {
    amount: '278',
    ingredient: 'bijela riža',
    unit: 'g',
  },
  {
    amount: '1',
    ingredient: 'rižin vinski ocat',
    unit: 'žlica',
  },
  {
    amount: '2',
    ingredient: 'ulje sezama',
    unit: 'žlica',
  },
  {
    amount: '1',
    ingredient: 'brašno',
    unit: 'kg',
  },
  {
    amount: '1',
    ingredient: 'čili umak',
    unit: 'žlićica',
  },
  {
    amount: '4',
    ingredient: 'Japanska majoneza',
    unit: 'žlićica',
  },
  {
    amount: '1/2',
    ingredient: 'krastavac',
    unit: '',
  },
  {
    amount: '',
    ingredient: 'morska sol',
    unit: '',
  },
  {
    amount: '',
    ingredient: 'crni papar',
    unit: '',
  },
]

const StyledRecipe = styled.div`
  padding: 0 var(--spacing-32);

  ${screenSize.md} {
    display: grid;
    grid-template-rows: auto 400px 1fr;
    gap: var(--spacing-64);
    max-width: 1600px;
    padding: 0 var(--spacing-64);
    padding-top: var(--spacing-64);
  }

  ${screenSize.lg} {
    padding: 0 var(--spacing-128);
    padding-top: var(--spacing-64);
  }
`

const RecipeImage = styled.img`
  height: 200px;
  margin: 64px 0;
  object-fit: cover;

  ${screenSize.md} {
    height: 100%;
    margin: 0;
  }
`

const Main = styled(motion.main)`
  margin-bottom: var(--spacing-64);

  h1,
  h2 {
    color: var(--color-primary-gold);
  }

  h1::after {
    content: '';
    display: block;
    height: 4px;
    max-width: 68px;
    margin: var(--spacing-16) 0;
    background-color: var(--color-primary-gold);
  }

  ${screenSize.md} {
    display: grid;
    grid-template-columns: 30% 1px 1fr;
    gap: var(--spacing-64);
  }
`

const ContentSeparator = styled.div`
  ${screenSize.md} {
    border-left: var(--color-primary-border);
  }
`

const RecipePreparation = styled.aside`
  ${screenSize.md} {
    margin-top: var(--spacing-8);
  }
`

const Sticky = styled.div`
  position: sticky;
  top: var(--spacing-32);
`

const RecipeDetails = styled.div`
  display: flex;
  color: var(--color-text);
`

const RecipeDetailsItem = styled.div`
  padding: 0 var(--spacing-32);

  &:not(:last-child) {
    padding-left: 0;
    border-right: var(--color-primary-border);
  }
`

const RecipePrepTime = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-8);
  margin-top: var(--spacing-8);
  font-weight: 700;
`

const RecipePortionAmount = styled(RecipePrepTime)`
  margin-top: 0;
  font-size: var(--font-size-24);

  button {
    font-size: inherit;
    color: inherit;
    background: none;
    border: none;
  }
`

const RecipeIngredients = styled.section`
  margin: var(--spacing-64) 0;

  ${screenSize.md} {
    margin-top: var(--spacing-64);
  }
`

const RecipeIngredientsList = styled.ul`
  max-height: 400px;
  max-width: 300px;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: thin;
  list-style: none;
`

const RecipeIngredient = styled.li`
  &:not(:last-of-type) {
    margin: var(--spacing-16) 0;
    padding-bottom: var(--spacing-8);
    border-bottom: var(--color-primary-border);
  }
`

const RecipeSteps = styled.section`
  max-width: 90ch;

  img {
    max-height: 600px;
    object-fit: cover;
  }
`

const RecipeStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: var(--spacing-32) 0;
  padding: var(--spacing-32);
  border: var(--color-primary-border);
  border-radius: var(--radius-base);

  ${screenSize.md} {
    flex-direction: row;
    gap: var(--spacing-32);
    padding: 0;
    border: none;
  }
`

const RecipeStepNumber = styled.h3`
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: var(--spacing-8);
  font-size: var(--font-size-24);
  color: var(--color-text-on-dark-bg);
  background: var(--color-primary-gold);
  border-radius: 50%;
`

export function Recipe() {
  return (
    <StyledRecipe>
      <Header />

      <RecipeImage src="/images/dish.webp" alt="Dish" />

      <Main variants={fadeIn} initial="hidden" animate="show">
        <RecipePreparation>
          <Sticky>
            <RecipeDetails>
              <RecipeDetailsItem>
                <h3>Priprema</h3>
                <RecipePrepTime>
                  <svg
                    height="16"
                    width="16"
                    aria-hidden="true"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
                    ></path>
                  </svg>
                  <span>34 min</span>
                </RecipePrepTime>
              </RecipeDetailsItem>

              <RecipeDetailsItem>
                <h3>Porcija</h3>
                <RecipePortionAmount>
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </RecipePortionAmount>
              </RecipeDetailsItem>
            </RecipeDetails>

            <RecipeIngredients>
              <h2>Sastojci</h2>

              <RecipeIngredientsList>
                {ingredients.map(({ amount, ingredient, unit }) => (
                  <RecipeIngredient key={ingredient}>
                    <strong>
                      {amount} {unit}
                    </strong>
                    <span> {ingredient}</span>
                  </RecipeIngredient>
                ))}
              </RecipeIngredientsList>
            </RecipeIngredients>
          </Sticky>
        </RecipePreparation>

        <ContentSeparator></ContentSeparator>

        <RecipeSteps>
          <h1>Svako Jutro Jedno Jaje Organizmu Snagu Daje</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            ullam dicta vero deleniti necessitatibus dignissimos, id nulla
            repudiandae, impedit explicabo eos soluta possimus inventore
            temporibus? Fugit soluta at dolorum mollitia! Odio similique, est
            nam asperiores molestiae praesentium harum perferendis officia quam
            dignissimos sed a natus ipsa facilis corrupti labore maxime fugiat
            iure optio autem suscipit. Error iste quisquam maxime quis. Fugiat
            ullam quas consequuntur excepturi vero!
          </p>

          <img src="/images/dish.webp" alt="Dish" />

          <RecipeStep>
            <div>
              <RecipeStepNumber>1</RecipeStepNumber>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate illum minus dolorem iusto voluptatum asperiores
                laudantium suscipit magnam debitis fuga autem ad quasi quaerat
                sit beatae, sequi architecto. Quos, ullam.
              </p>
            </div>
          </RecipeStep>

          <RecipeStep>
            <div>
              <RecipeStepNumber>2</RecipeStepNumber>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repudiandae impedit consequuntur aliquid sed non laborum
                quibusdam inventore fugit nihil, expedita officia, aliquam, hic
                corporis at dolorem maxime molestias dolor repellat!
              </p>
            </div>
          </RecipeStep>

          <img src="/images/dish.webp" alt="Dish" />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            ullam dicta vero deleniti necessitatibus dignissimos, id nulla
            repudiandae, impedit explicabo eos soluta possimus inventore
            temporibus? Fugit soluta at dolorum mollitia! Odio similique, est
            nam asperiores molestiae praesentium harum perferendis officia quam
            dignissimos sed a natus ipsa facilis corrupti labore maxime fugiat
            iure optio autem suscipit. Error iste quisquam maxime quis. Fugiat
            ullam quas consequuntur excepturi vero!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            ullam dicta vero deleniti necessitatibus dignissimos, id nulla
            repudiandae, impedit explicabo eos soluta possimus inventore
            temporibus? Fugit soluta at dolorum mollitia! Odio similique, est
            nam asperiores molestiae praesentium harum perferendis officia quam
            dignissimos sed a natus ipsa facilis corrupti labore maxime fugiat
            iure optio autem suscipit. Error iste quisquam maxime quis. Fugiat
            ullam quas consequuntur excepturi vero!
          </p>

          <RecipeStep>
            <div>
              <RecipeStepNumber>3</RecipeStepNumber>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repudiandae impedit consequuntur aliquid sed non laborum
                quibusdam inventore fugit nihil, expedita officia, aliquam, hic
                corporis at dolorem maxime molestias dolor repellat!
              </p>
            </div>
          </RecipeStep>

          <RecipeStep>
            <div>
              <RecipeStepNumber>4</RecipeStepNumber>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate illum minus dolorem iusto voluptatum asperiores
                laudantium suscipit magnam debitis fuga autem ad quasi quaerat
                sit beatae, sequi architecto. Quos, ullam.
              </p>
            </div>
          </RecipeStep>

          <img src="/images/dish.webp" alt="Dish" />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            ullam dicta vero deleniti necessitatibus dignissimos, id nulla
            repudiandae, impedit explicabo eos soluta possimus inventore
            temporibus? Fugit soluta at dolorum mollitia! Odio similique, est
            nam asperiores molestiae praesentium harum perferendis officia quam
            dignissimos sed a natus ipsa facilis corrupti labore maxime fugiat
            iure optio autem suscipit. Error iste quisquam maxime quis. Fugiat
            ullam quas consequuntur excepturi vero!
          </p>
        </RecipeSteps>
      </Main>
    </StyledRecipe>
  )
}
