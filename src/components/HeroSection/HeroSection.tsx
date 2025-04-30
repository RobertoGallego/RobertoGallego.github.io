import { useTranslation } from "react-i18next"
import { FaArrowRight } from "react-icons/fa6"
import useDarkMode from "../../hooks/useDarkMode"

const HeroSection = () => {
  const { isDarkMode } = useDarkMode()
  const { t } = useTranslation()

  return (
    <div className="home-presentation">
      <div
        className="home-presentation-image"
        style={{
          borderRadius: 100,
          overflow: "hidden",
          width: 200,
          height: 30,
          marginBottom: 10,
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      ></div>

      <h1 className="home-title">{t("ReveCraft")}</h1>

      <h2>Explore my journey in app engineering</h2>

      <p style={{ maxWidth: 500, textAlign: "center", marginTop: 10 }}>
        An evolving portfolio collection that reflects my work with modern
        tools, scalable architecture, and clean design
      </p>

      <div style={{ marginTop: 20, display: "flex" }}>
        <button
          style={{
            color: "#fff",
            border: "1px solid #fff",
            borderRadius: "5px",
            padding: "6px 12px",
            cursor: "pointer",
            margin: "0 10px",
            fontSize: "14px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <p>Available For Work</p> <FaArrowRight size={12} />
        </button>

        <button
          style={{
            backgroundColor: isDarkMode ? "#fff" : "#000",
            color: isDarkMode ? "#000" : "#fff",
            border: "none",
            borderRadius: "5px",
            padding: "6px 12px",
            cursor: "pointer",
            margin: "0 10px",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          Contact Me
        </button>
      </div>
    </div>
  )
}

export default HeroSection
