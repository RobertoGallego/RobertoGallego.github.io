import "./Home.css"

import About from "../../components/About/About"
import HeroSection from "../../components/HeroSection/HeroSection"
import TechStack from "../../components/TechStack/TechStack"
import Blog from "../../components/Blog/Blog"
import Journal from "../../components/Journal/Journal"

const Home = () => {
  return (
    <div className="home">
      <HeroSection />

      <TechStack />
      <About />

      <Blog />
      <Journal />
    </div>
  )
}

export default Home
