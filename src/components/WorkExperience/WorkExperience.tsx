import { useTranslation } from "react-i18next"

import { workExperienceData } from "@/data"

import WorkExperienceCard from "./WorkExperienceCard"
import "./WorkExperience.css"

const WorkExperience = () => {
  const { t } = useTranslation()

  return (
    <div className="work-experience-container">
      <div className="work-experience-header">
        <h1>{t("Works.Title")}</h1>

        <p className="work-experience-description">{t("Works.Description")}</p>
      </div>

      {workExperienceData.map((item) => (
        <WorkExperienceCard
          key={item.title}
          srcImage={item.srcImage}
          title={item.title}
          subtitle={item.subtitle}
          date={item.date}
          chip={item.chip}
          flags={item.flags}
          workPosition={item.workPositionKey}
          href={item.href}
        />
      ))}
    </div>
  )
}

export default WorkExperience
