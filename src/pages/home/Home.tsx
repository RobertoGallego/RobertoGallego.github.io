
import "./Home.css"

import About from "../../components/About/About"
import HeroSection from "../../components/HeroSection/HeroSection"
import TechStack from "../../components/TechStack/TechStack"
import Blog from "../../components/Blog/Blog"

const Home = () => {
  return (
    <div className="home">
      <HeroSection />

      <TechStack />
      <About />

      
      <Blog />
      

      {/* <h2>My Latest Project</h2>
      <p>
        Currently working on a visual learning tool for array methods in
        JavaScript
      </p>
      <h2>Cool/interesting reading/article</h2>
      <p>How to resize read</p> */}

      {/* <HomeCardsFullSize containerRef={containerRef} /> */}
    </div>
  )
}

export default Home
