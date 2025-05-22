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

      <h1 className="home-title">{t("Roberto Gallego")}</h1>

      <h2 style={{ marginTop: 15, textAlign: "center" }}>
        {t("HeroSection.Title")}
      </h2>

      <p
        style={{
          maxWidth: 450,
          textAlign: "center",
          marginTop: 5,
          fontSize: 16,
        }}
      >
        {t("HeroSection.Description")}
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
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <p> {t("HeroSection.Button_Primary")}</p> <FaArrowRight size={12} />
        </button>

        <button
          style={{
            backgroundColor: isDarkMode ? "#ff6347" : "#762d20",
            color: isDarkMode ? "#000" : "#fff",
            border: isDarkMode ? "1px solid #ff6347" : "1px solid #762d20",
            borderRadius: "5px",
            padding: "6px 12px",
            cursor: "pointer",
            margin: "0 10px",
            fontSize: "16px",
            fontWeight: 600,
          }}
        >
          {t("HeroSection.Button_Secondary")}
        </button>
      </div>
    </div>
  )
}

export default HeroSection
