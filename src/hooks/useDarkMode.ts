import { useContext, useEffect, useState } from "react"
import ThemeContext from "../ThemeContext"

const useDarkMode = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error("useDarkMode must be used within a ThemeProvider")
  }

  const { theme } = context
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (theme === "dark") return true
    if (theme === "light") return false
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  })

  useEffect(() => {
    if (theme === "auto") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

      const handleChange = (e: MediaQueryListEvent) => {
        setIsDarkMode(e.matches)
      }

      setIsDarkMode(mediaQuery.matches)
      mediaQuery.addEventListener("change", handleChange)

      return () => mediaQuery.removeEventListener("change", handleChange)
    } else {
      setIsDarkMode(theme === "dark")
    }
  }, [theme])

  return { isDarkMode }
}

export default useDarkMode
