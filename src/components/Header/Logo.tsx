import logo from "../../assets/logos.png"
import logoDark from "../../assets/logoDark.png"
import useDarkMode from "../../hooks/useDarkMode"
import { useTheme } from "../../useTheme"

const Logo = () => {
  const { isDarkMode } = useDarkMode()
  const { theme } = useTheme()

  const logoSrc =
    theme === "light"
      ? logo
      : theme === "dark" || (theme === "system" && isDarkMode)
      ? logoDark
      : logo

  return <img src={logoSrc} alt="reve logo" />
}

export default Logo
