import { ElementType } from "react"

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
      className="chip"
      onClick={onClick}
      style={{
        outline: status ? "1px solid #696969" : undefined,
        borderRadius: "10px",
        padding: "4px 10px",
        cursor: "pointer",
        fontWeight: "500",
        display: "flex",
        alignItems: "center",
        gap: 8,
        // backgroundColor: "#1b1b1b"
        backgroundColor: status ? "#383838" : "#0a0a0a",
      }}
    >
      <Icon color={iconColor} size={18} />

      <p>{label}</p>
    </button>
  )
}

export default Chip
