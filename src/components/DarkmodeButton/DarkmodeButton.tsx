import { JSX } from "react"

import { useTheme } from "@/hooks"
import { Theme } from "@/types"

import { RiSettings2Line } from "react-icons/ri"
import { MdOutlineDarkMode } from "react-icons/md"
import { ImSun } from "react-icons/im"

import "./DarkmodeButton.css"

interface DarkmodeButtonProps {
  hideLabel?: boolean
  className?: string
}

const DarkmodeButton = ({
  hideLabel = false,
  className,
}: DarkmodeButtonProps) => {
  const { theme, setTheme } = useTheme()

  const handleThemeToggle = () => {
    const themes: Theme[] = ["auto", "light", "dark"]
    const nextTheme = themes[(themes.indexOf(theme) + 1) % themes.length]
    setTheme(nextTheme)
  }

  const themeIcons: Record<string, JSX.Element> = {
    light: <ImSun size={16} />,
    dark: <MdOutlineDarkMode size={16} />,
    auto: <RiSettings2Line size={16} />,
  }

  return (
    <button
      className={className}
      onClick={handleThemeToggle}
      aria-label="toggle-theme"
    >
      {themeIcons[theme]}

      {!hideLabel && <p className="theme-label">{theme}</p>}
    </button>
  )
}

export default DarkmodeButton
