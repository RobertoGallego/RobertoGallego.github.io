import { FaQuoteRight } from "react-icons/fa"
import Card from "../../Card"
import Chip from "../../Chip"
import tech from "../../assets/tech.jpg"
import back from "../../assets/bak.jpg"
import pexel from "../../assets/pexel.jpg"
import ninjaco from "../../assets/ninjaco.png"
// import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md"
// import { PiAsteriskBold } from "react-icons/pi"

// const Widget = () => {
//   return (
//     <PiAsteriskBold className="widget-icon" />
//   )
// }

const HomeCardsFullSize = () => {
  return (
    <div className="home-cards-fullsize">
      <Card title="Store v1" imageUrl={ninjaco} width={204} rotate={-5}>
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
        imageUrl={tech}
        createdAt="Jun 1993"
        width={300}
        rotate={-7}
      >
        <Chip />
        <Chip />
      </Card>
    </div>
  )
}

const Home = () => {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div className="home-content">
        <div className="home-text">
          <FaQuoteRight className="home-icon" />

          <h1 className="home-title">Crafting </h1>
          <h1 className="home-title">Engaging</h1>
          <h1 className="home-title">Experiences</h1>

          <p className="home-description">Let’s build something amazing.</p>
        </div>
      </div>

      {/* <HomeCardsMobile /> */}
      <HomeCardsFullSize />

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
  )
}

export default Home
