import { Link } from "@tanstack/react-router"

import { logo } from "@/assets"
import { useDarkMode } from "@/hooks"

const HeaderLogo = () => {
  const { isDarkMode } = useDarkMode()

  const logoSrc = isDarkMode ? logo.LogoDark : logo.Logos

  return (
    <Link to="/">
      <img src={logoSrc} alt="reve logo" />
    </Link>
  )
}

export default HeaderLogo
