import logo42 from "../../assets/42logo.png"
import { FaGithub, FaLinkedinIn } from "react-icons/fa6"
import "./Footer.css"
import logo42w from "../../assets/42logow.png"
import useDarkMode from "../../hooks/useDarkMode"
import { useTranslation } from "react-i18next"
import useTheme from "../../hooks/useTheme"
import useLanguage from "../../hooks/useLanguage"

const Footer = () => {
  const { isDarkMode } = useDarkMode()
  const { theme, setTheme } = useTheme()
  const { language, setLanguage } = useLanguage()

  const {
    t,
    i18n: { changeLanguage },
  } = useTranslation()

  const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value

    changeLanguage(selectedLanguage)
    setLanguage(selectedLanguage)
  }

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = e.target.value
    setTheme(selectedTheme)
    if (selectedTheme === "dark") {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  }

  return (
    <>
      <div className="home-footer">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3
            style={{
              fontFamily: "roboto, Inter, system-ui",
              fontWeight: 500,
            }}
          >
            {t("Software_Engineer")}
          </h3>

          <p
            style={{
              fontSize: 14,
              fontFamily: "Noto Serif, Inter, system-ui",
              lineHeight: 1.4,
            }}
          >
            {t("Clean_Code")}
          </p>

          <div style={{ display: "flex", gap: 10, marginTop: -2 }}>
            <img
              src={isDarkMode ? logo42w : logo42}
              alt="42"
              style={{ width: 42 }}
            />

            <div style={{ marginTop: 2, marginLeft: -2 }}>
              <p
                style={{
                  fontSize: 12,
                  fontFamily: "Poppins, Inter, system-ui",
                  fontWeight: 500,
                }}
              >
                | Paris | Alumni
              </p>
            </div>
          </div>
          <p
            style={{
              fontSize: 12,
              fontFamily: "roboto, Inter, system-ui",
              marginTop: -6,
            }}
          >
            {t("Location")}
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              gap: 6,
              alignItems: "end",
              textAlign: "end",
              fontFamily: "roboto, Poppins, Inter, system-ui",
              fontSize: 12,
              fontWeight: 500,
              marginBottom: 4,
            }}
          >
            <div className="social-button">
              <FaLinkedinIn
                size={12}
                style={{
                  alignSelf: "center",
                  alignContent: "center",
                  textAlign: "center",
                  marginRight: 4,
                }}
              />
              <p
                style={{
                  fontWeight: 500,
                  alignSelf: "center",
                  alignContent: "center",
                  textAlign: "center",
                }}
              >
                Linkedin
              </p>
            </div>

            <div className="social-button">
              <FaGithub
                size={12}
                style={{
                  alignSelf: "center",
                  alignContent: "center",
                  textAlign: "center",
                  marginRight: 4,
                }}
              />
              <p
                style={{
                  fontWeight: 500,
                  alignSelf: "center",
                  alignContent: "center",
                  textAlign: "center",
                }}
              >
                Github
              </p>
            </div>

            <div className="gradient-border">
              <div className="circular-icon" />

              <p
                style={{
                  fontWeight: 500,
                  alignSelf: "center",
                  alignContent: "center",
                  textAlign: "center",
                }}
              >
                {t("Open_To_Work")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div>
          <p className="footer-text">{t("Copyright")}</p>
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <select
            onChange={handleChangeLanguage}
            value={language}
            name="lang"
            id="cars"
            style={{
              fontFamily: "roboto",
              fontSize: 14,
              border: "1px solid #e7e4e4",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              fontWeight: 500,
              alignSelf: "center",
              alignContent: "center",
              padding: "0.1rem 0.3rem",
              cursor: "pointer",
              display: "flex",
            }}
          >
            <option value="fr">🇫🇷 Fr</option>
            <option value="en">🇬🇧 En</option>
            <option value="es">🇪🇸 Es</option>
          </select>

          <select
            value={theme}
            onChange={handleThemeChange}
            style={{
              fontFamily: "roboto",
              fontSize: 14,
              border: "1px solid #e7e4e4",
              textAlign: "center",
              borderRadius: 10,
              fontWeight: 500,
              padding: "0.1rem 0.3rem",
              cursor: "pointer",
            }}
          >
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </div>
    </>
  )
}

export default Footer
