import "./Home.css"

import About from "../../components/About/About"
import HeroSection from "../../components/HeroSection/HeroSection"
import TechStack from "../../components/Tech/TechStack/TechStack"
import Career from "../../components/Career/Career"
import WorkExperience from "../../components/WorkExperience/WorkExperience"
import Portfolio from "../../components/Portfolio/Portfolio"

const Home = () => {
  return (
    <div className="home">
      <HeroSection />

      <About />

      <Portfolio />

      <TechStack />

      <WorkExperience />

      <Career />
    </div>
  )
}

export default Home
