import "./App.css"
import { FaQuoteRight } from "react-icons/fa"
import Card from "./Card"
import Chip from "./Chip"
import macbookpro from "./assets/macbooknoir.png"

function App() {
  return (
    <div className="container">
      <div className="content">
        <div />

        <div>
          <FaQuoteRight
            size={42}
            style={{
              marginBottom: 10,
              padding: 10,
              backgroundColor: "#ffc785",
            }}
          />

          <h2>
            I'm a software engineer building efficient, scalable, and
            user-friendly applications with modern web technologies. Let's
            create something great.
          </h2>
        </div>

        <div className="cards">
          <Card children={<Chip />} />
          <Card
            title="My Setup Macbook"
            imageUrl={macbookpro}
            createdAt="Jun 1993"
            children={
              <>
                <Chip /> <Chip />
              </>
            }
          />
        </div>

        {/* <div>
          ecole 42 level 21+ France spanish french english Typescript Javascript
          Python FastAPI React React Native Node Deno Hono Expo preact tauri
          Supabase MongoDB PostgreSQL React hook form zod zustand react query
          tanstack styled components Material UI date-fns react-icons useHooks
          xcode android studio passport figma react-toastify storybook jest
          cypress testing library react testing library react native testing
          library prettier eslint i18n ubuntu windows macos chrome firefox
          safari sentry vscode git github gitlab docker postman motion
          react-spring auth0 authjs shadcn heroui d3
          Recharts chartjs axios graphql apollo swr vanilla extract tailwind
          ariakit css html socket.io redux wordpress magento shopify express
          miro firebase excalidraw pnpm slack notion photoshop illustrator adobe
          premiere pro obs capcut dev.to css-tricks frontendmasters State of
          React This week in react State of JS State of CSS State of AI State of
          html
        </div> */}

        <div style={{ display: "flex" }}>
          {["#ffc785", "#ffe6c9", "#ffa09b", "#ff6347"].map((color) => (
            <div
              key={color}
              style={{
                height: 50,
                width: 50,
                backgroundColor: color,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
