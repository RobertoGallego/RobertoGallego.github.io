import { useTranslation } from "react-i18next"

import { flag, album } from "@/assets"
import { useDarkMode } from "@/hooks"

import { FiExternalLink } from "react-icons/fi"
import { IoCalendarNumber } from "react-icons/io5"

import Dialog from "../Dialog/Dialog"

import "./CareerCard.css"

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

  const theme = isDarkMode ? "dark" : "light"

  return (
    <Dialog
      buttonClassName={`career-card ${theme}`}
      externalLink={href}
      buttonContent={
        <>
          <img
            src={srcImage}
            alt="Ninjaco"
            className={`career-card-img ${theme}`}
          />

          <div className={"career-card-content"}>
            <div className="career-card-info">
              <div className="career-card-top">
                <p className={`career-card-chip ${theme}`}>{chip}</p>

                <p className={`career-card-flag ${theme}`}>
                  <img src={srcFlag} alt="Spanish" />

                  {chipFlag}
                </p>

                <div className={"career-card-date"}>
                  <IoCalendarNumber size={12} />

                  <p>{t(date)}</p>
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
