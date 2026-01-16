import { ElementType } from "react"

import { useDarkMode } from "@/hooks"

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
  const { isDarkMode } = useDarkMode()

  return (
    <button
      type="button"
      className={`chip-${isDarkMode ? "dark" : "light"}`}
      style={{
        backgroundColor: isDarkMode
          ? status
            ? "#292542"
            : "#181625"
          : status
            ? "rgba(234, 206, 188, 0.6)"
            : "rgba(234, 206, 188, 0.2)",
      }}
      onClick={onClick}
    >
      <Icon color={iconColor} size={18} />

      <p className={`chip-label-${isDarkMode ? "dark" : "light"}`}>{label}</p>
    </button>
  )
}

export default Chip
