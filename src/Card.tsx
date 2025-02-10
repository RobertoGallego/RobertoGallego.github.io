import "./Card.css"
import night from "./assets/night.jpg"

interface CardProps {
  imageUrl?: string
  createdAt?: string
  title?: string
  children: React.ReactNode
}

const Card: React.FC<CardProps> = ({
  imageUrl = night,
  children,
  createdAt = "Jan 1988",
  title = "Online Store Concept Vol.1",
}) => {
  return (
    <div className="card">
      <div className="blog-card">
        <img className="blog-img" src={imageUrl} alt="Card background" />

        <div className="blog-text" style={{ width: "100%" }}>
          {children}
        </div>
      </div>

      <div
        style={{
          alignItems: "flex-end",
          display: "flex",
          flexDirection: "column",
          marginTop: 10,
          fontFamily: "Noto Serif, Roboto, Triodion, Poppins, Inter, system-ui",
        }}
      >
        <h4>{title}</h4>
        <p
          style={{
            fontSize: 12,
            fontFamily: "Roboto, Poppins, Inter, system-ui",
          }}
        >
          {createdAt}
        </p>
      </div>
    </div>
  )
}

export default Card
