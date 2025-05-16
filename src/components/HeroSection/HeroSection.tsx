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
          width: 150,
          height: 150,
          marginBottom: 20,
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <div
          style={{
            borderRadius: 100,
            overflow: "hidden",
            width: 130,
            height: 130,
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_22.png"
            alt="Profile"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 100,
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      {/* <div
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
      /> */}

      <h1 className="home-title">{t("Roberto Gallego")}</h1>

      <h2 style={{ marginTop: 15, textAlign: "center" }}>
        Welcome explore my journey in app engineering
      </h2>

      <p
        style={{
          maxWidth: 500,
          textAlign: "center",
          marginTop: 5,
          fontSize: 16,
        }}
      >
        An evolving portfolio collection that reflects my work with modern
        tools, scalable architecture, and clean design
      </p>

      <div style={{ marginTop: 20, display: "flex" }}>
        <button
          style={{
            color: isDarkMode ? "#fff" : "#000",
            border: isDarkMode ? "1px solid #fff" : "1px solid #000",
            borderRadius: "5px",
            padding: "6px 12px",
            cursor: "pointer",
            margin: "0 10px",
            fontSize: "16px",
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
            backgroundColor: isDarkMode ? "#ff6347" : "#762d20",
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
