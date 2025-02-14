interface NavItemProps {
  label: string
  number: string
}

const NavItem = ({ label, number }: NavItemProps) => {
  return (
    <div
      style={{
        display: "flex",
        paddingBlock: 10,
      }}
    >
      <p className="header-navigation">{label}</p>
      <p className="header-navigation-number">{number}</p>
    </div>
  )
}

export default NavItem
