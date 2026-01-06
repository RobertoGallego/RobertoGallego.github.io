useDebugValue

Te permite añadir una etiqueta a un Hook personalizado en las herramientas de desarrollo de React.

```tsx
useDebugValue(value, format?)
```

Parámetros

value valor que quieres mostrar
format opcional: Una función de formateo. Cuando se inspecciona el componente, las herramientas de desarrollo de React llamarán a la función de formateo con value como argumento, y mostrarán el valor formateado devuelto (que puede tener cualquier tipo). Si no especificas la función de formateo, se mostrará el mismo valor value original.

Uso

```tsx
useDebugValue(date, (date) => date.toDateString())
```

```tsx
import { useState, useEffect, useDebugValue } from "react"

// Hook personalizado que devuelve la hora actual cada segundo
function useCurrentTime() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Aquí usamos useDebugValue para mostrar el tiempo formateado en React DevTools
  useDebugValue(time, (date) => date.toLocaleTimeString())

  return time
}

// Uso en un componente
export default function Clock() {
  const time = useCurrentTime()

  return <div>Hora actual: {time.toLocaleTimeString()}</div>
}
```

useDebugValue solo afecta a React DevTools, no al renderizado real.

Es útil para Hooks personalizados complejos donde quieres ver de manera rápida el estado interno.

Puedes usar una función de formateo para mostrar el valor de forma legible, como en el ejemplo con toLocaleTimeString().

Si el valor es simple o no necesitas depuración, no es obligatorio usarlo.
