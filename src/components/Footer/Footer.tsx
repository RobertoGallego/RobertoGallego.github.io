import logo42 from "../../assets/42logo.png"
import { FaGithub, FaLinkedinIn } from "react-icons/fa6"
import "./Footer.css"
import logo42w from "../../assets/42logow.png"
import useDarkMode from "../../hooks/useDarkMode"
import { useTranslation } from "react-i18next"
import useLanguage from "../../hooks/useLanguage"
import { useTheme } from "../../useTheme"
import { Theme } from "../../ThemeContext"

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

  const logoSrc =
    theme === "light"
      ? logo42
      : theme === "dark" || (theme === "system" && isDarkMode)
      ? logo42w
      : logo42

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
            <img src={logoSrc} alt="42" style={{ width: 42 }} />

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
            className="select-button"
          >
            <option value="fr">🇫🇷 Fr</option>
            <option value="en">🇬🇧 En</option>
            <option value="es">🇪🇸 Es</option>
          </select>

          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as Theme)}
            className="select-button"
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
