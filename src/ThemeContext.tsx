import { createContext, useEffect, useState } from "react"

export type Theme = "light" | "dark" | "auto"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const getInitialTheme = (): Theme =>
    (localStorage.getItem("theme") as Theme) ?? "auto"

  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    if (theme === "auto") {
      document.documentElement.removeAttribute("data-theme")

      localStorage.removeItem("theme")
    } else {
      document.documentElement.setAttribute("data-theme", theme || "light")
    }
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
