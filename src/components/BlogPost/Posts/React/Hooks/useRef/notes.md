Hooks Ref

useRef

Los Refs permiten a un componente conserva algo de información que no es usada para el renderizado

permite referenciar un valor

```tsx
const ref = useRef(initialValue)1 1
```

Devuelve
useRef devuelve un objeto con una sola propiedad:

current: Inicialmente, se establece en el initialValue que has pasado. Más tarde puedes establecerlo a otra cosa. Si pasas el objeto ref a React como un atributo ref a un nodo JSX, React establecerá su propiedad current.

Puedes mutar la propiedad ref.current. A diferencia del estado, es mutable.

las refs son perfectas para almacenar información que no afecta a la salida visual de tu componente.

ejemplo

```tsx
function handleStartClick() {
  const intervalId = setInterval(() => {
    // ...
  }, 1000)
  intervalRef.current = intervalId
}
```

```tsx
function handleStopClick() {
  const intervalId = intervalRef.current
  clearInterval(intervalId)
}
```

al utilizar ref puedes almacenar información entre renderizados (a diferencia de las variables regulares, que se reinician en cada renderizado).

Atención

No escribas ni leas ref.current durante el renderizado.

```tsx
function MyComponent() {
  // ...
  // 🚩 No escribas una ref durante el renderizado
  myRef.current = 123
  // ...
  // 🚩 No leas una ref durante el renderizado
  return <h1>{myOtherRef.current}</h1>
}
```

Puedes, en su lugar, leer o escribir refs desde controladores de eventos o efectos.

```tsx
function MyComponent() {
  // ...
  useEffect(() => {
    // ✅ Se pueden leer o escribir refs en efectos
    myRef.current = 123
  })
  // ...
  function handleClick() {
    // ✅ Puedes leer o escribir refs en los controladores de eventos
    doSomething(myOtherRef.current)
  }
  // ...
}
```

Manipulación del DOM con una ref

Es particularmente común utilizar una ref para manipular el DOM. React tiene soporte incorporado para esto.

En primer lugar, declara una objeto ref con un valor inicial de null:

```tsx
import { useRef } from "react"

export default function Form() {
  const inputRef = useRef(null)

  function handleClick() {
    inputRef.current.focus()
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  )
}
```

Evitar la recreación del contenido de las refs

```tsx
function Video() {
  const playerRef = useRef(new VideoPlayer());
  // ...
```

Para solucionarlo, puedes inicializar la ref de esta manera:

```tsx
function Video() {
  const playerRef = useRef(null);
  if (playerRef.current === null) {
    playerRef.current = new VideoPlayer();
  }
  // ...
```

Solución de problemas
Si intentas pasar una ref a tu propio componente de esta manera

```tsx
const inputRef = useRef(null)

return <MyInput ref={inputRef} />
```

tienes que pasarlo en el props

```tsx
export default function MyInput({ value, onChange, ref }) {
  return <input value={value} onChange={onChange} ref={ref} />
}
```
