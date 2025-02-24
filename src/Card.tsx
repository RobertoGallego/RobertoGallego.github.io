import "./Card.css"
import night from "./assets/night.jpg"

interface CardProps {
  imageUrl?: string
  createdAt?: string
  title?: string
  width?: number
  children: React.ReactNode
  zIndex?: number
}

const Card: React.FC<CardProps> = ({
  imageUrl = night,
  width = 300,
  children,
  createdAt = "Jan 1988",
  title = "Online Store Concept Vol.1",
  zIndex = 0,
}) => {
  // const 204 272 408 H325    - 204 H249 - 332 H404
  return (
    <div
      className="card"
      style={{
        minWidth: width,
        transform: `rotate(${0}deg)`,
        zIndex,
        flex: 1,
        height: 600,
      }}
    >
      <div className="blog-card">
        <img className="blog-img" src={imageUrl} alt="Card img" />

        <div className="blog-text" style={{ width: "100%" }}>
          {/* {children} */}
          <div className="home-text">
            <h1 className="home-title">Crafting </h1>
            <h1 className="home-title">Engaging</h1>
            <h1 className="home-title">Experiences</h1>

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

        <h4 className="blog-title">{title}</h4>

        <p className="text-card">Welcome | To My Reve | Studio</p>
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
        </div>
      </div>
    </div>
  )
}

export default Card
