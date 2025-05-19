import rob from "../../assets/rob.jpg"
import { SpainFlag } from "../../assets"
import { FiExternalLink } from "react-icons/fi"
import useDarkMode from "../../hooks/useDarkMode"

interface BlogCardProps {
  srcImage?: string
  title?: string
  date?: string
  chip?: string
  srcFlag?: string
  chipFlag?: string
}

const BlogCard = ({
  srcImage = rob,
  title = "Optimal line length for body text",
  date = "April 10, 2025",
  chip = "Social Media",
  srcFlag = SpainFlag,
  chipFlag = "Spanish",
}: BlogCardProps) => {
  const { isDarkMode } = useDarkMode()

  return (
    <div
      style={{
        display: "flex",
        gap: 20,
        flex: "1 1 400px",
      }}
    >
      <img
        src={srcImage}
        alt="Ninjaco"
        style={{
          width: 150,
          aspectRatio: "2 / 1",
          objectFit: "contain",
          borderRadius: 10,
          backgroundColor: isDarkMode ? "#181816" : "#eeeeee",
          minHeight: 80,
          height: "auto",
          border: isDarkMode ? "1px solid #2e2e2e" : "1px solid #dddddd",
          padding: 4,
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 6,
            alignItems: "center",
            flexWrap: "wrap-reverse",
          }}
        >
          <p
            style={{
              alignSelf: "center",
              fontSize: 12,
              backgroundColor: isDarkMode ? "#383838" : "#eeeeee",
              paddingBlock: 2,
              paddingInline: 8,
              borderRadius: 8,
              fontWeight: 500,
            }}
          >
            {chip}
          </p>

          <p
            style={{
              alignSelf: "center",
              fontSize: 12,
              backgroundColor: isDarkMode ? "#383838" : "#eeeeee",
              paddingBlock: 2,
              paddingInline: 8,
              borderRadius: 8,
              fontWeight: 500,
              display: "flex",
              gap: 4,
            }}
          >
            <img src={srcFlag} alt="Spanish" style={{ width: 12 }} />

            {chipFlag}
          </p>

          <p style={{ fontSize: 12, color: "#818181" }}>{date}</p>
        </div>
        <h3
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {title}
        </h3>

        <div
          style={{
            display: "flex",
            gap: 4,
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: 12, fontWeight: 500 }}>Read More</p>

          <FiExternalLink size={12} />
        </div>
        {/* <FiExternalLink size={12} color="#fff" /> */}
      </div>
    </div>
  )
}

export default BlogCard
