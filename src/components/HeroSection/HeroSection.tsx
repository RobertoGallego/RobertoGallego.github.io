import { useTranslation } from "react-i18next"
import { FaArrowRight } from "react-icons/fa6"
import useDarkMode from "../../hooks/useDarkMode"
import coco from "../../assets/gif/30.gif"
import "./HeroSection.css"

const HeroSection = () => {
  const { isDarkMode } = useDarkMode()
  const { t } = useTranslation()

  return (
    <div className="home-presentation">
      <div
        className="home-presentation-image"
        style={{
          borderRadius: 100,
          overflow: "hidden",
          width: 150,
          height: 150,
          marginBottom: 20,
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <div
          style={{
            borderRadius: 100,
            overflow: "hidden",
            width: 140,
            height: 140,
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={coco}
            alt="Profile"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 100,
              objectFit: "cover",
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
        <a
          href="https://www.linkedin.com/in/roberto-g-905753190/"
          target="_blank"
          rel="noopener noreferrer"
          className={`button-primary ${
            isDarkMode ? "button-primary-dark" : "button-primary-light"
          }`}
        >
          {t("HeroSection.Button_Primary")} <FaArrowRight size={12} />
        </a>

        <a
          className={`button-secondary ${
            isDarkMode ? "button-secondary-dark" : "button-secondary-light"
          }`}
          href="https://www.linkedin.com/in/roberto-g-905753190/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("HeroSection.Button_Secondary")}
        </a>
      </div>
    </div>
  )
}

export default HeroSection
