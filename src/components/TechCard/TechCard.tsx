import useDarkMode from "../../hooks/useDarkMode"

interface TechCardProps {
  label: string
  src?: string | { light: string; dark: string }
}

const TechCard = ({ label, src }: TechCardProps) => {
  const { isDarkMode } = useDarkMode()

  const srcImg =
    typeof src === "string" ? src : isDarkMode ? src?.dark : src?.light

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
        border: isDarkMode ? "0.5px solid #333333" : "0.5px solid #dddddd",
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

      {/* <div>
        <FaHeart
          style={{
            color: isDarkMode ? "#FF6347" : "#FF6347",
            fontSize: 14,
            alignSelf: "center",
            marginRight: 10,
          }}
        />

        <FaStar
          style={{
            color: isDarkMode ? "#FFD700" : "#FFD700",
            fontSize: 14,
            alignSelf: "center",
            marginRight: 10,
          }}
        />

        <AiOutlineFileSearch
          style={{
            color: isDarkMode ? "#00BFFF" : "#00BFFF",
            fontSize: 14,
            alignSelf: "center",
            marginRight: 10,
          }}
        />
      </div> */}
    </div>
  )
}

export default TechCard
