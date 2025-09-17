import PortfolioCard from "./PortfolioCard"

import { posts } from "@/data"

import { useDarkMode } from "@/hooks"
import { album } from "@/assets"

import { HiOutlineRocketLaunch } from "react-icons/hi2"
import { FaJs, FaLaptopCode, FaReact, FaSchool } from "react-icons/fa6"
import { SiVite } from "react-icons/si"

const icons: Record<string, React.ComponentType<{ size?: number }>> = {
  rocket: HiOutlineRocketLaunch,
  react: FaReact,
  vite: SiVite,
  js: FaJs,
  school: FaSchool,
  laptop: FaLaptopCode,
}

const images: Record<string, string> = {
  wallo: album.Wallo,
  wall: album.Wall,
  tech: album.Tech,
  rob: album.Rob,
  pexel: album.Pexel,
  night: album.Night,
}

const Portfolio = () => {
  const { isDarkMode } = useDarkMode()

  return (
    <div
      style={{
        marginTop: 100,
        width: "100%",
        display: "flex",
        padding: 10,
        flexDirection: "column",
      }}
    >
      <h1>Blog Post</h1>
      <p
        style={{
          maxWidth: 700,
          fontSize: 16,
          marginTop: 10,
          color: isDarkMode ? "#fff" : "#555",
        }}
      >
        A collection of my recent articles on web development and programming,
        covering various topics and technologies.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 20,
          marginTop: 10,
        }}
      >
        {posts.map((post) => (
          <PortfolioCard
            postId={post.id}
            key={post.id}
            srcImage={images[post.srcImage]}
            title={post.title}
            description={post.description}
            date={post.date}
            ChipIcon={icons[post.ChipIcon]}
            ChipTitle={post.ChipTitle}
          />
        ))}
      </div>
    </div>
  )
}

export default Portfolio
