import PortfolioCard from "./PortfolioCard"
import "./Portfolio.css"

import { posts, postIcons } from "@/data"
import Title from "../Title/Title"
import { Link } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"

const Portfolio = () => {
  const { t } = useTranslation()

  return (
    <div className="portfolio-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Title title={t("Blog.Title")} subtitle={t("Blog.Subtitle")} />

        <Link
          to="/posts"
          style={{
            alignSelf: "end",
            marginBottom: 10,
            cursor: "pointer",
            fontWeight: "400",
            fontSize: 14,
            marginRight: 4,
          }}
        >
          {t("Blog.Read_More")}
        </Link>
      </div>

      <div className="portfolio-grid">
        {posts.slice(0, 6).map((post) => (
          <PortfolioCard
            postId={post.id}
            key={post.id}
            srcImage={post.srcImage}
            title={post.title}
            description={post.description}
            date={post.date}
            ChipIcon={postIcons[post.ChipIcon]}
            ChipTitle={post.ChipTitle}
          />
        ))}
      </div>
    </div>
  )
}

export default Portfolio
