import Logo from "./Logo"
import NavMenu from "./NavMenu"
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <Logo />

      <NavMenu />
    </div>
  )
}

export default Header
