import { useTranslation } from "react-i18next"

import { IoMdArrowUp } from "react-icons/io"

import LanguageButton from "../LanguagesButton/LanguagesButton"
import "./Footer.css"
import DarkmodeButton from "../DarkmodeButton/DarkmodeButton"
import useDarkMode from "@/hooks/useDarkMode"

const Footer = () => {
  const { t } = useTranslation()
  const { isDarkMode } = useDarkMode()
  const theme = isDarkMode ? "dark" : "light"

  const handleBackToTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="footer">
      <div>
        <p className="footer-text">{t("Copyright")}</p>
      </div>

      <div className="footer-buttons">
        <LanguageButton />

        <DarkmodeButton className={`theme-toggle-button ${theme}`} />

        <button
          className={`back-to-top-button ${theme}`}
          onClick={handleBackToTopClick}
          aria-label="back-to-top"
        >
          <IoMdArrowUp size={18} />
        </button>
      </div>
    </div>
  )
}

export default Footer
