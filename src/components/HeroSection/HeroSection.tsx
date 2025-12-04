import { useTranslation } from "react-i18next"

import { logo } from "@/assets"
import { useDarkMode } from "@/hooks"

import { HiOutlineRocketLaunch } from "react-icons/hi2"

import { FaAward, FaCode, FaPaperPlane } from "react-icons/fa"

import Dialog from "../Dialog/Dialog"
import "./HeroSection.css"

const HeroSection = () => {
  const { isDarkMode } = useDarkMode()
  const theme = isDarkMode ? "dark" : "light"
  const { t } = useTranslation()

  return (
    <div className="hero-section-wrapper">
      <div className="hero-grid" aria-hidden="true" />

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

      <div className={`hero-stats ${theme}`}>
        <div className="stat-item">
          <FaAward size={20} />
          <div>
            <strong>5+</strong>
            <span>Years Experience</span>
          </div>
        </div>

        <div className="stat-item">
          <FaCode size={20} />
          <div>
            <strong>10+</strong>
            <span>Tech Stack</span>
          </div>
        </div>

        <div className="stat-item">
          <img
            src={isDarkMode ? logo.Logo42w : logo.Logo42}
            alt="42"
            className="about-ecole-logo"
          />

          <div>
            <strong>École 42</strong>
            <span>Alumni</span>
          </div>
        </div>

        <Dialog
          buttonClassName="stat-item"
          buttonContent={
            <>
              <FaPaperPlane size={18} />
              <div>
                <strong>Available to Work</strong>
                <span>Contact Me</span>
              </div>
            </>
          }
          externalLink="https://www.linkedin.com/in/roberto-g-905753190/"
        />
      </div>
    </div>
  )
}

export default HeroSection
