import rob from "../../assets/rob.jpg"
import { SpainFlag } from "../../assets"
import { FiExternalLink } from "react-icons/fi"
import useDarkMode from "../../hooks/useDarkMode"
import { useTranslation } from "react-i18next"
import "./Blog.css"
import { IoCalendarNumber } from "react-icons/io5"

interface BlogCardProps {
  srcImage?: string
  title?: string
  date?: string
  chip?: string
  srcFlag?: string
  chipFlag?: string
  href?: string
}

const BlogCard = ({
  srcImage = rob,
  title = "Optimal line length for body text",
  date = "April 10, 2025",
  chip = "Social Media",
  srcFlag = SpainFlag,
  chipFlag = "Spanish",
  href = "",
}: BlogCardProps) => {
  const { isDarkMode } = useDarkMode()
  const { t } = useTranslation()

  return (
    <div
      className="blog-card"
      style={{
        backgroundColor: isDarkMode ? "#181816" : "#fff",
        border: isDarkMode ? "1px solid #2e2e2e" : "1px solid #eaeaea",
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
          backgroundColor: isDarkMode ? "#1a1a1a" : "#f9f9f9",
          minHeight: 80,
          height: "auto",
        }}
      />

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 4,
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

          <div
            style={{
              display: "flex",
              gap: 4,
              alignItems: "center",
              color: isDarkMode ? "#eeeeee" : "#181818",
            }}
          >
            <IoCalendarNumber size={12} />
            <p style={{ fontSize: 12 }}>{date}</p>
          </div>
        </div>

        <h3
          style={{
            maxWidth: 350,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {title}
        </h3>

        <div
          className="blog-card-read"
          style={{
            display: "flex",
            gap: 4,
            alignItems: "center",
            alignSelf: "flex-end",
          }}
        >
          <a
            style={{
              fontSize: 12,
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("Button.Read_More")}
          </a>

          <FiExternalLink size={12} />
        </div>
      </div>
    </div>
  )
}

export default BlogCard
