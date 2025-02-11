import "./App.css"
import { FaQuoteRight } from "react-icons/fa"
import Card from "./Card"
import Chip from "./Chip"
import tech from "./assets/tech.jpg"
import back from "./assets/bak.jpg"
import pexel from "./assets/pexel.jpg"
import ninjaco from "./assets/ninjaco.png"
import logo from "./assets/logos.png"
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md"

function App() {
  return (
    <div className="container">
      <div className="content">
        <div className="menu">
          <div className="menu-logo">
            <img src={logo} alt="logo" style={{ width: 110 }} />
          </div>

          <div className="menu-navigation">
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
                <p style={{ fontSize: 8 }}>{item.number}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="home-content">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-end",
              padding: 10,
            }}
          >
            <FaQuoteRight size={42} className="home-icon" />

            <h1 className="home-title">Crafting Engaging Experiences</h1>
          </div>

          <div className="home-cards">
            <Card
              title="Store v1"
              imageUrl={ninjaco}
              width={204}
              rotate={-5}
              zIndex={10}
            >
              <Chip />
            </Card>

            <Card
              title="My Setup Macbook"
              imageUrl={pexel}
              createdAt="Jun 1993"
              width={408}
              rotate={10}
            >
              <Chip />
              <Chip />
            </Card>

            <Card
              title="My Setup Macbook"
              imageUrl={tech}
              createdAt="Jun 1993"
              width={300}
              rotate={-10}
              zIndex={10}
            >
              <Chip />
              <Chip />
            </Card>

            <Card
              title="My Setup Macbook"
              imageUrl={back}
              createdAt="Jun 1993"
              width={272}
              rotate={5}
            >
              <Chip />
              <Chip />
            </Card>
          </div>

          {/* <p
              className="home-description"
              style={
                {
                  zIndex: 1,
                  color: "#ff6347",
                }
              }
            >
              I'm a software engineer passionate about building intuitive,
              scalable, and high-performance applications with modern web
              technologies. Let’s build something amazing. 
            </p> */}
          {/* </div> */}
        </div>

        <div className="footer">
          <div>
            <p
              style={{
                fontFamily: "Roboto, Poppins, Inter, system-ui",
                fontSize: 14,
                fontWeight: "500",
                paddingBlock: 10,
              }}
            >
              2025 © All rights reserved
            </p>
          </div>

          <div className="menu-logo">
            <MdOutlineKeyboardDoubleArrowDown
              size={20}
            />

            {/* <p style={{ paddingBlock: 12 }}>Reve +</p> */}
          </div>

          {/* <div style={{ display: "flex" }}>
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
          </div> */}
        </div>
      </div>

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
      {/* 204 272 408 H325    - 204 H249 - 332 H404 */}
    </div>
  )
}

export default App
