import { Link } from "@tanstack/react-router"
import "./PortfolioCard.css"

import { useDarkMode } from "@/hooks"
import { album } from "@/assets"

import { HiOutlineRocketLaunch } from "react-icons/hi2"
import { IoCalendarNumber } from "react-icons/io5"
import LazyImg from "../LazyImg/LazyImg"

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
  srcImage = album.Wallo,
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
      className={`portfolio-card ${isDarkMode ? "dark" : "light"}`}
    >
      <div className="portfolio-card-image-container">
        <LazyImg src={srcImage} className="portfolio-card-image" borderRadius={".4rem"} />

        <div className="portfolio-card-gradient" />

        <div className="portfolio-card-chip-container">
          <p className={`portfolio-card-chip ${isDarkMode ? "dark" : "light"}`}>
            <ChipIcon size={16} />

            {ChipTitle}
          </p>
        </div>

        <div className="portfolio-card-date-container">
          <IoCalendarNumber size={12} />
          <p className="portfolio-card-date">{date}</p>
        </div>
      </div>

      <div className="portfolio-card-content">
        <h3 className="portfolio-card-title">{title}</h3>
        <p
          className={`portfolio-card-description ${isDarkMode ? "dark" : "light"}`}
        >
          {description}
        </p>
      </div>
    </Link>
  )
}

export default PortfolioCard
