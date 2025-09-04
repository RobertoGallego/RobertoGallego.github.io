import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa6"
import { MdAlternateEmail } from "react-icons/md"
import "./Header.css"
import useDarkMode from "../../hooks/useDarkMode"
import Dialog from "../Dialog/Dialog"

const NavMenu = () => {
  const { isDarkMode } = useDarkMode()

  return (
    <ul className="navbar">
      <li className={`navbar-item-${isDarkMode ? "dark" : "light"}`}>
        <Dialog
          externalLink="https://www.linkedin.com/in/roberto-g-905753190"
          buttonContent={<FaLinkedinIn size={16} />}
        />
      </li>

      <li className={`navbar-item-${isDarkMode ? "dark" : "light"}`}>
        <Dialog
          externalLink="https://github.com/RobertoGallego"
          buttonContent={<FaGithubAlt size={16} />}
        />
      </li>

      <li className={`navbar-item-${isDarkMode ? "dark" : "light"}`}>
        <Dialog
          externalLink="mailto:rvgallego@hotmail.com"
          buttonContent={<MdAlternateEmail size={16} />}
        />
      </li>
    </ul>
  )
}

export default NavMenu
