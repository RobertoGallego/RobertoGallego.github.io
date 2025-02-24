import logo from "../../assets/logos.png"
import logoDark from "../../assets/logoDark.png"
import useDarkMode from "../../hooks/useDarkMode"

const Logo = () => {
  const { isDarkMode } = useDarkMode()

  return (
    <img
      src={isDarkMode ? logoDark : logo}
      alt="reve logo"
      className="menu-logo"
    />
  )
}

export default Logo
