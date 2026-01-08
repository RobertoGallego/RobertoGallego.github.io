import { Link } from "@tanstack/react-router"

import { logo } from "@/assets"
import { useDarkMode } from "@/hooks"
import LazyImg from "../LazyImg/LazyImg"

const HeaderLogo = () => {
  const { isDarkMode } = useDarkMode()

  const logoSrc = isDarkMode ? logo.LogoDark : logo.Logos

  return (
    <Link to="/">
      <LazyImg src={logoSrc} alt="reve logo" borderRadius={4} />
    </Link>
  )
}

export default HeaderLogo
