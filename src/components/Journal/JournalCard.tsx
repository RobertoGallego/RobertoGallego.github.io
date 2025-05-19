import rob from "../../assets/rob.jpg"
import { IoCalendarNumber } from "react-icons/io5"
import { FiExternalLink } from "react-icons/fi"
import { MdOutlineWorkOutline } from "react-icons/md"
import useDarkMode from "../../hooks/useDarkMode"
import "./WorkCard.css"

type Flag = { src: string; label: string }

interface JournalCardProps {
  srcImage?: string
  title?: string
  subtitle?: string
  date?: string
  chip?: string
  flags?: Flag[]
  workPosition?: string
}

const JournalCard = ({
  srcImage = rob,
  title = "",
  subtitle = "",
  date = "",
  flags = [],
  workPosition = "",
}: JournalCardProps) => {
  const { isDarkMode } = useDarkMode()

  return (
    <div
      className="journal-card-wrapper"
      style={{
        display: "flex",
        justifyContent: "space-between",
        border: isDarkMode ? "1px solid #2e2e2e" : "1px solid #eaeaea",
        padding: 10,
        borderRadius: 10,
        backgroundColor: isDarkMode ? "#181816" : "#fff",
        marginBottom: 10,
      }}
    >
      <div
        className="work-card-content"
        style={{ display: "flex", gap: 10, flex: 1 }}
      >
        <img className="work-card-image" src={srcImage} alt="Ninjaco" />

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
              {title}
            </h3>

            <div
              style={{
                display: "flex",
                gap: 6,
                alignItems: "center",
                flexWrap: "wrap",
                // justifyContent: "flex-end",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: 6,
                  alignItems: "center",
                }}
              >
                <MdOutlineWorkOutline size={14} color="#818181" />
                <p style={{ fontSize: 14, color: "#818181" }}>{workPosition}</p>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 6,
                  alignItems: "center",
                }}
              >
                <IoCalendarNumber size={14} color="#818181" />
                <p style={{ fontSize: 14, color: "#818181" }}>{date}</p>
              </div>
            </div>
          </div>

          <p
            style={{
              color: "gray",
              maxWidth: 700,
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {subtitle}
          </p>

          <div
            style={{
              display: "flex",
              gap: 6,
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 6,
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              {flags.map(({ src, label }) => (
                <p
                  key={label}
                  style={{
                    alignSelf: "center",
                    fontSize: 12,
                    backgroundColor: isDarkMode ? "#383838" : "#eeeeee",
                    paddingBlock: 2,
                    paddingInline: 8,
                    borderRadius: 8,
                    fontWeight: 500,
                    display: "flex",
                    gap: 4,
                    whiteSpace: "nowrap",
                  }}
                >
                  <img src={src} alt="Spanish" style={{ width: 12 }} />
                  {label}
                </p>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                gap: 4,
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
              >
                Read more
              </p>

              <FiExternalLink size={12} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JournalCard
