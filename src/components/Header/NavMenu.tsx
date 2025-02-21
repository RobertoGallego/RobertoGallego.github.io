import NavItem from "./NavItem"

const NavMenu = () => {
  return (
    <ul className="menu-navigation">
      {[
        { label: "Home", number: "01" },
        { label: "Projects", number: "02" },
        { label: "Contact", number: "03" },
      ].map((item) => (
        <NavItem label={item.label} number={item.number} key={item.number} />
      ))}
    </ul>
  )
}

export default NavMenu
