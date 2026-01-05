import { createFileRoute } from '@tanstack/react-router'
import PortfolioCard from '@/components/Portfolio/PortfolioCard'
import Title from '@/components/Title/Title'
import { posts, postIcons } from "@/data"

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
