import { ElementType } from "react"

interface ChipProps {
  label: string
  Icon: ElementType
  iconColor: string
  status?: "active" | "inactive"
}

const Chip: React.FC<ChipProps> = ({ label, Icon, iconColor, status }) => {
  return (
    <button
      type="button"
      className="chip"
      onClick={() => {
        console.log("Chip clicked")
      }}
      style={{
        border: status && "1px solid #696969" ,
        borderRadius: "10px",
        padding: "4px 10px",
        cursor: "pointer",
        fontWeight: "500",
        display: "flex",
        alignItems: "center",
        gap: 8,
        backgroundColor: "#1b1b1b",
      }}
    >
      <Icon color={iconColor} size={18} />

      <p>{label}</p>
    </button>
  )
}

export default Chip
