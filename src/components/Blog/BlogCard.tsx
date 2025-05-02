import rob from "../../assets/rob.jpg"
import { SpainFlag } from "../../assets"

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
  return (
    <div
      style={{
        display: "flex",
        gap: 20,
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
          backgroundColor: "#1b1b1b",
          minHeight: 80,
          height: "auto",
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
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <p
            style={{
              alignSelf: "center",
              fontSize: 12,
              backgroundColor: "#383838",
              paddingBlock: 2,
              paddingInline: 8,
              borderRadius: 8,
              color: "#fff",
              fontWeight: 500,
            }}
          >
            {chip}
          </p>

          <p
            style={{
              alignSelf: "center",
              fontSize: 12,
              backgroundColor: "#383838",
              paddingBlock: 2,
              paddingInline: 8,
              borderRadius: 8,
              color: "#fff",
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

        <p style={{ fontSize: 12, color: "#fff", fontWeight: 500 }}>
          Read More
        </p>
      </div>
    </div>
  )
}

export default BlogCard
