useSyncExternalStore

te permite suscribirte a una fuente de almacenamiento de datos (store) externa.

```tsx
const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)
```

subscribe: debe suscribirse a la fuente de almacenamiento de datos y devolver una función que cancela dicha suscripción.

getSnapshot: debería obtener una instantánea de los datos de la fuente de almacenamiento de datos. debe ser INMUTABLE.

getServerSnapshot (opcional): Una función que devuelve la instantánea inicial de los datos de la fuente de almacenamiento de datos.

Si se pasa una función subscribe diferente durante un rerenderizado, React se volverá a suscribir a la fuente de almacenamiento de datos usando la función subscribe recién pasada. Puedes evitarlo declarando subscribe fuera del componente.

esto no es recomendable:

```tsx
const LazyProductDetailPage = lazy(() => import('./ProductDetailPage.js'));

function ShoppingApp() {
  const selectedProductId = useSyncExternalStore(...);

  // ❌ Calling `use` with a Promise dependent on `selectedProductId`
  const data = use(fetchItem(selectedProductId))

  // ❌ Conditionally rendering a lazy component based on `selectedProductId`
  return selectedProductId != null ? <LazyProductDetailPage /> : <FeaturedProducts />;
}
```

Normalmente la mayoría de tus componentes de React solo leerán datos de sus props,, estado, y contexto.. Sin embargo, a veces un componente necesita leer algunos datos de alguna fuente de almacenamiento fuera de React que cambia con el tiempo. Esto incluye:

Bibliotecas de gestión de estado de terceros

APIs del navegador que exponen un valor mutable

React utilizará estas funciones para mantener tu componente suscrito a la fuente de almacenamiento de datos

por ejemplo:

```tsx
import { useSyncExternalStore } from "react"
import { todosStore } from "./todoStore.js"

export default function TodosApp() {
  const todos = useSyncExternalStore(
    todosStore.subscribe,
    todosStore.getSnapshot
  )
  return (
    <>
      <button onClick={() => todosStore.addTodo()}>Agregar tarea</button>
      <hr />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  )
}
```

```tsx
// Este es un ejemplo de una fuente de almacenamiento de datos de terceros
// que podría necesitar integrarse con React.

// Si tu aplicación está completamente construida con React,
// recomendamos usar el control de estado de React en su lugar.

let nextId = 0
let todos = [{ id: nextId++, text: "Todo #1" }]
let listeners = []

export const todosStore = {
  addTodo() {
    todos = [...todos, { id: nextId++, text: "Todo #" + nextId }]
    emitChange()
  },
  subscribe(listener) {
    listeners = [...listeners, listener]
    return () => {
      listeners = listeners.filter((l) => l !== listener)
    }
  },
  getSnapshot() {
    return todos
  },
}

function emitChange() {
  for (let listener of listeners) {
    listener()
  }
}
```

La API useExternalSyncStore es útil mayormente si necesitas integrarte con código existente que no sea de React.

Suscripcion a una API del navegador

```tsx
import { useSyncExternalStore } from "react"

export default function ChatIndicator() {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot)
  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>
}

function getSnapshot() {
  return navigator.onLine
}

function subscribe(callback) {
  window.addEventListener("online", callback)
  window.addEventListener("offline", callback)
  return () => {
    window.removeEventListener("online", callback)
    window.removeEventListener("offline", callback)
  }
}
```

Extracción de lógica en un Hook personalizado
por lo general no deberias escribir directamente en tus components en su lugar hace tu propio hook:

```tsx
import { useSyncExternalStore } from "react"

export function useOnlineStatus() {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot)
  return isOnline
}

function getSnapshot() {
  // ...
}

function subscribe(callback) {
  // ...
}
```
