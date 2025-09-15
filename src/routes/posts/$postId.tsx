import { createFileRoute, notFound } from "@tanstack/react-router"
import posts from "../../data/posts.json"
import ReactMarkdown from "react-markdown"

export const Route = createFileRoute("/posts/$postId")({
  component: RouteComponent,
  pendingComponent: () => <div>Cargando post...</div>,
  // loader: ({ params }) => {
  //   const postId = Number(params.postId)
  //   const post = posts.find((p) => p.id === postId)

  //   if (!post) {
  //     throw notFound({ data: { postId }, routeId: Route.id })
  //   }

  //   return post
  // },

  loader: async ({ params }) => {
    const post = posts.find((p) => p.id === Number(params.postId))
    if (!post)
      throw notFound({ data: { postId: params.postId }, routeId: Route.id })

    const res = await fetch(`/posts/${post.content}`)
    if (!res.ok)
      throw notFound({ data: { postId: params.postId }, routeId: Route.id })

    const content = await res.text()
    return { ...post, content }
  },
})

function RouteComponent() {
  const { title, description, date, content } = Route.useLoaderData()

  return (
    <div
      style={{
        marginTop: 50, 
        padding: 50,
        maxWidth: 800,
        fontFamily: "sans-serif",
        lineHeight: 1.6,
      }}
    >
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{date}</p>

      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}
