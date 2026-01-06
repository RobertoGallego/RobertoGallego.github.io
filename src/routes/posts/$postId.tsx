import { posts } from "@/data"
import { createFileRoute, notFound } from "@tanstack/react-router"
import { JSX, Suspense, lazy } from "react"

const postComponents: Record<
  string,
  React.LazyExoticComponent<() => JSX.Element>
> = {
  UseState: lazy(() => import("@/components/BlogPost/Posts/React/Hooks/UseState/UseState")),
  UseRef: lazy(() => import("@/components/BlogPost/Posts/React/Hooks/useRef/UseRef")),
  UseContext: lazy(() => import("@/components/BlogPost/Posts/React/Hooks/useContext/UseContext")),
  UseCallback: lazy(() => import("@/components/BlogPost/Posts/React/Hooks/useCallback/UseCallback")),
  UseEffect: lazy(() => import("@/components/BlogPost/Posts/React/Hooks/useEffect/UseEffect")),
  UseEffectEvent: lazy(() => import("@/components/BlogPost/Posts/React/Hooks/useEffectEvent/UseEffectEvent")),
  UseId: lazy(() => import("@/components/BlogPost/Posts/React/Hooks/useId/UseId")),
  UseImperativeHandle: lazy(() => import("@/components/BlogPost/Posts/React/Hooks/useImperativeHandle/UseImperativeHandle")),
  UseInsertionEffect: lazy(() => import("@/components/BlogPost/Posts/React/Hooks/useInsertionEffect/UseInsertionEffect")),
  UseLayoutEffect: lazy(() => import("@/components/BlogPost/Posts/React/Hooks/useLayoutEffect/UseLayoutEffect")),
  UseMemo: lazy(() => import("@/components/BlogPost/Posts/React/Hooks/useMemo/UseMemo")),
  UseReducer: lazy(() => import("@/components/BlogPost/Posts/React/Hooks/useReducer/UseReducer")),
  UseSyncExternalStore: lazy(() => import("@/components/BlogPost/Posts/React/Hooks/useSyncExternalStore/UseSyncExternalStore")),
  UseSyncExternalStoreWithSelector: lazy(() => import("@/components/BlogPost/Posts/React/Hooks/useSyncExternalStore/UseSyncExternalStore")),
  UseTransition: lazy(() => import("@/components/BlogPost/Posts/React/Hooks/useTransition/UseTransition")),
  UseActionState: lazy(() => import("@/components/BlogPost/Posts/React/Hooks/useActionState/UseActionState")),
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
