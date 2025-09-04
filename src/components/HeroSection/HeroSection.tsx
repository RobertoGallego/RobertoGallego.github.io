import { useTranslation } from "react-i18next"
import { FaArrowRight } from "react-icons/fa6"
import useDarkMode from "../../hooks/useDarkMode"
import coco from "../../assets/gif/30.gif"
import "./HeroSection.css"
import { useState } from "react"
import Dialog from "../Dialog/Dialog"

const HeroSection = () => {
  const { isDarkMode } = useDarkMode()
  const [gifLoaded, setGifLoaded] = useState(false)
  const { t } = useTranslation()

  return (
    <div className="home-presentation">
      <div
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
      </div>

      <h1 className="home-title">{t("Roberto Gallego")}</h1>

      <h3
        style={{
          marginTop: 15,
          textAlign: "center",
          fontFamily: "Poppins",
        }}
      >
        {t("HeroSection.Title")}
      </h3>

      <p
        style={{
          maxWidth: 500,
          textAlign: "center",
          marginTop: 5,
          fontSize: 16,
        }}
      >
        {t("HeroSection.Description")}
      </p>

      <div style={{ marginTop: 20, display: "flex" }}>
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
