// import { FaQuoteRight } from "react-icons/fa"
import Card from "../../Card"
import Chip from "../../components/Chip/Chip"
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
import gif from "../../assets/wallo.png"

import { useTheme } from "../../useTheme"
import { FaAngleRight } from "react-icons/fa"
import { CgAdd } from "react-icons/cg"
import { MdLightbulbOutline } from "react-icons/md"
import { VscServerProcess } from "react-icons/vsc"
import { TbDeviceDesktopCode } from "react-icons/tb"
import { MdArrowOutward } from "react-icons/md"
import { IoMdCloudOutline } from "react-icons/io"
import { FaMasksTheater } from "react-icons/fa6"
import { MdOutlineDesignServices } from "react-icons/md"
import { VscTools } from "react-icons/vsc"
import { LiaPenNibSolid } from "react-icons/lia"
import { PiBinocularsFill } from "react-icons/pi"
import { MdOutlineRoomService } from "react-icons/md"
import { BsGraphUpArrow } from "react-icons/bs"
import { FaArrowTrendUp } from "react-icons/fa6"

import { FaReact } from "react-icons/fa"
import { SiReactquery } from "react-icons/si"
import { SiMui } from "react-icons/si"
import { BiLogoTypescript } from "react-icons/bi"
import { TbBrandJavascript, TbBrandHtml5, TbBrandCss3 } from "react-icons/tb"

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
        <div
          className="home-presentation-image"
          style={{
            borderRadius: 100,
            overflow: "hidden",
            width: 120,
            height: 120,
            marginBottom: 20,
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
          }}
        ></div>

        <h1 className="home-title">{t("ReveCraft")}</h1>

        <h2>Explore my journey in app engineering</h2>

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
          backgroundColor: "#181816",
          width: "100%",
          marginBottom: 100,
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

      <div
        style={{
          display: "flex",
          gap: 20,
          flexDirection: "column",
          maxWidth: 700,
          marginBottom: 200,
          alignItems: "flex-start",
        }}
      >
        {/* <p>Core Values</p> */}

        <h1>Tech Stack · 2025</h1>

        <p>
          Our values aren't just words on a wall—they're the principles that
          guide our daily actions and long-term vision, shaping our culture and
          driving our success.
        </p>

        <div
          style={{
            display: "flex",
            gap: 4,
            flexWrap: "wrap",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            <Chip
              Icon={TbDeviceDesktopCode}
              label="Frontend"
              iconColor="DarkOrange"
              status="active"
            />

            <Chip Icon={VscServerProcess} label="Backend" iconColor="Green" />

            <Chip
              Icon={FaMasksTheater}
              label="Testing & QA"
              iconColor="DeepSkyBlue"
            />

            <Chip Icon={IoMdCloudOutline} label="Cloud" iconColor="Gold" />

            <Chip Icon={LiaPenNibSolid} label="Design & UX" iconColor="Olive" />

            <Chip
              Icon={VscTools}
              label="Productivity Tools"
              iconColor="purple"
            />

            <Chip Icon={PiBinocularsFill} label="R&D" iconColor="brown" />

            <Chip
              Icon={FaArrowTrendUp}
              label="Currently Improving"
              iconColor="Teal"
            />

            <Chip
              Icon={MdOutlineRoomService}
              label="Services"
              iconColor="Salmon"
            />
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              // alignItems: "center",
              justifyContent: "space-between",
              marginTop: 40,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <TbDeviceDesktopCode
                  style={{
                    backgroundColor: "#1b1b1b",
                    borderRadius: 10,
                    padding: 10,
                  }}
                  color="DarkOrange"
                  size={50}
                />

                <h1>Frontend</h1>
              </div>
              <p
                style={{
                  fontSize: 16,
                  color: "grey",
                  marginBlock: 10,
                  maxWidth: 450,
                }}
              >
                reactjs tanstack vitejs State Management redux react-query
                zustand context react-router tanstack router virtual
              </p>
              <h4>Key Principles:</h4>

              <div
                style={{
                  display: "flex",
                  gap: 4,
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <MdArrowOutward color={"DarkOrange"} />
                <p>Embrace experimentation and calculated risk-taking</p>
              </div>

              <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                <MdArrowOutward color={"DarkOrange"} />
                <p>Challenge assumptions and existing processes</p>
              </div>

              <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                <MdArrowOutward color={"DarkOrange"} />
                <p>Dedicate time and resources to exploring new ideas</p>
              </div>

              <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                <MdArrowOutward color={"DarkOrange"} />
                <p>Learn from failures and iterate quickly</p>
              </div>

              <div style={{ display: "flex", gap: 30, alignItems: "center" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    marginTop: 50,
                    // backgroundColor: "#1b1b1b",
                    borderRadius: 10,
                    // border: "1px solid #505050",
                  }}
                >
                  <BiLogoTypescript size={50} color={"#3178c6"} />

                  <h5 style={{ color: "white" }}>Typescript</h5>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    marginTop: 50,
                    // backgroundColor: "#1b1b1b",
                    borderRadius: 10,
                    // border: "1px solid #505050",
                  }}
                >
                  <FaReact size={50} color={"#61dbfb"} />

                  <h5 style={{ color: "white" }}>React JS</h5>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    marginTop: 50,
                    // backgroundColor: "#1b1b1b",
                    borderRadius: 10,
                    // border: "1px solid #505050",
                  }}
                >
                  <SiReactquery size={50} color={"rgb(239 68 68)"} />

                  <h5 style={{ color: "white" }}>React Query</h5>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    marginTop: 50,
                    // backgroundColor: "#1b1b1b",
                    borderRadius: 10,
                    // border: "1px solid #505050",
                  }}
                >
                  <SiMui size={50} color={"#569bbe"} />

                  <h5 style={{ color: "white" }}>Material UI</h5>
                </div>
              </div>
            </div>

            {/* <div
              style={{
                position: "relative",
                width: 200,
                height: 200,
                borderRadius: 10,
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#1b1b1b",
                border: "1px solid #505050",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${gif})`,
                  backgroundSize: "cover",
                  filter: "blur(1px)",
                  opacity: 0.8,
                  zIndex: 0,
                }}
              />

              <div
                style={{
                  zIndex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                }}
              >
                <FaReact size={60} color={"skyblue"} />
                <h4 style={{ color: "white", margin: 0, textAlign: "center" }}>
                  React JS
                </h4>
              </div>
            </div> */}
          </div>

          {/* <Chip Icon={VscServerProcess} label="Backend" iconColor="orange" />
          hono express nodejs bun mysql mongodb */}
          {/* <Chip Icon={MdLightbulbOutline} label="Mobile" iconColor="orange" />
          react native expo
          
          <Chip Icon={MdLightbulbOutline} label="Cloud" iconColor="orange" />
          gcp heroku github cloudflare worker pages
          <Chip Icon={MdLightbulbOutline} label="API" iconColor="orange" />
          restAPI graphql tRPC websocket pusher 
          <Chip Icon={MdLightbulbOutline} label="Microservices" iconColor="orange" />
          yarn pnpm 
          <Chip Icon={MdLightbulbOutline} label="Serverless" iconColor="orange" />
          superbase firebase
          <Chip Icon={MdLightbulbOutline} label="GraphQL" iconColor="orange" />
          apollo graphql 
       

          <Chip Icon={MdLightbulbOutline} label="Testing" iconColor="orange" />
          react-testing-library cypress jest 
          <Chip Icon={MdLightbulbOutline} label="Design" iconColor="orange" />
          figma photoshop illustrator
          <Chip Icon={MdLightbulbOutline} label="Utility" iconColor="orange" />
          tailwind css shadcn/ui
          <Chip Icon={MdLightbulbOutline} label="Version Control" iconColor="orange" />
          git github gitlab
          <Chip Icon={MdLightbulbOutline} label="CI/CD" iconColor="orange" />
          github actions vercel netlify
          <Chip Icon={MdLightbulbOutline} label="Containerization" iconColor="orange" />
          docker
          <Chip Icon={MdLightbulbOutline} label="Monitoring" iconColor="orange" />
          sentry logrocket
          <Chip Icon={MdLightbulbOutline} label="Collaboration" iconColor="orange" />
          notion slack discord
          <Chip Icon={MdLightbulbOutline} label="Project Management" iconColor="orange" />
          jira trello
          <Chip Icon={MdLightbulbOutline} label="Design Systems" iconColor="orange" />
          storybook
          <Chip Icon={MdLightbulbOutline} label="Code Quality" iconColor="orange" />
          eslint prettier
          <Chip Icon={MdLightbulbOutline} label="Documentation" iconColor="orange" />
          markdown
          <Chip Icon={MdLightbulbOutline} label="Deployment" iconColor="orange" />
          vercel netlify
          <Chip Icon={MdLightbulbOutline} label="Performance" iconColor="orange" />
          lighthouse
          <Chip Icon={MdLightbulbOutline} label="Security" iconColor="orange" />
          eslint prettier
          <Chip Icon={MdLightbulbOutline} label="Accessibility" iconColor="orange" />
          axe lighthouse
          <Chip Icon={MdLightbulbOutline} label="SEO" iconColor="orange" />
          react helmet
          <Chip Icon={MdLightbulbOutline} label="Analytics" iconColor="orange" />
          google analytics segment
          <Chip Icon={MdLightbulbOutline} label="Payment" iconColor="orange" />
          stripe paypal
          <Chip Icon={MdLightbulbOutline} label="Authentication" iconColor="orange" />
          auth0 clerk better-auth
          <Chip Icon={MdLightbulbOutline} label="DevOps" iconColor="orange" />
          terraform ansible
          <Chip Icon={MdLightbulbOutline} label="Security" iconColor="orange" />
          jwt oauth2 openid
          
          <Chip Icon={MdLightbulbOutline} label="Documentation" iconColor="orange" />

          <Chip Icon={MdLightbulbOutline} label="Code Quality" iconColor="orange" />
          clean code atomic design 

          <Chip Icon={MdLightbulbOutline} label="Collaboration" iconColor="orange" />
          agile scrum kanban
          <Chip Icon={MdLightbulbOutline} label="Agile" iconColor="orange" />

          <Chip Icon={MdLightbulbOutline} label="Continuous Learning" iconColor="orange" />
             adaptive learning
          <Chip Icon={MdLightbulbOutline} label="Innovation" iconColor="orange" />
          hono go sentry segment twilio stonly Tailwind CSS · shadcn/ui */}
        </div>
      </div>

      {/* <h2>Tech Stack · 2025</h2>
      <p>React.js · Storybook · Jest · Vite · MUI</p>
      <h2>This Year I'm Into / Currently Improving</h2>
      <p>TanStack · Hono · Go</p>
      <h2>Exploring / Giving a Chance To</h2>
      <p>Tailwind CSS · shadcn/ui</p> */}
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
