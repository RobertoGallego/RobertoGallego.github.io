useActionState

Este hook permite de updatear el estado basado en el resultado de un formulario en action.

```tsx
const [state, formAction, isPending] = useActionState(fn, initialState, permalink?);
```

onSubmit: manejas el submit en el frontend.
action: manejas el submit en el backend/server.

cuando un form action se invoca tenemos

formAction → la nueva función que llamas para enviar el formulario.

state → el estado más reciente del formulario (por ejemplo { loading, error, data }).

isPending → un booleano que dice si la acción todavía está en curso.

useActionState permite manejar el estado de un formulario de forma automática. Devuelve una función para enviar el formulario (formAction), el estado actual (state) y si la acción está pendiente (isPending). Se usa en el cliente y puede mostrar la respuesta del servidor incluso antes de que la página termine de hidratarse.

fn: función que se llama al enviar el formulario o presionar un botón. Recibe primero el estado previo del formulario y luego los argumentos normales de una acción de formulario.

initialState: valor inicial del estado del formulario; se ignora después de la primera acción.

permalink (opcional): URL única de la página que modifica el formulario, útil para páginas dinámicas y para que la acción funcione antes de que cargue el JavaScript. Una vez hidratada la página, no tiene efecto.

Usage example

```tsx
import { useActionState, useState } from "react"
import { addToCart } from "./actions.js"

function AddToCartForm({ itemID, itemTitle }) {
  const [message, formAction, isPending] = useActionState(addToCart, null)
  return (
    <form action={formAction}>
      <h2>{itemTitle}</h2>
      <input type="hidden" name="itemID" value={itemID} />
      <button type="submit">Add to Cart</button>
      {isPending ? "Loading..." : message}
    </form>
  )
}

export default function App() {
  return (
    <>
      <AddToCartForm itemID="1" itemTitle="JavaScript: The Definitive Guide" />
      <AddToCartForm itemID="2" itemTitle="JavaScript: The Good Parts" />
    </>
  )
}
```

```tsx
"use server"

export async function addToCart(prevState, queryData) {
  const itemID = queryData.get("itemID")

  if (itemID === "1") {
    return "Added to cart"
  } else {
    // delay falso
    await new Promise((resolve) => {
      setTimeout(resolve, 2000)
    })
    return "Couldn't add to cart: the item is sold out."
  }
}
```

otro ejemplo

```tsx
import { useActionState, useState } from "react"
import { addToCart } from "./actions.js"

function AddToCartForm({ itemID, itemTitle }) {
  const [formState, formAction] = useActionState(addToCart, {})
  return (
    <form action={formAction}>
      <h2>{itemTitle}</h2>
      <input type="hidden" name="itemID" value={itemID} />
      <button type="submit">Add to Cart</button>
      {formState?.success && (
        <div className="toast">
          Added to cart! Your cart now has {formState.cartSize} items.
        </div>
      )}
      {formState?.success === false && (
        <div className="error">Failed to add to cart: {formState.message}</div>
      )}
    </form>
  )
}

export default function App() {
  return (
    <>
      <AddToCartForm itemID="1" itemTitle="JavaScript: The Definitive Guide" />
      <AddToCartForm itemID="2" itemTitle="JavaScript: The Good Parts" />
    </>
  )
}
```

```tsx
"use server"

export async function addToCart(prevState, queryData) {
  const itemID = queryData.get("itemID")
  if (itemID === "1") {
    return {
      success: true,
      cartSize: 12,
    }
  } else {
    return {
      success: false,
      message: "The item is sold out.",
    }
  }
}
```
