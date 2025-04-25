// import { FaQuoteRight } from "react-icons/fa"
import Card from "../../Card"
import Chip from "../../Chip"
import tech from "../../assets/tech.jpg"
import back from "../../assets/bak.jpg"
import pexel from "../../assets/pexel.jpg"
import ninjaco from "../../assets/ninjaco.png"
import { useEffect, useRef, useState } from "react"
import useDarkMode from "../../hooks/useDarkMode"
import { useTranslation } from "react-i18next"
import "./Home.css"
import { FaMapMarkerAlt } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa"
import logo42 from "../../assets/42logo.png"
import logo42w from "../../assets/42logow.png"
import gif from "../../assets/7979.gif"

import { useTheme } from "../../useTheme"
import { FaAngleRight } from "react-icons/fa"
import { CgAdd } from "react-icons/cg"
const HomeCardsFullSize = ({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>
}) => {
  const { t } = useTranslation()

  return (
    <div ref={containerRef} className="home-cards-fullsize">
      <Card title={t("Profile_V1")} imageUrl={ninjaco} width={204}>
        <Chip />
      </Card>

      <Card
        title={t("Inspiration_Vault")}
        imageUrl={pexel}
        createdAt="Jun 1993"
        width={204}
      >
        <Chip />
        <Chip />
      </Card>

      <Card
        title={t("Tech_Forges")}
        imageUrl={back}
        createdAt="Jun 1993"
        width={204}
      >
        <Chip />
        <Chip />
      </Card>

      <Card
        title={t("The_Atelier")}
        imageUrl={tech}
        createdAt="Jun 1993"
        width={204}
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
  const { isDarkMode } = useDarkMode()
  const { t } = useTranslation()
  const { theme, setTheme } = useTheme()

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

  const logoSrc =
    theme === "light"
      ? logo42
      : theme === "dark" || (theme === "system" && isDarkMode)
      ? logo42w
      : logo42

  return (
    <div className="home">
      <div className="home-presentation">
        {/* <div
          style={{
            borderRadius: 100,
            overflow: "hidden",
            backgroundColor: "#a16969",
            width: 100,
            height: 100,
            marginBottom: 20,
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={gif}
            alt="Profile"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 100,
            }}
          />
        </div> */}

        <h1 className="home-title">{t("ReveCraft")}</h1>

        <h3>Explore my journey in app engineering</h3>

        <p style={{ maxWidth: 500, textAlign: "center", marginTop: 10 }}>
          An evolving portfolio collection that reflects my work with modern
          tools, scalable architecture, and clean design
        </p>

        <div style={{ marginTop: 20, display: "flex" }}>
          <button
            style={{
              color: "#fff",
              border: "1px solid #fff",
              borderRadius: "5px",
              padding: "6px 12px",
              cursor: "pointer",
              margin: "0 10px",
              fontSize: "14px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
            onClick={() => scrollToCard(0)}
          >
            <p>Available For Work</p> <FaArrowRight size={12} />
          </button>

          <button
            style={{
              backgroundColor: isDarkMode ? "#fff" : "#000",
              color: isDarkMode ? "#000" : "#fff",
              border: "none",
              borderRadius: "5px",
              padding: "6px 12px",
              cursor: "pointer",
              margin: "0 10px",
              fontSize: "14px",
              fontWeight: "bold",
            }}
            onClick={() => scrollToCard(0)}
          >
            Contact Me
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 100,
          backgroundColor: "#0f0f0e",
          width: "100%",
          marginBottom: 200,
          padding: 60,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 20,
            flexDirection: "column",
            maxWidth: 700,
            borderRadius: 5,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 20,
              alignItems: "center",
            }}
          >
            <div
              style={{
                borderRadius: 100,
                overflow: "hidden",
                backgroundColor: "#3d3834",
                width: 80,
                height: 80,
                border: "4px solid #0f0f0e",
                outline: "1px solid #fff",
              }}
            >
              <img src={ninjaco} alt="Profile" />
            </div>
            <div>
              <h3>Roberto GALLEGO</h3>
              <p>Software Engineer</p>
              <p>Digital Craftsman ( Artist / Developer / Designer )</p>
            </div>
          </div>
          <p>
            I am a seasoned graphic designer with over 14 years of experience in
            creating visually appealing and user-centric designs. My expertise
            spans across UI design, design systems, and custom illustrations,
            helping clients bring their digital visions to life.
          </p>
          <p>
            Currently, I work remotely for Notion, where I design template UIs,
            convert them into HTML and CSS, and provide comprehensive support to
            our users. I am passionate about crafting elegant and functional
            designs that enhance user experiences.
          </p>

          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <FaMapMarkerAlt />
              <p>Rennes, France 🇫🇷 </p>
            </div>

            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <img src={logoSrc} alt="42" style={{ width: 21 }} />
              <p>École 42 Paris | Alumni</p>
            </div>
          </div>
        </div>
      </div>

      <h2>Tech Stack · 2025</h2>
      <p>React.js · Storybook · Jest · Vite · MUI</p>
      <h2>This Year I'm Into / Currently Improving</h2>
      <p>TanStack · Hono · Go</p>
      <h2>Exploring / Giving a Chance To</h2>
      <p>Tailwind CSS · shadcn/ui</p>
      <h2>My Latest Project</h2>
      <p>
        Currently working on a visual learning tool for array methods in
        JavaScript
      </p>
      <h2>Cool/interesting reading/article</h2>
      <p>How to resize read</p>

      {/* <HomeCardsFullSize containerRef={containerRef} /> */}
    </div>
  )
}

export default Home
