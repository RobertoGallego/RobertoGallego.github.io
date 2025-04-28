// import { FaQuoteRight } from "react-icons/fa"
import Chip from "../../components/Chip/Chip"
import ninjaco from "../../assets/ninjaco.png"
import { useState } from "react"
import useDarkMode from "../../hooks/useDarkMode"
import { useTranslation } from "react-i18next"
import "./Home.css"
import { FaMapMarkerAlt } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa"
import logo42 from "../../assets/42logo.png"
import logo42w from "../../assets/42logow.png"

import { useTheme } from "../../useTheme"
import { VscServerProcess } from "react-icons/vsc"
import { TbDeviceDesktopCode } from "react-icons/tb"
import { IoMdCloudOutline } from "react-icons/io"
import { FaMasksTheater } from "react-icons/fa6"
import { VscTools } from "react-icons/vsc"
import { LiaPenNibSolid } from "react-icons/lia"
import { PiBinocularsFill } from "react-icons/pi"
import { MdOutlineRoomService } from "react-icons/md"
import { FaArrowTrendUp } from "react-icons/fa6"

import StackCategoryContent from "../../components/StackCategory"

const Home = () => {
  const { isDarkMode } = useDarkMode()
  const { t } = useTranslation()
  const { theme } = useTheme()
  const [categoryNumber, setCategory] = useState(1)

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
              status={categoryNumber === 1}
              onClick={() => {
                console.log(1)
                setCategory(1)
              }}
            />

            <Chip
              Icon={VscServerProcess}
              label="Backend"
              iconColor="Green"
              status={categoryNumber === 2}
              onClick={() => {
                console.log(2)
                setCategory(2)
              }}
            />

            <Chip
              Icon={FaMasksTheater}
              label="Testing & QA"
              iconColor="DeepSkyBlue"
              status={categoryNumber === 3}
              onClick={() => {
                console.log(3)
                setCategory(3)
              }}
            />

            <Chip
              Icon={IoMdCloudOutline}
              status={categoryNumber === 4}
              label="Cloud"
              onClick={() => setCategory(4)}
              iconColor="Gold"
            />

            <Chip
              Icon={LiaPenNibSolid}
              status={categoryNumber === 5}
              label="Design & UX"
              onClick={() => {
                setCategory(5)
              }}
              iconColor="Olive"
            />

            <Chip
              Icon={VscTools}
              status={categoryNumber === 6}
              label="Productivity Tools"
              iconColor="purple"
              onClick={() => {
                setCategory(6)
              }}
            />

            <Chip
              Icon={PiBinocularsFill}
              status={categoryNumber === 7}
              label="R&D"
              onClick={() => {
                setCategory(7)
              }}
              iconColor="brown"
            />

            <Chip
              Icon={FaArrowTrendUp}
              status={categoryNumber === 8}
              label="Currently Improving"
              iconColor="Teal"
              onClick={() => {
                setCategory(8)
              }}
            />

            <Chip
              Icon={MdOutlineRoomService}
              status={categoryNumber === 9}
              label="Services"
              iconColor="Salmon"
              onClick={() => {
                setCategory(9)
              }}
            />
          </div>

          <StackCategoryContent categoryNumber={categoryNumber} />

          {/* <TechCard Icon={SiTailwindcss} label="Tailwind CSS" iconColor="#38bdf8" /> */}
          {/* <TechCard Icon={SiStyledcomponents} label="Styled Components" iconColor="#db7093" /> */}
          {/* <TechCard Icon={SiFigma} label="Figma" iconColor="#f24e1e" /> */}
          {/* <TechCard Icon={SiAdobephotoshop} label="Photoshop" iconColor="#31a8ff" /> */}
          {/* <TechCard Icon={SiAdobeillustrator} label="Illustrator" iconColor="#ff9a00" /> */}
          {/* <TechCard Icon={SiAdobeaftereffects} label="After Effects" iconColor="#9999ff" /> */}
          {/* <TechCard Icon={SiAdobexd} label="Adobe XD" iconColor="#ff61f6" /> */}
          {/* <TechCard Icon={SiSketch} label="Sketch" iconColor="#f7b500" /> */}
          {/* <TechCard Icon={SiInvision} label="InVision" iconColor="#ff3366" /> */}
          {/* <TechCard Icon={SiFramer} label="Framer" iconColor="#0acf83" /> */}
          {/* <TechCard Icon={SiWebflow} label="Webflow" iconColor="#00c4cc" /> */}
          {/* <TechCard Icon={SiZeplin} label="Zeplin" iconColor="#e9e9e9" /> */}
          {/* <TechCard Icon={SiNotion} label="Notion" iconColor="#000000" /> */}
          {/* <TechCard Icon={SiSlack} label="Slack" iconColor="#4a154b" /> */}
          {/* <TechCard Icon={SiDiscord} label="Discord" iconColor="#7289da" /> */}
          {/* <TechCard Icon={SiTrello} label="Trello" iconColor="#0079bf" /> */}
          {/* <TechCard Icon={SiJira} label="Jira" iconColor="#0052cc" /> */}
          {/* <TechCard Icon={SiGithub} label="GitHub" iconColor="#181717" /> */}
          {/* <TechCard Icon={SiGitlab} label="GitLab" iconColor="#fc6d26" /> */}
          {/* <TechCard Icon={SiBitbucket} label="Bitbucket" iconColor="#0052cc" /> */}
          {/* <TechCard Icon={SiPostman} label="Postman" iconColor="#ff6c37" /> */}
          {/* <TechCard Icon={SiInsomnia} label="Insomnia" iconColor="#4f5b93" /> */}

          {/* 
            twilio mailgun looker new reliq
            segment amplitude stonly Notion
            Trello

            sentry slack trello miro skalydraw  


            microservices  DesignSystem

            apollo typescript es6 react html 5  js typescrip webpack eslint lodash context 
            react native HTMLCSS Preact
            tamstack query Table Router Zod i18n
            Prettier ReactHookForm StyledComponents
            Motion Storybook Material-UI(MUI)
            Expo Vite
            
            yarn workspace pnpm  k3s  git gitlab docker compose docker cloudflare herioku github pages
            
            electron

            node graphql restAPI Express Supabase
            postgresql mysql mongodb redis Hono Go

            wordpress magento prestashop
            Shopify drupal

            Photoshop ilustrator adobe premier pro Figma 
            
            Cypress Jest TestingLibrary playwright
            
            vscode AndroidStudio 
            
            Tailwind CSS · shadcn

            Postman Insomnia Monorepo
            Obsidian   */}

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
          <Chip Icon={MdLightbulbOutline} label="Performance" iconColor="orange" />
          vercel netlify
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
