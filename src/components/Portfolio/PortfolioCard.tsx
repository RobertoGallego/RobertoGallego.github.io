import { FaArrowRight } from "react-icons/fa6"
import { HiOutlineRocketLaunch } from "react-icons/hi2"
import { IoCalendarNumber } from "react-icons/io5"
import useDarkMode from "../../hooks/useDarkMode"
import Wallo from "../../assets/wallo.png"
import { Link } from "@tanstack/react-router"

interface PortfolioCardProps {
  postId: number
  srcImage: string
  title?: string
  description?: string
  date?: string
  ChipIcon?: React.ComponentType<{ size?: number }>
  ChipTitle?: string
}

const PortfolioCard = ({
  postId,
  srcImage = Wallo,
  title = "React Basics Start Here",
  description = "Learn the basics of React.js",
  date = "11-02-2023",
  ChipIcon = HiOutlineRocketLaunch,
  ChipTitle = "Frontend",
}: PortfolioCardProps) => {
  const { isDarkMode } = useDarkMode()

  return (
    <Link
      to="/posts/$postId"
      params={{ postId: String(postId) }}
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: isDarkMode ? "#121026" : "#f8f8f8",
        boxShadow: isDarkMode ? "0 4px 20px #121026" : "0 4px 20px #e9dad0",
        padding: 10,
        borderRadius: 10,
        gap: 10,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 250,
        boxSizing: "border-box",
        cursor: "pointer",
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={srcImage}
          style={{
            borderRadius: 10,
            objectFit: "cover",
            width: "100%",
            height: 170,
          }}
        />

        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            position: "absolute",
            top: 4,
            right: 4,
          }}
        >
          <p
            style={{
              alignSelf: "center",
              fontSize: 14,
              backgroundColor: isDarkMode ? "#403d62" : "#efe9e9",
              paddingBlock: 2,
              paddingInline: 10,
              borderRadius: 20,
              fontWeight: 500,
              display: "flex",
              gap: 4,
              whiteSpace: "nowrap",
              alignItems: "center",
            }}
          >
            <ChipIcon size={16} />
            {ChipTitle}
          </p>
        </div>
      </div>

      <h3 style={{ lineHeight: 0.8 }}>{title}</h3>

      <p
        style={{
          lineHeight: 1.2,
          fontSize: 14,
          color: isDarkMode ? "#aaa" : "#555",
        }}
      >
        {description}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 4,
            alignItems: "center",
            color: isDarkMode ? "#eeeeee" : "#181818",
          }}
        >
          <IoCalendarNumber size={12} />
          <p style={{ fontSize: 12, fontWeight: 400, lineHeight: 1 }}>{date}</p>
        </div>
        <div
          className="blog-card-read"
          style={{
            display: "flex",
            gap: 4,
            alignItems: "center",
            alignSelf: "flex-end",
            fontSize: 12,
            fontWeight: 500,
            whiteSpace: "nowrap",
            lineHeight: 1,
            color: isDarkMode ? "#eeeeee" : "#181818",
          }}
        >
          Read
          <FaArrowRight size={12} />
        </div>
      </div>
    </Link>
  )
}

export default PortfolioCard
