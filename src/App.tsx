import "./App.css"
import { FaQuoteRight } from "react-icons/fa"

function App() {
  return (
    <div className="container">
      <div className="content">
        <div />

        <div>
          <FaQuoteRight
            size={42}
            style={{
              marginBottom: 10,
              padding: 10,
              backgroundColor: "#ffc785",
            }}
          />

          <h2>
            I'm a software engineer building efficient, scalable, and
            user-friendly applications with modern web technologies. Let's
            create something great.
          </h2>
        </div>

        <div style={{ display: "flex" }}>
          {["#ffc785", "#ffe6c9", "#ffa09b", "#ff6347"].map((color) => (
            <div
              key={color}
              style={{
                height: 50,
                width: 50,
                backgroundColor: color,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
