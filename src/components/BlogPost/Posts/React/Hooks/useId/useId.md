useId

generar IDs únicos que se pueden pasar a los atributos de accesibilidad.

```tsx
const id = useId()
```

useId no debe usarse para generar keys en una lista.

useId currently cannot be used in async Server Components.

Atributos de accesibilidad HTML como aria-describedby te permiten especificar que dos etiquetas están relacionadas entre sí. Por ejemplo, puedes especificar que un determinado elemento

ejemplo

```tsx
import { useId } from "react"

function PasswordField() {
  const passwordHintId = useId()
  return (
    <>
      <label>
        Password:
        <input type="password" aria-describedby={passwordHintId} />
      </label>
      <p id={passwordHintId}>
        The password should contain at least 18 characters
      </p>
    </>
  )
}

export default function App() {
  return (
    <>
      <h2>Choose password</h2>
      <PasswordField />
      <h2>Confirm password</h2>
      <PasswordField />
    </>
  )
}
```

atencion 

useId requiere un árbol de componentes idéntico en el servidor y el cliente cuando utilizas renderizado en el servidor. Si los árboles que se renderizan en el servidor y el cliente no coinciden exactamente, los IDs generados no coincidirán.