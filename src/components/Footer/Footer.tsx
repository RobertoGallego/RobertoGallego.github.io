import "./Footer.css"
import { useTranslation } from "react-i18next"
import useLanguage from "../../hooks/useLanguage"
import { useTheme } from "../../useTheme"
import { Theme } from "../../ThemeContext"
import { IoMdArrowUp } from "react-icons/io"
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md"
import { RiSettings2Line } from "react-icons/ri"
import { FranceFlag, SpainFlag, UKFlag } from "../../assets"

const Footer = () => {
  const { theme, setTheme } = useTheme()
  const { language, setLanguage } = useLanguage()

  const {
    t,
    i18n: { changeLanguage },
  } = useTranslation()

  const handleThemeToggle = () => {
    const themes: Theme[] = ["auto", "light", "dark"]
    const nextTheme = themes[(themes.indexOf(theme) + 1) % themes.length]
    setTheme(nextTheme)
  }

  const handleLanguageToggle = () => {
    const languages = ["fr", "en", "es"]
    const nextLanguage =
      languages[(languages.indexOf(language) + 1) % languages.length]
    changeLanguage(nextLanguage)
    setLanguage(nextLanguage)
  }

  const handleBackToTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="footer">
      <div>
        <p className="footer-text">{t("Copyright")}</p>
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <button
          className="language-toggle-button"
          onClick={handleLanguageToggle}
          aria-label="toggle-language"
        >
          {language === "fr" && (
            <img src={FranceFlag} alt="French" style={{ width: 12 }} />
          )}
          {language === "en" && (
            <img src={UKFlag} alt="English" style={{ width: 12 }} />
          )}
          {language === "es" && (
            <img src={SpainFlag} alt="Spanish" style={{ width: 12 }} />
          )}

          <p style={{ textTransform: "capitalize" }}>{language}</p>
        </button>

        <button
          className="theme-toggle-button"
          onClick={handleThemeToggle}
          aria-label="toggle-theme"
        >
          {theme === "light" && <MdOutlineLightMode size={18} />}
          {theme === "dark" && <MdOutlineDarkMode size={18} />}
          {theme === "auto" && <RiSettings2Line size={18} />}
          <p style={{ textTransform: "capitalize" }}>{theme}</p>
        </button>

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
