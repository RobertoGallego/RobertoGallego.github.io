import { createFileRoute, notFound } from "@tanstack/react-router"
import posts from "../../data/posts.json"
import { JSX, Suspense, lazy } from "react"

const postComponents: Record<
  string,
  React.LazyExoticComponent<() => JSX.Element>
> = {
  UseState: lazy(() => import("@/components/BlogPost/Posts/React/Hooks/UseState/UseState")),
  UseRef: lazy(() => import("@/components/BlogPost/Posts/React/Hooks/UseRef")),
}

export const Route = createFileRoute("/posts/$postId")({
  component: RouteComponent,
  pendingComponent: () => <div>Cargando post...</div>,

  loader: async ({ params }) => {
    const post = posts.find((p) => p.id === Number(params.postId))
    if (!post)
      throw notFound({ data: { postId: params.postId }, routeId: Route.id })

    return post
  },
})

function RouteComponent() {
  const post = Route.useLoaderData()
  const PostComponent = postComponents[post.content]

  if (!PostComponent) {
    return <div>Post no encontrado</div>
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Suspense fallback={<div style={{ height: "100vh" }} />}>
        <PostComponent />
      </Suspense>
    </div>
  )
}
