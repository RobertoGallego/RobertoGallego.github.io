import "./Card.css"
import night from "./assets/night.jpg"
import useTypewriter from "./hooks/useTypeWriter"

interface CardProps {
  imageUrl?: string
  createdAt?: string
  title?: string
  width?: number
  position?: number
  children: React.ReactNode
  zIndex?: number
  contain?: React.CSSProperties["objectFit"]
}

const Card: React.FC<CardProps> = ({
  imageUrl = night,
  contain = "cover",
  width = 200,
  children,
  createdAt = "Jan 1988",
  title = "Online Store Concept Vol.1",
  zIndex = 0,
  position,
}) => {
  // const { currentText } = useTypewriter(title, 100, false, position)

  // const 204 272 408 H325    - 204 H249 - 332 H404
  return (
    <div
      className="card"
      style={{
        minWidth: width,
        width: "100%",
        transform: `rotate(${0}deg)`,
        zIndex,
        // flex: 1,
        flexBasis: "auto",
        animation: position === 1 ? "fadeInRight 1s" : "none",
        // animation: position === 1 ? "fadeIn 1s" : position === 2 ? "faceInTwo 1s" : position === 3 ? "fadeIn 1s" : position === 4 ? "faceInTwo 1s" : "none",
      }}
    >
      <div className="blog-card" style={{ height: "100%" }}>
        <img
          className="blog-img"
          src={imageUrl}
          alt="Card img"
          style={{ height: "100%", objectFit: contain }}
        />

        <div className="blog-text" style={{ width: "100%" }}>
          {/* */}
          <div className="home-text">
            {children}

            {/* <img
        src={bb}
        style={{
          height: 4,
          width: 130,
          borderRadius: 10,
          backgroundColor: "transparent",
          flexShrink: 0,
          objectFit: "cover",
          // marginRight: 20,
        }}
        /> */}
          </div>
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

        <h4
          className="blog-title"
          style={{ display: position ? "block" : "none" }}
        >
          {title}
        </h4>

        {/* <p className="text-card">Welcome | To My Reve | Studio</p>
      <p className="text-card">Hope You Enjoy</p>

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

        <p className="text-card-extra-upper">5 min read</p>
      </div> */}
      </div>
    </div>
  )
}

export default Card
