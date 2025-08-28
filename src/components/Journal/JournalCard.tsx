import rob from "../../assets/rob.jpg"
import { IoCalendarNumber } from "react-icons/io5"
import { FiExternalLink } from "react-icons/fi"
import { MdOutlineWorkOutline } from "react-icons/md"
import useDarkMode from "../../hooks/useDarkMode"
import "./WorkCard.css"
import { useTranslation } from "react-i18next"
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
  href?: string
}

const JournalCard = ({
  srcImage = rob,
  title = "",
  subtitle = "",
  date = "",
  flags = [],
  workPosition = "",
  href = "",
}: JournalCardProps) => {
  const { isDarkMode } = useDarkMode()
  const { t } = useTranslation()

  return (
    <a
      className="work-card-wrapper"
      style={{
        backgroundColor: isDarkMode ? "#121026" : "#f8f8f8",
        boxShadow: isDarkMode ? "0 4px 20px #121026" : "0 4px 20px #e9dad0",
        display: "flex",
        justifyContent: "space-between",
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        transition: "transform 0.2s ease",
        cursor: "pointer",
      }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
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
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: 6,
                  alignItems: "center",
                  color: isDarkMode ? "#eeeeee" : "#181818",
                }}
              >
                <MdOutlineWorkOutline size={14} />

                <p style={{ fontSize: 14, fontWeight: 400 }}>{workPosition}</p>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 6,
                  alignItems: "center",
                  color: isDarkMode ? "#eeeeee" : "#181818",
                }}
              >
                <IoCalendarNumber size={14} />
                <p style={{ fontSize: 14, fontWeight: 400 }}>{date}</p>
              </div>
            </div>
          </div>

          <p
            style={{
              color: "gray",
              maxWidth: 700,
              marginBlock: 4,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              fontWeight: 400,
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
                    backgroundColor: isDarkMode ? "#1a1734" : "#eeeeee",
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
              className="work-card-read-more"
              style={{
                display: "flex",
                gap: 4,
                alignItems: "center",
                fontSize: 12,
                fontWeight: 500,
                whiteSpace: "nowrap",
                color: isDarkMode ? "#eeeeee" : "#181818",
              }}
            >
              {t("Button.Read_More")}
              <FiExternalLink size={12} />
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

export default JournalCard
