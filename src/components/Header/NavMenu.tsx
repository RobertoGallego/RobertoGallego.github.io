import NavItem from "./NavItem"

const NavMenu = () => {
  return (
    <ul className="menu-navigation">
      {[
        { label: "Home", number: "01" },
        { label: "Portfolio", number: "03" },
        { label: "About", number: "02" },
        { label: "Contact", number: "04" },
      ].map((item) => (
        <NavItem label={item.label} number={item.number} key={item.number} />
      ))}
    </ul>
  )
}

export default NavMenu
