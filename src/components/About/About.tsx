import { useTranslation } from "react-i18next"

import { useDarkMode } from "@/hooks"
import { flag, album, logo } from "@/assets"

import { FaMapMarkerAlt } from "react-icons/fa"

import "./About.css"

const About = () => {
  const { isDarkMode } = useDarkMode()
  const { t } = useTranslation()

  return (
    <div className={`about-wrapper ${isDarkMode ? "dark" : "light"}`}>
      <div className="about-container">
        <div className="about-header">
          <div className={`about-avatar ${isDarkMode ? "dark" : "light"}`}>
            <img
              src={album.Perf}
              alt="Perfil"
              style={{
                marginTop: "-18px",
              }}
            />
          </div>

          <div>
            <h1
              style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                opacity: 0.6,
              }}
            >
              ABOUT ME
            </h1>

            <p
              style={{
                maxWidth: 700,
                fontSize: "1.5rem",
                fontWeight: 500,
                lineHeight: 1.5,
              }}
            >
              Roberto Gallego
            </p>

            <p
              style={{
                fontWeight: "500",
              }}
            >
              {t("About.Title")} | Craftsman
            </p>
          </div>
        </div>

        <p className="about-text">{t("About.Description_A")}</p>

        {/* <p className="about-text">{t("About.Description_B")}</p> */}

        <div className="about-info">
          <div className="about-location">
            <FaMapMarkerAlt />

            <p>Rennes, France</p>

            <img src={flag.FranceFlag} alt="Spanish" className="about-flag" />
          </div>

          <div className="about-ecole">
            <img
              src={isDarkMode ? logo.Logo42w : logo.Logo42}
              alt="42"
              className="about-ecole-logo"
            />

            <p>École 42 Paris | Alumni</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
