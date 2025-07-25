import { React } from "../../assets"

const Portfolio = () => {
  return (
    <div
      style={{
        marginTop: 100,
        width: "100%",
        display: "flex",
        padding: 10,
        flexDirection: "column",
      }}
    >
      <h1>Portfolio</h1>

      <div
        style={{
          width: 300,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0d0c19",
          padding: 20,
          borderRadius: 10,
        }}
      >
        <img
          src={React}
          style={{
            width: 20,
            height: 20,
            marginLeft: 10,
          }}
        />

        <h2>React</h2>
        <p>
          React is a JavaScript library for building user interfaces, maintained
          by Facebook and a community of individual developers and companies. It
          allows developers to create large web applications that can change
          data, without re
        </p>

        
      </div>
    </div>
  )
}

export default Portfolio
