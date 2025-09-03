import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa6"
import { MdAlternateEmail } from "react-icons/md"
import "./Header.css"
import useDarkMode from "../../hooks/useDarkMode"

const NavMenu = () => {
  const { isDarkMode } = useDarkMode()

  return (
    <ul className="navbar">
      <li className={`navbar-item-${isDarkMode ? "dark" : "light"}`}>
        <a
          href="https://www.linkedin.com/in/roberto-g-905753190"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn size={16} />
        </a>
      </li>

      <li className={`navbar-item-${isDarkMode ? "dark" : "light"}`}>
        <a
          // className="navbar-link"
          href="https://github.com/RobertoGallego"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubAlt size={16} />
        </a>
      </li>

      <li className={`navbar-item-${isDarkMode ? "dark" : "light"}`}>
        <a
          // className="navbar-link"
          href="mailto:rvgallego@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdAlternateEmail size={16} />
        </a>
      </li>
    </ul>
  )
}

export default NavMenu
