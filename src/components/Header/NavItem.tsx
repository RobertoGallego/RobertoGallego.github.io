interface NavItemProps {
  label: string
  number: string
}

const NavItem = ({ label, number }: NavItemProps) => {
  return (
    <li
      style={{
        display: "flex",
        paddingBlock: 10,
      }}
    >
      <p className="header-navigation">{label}</p>
      {/* <p className="header-navigation-number">{number}</p> */}
    </li>
  )
}

export default NavItem
