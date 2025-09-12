import { useTranslation } from "react-i18next"
import { FaArrowRight } from "react-icons/fa6"
import useDarkMode from "../../hooks/useDarkMode"
import "./HeroSection.css"
import Dialog from "../Dialog/Dialog"
import { HiOutlineRocketLaunch } from "react-icons/hi2"

import { Profile } from "../../assets"

const HeroSection = () => {
  const { isDarkMode } = useDarkMode()
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
          {t("HeroSection.Chip")}
        </p>
      </div>

      <h1 className="home-title" style={{}}>
        {t("HeroSection.Title_Primary")}
      </h1>

      <p
        className="home-subtitle"
        style={{
          color: isDarkMode ? "#cfcfd1" : "#181818",
        }}
      >
        {t("HeroSection.Title_Secondary")}
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
