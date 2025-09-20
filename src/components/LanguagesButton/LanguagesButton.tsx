import { useTranslation } from "react-i18next"

import { useLanguage } from "@/hooks"
import { flag } from "@/assets"

import "./LanguagesButton.css"

interface LanguageButtonProps {
  disabledLabel?: boolean
}

const LanguageButton = ({ disabledLabel = false }: LanguageButtonProps) => {
  const { language, setLanguage } = useLanguage()
  const {
    i18n: { changeLanguage },
  } = useTranslation()

  const flags: Record<string, { src: string; alt: string }> = {
    fr: { src: flag.FranceFlag, alt: "French" },
    en: { src: flag.UKFlag, alt: "English" },
    es: { src: flag.SpainFlag, alt: "Spanish" },
  }

  const handleLanguageToggle = () => {
    const languages = ["fr", "en", "es"]
    const nextLanguage =
      languages[(languages.indexOf(language) + 1) % languages.length]
    changeLanguage(nextLanguage)
    setLanguage(nextLanguage)
  }

  return (
    <button
      className="language-toggle-button"
      onClick={handleLanguageToggle}
      aria-label="toggle-language"
    >
      <img
        src={flags[language].src}
        alt={flags[language].alt}
        style={{ width: 12 }}
      />

      {!disabledLabel && (
        <p style={{ textTransform: "capitalize" }}>{language}</p>
      )}
    </button>
  )
}

export default LanguageButton
