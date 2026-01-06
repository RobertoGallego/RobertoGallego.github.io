useInsertionEffect

⚠️ Hook especializado para bibliotecas CSS-en-JS

permite insertar elementos en el DOM antes de que se dispare cualquier Efecto de diseño (layout).

```tsx
useInsertionEffect(setup, dependencies?)
```

Parámetros

setup: función con la lógica de efectos. Puede devolver opcionalmente una función de limpieza.

dependencies: opcional. Lista de valores reactivos referenciados dentro de setup.

Devuelve

undefined

Advertencias

- Solo se ejecuta en el cliente, no en el servidor
- No puedes actualizar estado desde dentro
- Las referencias aún no se han adjuntado cuando se ejecuta
- Puede ejecutarse antes o después de que el DOM se actualice
- Dispara limpieza y setup un componente a la vez (intercalado)

Uso

Inyección de estilos dinámicos desde bibliotecas CSS-en-JS

```tsx
import { useInsertionEffect } from 'react'

// Dentro de tu biblioteca CSS-en-JS
function useCSS(rule) {
  useInsertionEffect(() => {
    // ... inyecta las etiquetas <style> aquí ...
  })
  return rule
}
```

Ejemplo completo:

```tsx
// En tu biblioteca CSS-en-JS
let isInserted = new Set()

function useCSS(rule) {
  useInsertionEffect(() => {
    if (!isInserted.has(rule)) {
      isInserted.add(rule)
      document.head.appendChild(getStyleForRule(rule))
    }
  })
  return rule
}

function Button() {
  const className = useCSS('...')
  return <div className={className} />
}
```

Con SSR (Server-Side Rendering):

```tsx
let collectedRulesSet = new Set()

function useCSS(rule) {
  if (typeof window === 'undefined') {
    collectedRulesSet.add(rule)
  }
  useInsertionEffect(() => {
    // inyectar en cliente
  })
  return rule
}
```

Buenas prácticas

✅ Usar solo en bibliotecas CSS-en-JS
✅ Inyectar estilos antes de efectos de layout
✅ Combinar con estilos estáticos y en línea cuando sea posible

❌ No usar en componentes normales (usar useEffect o useLayoutEffect)
❌ No inyectar estilos durante el renderizado directo
❌ No actualizar estado dentro de useInsertionEffect

¿Por qué es mejor que useEffect o useLayoutEffect?

Asegura que las etiquetas `<style>` estén añadidas antes de que otros efectos se ejecuten, evitando cálculos de layout incorrectos por estilos desactualizados.
