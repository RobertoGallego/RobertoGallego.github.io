import { ElementType } from "react"
import "./Chip.css"

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
  return (
    <button
      type="button"
      className={`chip ${status ? "status" : ""}`}
      onClick={onClick}
    >
      <Icon color={iconColor} size={18} />

      <p>{label}</p>
    </button>
  )
}

export default Chip
