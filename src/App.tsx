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

const Widget = () => {
  return <div className="widget" />
}

const HomeCardsFullSize = () => {
  return (
    <div className="home-cards-fullsize">
      <div className="home-cards-list-fullsize" style={{ zIndex: 10 }}>
        <div style={{ zIndex: 100 }}>
          <Card title="Store v1" imageUrl={ninjaco} width={204} rotate={-5}>
            <Chip />
          </Card>
        </div>

        <div style={{ zIndex: -1 }}>
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
      </div>

      <div className="home-cards-list-fullsize" style={{ zIndex: 10 }}>
        <div style={{ zIndex: -1 }}>
          <Card
            title="My Setup Macbook"
            imageUrl={pexel}
            createdAt="Jun 1993"
            width={368}
            rotate={10}
          >
            <Chip />
            <Chip />
          </Card>
        </div>
        <div style={{ zIndex: 100 }}>
          <Card
            title="My Setup Macbook"
            imageUrl={tech}
            createdAt="Jun 1993"
            width={300}
            rotate={-10}
          >
            <Chip />
            <Chip />
          </Card>
        </div>
      </div>
    </div>
  )
}

const HomeCardsMobile = () => {
  return (
    <div className="home-cards-mobile">
      <Card title="Store v1" imageUrl={ninjaco} width={204} rotate={-5}>
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

      <Card
        title="My Setup Macbook"
        imageUrl={pexel}
        createdAt="Jun 1993"
        width={368}
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
    </div>
  )
}

function App() {
  return (
    <div className="container">
      <div className="content">
        <div className="menu">
          <img src={logo} alt="logo" className="menu-logo" />

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
          <Widget />

          <div className="home-text">
            <FaQuoteRight className="home-icon" />

            <h1 className="home-title">Crafting </h1>
            <h1 className="home-title">Engaging</h1>
            <h1 className="home-title">Experiences</h1>

            <p
              className="home-description"
              style={
                {
                  // zIndex: 1,
                }
              }
            >
              {/* I'm a software engineer */}
              Let’s build something amazing.
            </p>
          </div>

          <HomeCardsFullSize />

          <HomeCardsMobile />

          <div className="home-colors">
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

        <div className="footer">
          <div>
            <p className="footer-text">2025 © All rights reserved</p>
          </div>

          <MdOutlineKeyboardDoubleArrowDown size={20} />
        </div>
      </div>

      {/* <div style={{ height: "100vh" }}> example</div> */}
    </div>
  )
}

export default App
