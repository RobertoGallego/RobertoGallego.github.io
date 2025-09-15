import logo from "../../assets/logos.png"
import logoDark from "../../assets/logoDark.png"
import useDarkMode from "../../hooks/useDarkMode"
import { Link } from "@tanstack/react-router"

const Logo = () => {
  const { isDarkMode } = useDarkMode()

  return (
    <Link to="/">
      <img src={isDarkMode ? logoDark : logo} alt="reve logo" />
    </Link>
  )
}

export default Logo
