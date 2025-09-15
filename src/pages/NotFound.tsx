import { Link } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <span style={{ fontSize: 128, fontWeight: "bold", lineHeight: 1 }}>
        {t("NotFound.Title")}
      </span>

      <p style={{ fontSize: 24, fontWeight: "bold" }}>
        {t("NotFound.Subtitle")}
      </p>

      <p style={{ fontSize: 16 }}>{t("NotFound.Description")}</p>

      <Link
        to="/"
        style={{
          marginTop: 16,
          fontSize: 16,
          textDecoration: "underline",
          color: "#007bff",
          cursor: "pointer",
        }}
      >
        {t("NotFound.Button")}
      </Link>
    </div>
  )
}

export default NotFound
