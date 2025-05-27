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
      className={`chip ${status ? "status" : ""}`}
      style={{
        backgroundColor: isDarkMode
          ? status
            ? "#383838"
            : "#0a0a0a"
          : status
          ? "#dbdbdb"
          : "#eeeeee",
        outline: status
          ? isDarkMode
            ? "1px solid #535353"
            : "1px solid #bbbbbb"
          : "none",
      }}
      onClick={onClick}
    >
      <Icon color={iconColor} size={18} />

      <p>{label}</p>
    </button>
  )
}

export default Chip
