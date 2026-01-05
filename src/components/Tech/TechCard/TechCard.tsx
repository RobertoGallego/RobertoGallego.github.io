import { useDarkMode } from "@/hooks"

import "./TechCard.css"

interface TechCardProps {
  label?: string
  src?: string | { light: string; dark: string }
  empty?: number
}

const TechCard = ({ label = "", src, empty = 0 }: TechCardProps) => {
  const { isDarkMode } = useDarkMode()

  const srcImg =
    typeof src === "string" ? src : isDarkMode ? src?.dark : src?.light

  if (empty > 0) {
    return (
      <>
        {Array.from({ length: empty }).map((_, index) => (
          <div key={index} className="tech-card empty-placeholder">
            <div className="tech-card-empty" />
          </div>
        ))}
      </>
    )
  }

  return (
    <div className={`tech-card ${isDarkMode ? "dark" : "light"}`}>
      <div className="tech-card-content">
        {src && (
          <div className="tech-card-icon-wrapper">
            <img src={srcImg} alt={label} className="tech-card-img" />
          </div>
        )}

        <h5 className="tech-card-label">{label}</h5>
      </div>
    </div>
  )
}

export default TechCard
