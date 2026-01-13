import useDarkMode from "@/hooks/useDarkMode"

const TipCard = ({
  icon,
  title,
  description,
}: {
  icon: string
  title: string
  description: string
}) => {
  const { isDarkMode } = useDarkMode()

  return (
    <div className={`tip-card ${isDarkMode ? "dark" : "light"}`}>
      <span className="tip-icon">{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default TipCard