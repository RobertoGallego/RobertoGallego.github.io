useTransition

renderizar una parte de la interfaz de usuario en segundo plano.

transicion pendiente - marcar una actualizacion - no recibe parámetro.

```tsx
const [isPending, startTransition] = useTransition()
```

```tsx
function TabContainer() {
  const [isPending, startTransition] = useTransition()
  const [tab, setTab] = useState("about")

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab)
    })
  }
  // ...
}
```

The function (update some state) passed to startTransition is called an “Action”.

````tsx
      onClick={() => {
        startTransition(async () => {
          await submitAction();
        });
      }}
      ```
````

Ejemplo 1

```tsx
import { useState, useTransition } from "react"
import { updateQuantity } from "./api"
import Item from "./Item"
import Total from "./Total"

export default function App({}) {
  const [quantity, setQuantity] = useState(1)
  const [isPending, startTransition] = useTransition()

  const updateQuantityAction = async (newQuantity) => {
    // To access the pending state of a transition,
    // call startTransition again.
    startTransition(async () => {
      const savedQuantity = await updateQuantity(newQuantity)
      startTransition(() => {
        setQuantity(savedQuantity)
      })
    })
  }

  return (
    <div>
      <h1>Checkout</h1>
      <Item action={updateQuantityAction} />
      <hr />
      <Total quantity={quantity} isPending={isPending} />
    </div>
  )
}
```

```tsx
import { startTransition } from "react"

export default function Item({ action }) {
  function handleChange(event) {
    // To expose an action prop, await the callback in startTransition.
    startTransition(async () => {
      await action(event.target.value)
    })
  }
  return (
    <div className="item">
      <span>Eras Tour Tickets</span>
      <label htmlFor="name">Quantity: </label>
      <input type="number" onChange={handleChange} defaultValue={1} min={1} />
    </div>
  )
}
```

```tsx
const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})

export default function Total({ quantity, isPending }) {
  return (
    <div className="total">
      <span>Total:</span>
      <span>
        {isPending ? "🌀 Updating..." : `${intl.format(quantity * 9999)}`}
      </span>
    </div>
  )
}
```

```tsx
export async function updateQuantity(newQuantity) {
  return new Promise((resolve, reject) => {
    // Simulate a slow network request.
    setTimeout(() => {
      resolve(newQuantity)
    }, 2000)
  })
}
```

Construir un enrutador preparado para Suspense

This is recommended for three reasons:

Transitions are interruptible

Transitions prevent unwanted loading indicators

Transitions wait for all pending actions

Here is a simplified router example using Transitions for navigations.

```tsx
import { Suspense, useState, useTransition } from "react"
import IndexPage from "./IndexPage.js"
import ArtistPage from "./ArtistPage.js"
import Layout from "./Layout.js"

export default function App() {
  return (
    <Suspense fallback={<BigSpinner />}>
      <Router />
    </Suspense>
  )
}

function Router() {
  const [page, setPage] = useState("/")
  const [isPending, startTransition] = useTransition()

  function navigate(url) {
    startTransition(() => {
      setPage(url)
    })
  }

  let content
  if (page === "/") {
    content = <IndexPage navigate={navigate} />
  } else if (page === "/the-beatles") {
    content = (
      <ArtistPage
        artist={{
          id: "the-beatles",
          name: "The Beatles",
        }}
      />
    )
  }
  return <Layout isPending={isPending}>{content}</Layout>
}

function BigSpinner() {
  return <h2>🌀 Loading...</h2>
}
```
