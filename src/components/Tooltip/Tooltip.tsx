import { useState, useRef, useEffect, ReactNode } from "react"
import "./Tooltip.css"

interface TooltipProps {
  children: ReactNode
  text: string
  position?: "top" | "bottom" | "left" | "right" | "auto"
}

const Tooltip = ({ children, text, position = "auto" }: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false)
  const [calculatedPosition, setCalculatedPosition] = useState<
    "top" | "bottom" | "left" | "right"
  >("top")
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (position === "auto" && wrapperRef.current && showTooltip) {
      const rect = wrapperRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const viewportWidth = window.innerWidth

      const spaceAbove = rect.top
      const spaceBelow = viewportHeight - rect.bottom
      const spaceLeft = rect.left
      const spaceRight = viewportWidth - rect.right

      if (spaceAbove > spaceBelow && spaceAbove > 100) {
        setCalculatedPosition("top")
      } else if (spaceBelow > 100) {
        setCalculatedPosition("bottom")
      } else if (spaceRight > spaceLeft && spaceRight > 150) {
        setCalculatedPosition("right")
      } else {
        setCalculatedPosition("left")
      }
    }
  }, [showTooltip, position])

  const finalPosition = position === "auto" ? calculatedPosition : position

  return (
    <div
      ref={wrapperRef}
      className="tooltip-wrapper"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && (
        <span className={`tooltip tooltip-${finalPosition}`}>{text}</span>
      )}
    </div>
  )
}

export default Tooltip
