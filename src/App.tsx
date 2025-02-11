import "./App.css"
import { FaQuoteRight } from "react-icons/fa"
import Card from "./Card"
import Chip from "./Chip"
import macbookpro from "./assets/macbooknoir.png"

function App() {
  return (
    <div className="container">
      <div className="content">
        <div className="menu">
          {[
            { label: "Home", number: "01" },
            { label: "About", number: "02" },
            { label: "Projects", number: "03" },
            { label: "Contact", number: "04" },
          ].map((item) => (
            <div
              key={item.number}
              style={{
                display: "flex",
                paddingBlock: 10,
              }}
            >
              <p
                style={{
                  fontFamily: "Roboto, Poppins, Inter, system-ui",
                  fontSize: 14,
                  fontWeight: "500",
                  paddingBlock: 2,
                }}
              >
                {item.label}
              </p>

              <p
                style={{
                  fontSize: 8,
                  paddingInline: 2,
                }}
              >
                {item.number}
              </p>
            </div>
          ))}
        </div>

        <div className="home-content">
          <h1 className="home-title">Crafting Engaging Experiences</h1>

          <div className="home-text-container">
            <FaQuoteRight size={42} className="home-icon" />

            <p className="home-description">
              I'm a software engineer passionate about building intuitive,
              scalable, and high-performance applications with modern web
              technologies. Let’s build something amazing.
            </p>
          </div>
        </div>

        <div style={{ display: "flex" }}>
          {["#ffc785", "#ffe6c9", "#ffa09b", "#ff6347", "#011526"].map(
            (color) => (
              <div
                key={color}
                style={{
                  height: 50,
                  width: 50,
                  backgroundColor: color,
                }}
              />
            )
          )}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          backgroundColor: "#f5f5f5",
        }}
      >
        <h2 style={{ textAlign: "center", marginBlock: 20 }}>
          Featured Projects
        </h2>

        <p style={{ textAlign: "center", marginBottom: 20 }}>
          Here are some of my projects that I have worked on. I am always
          looking for new opportunities to work on exciting projects.
        </p>

        {/* <div style={{ textAlign: "center", marginBottom: 20 }}>
          ecole 42 level 21+ France spanish french english Typescript Javascript
          Python FastAPI React React Native Node Deno Hono Expo preact tauri
          Supabase MongoDB PostgreSQL React hook form zod zustand react query
          tanstack styled components Material UI date-fns react-icons useHooks
          xcode android studio passport figma react-toastify storybook jest
          cypress testing library react testing library react native testing
          library prettier eslint i18n ubuntu windows macos chrome firefox
          safari sentry vscode git github gitlab docker postman motion
          react-spring auth0 authjs shadcn heroui d3 Recharts chartjs axios
          graphql apollo swr vanilla extract tailwind ariakit css html socket.io
          redux wordpress magento shopify express miro firebase excalidraw pnpm
          slack notion photoshop illustrator adobe premiere pro obs capcut
          dev.to css-tricks frontendmasters State of React This week in react
          State of JS State of CSS State of AI State of html
        </div> */}

        <div className="cards">
          <Card>
            <Chip />
          </Card>

          <Card
            title="My Setup Macbook"
            imageUrl={macbookpro}
            createdAt="Jun 1993"
          >
            <Chip />
            <Chip />
          </Card>

          <Card
            title="My Setup Macbook"
            imageUrl={macbookpro}
            createdAt="Jun 1993"
          >
            <Chip />
            <Chip />
          </Card>

          <Card
            title="My Setup Macbook"
            imageUrl={macbookpro}
            createdAt="Jun 1993"
          >
            <Chip />
            <Chip />
          </Card>

          <Card
            title="My Setup Macbook"
            imageUrl={macbookpro}
            createdAt="Jun 1993"
          >
            <Chip />
            <Chip />
          </Card>

          <Card
            title="My Setup Macbook"
            imageUrl={macbookpro}
            createdAt="Jun 1993"
          >
            <Chip />
            <Chip />
          </Card>
        </div>
      </div>
    </div>
  )
}

export default App
