import "./Title.css"

import { useDarkMode } from "@/hooks"

interface TitleProps {
  title: string
  subtitle: string
}

const Title = ({ title, subtitle }: TitleProps) => {
  const { isDarkMode } = useDarkMode()

  return (
    <div className="title-header">
      <h1 className="title-title">{title}</h1>
      
      <p className={`title-description ${isDarkMode ? "dark" : "light"}`}>
        {subtitle}
      </p>
    </div>
  )
}

export default Title
