import { FaMapMarkerAlt } from "react-icons/fa"
import { useTheme } from "../../useTheme"
import useDarkMode from "../../hooks/useDarkMode"
import logo42 from "../../assets/42logo.png"
import logo42w from "../../assets/42logow.png"
import ninjaco from "../../assets/ninjaco.png"

const About = () => {
  const { isDarkMode } = useDarkMode()
  const { theme } = useTheme()

  const logoSrc =
    theme === "light"
      ? logo42
      : theme === "dark" || (theme === "system" && isDarkMode)
      ? logo42w
      : logo42

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#181816",
        width: "100%",
        marginBottom: 100,
        padding: 60,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 20,
          flexDirection: "column",
          // maxWidth: 800,
          width: "100%",
          borderRadius: 5,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 20,
            alignItems: "center",
          }}
        >
          <div
            style={{
              borderRadius: 100,
              overflow: "hidden",
              backgroundColor: "#3d3834",
              width: 80,
              height: 80,
              border: "4px solid #0f0f0e",
              outline: "1px solid #fff",
            }}
          >
            <img src={ninjaco} alt="Profile" />
          </div>
          <div>
            <h3>Roberto GALLEGO</h3>
            <p>Software Engineer</p>
            <p>Digital Craftsman ( Artist / Developer / Designer )</p>
          </div>
        </div>
        <p style={{ maxWidth: 700 }}>
        
          I am a seasoned graphic designer with over 14 years of experience in
          creating visually appealing and user-centric designs. My expertise
          spans across UI design, design systems, and custom illustrations,
          helping clients bring their digital visions to life.
        </p>
        
        <p style={{ maxWidth: 700 }}>
          Currently, I work remotely for Notion, where I design template UIs,
          convert them into HTML and CSS, and provide comprehensive support to
          our users. I am passionate about crafting elegant and functional
          designs that enhance user experiences.
        </p>

        <div style={{ display: "flex", gap: 20 }}>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <FaMapMarkerAlt />
            <p>Rennes, France 🇫🇷 </p>
          </div>

          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <img src={logoSrc} alt="42" style={{ width: 21 }} />
            <p>École 42 Paris | Alumni</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
