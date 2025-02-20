import { FaQuoteRight } from "react-icons/fa"
import Card from "../../Card"
import Chip from "../../Chip"
import tech from "../../assets/tech.jpg"
import back from "../../assets/bak.jpg"
import pexel from "../../assets/pexel.jpg"
import ninjaco from "../../assets/ninjaco.png"
import { useEffect, useRef, useState } from "react"

const HomeCardsFullSize = ({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>
}) => {
  return (
    <div ref={containerRef} className="home-cards-fullsize">
      <Card title="Store v1" imageUrl={ninjaco} width={204}>
        <Chip />
      </Card>

      <Card
        title="My Setup Macbook"
        imageUrl={pexel}
        createdAt="Jun 1993"
        width={368}
      >
        <Chip />
        <Chip />
      </Card>

      <Card
        title="My Setup Macbook"
        imageUrl={back}
        createdAt="Jun 1993"
        width={272}
      >
        <Chip />
        <Chip />
      </Card>

      <Card
        title="My Setup Macbook"
        imageUrl={tech}
        createdAt="Jun 1993"
        width={300}
      >
        <Chip />
        <Chip />
      </Card>
    </div>
  )
}

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isManualScroll, setIsManualScroll] = useState(false)
  const colors = ["#ffc785", "#ffe6c9", "#ffa09b", "#ff6347", "#011526"]

  const scrollToCard = (index: number) => {
    if (!containerRef.current) return

    setIsManualScroll(true)

    setScrollPosition(index === 0 ? 0 : containerRef.current.scrollWidth)

    containerRef.current?.scrollTo({
      left: index,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || isManualScroll) return

      const halfScrollPosition =
        (containerRef.current.scrollWidth - containerRef.current.clientWidth) /
        2

      const isAtHalf = containerRef.current.scrollLeft >= halfScrollPosition

      setScrollPosition(isAtHalf ? containerRef.current.scrollWidth : 0)
    }
    const ref = containerRef.current
    if (ref) {
      ref.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (ref) {
        ref.removeEventListener("scroll", handleScroll)
      }
    }
  }, [isManualScroll])

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        // alignItems: "center",
        // padding: "0 110px",
      }}
    >
      <div className="home-content">
        <div className="home-text">
          {/* <FaQuoteRight className="home-icon" /> */}

          <h1 className="home-title">Crafting </h1>
          <h1 className="home-title">Engaging</h1>
          <h1 className="home-title">Experiences</h1>

          {/* <p className="home-description">Let’s build something amazing.</p> */}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          {/* <FaQuoteRight className="home-icon" /> */}

          <div className="home-colors">
            <div className="home-colors-track">
              {["#011526"].map((color, index) => (
                <div
                  key={index}
                  style={{
                    height: 100,
                    width: 200,
                    borderRadius: 50,
                    backgroundColor: color,
                    flexShrink: 0,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="home-cards-container"
        onWheel={() => setIsManualScroll(false)}
      >
        <HomeCardsFullSize containerRef={containerRef} />

        <div style={{ display: "flex", justifyContent: "center", gap: 6 }}>
          {[0, containerRef.current?.scrollWidth ?? 1194].map((e, index) => (
            <div
              key={index}
              className="home-scroll"
              style={{
                backgroundColor: scrollPosition === e ? "#011526" : "#ccc",
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
