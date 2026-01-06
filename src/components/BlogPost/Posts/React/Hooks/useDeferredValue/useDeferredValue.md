useDeferredValue

permite realizar una actualización en diferido de una parte de la UI

```tsx
const deferredValue = useDeferredValue(value, initialValue?)
```

value: valor a diferir
initialValue valor del render inicial

Devuelve

currentValue inicial value despues cuando value cambia, React no usa el nuevo valor inmediatamente.

Primero vuelve a renderizar con el valor anterior (el viejo), para mantener la interfaz fluida.

Después, en segundo plano, hace otro render y ahí sí devuelve el valor nuevo.

Sirve para evitar que actualizaciones pesadas bloqueen la UI.

⚠️ Advertencias resumidas en micro-frases

En Transitions: no retrasa nada.

Objetos nuevos cada render: causan renders extra.

Cuando cambia el valor: usa el viejo primero.

Con Suspense: si carga, sigues viendo el viejo.

No frena fetches: solo difiere renders.

Sin delay fijo: React trabaja enseguida en background.

Effects: corren cuando se confirma el render diferido.

Uso

Mostrar contenido desactualizado mientras se carga el contenido actualizado.

Llama a useDeferredValue en el nivel superior de tu componente para retrasar la actualización de alguna parte de tu UI.

ejemplo:

```tsx
import { Suspense, useState, useDeferredValue } from "react"
import SearchResults from "./SearchResults.js"

export default function App() {
  const [query, setQuery] = useState("")
  const deferredQuery = useDeferredValue(query)
  const isStale = query !== deferredQuery
  return (
    <>
      <label>
        Buscar álbumes:
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>
      <Suspense fallback={<h2>Loading...</h2>}>
        <div
          style={{
            opacity: isStale ? 0.5 : 1,
            transition: isStale
              ? "opacity 0.2s 0.2s linear"
              : "opacity 0s 0s linear",
          }}
        >
          <SearchResults query={deferredQuery} />
        </div>
      </Suspense>
    </>
  )
}
```

```tsx
import { use } from "react"
import { fetchData } from "./data.js"

export default function SearchResults({ query }) {
  if (query === "") {
    return null
  }
  const albums = use(fetchData(`/search?q=${query}`))
  if (albums.length === 0) {
    return (
      <p>
        No matches for <i>"{query}"</i>
      </p>
    )
  }
  return (
    <ul>
      {albums.map((album) => (
        <li key={album.id}>
          {album.title} ({album.year})
        </li>
      ))}
    </ul>
  )
}
```

Diferir el re-renderizando una parte de la UI

Puedes utilizar useDeferredValue como medio para optimizar el rendimiento. Es útil cuando una parte de tu UI es más lenta a la hora de re-renderizar y no existe una forma fácil de optimizarlo a fin de evitar que otras partes de la UI se bloqueen.

Re-renderizado diferido de la lista :

```tsx
import { useState, useDeferredValue } from "react"
import SlowList from "./SlowList.js"

export default function App() {
  const [text, setText] = useState("")
  const deferredText = useDeferredValue(text)
  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <SlowList text={deferredText} />
    </>
  )
}
```

```tsx
import { memo } from "react"

const SlowList = memo(function SlowList({ text }) {
  // Log once. The actual slowdown is inside SlowItem.
  console.log("[ARTIFICIALLY SLOW] Rendering 250 <SlowItem />")

  let items = []
  for (let i = 0; i < 250; i++) {
    items.push(<SlowItem key={i} text={text} />)
  }
  return <ul className="items">{items}</ul>
})

function SlowItem({ text }) {
  let startTime = performance.now()
  while (performance.now() - startTime < 1) {
    // No hace nada durante 1 ms por ítem para emular un código extremadamente lento
  }

  return <li className="item">Text: {text}</li>
}

export default SlowList
```

Esto no hace que el re-renderizado de SlowList sea más rápido. Sin embargo indica a React que el re-renderizado de la lista puede se postergado para que no bloquee la introducción de nuevos valores al input. La actualización de la lista tendrá un retardo con respecto al nuevo valor introducido en el input y posteriormente se actualizará. Tal y como ocurría anteriormente, React intentará actualizar los resultados de la lista lo antes posible, pero no bloqueando al usuario de introducir nuevos valores en el input.

Re-renderizado de la lista sin optimizar

```tsx
import { useState } from "react"
import SlowList from "./SlowList.js"

export default function App() {
  const [text, setText] = useState("")
  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <SlowList text={text} />
    </>
  )
}
```

```tsx
import { memo } from "react"

const SlowList = memo(function SlowList({ text }) {
  // Log once. The actual slowdown is inside SlowItem.
  console.log("[ARTIFICIALLY SLOW] Rendering 250 <SlowItem />")

  let items = []
  for (let i = 0; i < 250; i++) {
    items.push(<SlowItem key={i} text={text} />)
  }
  return <ul className="items">{items}</ul>
})

function SlowItem({ text }) {
  let startTime = performance.now()
  while (performance.now() - startTime < 1) {
    // No hace nada durante 1 ms por ítem para emular un código extremadamente lento
  }

  return <li className="item">Text: {text}</li>
}

export default SlowList
```

Esta optimización requiere que SlowList esté envuelto en memo.

¿Qué diferencia “diferir un valor” respecto a hacer debounce y throttle?

Existen dos técnicas de optimización que podrías haber utilizado en esta situación:

Debounce: esperar hasta que el usuario deje de escribir (durante, por ejemplo, un segundo) y actualizar la lista posteriormente.

Throttle: Actualizar la lista un numero limitado de veces cada cierto tiempo (por ejemplo, como mucho, una vez por segundo).

Mientras que estas técnicas son útiles en algunos casos, useDeferredValue es mejor en cuanto a optimizar el proceso de renderizado ya que esta profundamente integrado con React y se adapta al dispositivo que utilice el usuario.

Dispositivo rapido del user rapida respuesta
Dispositivo lento respuesta lenta

En lugar de debounce o throttle, no requiere emplear un retardo fijo.

Si la optimización no ocurre durante el renderizado, debounce y throttle aún son útiles en ese caso. Por ejemplo, te permitirán realizar menos peticiones de red. También puedes utilizar estas técnicas al mismo tiempo.
