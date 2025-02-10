import "./Card.css"
import { RiReactjsLine } from "react-icons/ri"

const Card = () => {
  return (
    <div className="blog-card">
      <div className="blog-text-a">
        <div className="blog-text">
          {/* <p className="blog-date">#12.15</p> */}

          <button className="button-23">
            <RiReactjsLine size={14} className="icon-chip-23" color="#00ffff" />
            <p className="icon-text-23"></p>
          </button>
        </div>

        <h1 className="blog-title">Zustand and React</h1>
        <h1 className="blog-title">Context</h1>
      </div>
    </div>
  )
}

export default Card
