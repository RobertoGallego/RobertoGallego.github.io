import HeaderLogo from "./HeaderLogo"
import NavMenu from "./NavMenu"
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <HeaderLogo />

      <NavMenu />
    </div>
  )
}

export default Header
