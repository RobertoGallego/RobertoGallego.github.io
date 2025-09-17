import { useTranslation } from "react-i18next"

import { flag, album } from "@/assets"
import { useDarkMode } from "@/hooks"

import { FiExternalLink } from "react-icons/fi"
import { IoCalendarNumber } from "react-icons/io5"

import Dialog from "../Dialog/Dialog"

import "./Career.css"

interface CareerCardProps {
  srcImage?: string
  title?: string
  date?: string
  chip?: string
  srcFlag?: string
  chipFlag?: string
  href?: string
}

const CareerCard = ({
  srcImage = album.Rob,
  title = "Optimal line length for body text",
  date = "April 10, 2025",
  chip = "Social Media",
  srcFlag = flag.SpainFlag,
  chipFlag = "Spanish",
  href = "",
}: CareerCardProps) => {
  const { isDarkMode } = useDarkMode()
  const { t } = useTranslation()

  return (
    <Dialog
      buttonClassName="career-card"
      style={{
        backgroundColor: isDarkMode ? "#121026" : "#f8f8f8",
        boxShadow: isDarkMode ? "0 4px 20px #121026" : "0 4px 20px #e9dad0",
        boxSizing: "border-box",
      }}
      externalLink={href}
      buttonContent={
        <>
          <img
            src={srcImage}
            alt="Ninjaco"
            style={{
              width: 150,
              aspectRatio: "2 / 1",
              objectFit: "contain",
              borderRadius: 10,
              backgroundColor: isDarkMode ? "#1a1734" : "#eeeeee",
              minHeight: 90,
              height: "auto",
            }}
          />

          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 4,
                alignItems: "center",
                flexWrap: "wrap-reverse",
              }}
            >
              <p
                style={{
                  alignSelf: "center",
                  fontSize: 12,
                  backgroundColor: isDarkMode ? "#1a1734" : "#eeeeee",
                  paddingBlock: 2,
                  paddingInline: 8,
                  borderRadius: 8,
                  fontWeight: 500,
                }}
              >
                {chip}
              </p>

              <p
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
                }}
              >
                <img src={srcFlag} alt="Spanish" style={{ width: 12 }} />

                {chipFlag}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: 4,
                  alignItems: "center",
                  color: isDarkMode ? "#eeeeee" : "#181818",
                }}
              >
                <IoCalendarNumber size={12} />
                <p style={{ fontSize: 12, fontWeight: 400 }}>{date}</p>
              </div>
            </div>

            <h3
              style={{
                maxWidth: 350,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {title}
            </h3>

            <div
              className="career-card-read"
              style={{
                display: "flex",
                gap: 4,
                alignItems: "center",
                alignSelf: "flex-end",
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
        </>
      }
    />
  )
}

export default CareerCard
