import useDarkMode from "../../hooks/useDarkMode"

interface TechCardProps {
  label: string
  src?: string | { light: string; dark: string }
}

const TechCard = ({ label, src }: TechCardProps) => {
  const { isDarkMode } = useDarkMode()

  const srcImg =  typeof src === "string" ? src : isDarkMode ? src?.dark : src?.light

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        backgroundColor: isDarkMode ? "#333333" : "#dbdbdb",
        borderRadius: 10,
        border: isDarkMode ? "1px solid #505050" : "1px solid #aaaaaa",
        width: 80,
        height: 80,
      }}
    >
      {src && (
        <img
          src={srcImg}
          alt={label}
          style={{
            width: 30,
            height: 30,
          }}
        />
      )}

      <h5
        style={{
          fontSize: 12,
          fontWeight: 500,
          textAlign: "center",
          margin: 0,
        }}
      >
        {label}
      </h5>
    </div>
  )
}

export default TechCard
