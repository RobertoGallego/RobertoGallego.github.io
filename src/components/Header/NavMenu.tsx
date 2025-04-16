import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa6"
import { MdAlternateEmail } from "react-icons/md";

const NavMenu = () => {
  return (
    <ul className="menu-navigation">
      <div
        style={{
          display: "flex",
          alignItems: "end",
          gap: 10,
          padding: 10,
        }}
      >
        <a
          href="https://www.linkedin.com/in/roberto-gallego-905753190/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn
            size={14}
            style={{
              alignSelf: "center",
              alignContent: "center",
              textAlign: "center",
            }}
          />
        </a>

        <a
          href="https://github.com/RobertoGallego"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubAlt
            size={14}
            style={{
              alignSelf: "center",
              alignContent: "center",
              textAlign: "center",
            }}
          />
        </a>

        <a
          href="mailto:rvgallego@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdAlternateEmail
            size={14}
            style={{
              alignSelf: "center",
              alignContent: "center",
              textAlign: "center",
            }}
          />
        </a>
      </div>
    </ul>
  )
}

export default NavMenu
