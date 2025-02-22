import logo42 from "../../assets/42logo.png"
import { FaGithub, FaLinkedinIn } from "react-icons/fa6"
// import { IoInvertModeOutline } from "react-icons/io5"
import { IoInvertMode } from "react-icons/io5"
// import { MdModeStandby } from "react-icons/md"
import "./Footer.css"

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

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              gap: 4,
              alignItems: "center",
              justifyContent: "flex-end",
              textAlign: "center",
              marginBottom: 4,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 50,
                backgroundColor: "green",
              }}
            ></div>
            <p
              style={{
                fontSize: 12,
                fontFamily: "roboto, Poppins, Inter, system-ui",
                fontWeight: 500,
                lineHeight: 1,
                textAlign: "center",
              }}
            >
              Open to work
            </p>
          </div>
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
          </div>
        </div>
      </div>
      <div className="footer">
        <div>
          <p className="footer-text">2025 © All rights reserved</p>
        </div>

        <IoInvertMode size={16} />
      </div>
    </>
  )
}

export default Footer
