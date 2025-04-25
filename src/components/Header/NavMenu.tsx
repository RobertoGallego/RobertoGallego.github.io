import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa6"
import { MdAlternateEmail } from "react-icons/md"
import "./Header.css"

const NavMenu = () => {
  return (
    <ul className="navbar">
      <li className="navbar-item">
        <a
          href="https://www.linkedin.com/in/roberto-gallego-905753190/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn size={16} />
        </a>
      </li>

      <li className="navbar-item">
        <a
          href="https://github.com/RobertoGallego"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubAlt size={16} />
        </a>
      </li>

      <li className="navbar-item">
        <a
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
