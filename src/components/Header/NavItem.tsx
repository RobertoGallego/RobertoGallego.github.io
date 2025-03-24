interface NavItemProps {
  label: string
  number: string
}

const NavItem = ({ label }: NavItemProps) => {
  const handleClick = () => {
    window.location.href = "mailto:rvgallego@hotmail.com"
  }

  if (label === "Contact")
    return (
      <button onClick={handleClick} className="header-navigation">
        {label}
      </button>
    )

  if (label === "Home")
    return (
      <button>
        <a
          href="/"
          className="header-navigation"
          style={{
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          {label}
        </a>
      </button>
    )

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
