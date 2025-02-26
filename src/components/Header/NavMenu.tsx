import { useTranslation } from "react-i18next"
import NavItem from "./NavItem"

const NavMenu = () => {
  const { t } = useTranslation()
  
  return (
    <ul className="menu-navigation">
      {[
        { label: t("Home"),number: "01" },
        { label: t( "Projects"), number: "02" },
        { label: t( "Contact"), number: "03" },
      ].map((item) => (
        <NavItem label={item.label} number={item.number} key={item.number} />
      ))}
    </ul>
  )
}

export default NavMenu
