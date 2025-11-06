import { useTranslation } from "react-i18next"

import { album } from "@/assets"
import { useDarkMode } from "@/hooks"

import { IoCalendarNumber } from "react-icons/io5"
import { FiExternalLink } from "react-icons/fi"
import { MdOutlineWorkOutline } from "react-icons/md"

import Dialog from "../Dialog/Dialog"
import "./WorkExperienceCard.css"

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
  srcImage = album.Rob,
  title = "",
  subtitle = "",
  date = "",
  flags = [],
  workPosition = "",
  href = "",
}: JournalCardProps) => {
  const { isDarkMode } = useDarkMode()
  const { t } = useTranslation()
  const theme = isDarkMode ? "dark" : "light"

  return (
    <Dialog
      buttonClassName={`work-card-wrapper ${theme}`}
      externalLink={href}
      buttonContent={
        <div
          className="work-card-content"
          style={{ display: "flex", gap: 15, flex: 1 }}
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
            <div>
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
                  {t(title)}
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
                    <MdOutlineWorkOutline size={12} />

                    <p style={{ fontSize: 13, fontWeight: 400 }}>
                      {t(workPosition)}
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: 6,
                      alignItems: "center",
                      color: isDarkMode ? "#eeeeee" : "#181818",
                    }}
                  >
                    <IoCalendarNumber size={12} />
                    <p style={{ fontSize: 12, fontWeight: 400 }}>{date}</p>
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
                {t(subtitle)}
              </p>
            </div>

            <div
              style={{
                display: "flex",
                gap: 6,
                alignItems: "flex-end",
                justifyContent: "space-between",
              }}
            >
              <div className="work-card-flags">
                {flags.map(({ src, label }) => (
                  <p className={`work-card-flag ${theme}`} key={label}>
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
      }
    />
  )
}

export default JournalCard
