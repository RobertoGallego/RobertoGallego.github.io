import { useTranslation } from "react-i18next"
import { FaArrowRight } from "react-icons/fa6"
import useDarkMode from "../../hooks/useDarkMode"
import coco from "../../assets/gif/35.gif"
import "./HeroSection.css"
import { useState } from "react"
import Dialog from "../Dialog/Dialog"
import { HiOutlineRocketLaunch } from "react-icons/hi2"
import { BiNetworkChart } from "react-icons/bi"
import { MdAutoGraph } from "react-icons/md"
import { PiGraphDuotone } from "react-icons/pi"
import { BiHappyBeaming } from "react-icons/bi"
import { BsEmojiHeartEyes } from "react-icons/bs"
import { MdOutlineEmojiEmotions } from "react-icons/md"
import { HiOutlineEmojiHappy } from "react-icons/hi"
import { Profile } from "../../assets"

const HeroSection = () => {
  const { isDarkMode } = useDarkMode()
  const [gifLoaded, setGifLoaded] = useState(false)
  const { t } = useTranslation()

  return (
    <div className="home-presentation">
      {/* <div
        className={!gifLoaded ? "skeleton-pulse" : ""}
        style={{
          borderRadius: 100,
          overflow: "hidden",
          width: 250,
          height: 150,
          marginBottom: 20,
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: isDarkMode ? "#1f1d4b" : "#762d20",
        }}
      >
        <div
          style={{
            borderRadius: 100,
            overflow: "hidden",
            width: 240,
            height: 140,
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            onLoad={() => setGifLoaded(true)}
            src={coco}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 100,
              objectFit: "cover",
              display: gifLoaded ? "block" : "none",
            }}
          />
        </div>
      </div> */}

      {/* {t("HeroSection.Description")} */}

      {/* <img
        onLoad={() => setGifLoaded(true)}
        src={coco}
        style={{
          width: 150,
          height: 150,
          borderRadius: 100,
          objectFit: "cover",
          display: gifLoaded ? "block" : "none",
        }}
      /> */}

      <div
        style={{
          borderRadius: 100,
          overflow: "hidden",
          backgroundColor: "#3d3834",
          width: 150,
          height: 150,
          marginBottom: 20,
          border: isDarkMode ? "4px solid #403d62" : "4px solid #efe9e9",
          outline: isDarkMode ? "2px solid #1a1734" : "2px solid #e2e2e2",
        }}
      >
        <img src={Profile} alt="Profile" />
      </div>

      <div
        style={{
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            alignSelf: "center",
            fontSize: 14,
            backgroundColor: isDarkMode ? "#403d62" : "#efe9e9",
            paddingBlock: 2,
            paddingInline: 10,
            borderRadius: 20,
            marginBottom: 15,
            fontWeight: 500,
            display: "flex",
            gap: 4,
            whiteSpace: "nowrap",
          }}
        >
          <HiOutlineRocketLaunch
            size={16}
            style={{
              marginTop: 2,
            }}
          />
          Welcome to my portfolio
        </p>
      </div>

      <h1 className="home-title" style={{}}>
        Crafting scalable, and user-friendly apps
      </h1>

      <p
        style={{
          marginTop: 15,
          fontSize: 20,
          textAlign: "center",
          fontFamily: "Poppins",
          color: isDarkMode ? "#cfcfd1" : "#181818",
          fontWeight: "500",
          maxWidth: 600,
        }}
      >
        Hi, I'm Roberto a software engineer focused on building responsive and
        performant web applications.
        {/* {t("HeroSection.Title")} */}
      </p>

      <div style={{ marginTop: 30, display: "flex" }}>
        <Dialog
          buttonClassName={`button-primary ${
            isDarkMode ? "button-primary-dark" : "button-primary-light"
          }`}
          buttonContent={
            <>
              {t("HeroSection.Button_Primary")} <FaArrowRight size={12} />
            </>
          }
          externalLink="https://www.linkedin.com/in/roberto-g-905753190/"
        />

        <Dialog
          buttonClassName={`button-secondary ${
            isDarkMode ? "button-secondary-dark" : "button-secondary-light"
          }`}
          buttonContent={t("HeroSection.Button_Secondary")}
          externalLink="https://www.linkedin.com/in/roberto-g-905753190/"
        />
      </div>
    </div>
  )
}

export default HeroSection
