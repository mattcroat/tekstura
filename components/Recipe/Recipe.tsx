import styled from '@emotion/styled'
import { Header } from '@/root/components/Header'

const StyledRecipe = styled.div`
  display: grid;
  grid-template-rows: auto 400px 1fr;
  gap: var(--spacing-64);
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 var(--spacing-128);
  padding-top: var(--spacing-64);
`

const Hero = styled.div`
  img {
    object-fit: cover;
  }
`

const Main = styled.main`
  display: grid;
  grid-template-columns: 30% 1px 1fr;
  gap: var(--spacing-64);

  h1,
  h2 {
    color: var(--highlight);
  }
`

const Divider = styled.div`
  border-left: var(--primary-border);
`

const Sidebar = styled.aside`
  .stick {
    position: sticky;
    top: var(--spacing-32);
  }
`

const Ingredients = styled.section`
  margin-top: var(--spacing-64);

  ul {
    width: 300px;
    list-style: none;
  }

  li:not(:last-of-type) {
    margin: var(--spacing-16) 0;
    border-bottom: var(--primary-border);
  }
`

const Info = styled.div`
  display: flex;

  .item {
    padding: 0 var(--spacing-32);
  }

  .item:not(:last-child) {
    padding-left: 0;
    border-right: var(--primary-border);
  }

  .time {
    display: flex;
    align-items: center;
    gap: var(--spacing-8);
    margin-top: var(--spacing-8);
    font-weight: 700;
  }

  svg {
    fill: var(--text);
    height: 16px;
    width: 16px;
  }

  .portion {
    display: flex;
    align-items: center;
    gap: var(--spacing-8);
    font-size: var(--size-24);
    font-weight: 700;

    button {
      font-size: inherit;
      color: inherit;
      background: none;
      border: none;
    }
  }
`

const Section = styled.section`
  max-width: 90ch;

  p {
    margin: var(--spacing-32) 0;
  }
`

const Spacer = styled.div`
  height: 4px;
  max-width: 68px;
  margin: var(--spacing-16) 0;
  background-color: var(--highlight);
`

export function Recipe() {
  return (
    <StyledRecipe>
      <Header />

      <Hero>
        <img src="/images/dish.webp" alt="Dish" />
      </Hero>

      <Main>
        <Sidebar>
          <div className="stick">
            <Info>
              <div className="item">
                <h3>Priprema</h3>
                <div className="time">
                  <svg
                    aria-hidden="true"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
                  </svg>
                  <span>34 minute</span>
                </div>
              </div>
              <div className="item">
                <h3>Porcija</h3>
                <div className="portion">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
              </div>
            </Info>

            <Ingredients>
              <h2>Sastojci</h2>

              <ul>
                <li>
                  <b>278 grams</b> white rice (medium grain)
                </li>
                <li>
                  <b>1 tablespoon</b> rice wine vinegar
                </li>
                <li>
                  <b>2 tablespoons</b> soy sauce
                </li>
                <li>
                  <b>1 teaspoon</b> chilli sauce
                </li>
                <li>
                  <b>2 teaspoons</b> sesame oil
                </li>
                <li>
                  <b>1 teaspoon</b> sesame seeds, toasted
                </li>
                <li>
                  <b>2 centimeters</b> ginger (piece of, peeled and minced)
                </li>
                <li>
                  <b>300 grams</b> boneless salmon fillets (fresh, skin removed
                  and cut into 2cm pieces)
                </li>
                <li>
                  <b>35 grams</b> red cabbage (shredded)
                </li>
                <li>
                  <b>35 grams</b> green cabbage (shredded)
                </li>
                <li>
                  <b>1 tablespoon</b> sesame oil
                </li>
                <li>
                  <b>4 tablespoons</b> Japanese Mayonnaise
                </li>
                <li>
                  <b>1</b> avocado (sliced)
                </li>
                <li>
                  <b>1/2</b> cucumber (medium, thinly sliced)
                </li>
                <li>
                  <b>59 grams</b> edamame beans (shelled, blanched)
                </li>
                <li>sea salt</li>
                <li>ground pepper</li>
                <li>toasted nori</li>
                <li>toasted sesame seeds</li>
              </ul>
            </Ingredients>
          </div>
        </Sidebar>

        <Divider></Divider>

        <Section>
          <h1>Svako Jutro Jedno Jaje Organizmu Snagu Daje</h1>

          <Spacer />

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
        </Section>
      </Main>
    </StyledRecipe>
  )
}
