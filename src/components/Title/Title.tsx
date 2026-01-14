import LazyImg from "../LazyImg/LazyImg"
import "./Title.css"
import { flag } from "@/assets"

import { useDarkMode } from "@/hooks"

interface TitleProps {
  title: string
  chip?: boolean
  subtitle: string
}

const Title = ({ title, subtitle, chip = false }: TitleProps) => {
  const { isDarkMode } = useDarkMode()

  return (
    <div className="title-header">
      <div className="title-container">
        <h1 className="title-title">{title}</h1>

        {chip && (
          <LazyImg
            src={flag.SpainFlag}
            alt="Spanish"
            className="title-flag"
          />
        )}
      </div>

      <p className={`title-description ${isDarkMode ? "dark" : "light"}`}>
        {subtitle}
      </p>
    </div>
  )
}

export default Title
