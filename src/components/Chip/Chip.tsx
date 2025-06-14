import { ElementType } from "react"
import "./Chip.css"
import useDarkMode from "../../hooks/useDarkMode"

interface ChipProps {
  label: string
  Icon: ElementType
  iconColor: string
  status?: boolean
  onClick?: () => void
}

const Chip: React.FC<ChipProps> = ({
  label,
  Icon,
  iconColor,
  status,
  onClick,
}) => {
  const { isDarkMode } = useDarkMode()

  return (
    <button
      type="button"
      className={`chip-${isDarkMode ? "dark" : "light"}`}
      style={{
        backgroundColor: isDarkMode
          ? status
            ? "#333"
            : "#0a0a0a"
          : status
          ? "#dbdbdb"
          : "#eeeeee",
        outline: status
          ? isDarkMode
            ? "1px solid #ffffff"
            : "1px solid #bbbbbb"
          : "none",
      }}
      onClick={onClick}
    >
      <Icon color={iconColor} size={18} />

      <p
        className={`chip-label-${isDarkMode ? "dark" : "light"}`}
      >{label}</p>
    </button>
  )
}

export default Chip
