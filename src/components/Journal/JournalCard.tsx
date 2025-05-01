import rob from "../../assets/rob.jpg"
import { FaArrowRight, FaRegClock } from "react-icons/fa6"
import { IoCalendarNumber } from "react-icons/io5"

interface JournalCardProps {
  srcImage?: string
}

const JournalCard = ({
  srcImage = rob,
}: JournalCardProps) => {
  return (
    <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            border: "1px solid #383838",
            padding: 10,
            borderRadius: 10,
            backgroundColor: "#2b2b2b",
            marginBottom: 10,
          }}
        >
          <div style={{ display: "flex", gap: 10, flex: 1 }}>
            <img
              src={srcImage}
              alt="Ninjaco"
              style={{
                width: 120,
                aspectRatio: "2 / 1",
                objectFit: "cover",
                borderRadius: 10,
                backgroundColor: "#1b1b1b",
                minHeight: 80,
                height: "auto",
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap-reverse",
                  gap: 6,
                }}
              >
                <h3
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  Defining Your Brand Voice: A Step-by-Step Guide
                </h3>

                <div
                  style={{
                    display: "flex",
                    gap: 6,
                    alignItems: "center",
                    flexWrap: "wrap",
                    justifyContent: "flex-end",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: 6,
                      alignItems: "center",
                    }}
                  >
                    <FaRegClock size={12} color="#818181" />
                    <p style={{ fontSize: 12, color: "#818181" }}>8 min read</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: 6,
                      alignItems: "center",
                    }}
                  >
                    <IoCalendarNumber size={12} color="#818181" />
                    <p style={{ fontSize: 12, color: "#818181" }}>
                      April 10, 2025
                    </p>
                  </div>
                </div>
              </div>

              <p
                style={{
                  color: "gray",
                  maxWidth: 700,
                  display: "-webkit-box",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                Learn how to develop a consistent and authentic brand voice that
                resonates with your your market position.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: 6,
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p
                  style={{
                    alignSelf: "center",
                    fontSize: 12,
                    backgroundColor: "#1b1b1b",
                    paddingBlock: 2,
                    paddingInline: 8,
                    borderRadius: 8,
                    color: "#fff",
                    fontWeight: 500,
                  }}
                >
                  Social Media
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: 6,
                    alignItems: "center",
                  }}
                >
                  <p style={{ fontSize: 12, color: "#fff", fontWeight: 500 }}>
                    Read More
                  </p>
                  <FaArrowRight size={12} color="#fff" />
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default JournalCard