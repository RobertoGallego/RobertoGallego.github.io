import "./Home.css"

import About from "../../components/About/About"
import HeroSection from "../../components/HeroSection/HeroSection"
import TechStack from "../../components/TechStack/TechStack"
import Blog from "../../components/Blog/Blog"
import Journal from "../../components/Journal/Journal"
// import Portfolio from "../../components/Portfolio/Portfolio"

const Home = () => {
  return (
    <div className="home">
      <HeroSection />

      {/* <Portfolio /> */}

      <TechStack />


      <Journal />

      <Blog />

      <About />
    </div>
  )
}

export default Home
