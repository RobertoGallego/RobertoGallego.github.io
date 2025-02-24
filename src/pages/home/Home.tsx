// import { FaQuoteRight } from "react-icons/fa"
import Card from "../../Card"
import Chip from "../../Chip"
import tech from "../../assets/tech.jpg"
import back from "../../assets/bak.jpg"
import pexel from "../../assets/pexel.jpg"
import ninjaco from "../../assets/ninjaco.png"
import { useEffect, useRef, useState } from "react"
import useDarkMode from "../../hooks/useDarkMode"

// import bb from "../../assets/gif/coco.gif"
// import a from "../../assets/gif/1.gif"

const HomeCardsFullSize = ({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>
}) => {
  return (
    <div ref={containerRef} className="home-cards-fullsize">
      <Card title="Profile V1" imageUrl={ninjaco} width={204}>
        <Chip />
      </Card>
{/* 
      <Card
        title="Inspiration Vault"
        imageUrl={pexel}
        createdAt="Jun 1993"
        width={368}
      >
        <Chip />
        <Chip />
      </Card>

      <Card
        title="Tech Forges"
        imageUrl={back}
        createdAt="Jun 1993"
        width={272}
      >
        <Chip />
        <Chip />
      </Card>

      <Card
        title="The Atelier"
        imageUrl={tech}
        createdAt="Jun 1993"
        width={300}
      >
        <Chip />
        <Chip />
      </Card> */}

      {/* <div style={{ paddingInline: 200 }} /> */}
    </div>
  )
}

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isManualScroll, setIsManualScroll] = useState(false)
  const { isDarkMode } = useDarkMode()

  const scrollToCard = (index: number) => {
    if (!containerRef.current) return

    setIsManualScroll(true)

    // {[0, 214, 592, containerRef.current?.scrollWidth ?? 1194].map(
    setScrollPosition(index)

    containerRef.current?.scrollTo({
      left: index,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || isManualScroll) return

      // const halfScrollPosition =
      //   (containerRef.current.scrollWidth - containerRef.current.clientWidth) /
      //   2

      // const isAtHalf = containerRef.current.scrollLeft >= halfScrollPosition

      // {[0, 214, 592, containerRef.current?.scrollWidth ?? 1194].map(
      // setScrollPosition(isAtHalf ? containerRef.current.scrollWidth : 0)
      setScrollPosition(containerRef.current.scrollLeft);
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
        // flexDirection: "column",
        // justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <div className="home-content">
        <div className="home-text">
          {/* <h1 className="home-title">Crafting </h1>
          <h1 className="home-title">Engaging</h1>
          <h1 className="home-title">Experiences</h1> */}

          {/* <img
            src={bb}
            style={{
              height: 4,
              width: 130,
              borderRadius: 10,
              backgroundColor: "transparent",
              flexShrink: 0,
              objectFit: "cover",
              // marginRight: 20,
            }}
          /> */}
        </div>
      </div>

      <div
        className="home-cards-container"
        onWheel={() => setIsManualScroll(false)}
      >
        <HomeCardsFullSize containerRef={containerRef} />

        <div style={{ display: "flex", justifyContent: "center", gap: 6 }}>
          {[0, 214, 592, containerRef.current?.scrollWidth ?? 1194].map(
            (e, index) => (
              <div
                key={index}
                className="home-scroll"
                style={{
                  backgroundColor:
                    scrollPosition > e - 10 || scrollPosition > 700
                      ? isDarkMode
                        ? "#ffc785"
                        : "#5e5e5e"
                      : "#f5f5f5",
                }}
                onClick={() => scrollToCard(e)}
              />
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
