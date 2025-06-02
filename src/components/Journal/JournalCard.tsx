import rob from "../../assets/rob.jpg"
import { IoCalendarNumber } from "react-icons/io5"
import { FiExternalLink } from "react-icons/fi"
import { MdOutlineWorkOutline } from "react-icons/md"
import useDarkMode from "../../hooks/useDarkMode"
import "./WorkCard.css"
import { useTranslation } from "react-i18next"

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
                <p style={{ fontSize: 14 }}>{workPosition}</p>
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
                <p style={{ fontSize: 14 }}>{date}</p>
              </div>
            </div>
          </div>

          <p
            style={{
              color: "gray",
              maxWidth: 700,
              marginBlock: 4,
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
              <a
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("Button.Read_More")}
              </a>

              <FiExternalLink size={12} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JournalCard
