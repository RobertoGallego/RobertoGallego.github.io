import { FaQuoteRight } from "react-icons/fa"
import Card from "../../Card"
import Chip from "../../Chip"
import tech from "../../assets/tech.jpg"
import back from "../../assets/bak.jpg"
import pexel from "../../assets/pexel.jpg"
import ninjaco from "../../assets/ninjaco.png"
import { useEffect, useRef, useState } from "react"
import bb from "../../assets/gif/coco.gif"
// import a from "../../assets/gif/1.gif"
// import b from "../../assets/gif/2.gif"
// import c from "../../assets/gif/3.gif"
// import d from "../../assets/gif/4.gif"
// import e from "../../assets/gif/5.gif"
// import f from "../../assets/gif/6.gif"
// import g from "../../assets/gif/7.gif"
// import h from "../../assets/gif/8.gif"
// import i from "../../assets/gif/9.gif"
// import j from "../../assets/gif/10.gif"
// import k from "../../assets/gif/11.gif"
// import l from "../../assets/gif/12.gif"
// import m from "../../assets/gif/13.gif"
// import n from "../../assets/gif/14.gif"
// import o from "../../assets/gif/15.gif"
// import p from "../../assets/gif/16.gif"
// import q from "../../assets/gif/17.gif"
// import r from "../../assets/gif/18.gif"
// import s from "../../assets/gif/19.gif"
// import t from "../../assets/gif/20.gif"
// import u from "../../assets/gif/21.gif"
// import v from "../../assets/gif/22.gif"
// import w from "../../assets/gif/23.gif"
// import x from "../../assets/gif/24.gif"
// import y from "../../assets/gif/25.gif"
// import z from "../../assets/gif/26.gif"
// import aa from "../../assets/gif/27.gif"

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
        alignItems: "center",
        // padding: "0 110px",
      }}
    >
      <div className="home-content">
        <div className="home-text">
          {/* <FaQuoteRight className="home-icon" /> */}

          <h1 className="home-title">Crafting </h1>
          <h1 className="home-title">Engaging</h1>
          <h1 className="home-title">Experiences</h1>

          <p className="home-description">Let’s build something amazing</p>

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

        {/* <div className="home-colors">
          <img
            src={bb}
            style={{
              height: 100,
              width: 200,
              borderRadius: 50,
              backgroundColor: "transparent",
              flexShrink: 0,
              objectFit: "cover",
              // marginRight: 20,
            }}
          />
        </div> */}

        {/* <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
        </div> */}
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
