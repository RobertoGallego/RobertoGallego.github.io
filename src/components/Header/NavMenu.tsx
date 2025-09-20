import { useDarkMode } from "@/hooks"

import { MdAlternateEmail } from "react-icons/md"
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa6"

import Dialog from "../Dialog/Dialog"
import "./Header.css"
import DarkmodeButton from "../DarkmodeButton/DarkmodeButton"

const navItems = [
  {
    href: "https://www.linkedin.com/in/roberto-g-905753190",
    icon: <FaLinkedinIn size={16} />,
  },
  {
    href: "https://github.com/RobertoGallego",
    icon: <FaGithubAlt size={16} />,
  },
  {
    href: "mailto:rvgallego@hotmail.com",
    icon: <MdAlternateEmail size={16} />,
  },
]

const NavMenu = () => {
  const { isDarkMode } = useDarkMode()

  return (
    <ul className="navbar">
      {navItems.map((item) => (
        <li
          key={item.href}
          className={`navbar-item-${isDarkMode ? "dark" : "light"}`}
        >
          <Dialog externalLink={item.href} buttonContent={item.icon} />
        </li>
      ))}

      <li className={`navbar-item-${isDarkMode ? "dark" : "light"}`}>
        <DarkmodeButton hideLabel />
      </li>
    </ul>
  )
}

export default NavMenu
