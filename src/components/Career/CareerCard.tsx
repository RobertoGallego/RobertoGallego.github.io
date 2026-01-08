import { useTranslation } from "react-i18next"

import { flag, album } from "@/assets"
import { useDarkMode } from "@/hooks"

import { FiExternalLink } from "react-icons/fi"
import { IoCalendarNumber } from "react-icons/io5"

import Dialog from "../Dialog/Dialog"

import "./CareerCard.css"
import LazyImg from "../LazyImg/LazyImg"

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
  const theme = isDarkMode ? "dark" : "light"

  const { t } = useTranslation()

  return (
    <Dialog
      buttonClassName={`career-card ${theme}`}
      externalLink={href}
      buttonContent={
        <>
          <LazyImg
            src={srcImage}
            alt="Ninjaco"
            className={`career-card-img ${theme}`}
            borderRadius={10}
          />

          <div className={"career-card-content"}>
            <div className="career-card-info">
              <div className="career-card-top">
                <div className="career-card-meta">
                  <p className={`career-card-chip ${theme}`}>{chip}</p>

                  <div className={`career-card-flag ${theme}`}>
                    <LazyImg src={srcFlag} alt="Spanish" borderRadius={10} />

                    <p>
                      {chipFlag}
                    </p>
                  </div>
                </div>

                <div className={"career-card-date"}>
                  <IoCalendarNumber size={12} />

                  <p style={{ fontSize: 12, fontWeight: 400 }}>{t(date)}</p>
                </div>
              </div>

              <h3 className="career-card-title">{t(title)}</h3>
            </div>

            <div className={`career-card-read ${theme}`}>
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
