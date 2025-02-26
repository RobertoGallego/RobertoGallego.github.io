import { useEffect, useState } from "react"

const useLanguage = () => {
  const getSavedLanguage = () => {
    return localStorage.getItem("language") || "en"
  }

  const [language, setLanguage] = useState(getSavedLanguage)

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  return { language, setLanguage }
}

export default useLanguage
