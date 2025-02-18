import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md"
import logo42 from "../../assets/42logo.png"

const Footer = () => {
  return (
    <>
      <div className="home-footer">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3>Software Engineer</h3>

          <p
            style={{
              fontSize: 14,
              fontFamily: "Poppins, Inter, system-ui",
              lineHeight: 1.4,
            }}
          >
            Clean code and thoughtful design.
          </p>

          <div style={{ display: "flex", gap: 10, marginTop: -2 }}>
            <img src={logo42} alt="42" style={{ width: 42 }} />

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
            Living in France 🇫🇷, always exploring new ideas and challenges.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            alignItems: "end",
            textAlign: "end",
            fontFamily: "roboto, Poppins, Inter, system-ui",
            fontSize: 12,
            fontWeight: 500,
          }}
        >
          <p>Linkedin</p>
          <p>|</p>
          <p>Github</p>
          <p>|</p>
          <p>Twitter</p>
        </div>
      </div>
      <div className="footer">
        <div>
          <p className="footer-text">2025 © All rights reserved</p>
        </div>

        <MdOutlineKeyboardDoubleArrowDown size={20} />
      </div>
    </>
  )
}

export default Footer
