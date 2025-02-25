// import { FaQuoteRight } from "react-icons/fa"
import Card from "../../Card"
import Chip from "../../Chip"
import tech from "../../assets/tech.jpg"
import back from "../../assets/bak.jpg"
import pexel from "../../assets/pexel.jpg"
import ninjaco from "../../assets/ninjaco.png"
import { useEffect, useRef, useState } from "react"
import useDarkMode from "../../hooks/useDarkMode"
import useTypewriter from "../../hooks/useTypeWriter"

// import bb from "../../assets/gif/coco.gif"
// import a from "../../assets/gif/1.gif"

const HomeCardsFullSize = ({
  containerRef,
  position,
}: {
  position: number
  containerRef: React.RefObject<HTMLDivElement | null>
}) => {
  console.log(containerRef.current, position)
  const [visible, setVisible] = useState<number>(position)

  useEffect(() => {
    // Al cambiar de posición, permite la transición
    setVisible(position)
  }, [position])

  return (
    <div ref={containerRef} className="home-cards-fullsize">
      <style>
        {`
          @keyframes fadeIn { 
            0% { opacity: 0; } 
            100% { opacity: 1; } 
          }
          @keyframes faceInTwo {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          @keyframes fadeInRight {
            0% { opacity: 0; transform: translateX(3000px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeInLeft {
            0% { opacity: 0; transform: translateX(-3000px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(3000px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInDown {
            0% { opacity: 0; transform: translateY(-3000px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <Card
        title="Profile V1"
        imageUrl={ninjaco}
        width={204}
        contain={"contain"}
        position={position}
      >
        <h1
          className="home-title"
          // style={{
          //   animation: position === 1 ? "fadeInDown 1s" : "none",
          // }}
        >
          Welcome
        </h1>
        <h1
          className="home-title"
          // style={{
          //   animation: position === 1 ? "fadeInLeft 1s" : "none",
          // }}
        >
          Explore
        </h1>
        <h1
          className="home-title"
          // style={{
          //   animation: position === 1 ? "fadeInRight 1s" : "none",
          // }}
        >
          Together
        </h1>
      </Card>

      <Card
        title="Inspiration Vault"
        imageUrl={pexel}
        createdAt="Jun 1993"
        width={368}
        position={position}
      >
        <h1
          className="home-title"
          // style={{
          //   animation: position === 2 ? "fadeInLeft 1s" : "none",
          // }}
        >
          Unlock
        </h1>
        <h1
          className="home-title"
          // style={{
          //   animation: position === 2 ? "fadeInRight 1s" : "none",
          // }}
        >
          Creative
        </h1>
        <h1
          className="home-title"
          // style={{
          //   animation: position === 2 ? "fadeInUp 1s" : "none",
          // }}
        >
          Perspectives
        </h1>
      </Card>

      <Card
        title="Tech Forges"
        imageUrl={back}
        createdAt="Jun 1993"
        width={272}
        position={position}
      >
        <h1
          className="home-title"
          // style={{
          //   animation: position === 3 ? "fadeInDown 1s" : "none",
          // }}
        >
          Innovate
        </h1>
        <h1
          className="home-title"
          // style={{
          //   animation: position === 3 ? "fadeInLeft 1s" : "none",
          // }}
        >
          Limitless{" "}
        </h1>
        <h1
          className="home-title"
          // style={{
          //   animation: position === 3 ? "fadeInUp 1s" : "none",
          // }}
        >
          Solutions
        </h1>
      </Card>

      <Card
        title="The Atelier"
        imageUrl={tech}
        createdAt="Jun 1993"
        width={300}
        position={position}
      >
        <h1
          className="home-title"
          // style={{
          //   animation: position === 4 ? "fadeInRight 1s" : "none",
          // }}
        >
          Crafting{" "}
        </h1>
        <h1
          className="home-title"
          // style={{
          //   animation: position === 4 ? "fadeInLeft 1s" : "none",
          // }}
        >
          Engaging
        </h1>
        <h1
          className="home-title"
          // style={{
          //   animation: position === 4 ? "fadeInUp 1s" : "none",
          // }}
        >
          Experiences
        </h1>
      </Card>
    </div>
  )
}

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(1)
  const { isDarkMode } = useDarkMode()

  const scrollToCard = (index: number) => {
    setPosition(index)

    if (containerRef.current) {
      const scrollAmount = containerRef.current.offsetWidth * (index - 1)
      containerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const newPosition = prev === 4 ? 1 : prev + 1

        if (containerRef.current) {
          const scrollAmount =
            containerRef.current.offsetWidth * (newPosition - 1)
          containerRef.current.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
          })
        }

        return newPosition
      })
    }, 500000000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="home-cards-container">
        {/* <div className="new"> */}
        <HomeCardsFullSize containerRef={containerRef} position={position} />
        {/* </div> */}

        <div style={{ display: "flex", justifyContent: "center", gap: 6 }}>
          {[1, 2, 3, 4].map((e, index) => (
            <div
              key={index}
              className="home-scroll"
              style={{
                backgroundColor:
                  position === e
                    ? isDarkMode
                      ? "#ffc785"
                      : "#5e5e5e"
                    : "#f5f5f5",
              }}
              onClick={() => scrollToCard(e)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
