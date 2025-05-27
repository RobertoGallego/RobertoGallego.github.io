import useDarkMode from "../../hooks/useDarkMode"

interface TechCardProps {
  label?: string
  src?: string | { light: string; dark: string }
  empty?: number
}

const TechCard = ({ label = "", src, empty = 0 }: TechCardProps) => {
  const { isDarkMode } = useDarkMode()

  const srcImg =
    typeof src === "string" ? src : isDarkMode ? src?.dark : src?.light

  if (empty > 0) {
    return (
      <>
        {Array.from({ length: empty }).map((_, index) => (
          <div
            key={`empty-${index}`}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 10,
              padding: 4,
              flex: 1,
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: 100,
              flexWrap: "wrap",
            }}
          >
            <div style={{ width: 20, height: 20 }}></div>
          </div>
        ))}
      </>
    )
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
        padding: 4,
        flex: 1,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 100,
        flexWrap: "wrap",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        {src && (
          <img
            src={srcImg}
            alt={label}
            style={{
              width: 20,
              height: 20,
              marginLeft: 10,
            }}
          />
        )}

        <h5
          style={{
            fontSize: 12,
            fontWeight: 500,
            textAlign: "center",
            marginLeft: 10,
          }}
        >
          {label}
        </h5>
      </div>
    </div>
  )
}

export default TechCard
