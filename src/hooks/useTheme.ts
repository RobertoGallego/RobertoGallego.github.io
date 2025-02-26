import { useEffect, useState } from "react"

const useTheme = () => {
  const getPreferredTheme = () => {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme) return storedTheme
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  }

  const [theme, setTheme] = useState(getPreferredTheme)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  return { theme, setTheme }
}

export default useTheme
