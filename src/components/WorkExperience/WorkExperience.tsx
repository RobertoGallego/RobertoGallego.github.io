import { useTranslation } from "react-i18next"

import { workExperienceData } from "@/data"

import WorkExperienceCard from "./WorkExperienceCard"
import "./WorkExperience.css"
import Title from "../Title/Title"

const WorkExperience = () => {
  const { t } = useTranslation()

  return (
    <div className="work-experience-container">
      <Title title={t("Works.Title")} subtitle={t("Last work experiences")} />

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
