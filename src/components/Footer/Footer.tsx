import { useTranslation } from "react-i18next"

import { IoMdArrowUp } from "react-icons/io"

import LanguageButton from "../LanguagesButton/LanguagesButton"
import "./Footer.css"
import DarkmodeButton from "../DarkmodeButton/DarkmodeButton"

const Footer = () => {
  const { t } = useTranslation()

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

        <DarkmodeButton className="theme-toggle-button" />

        <button
          className="back-to-top-button"
          onClick={handleBackToTopClick}
          aria-label="back-to-top"
        >
          <p>{t("Button.Back_To_Top")}</p>

          <IoMdArrowUp size={18} />
        </button>
      </div>
    </div>
  )
}

export default Footer
