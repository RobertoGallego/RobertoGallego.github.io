import { useTranslation } from "react-i18next"

import { album } from "@/assets"
import { useDarkMode } from "@/hooks"

import { FaArrowRight } from "react-icons/fa6"
import { HiOutlineRocketLaunch } from "react-icons/hi2"

import Dialog from "../Dialog/Dialog"
import "./HeroSection.css"

const HeroSection = () => {
  const { isDarkMode } = useDarkMode()
  const theme = isDarkMode ? "dark" : "light"

  const { t } = useTranslation()

  return (
    <div className="hero-section-wrapper">
      <div className={`hero-avatar ${theme}`}>
        <img src={album.Profile} alt="Profile" />
      </div>

      <div className="hero-chip">
        <p className={`hero-chip-text ${theme}`}>
          <HiOutlineRocketLaunch size={16} />

          {t("HeroSection.Chip")}
        </p>
      </div>

      <h1 className={`hero-title ${theme}`}>
        {t("HeroSection.Title_Primary")}
      </h1>

      <p className={`hero-subtitle ${theme}`}>
        {t("HeroSection.Title_Secondary")}
      </p>

      <div className="hero-buttons">
        <Dialog
          buttonClassName={`button-primary ${theme}`}
          buttonContent={
            <>
              {t("HeroSection.Button_Primary")}

              <FaArrowRight size={12} />
            </>
          }
          externalLink="https://www.linkedin.com/in/roberto-g-905753190/"
        />

        <Dialog
          buttonClassName={`button-secondary ${theme}`}
          buttonContent={t("HeroSection.Button_Secondary")}
          externalLink="https://www.linkedin.com/in/roberto-g-905753190/"
        />
      </div>
    </div>
  )
}

export default HeroSection
