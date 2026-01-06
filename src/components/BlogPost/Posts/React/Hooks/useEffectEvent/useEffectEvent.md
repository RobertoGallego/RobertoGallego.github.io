useEffectEvent

Te deja extraer logica no reactiva de tus effect en una funcion reusable.

```tsx
const onSomething = useEffectEvent(callback)
```

Eventos con efectos son funciones que puedes llamar dentro de useEffect

```tsx
import { useEffectEvent, useEffect } from "react"

function ChatRoom({ roomId, theme }) {
  const onConnected = useEffectEvent(() => {
    showNotification("Connected!", theme)
  })

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId)
    connection.on("connected", () => {
      onConnected()
    })
    connection.connect()
    return () => connection.disconnect()
  }, [roomId])

  // ...
}
```

Uso

Leer la ultima props y state

Tipicamente cuando accedes a un valor reactivo dentro del effect tiene que incluir esta dependencia, esto asegura que tu effecto vuelva a ejecutarse cuando el valor cambie.

en algunos casos solo quieres leer el ultimo valor dentro de props o state dentro del effect sin querer causar un render por el cambio de estos valores

para leer estos valores en tu effect sin hacer un cambio reactivo incluyelos asi :

```tsx
import { useEffect, useContext, useEffectEvent } from "react"

function Page({ url }) {
  const { items } = useContext(ShoppingCartContext)
  const numberOfItems = items.length

  const onNavigate = useEffectEvent((visitedUrl) => {
    logVisit(visitedUrl, numberOfItems)
  })

  useEffect(() => {
    onNavigate(url)
  }, [url])

  // ...
}
```
