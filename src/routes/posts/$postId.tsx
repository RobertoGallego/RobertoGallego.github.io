import { posts } from "@/data"
import { createFileRoute, notFound } from "@tanstack/react-router"
import { JSX } from "react"
import UseState from "@/components/BlogPost/Posts/React/Hooks/useState/UseState"
import UseRef from "@/components/BlogPost/Posts/React/Hooks/useRef/UseRef"
import UseContext from "@/components/BlogPost/Posts/React/Hooks/useContext/UseContext"
import UseCallback from "@/components/BlogPost/Posts/React/Hooks/useCallback/UseCallback"
import UseEffect from "@/components/BlogPost/Posts/React/Hooks/useEffect/UseEffect"
import UseEffectEvent from "@/components/BlogPost/Posts/React/Hooks/useEffectEvent/UseEffectEvent"
import UseId from "@/components/BlogPost/Posts/React/Hooks/useId/UseId"
import UseImperativeHandle from "@/components/BlogPost/Posts/React/Hooks/useImperativeHandle/UseImperativeHandle"
import UseInsertionEffect from "@/components/BlogPost/Posts/React/Hooks/useInsertionEffect/UseInsertionEffect"
import UseLayoutEffect from "@/components/BlogPost/Posts/React/Hooks/useLayoutEffect/UseLayoutEffect"
import UseMemo from "@/components/BlogPost/Posts/React/Hooks/useMemo/UseMemo"
import UseReducer from "@/components/BlogPost/Posts/React/Hooks/useReducer/UseReducer"
import UseSyncExternalStore from "@/components/BlogPost/Posts/React/Hooks/useSyncExternalStore/UseSyncExternalStore"
import UseTransition from "@/components/BlogPost/Posts/React/Hooks/useTransition/UseTransition"
import UseActionState from "@/components/BlogPost/Posts/React/Hooks/useActionState/UseActionState"

const postComponents: Record<string, () => JSX.Element> = {
  UseState,
  UseRef,
  UseContext,
  UseCallback,
  UseEffect,
  UseEffectEvent,
  UseId,
  UseImperativeHandle,
  UseInsertionEffect,
  UseLayoutEffect,
  UseMemo,
  UseReducer,
  UseSyncExternalStore,
  UseSyncExternalStoreWithSelector: UseSyncExternalStore,
  UseTransition,
  UseActionState,
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
      <PostComponent />
    </div>
  )
}
