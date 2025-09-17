import { useTranslation } from "react-i18next"

import { useDarkMode, useTheme } from "@/hooks"
import { flag, album, logo } from "@/assets"

import { FaMapMarkerAlt } from "react-icons/fa"

import "./About.css"

const About = () => {
  const { isDarkMode } = useDarkMode()
  const { theme } = useTheme()
  const { t } = useTranslation()

  const logoSrc =
    theme === "dark" || (theme === "auto" && isDarkMode)
      ? logo.Logo42w
      : logo.Logo42

  return (
    <div className={`about-wrapper ${isDarkMode ? "dark" : "light"}`}>
      <div className="about-container">
        <div className="about-header">
          <div className={`about-avatar ${isDarkMode ? "dark" : "light"}`}>
            <img src={album.Perfil} alt="Perfil" />
          </div>

          <div>
            <h3>Roberto GALLEGO</h3>

            <p>{t("About.Title")}</p>

            <p>{t("About.Subtitle")}</p>
          </div>
        </div>

        <p className="about-text">{t("About.Description_A")}</p>

        <p className="about-text">{t("About.Description_B")}</p>

        <div className="about-info">
          <div className="about-location">
            <FaMapMarkerAlt />

            <p>Rennes, France</p>

            <img src={flag.FranceFlag} alt="Spanish" className="about-flag" />
          </div>

          <div className="about-ecole">
            <img
              src={isDarkMode ? logoSrc : logo.Logo42}
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
