import { FaMapMarkerAlt } from "react-icons/fa"
import { useTheme } from "../../useTheme"
import useDarkMode from "../../hooks/useDarkMode"
import logo42 from "../../assets/42logo.png"
import logo42w from "../../assets/42logow.png"
import { FranceFlag, Profile } from "../../assets"
import { useTranslation } from "react-i18next"
import "./About.css"

const About = () => {
  const { isDarkMode } = useDarkMode()
  const { theme } = useTheme()
  const { t } = useTranslation()

  const logoSrc =
    theme === "light"
      ? logo42
      : theme === "dark" || (theme === "auto" && isDarkMode)
      ? logo42w
      : logo42

  return (
    <div
      className="about-wrapper"
      style={{
        backgroundColor: isDarkMode ? "#181816" : "#f8f8f8",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 20,
          flexDirection: "column",
          borderRadius: 5,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 20,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              borderRadius: 100,
              overflow: "hidden",
              backgroundColor: "#3d3834",
              width: 120,
              height: 120,
              border: "4px solid #0f0f0e",
              outline: "2px solid #3d3834",
            }}
          >
            <img src={Profile} alt="Profile" />
          </div>
          <div>
            <h3>Roberto GALLEGO</h3>
            <p>{t("About.Title")}</p>
            <p>{t("About.Subtitle")}</p>
          </div>
        </div>
        <p
          style={{
            maxWidth: 700,
            fontSize: 16,
            textAlign: "justify",
            hyphens: "auto",
            wordBreak: "break-word",
            overflowWrap: "break-word",
          }}
        >
          {t("About.Description_A")}
        </p>

        <p
          style={{
            maxWidth: 700,
            fontSize: 16,
            textAlign: "justify",
            hyphens: "auto",
            wordBreak: "break-word",
            overflowWrap: "break-word",
          }}
        >
          {t("About.Description_B")}
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
            <img
              src={isDarkMode ? logoSrc : logo42}
              alt="42"
              style={{ width: 21 }}
            />
            <p>École 42 Paris | Alumni</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
