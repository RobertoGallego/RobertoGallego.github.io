import { useTranslation } from "react-i18next"

import { useDarkMode } from "@/hooks"
import { careerData } from "@/data"

import CareerCard from "./CareerCard"
import "./Career.css"

const Career = () => {
  const { isDarkMode } = useDarkMode()
  const { t } = useTranslation()

  return (
    <div className="career-container">
      <div className="career-header">
        <h1>{t("Career.Title")}</h1>
        
        <p className="career-description">{t("Career.Description")}</p>
      </div>

      <div className="career-cards">
        {careerData.map((item) => (
          <CareerCard
            key={item.title}
            srcImage={
              item.srcImageDark && isDarkMode
                ? item.srcImageDark
                : item.srcImage
            }
            title={item.title}
            date={item.date}
            chip={item.chip}
            srcFlag={item.srcFlag}
            chipFlag={item.chipFlag}
            href={item.href}
          />
        ))}
      </div>
    </div>
  )
}

export default Career
