import PortfolioCard from "./PortfolioCard"
import "./Portfolio.css"

import { posts, postIcons, postImages } from "@/data"
import Title from "../Title/Title"
import { Link } from "@tanstack/react-router"

const Portfolio = () => (
  <div className="portfolio-container">
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Title title="BLOG POST" subtitle="Articles on web development" />

      <Link to="/posts"
        style={{
          alignSelf: "end",
          marginBottom: 10,
          cursor: "pointer",
          fontWeight: "400",
          fontSize: 14,
          marginRight: 4,
        }}
      >
        Read all posts
      </Link>
    </div>

    <div className="portfolio-grid">
      {posts.map((post) => (
        <PortfolioCard
          postId={post.id}
          key={post.id}
          srcImage={postImages[post.srcImage]}
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

export default Portfolio
