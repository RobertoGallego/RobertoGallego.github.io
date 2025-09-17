import { useTranslation } from "react-i18next"

import { album } from "@/assets"

import "./Card.css"

interface CardProps {
  imageUrl?: string
  createdAt?: string
  title?: string
  width?: number
  children: React.ReactNode
  zIndex?: number
}

const Card: React.FC<CardProps> = ({
  imageUrl = album.Night,
  width = 300,
  children,
  createdAt = "Jan 1988",
  title = "Online Store Concept Vol.1",
  zIndex = 0,
}) => {
  const { t } = useTranslation()

  // const 204 272 408 H325    - 204 H249 - 332 H404
  return (
    <div
      className="card"
      style={{ minWidth: width, transform: `rotate(${0}deg)`, zIndex }}
    >
      <div className="blog-card">
        <img className="blog-img" src={imageUrl} alt="Card img" />

        <div className="blog-text" style={{ width: "100%" }}>
          {children}
        </div>
      </div>

      <div
        style={{
          alignItems: "flex-end",
          display: "flex",
          flexDirection: "column",
          textTransform: "uppercase",
        }}
      >
        <div
          style={{
            width: "100%",
            borderTop: "1px solid #707070",
            marginBlock: 10,
          }}
        />

        <h4 className="blog-title">{title}</h4>

        <p className="text-card">{t("Welcome_Reve_Studio")}</p>
        <p className="text-card">{t("Hope_Enjoy")}</p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 10,
            fontWeight: 500,
            width: "100%",
          }}
        >
          <p className="text-card-extra">{createdAt}</p>

          <p className="text-card-extra-upper">{t("Read_Time")}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
