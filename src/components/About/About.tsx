import { FaMapMarkerAlt } from "react-icons/fa"
import { useTheme } from "../../useTheme"
import useDarkMode from "../../hooks/useDarkMode"
import logo42 from "../../assets/42logo.png"
import logo42w from "../../assets/42logow.png"
import ninjaco from "../../assets/ninjaco.png"
import { FranceFlag } from "../../assets"

const About = () => {
  const { isDarkMode } = useDarkMode()
  const { theme } = useTheme()

  const logoSrc =
    theme === "light"
      ? logo42
      : theme === "dark" || (theme === "auto" && isDarkMode)
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
        marginTop: 100,
        padding: 60,
        borderRadius: 10,
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
              outline: "2px solid #3d3834",
            }}
          >
            <img src={ninjaco} alt="Profile" />
          </div>
          <div>
            <h3>Roberto GALLEGO</h3>
            <p>Software Engineer</p>
            <p>Digital Craftsman</p>
          </div>
        </div>
        <p
          style={{
            maxWidth: 700,
            fontSize: 16,
            textAlign: "justify",
          }}
        >
          I'm a software engineer with a strong focus on frontend development
          and user experience. My career has been shaped by a mix of hands-on
          experience, continuous learning, and a genuine passion for creating
          thoughtful digital solutions. I care about writing clean, efficient
          code and building interfaces that are both functional, elegant, and
          performance-oriented.
        </p>

        <p
          style={{
            maxWidth: 700,
            fontSize: 16,
            textAlign: "justify",
          }}
        >
          After studying at École 42 in Paris, I deepened my technical and
          collaborative skills through intensive, project-based learning. Today,
          I enjoy working on modern web technologies, improving UI architecture,
          and contributing to products that deliver high-quality user
          experiences.
        </p>

        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          <div
            style={{
              display: "flex",
              gap: 6,
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <FaMapMarkerAlt />
            <p>Rennes, France</p>

            <img src={FranceFlag} alt="Spanish" style={{ width: 12 }} />
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
