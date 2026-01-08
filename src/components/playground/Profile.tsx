import "./Profile.css"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import pilot from "./assets/pilot.svg"
import LazyImg from "../LazyImg/LazyImg"

const Profile = () => {
  return (
    <div className="profile--card">
      <div className="profile--image-container">
        <LazyImg className="profile--image" src={pilot} alt="profile" />
      </div>

      <div className="profile--text">
        <h3 className="profile--title">Roberto Gallego</h3>
        <p className="profile--subtitle">Software Engineer</p>

        <div className="profile--social">
          <FaLinkedinIn size={18} className="profile--icon" />
          <FaGithub size={18} className="profile--icon" />
          <FaXTwitter size={18} className="profile--icon" />
        </div>
      </div>
    </div>
  )
}

export default Profile
