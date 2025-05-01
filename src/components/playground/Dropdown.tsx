import { useState, useRef, useEffect } from "react"

interface Option {
  value: string
  label: string
  icon?: string
}

interface CustomSelectProps {
  options: Option[]
  value: string
  onChange: (value: string) => void
  iconOnly?: boolean
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  iconOnly = false,
}) => {
  const [open, setOpen] = useState(false)
  const selectedOption = options.find((opt) => opt.value === value)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={ref} style={{ position: "relative", display: "inline-block" }}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          border: "1px solid #e7e4e4",
          borderRadius: 10,
          padding: "0.3rem",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          fontSize: 14,
          userSelect: "none",
          minWidth: "70px",
          justifyContent: "center",
        }}
      >
        {iconOnly && selectedOption?.icon
          ? selectedOption.icon
          : selectedOption?.label}
      </div>

      {open && (
        <div
          style={{
            position: "absolute",
            bottom: "100%",
            left: 0,
            background: "white",
            border: "1px solid #e7e4e4",
            borderRadius: 10,
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: 10,
            minWidth: "100%",
            transform: "translateY(-5px)",
          }}
        >
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => {
                onChange(opt.value)
                setOpen(false)
              }}
              style={{
                padding: "0.5rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                fontSize: 14,
              }}
            >
              {opt.icon && iconOnly ? opt.icon : opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CustomSelect
