import { createFileRoute } from '@tanstack/react-router'
import PortfolioCard from '@/components/Portfolio/PortfolioCard'
import Title from '@/components/Title/Title'
import { posts } from '@/data'
import { album } from '@/assets'
import { HiOutlineRocketLaunch } from 'react-icons/hi2'
import { FaJs, FaLaptopCode, FaReact, FaSchool } from 'react-icons/fa6'
import { SiVite } from 'react-icons/si'

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

export const Route = createFileRoute('/posts/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 1400,
        margin: '0 auto',
        padding: '40px 0px',
      }}
    >
      <Title
        title="ALL BLOG POSTS"
        subtitle="Complete collection of articles on web development and programming"
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 20,
          marginTop: 40,
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
