useMemo

guardar en caché el resultado de un cálculo entre renderizados.

```tsx
const cachedValue = useMemo(calculateValue, dependencies)

import { useMemo } from "react"

function TodoList({ todos, tab }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab])
  // ...
}
```

calcularValor: La función que calcula el valor que deseas memoizar.

dependencias: La lista de todos los valores reactivos a los que se hace referencia dentro del código calcularValor. Los valores reactivos incluyen props, estado y todas las variables y funciones declaradas directamente dentro del cuerpo de tu componente.

Evitar recálculos costosos

Por lo general, esto no es un problema porque la mayoría de los cálculos son muy rápidos. Sin embargo, si estás filtrando o transformando un array grande, o estás realizando algún cálculo costoso, es posible que desees omitir hacerlo nuevamente si los datos no han cambiado.

¿Cómo saber si un cálculo es costoso?

medir el tiempo dedicado a una pieza de código:

```tsx
console.time("filter array")
const visibleTodos = filterTodos(todos, tab)
console.timeEnd("filter array")
```

1 ms o más podría tener sentido memoizar ese cálculo

Evitando que un efecto se ejecute con frecuencia

```tsx
function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  const options = useMemo(() => {
    return {
      serverUrl: 'https://localhost:1234',
      roomId: roomId
    };
  }, [roomId]); // ✅ Solo cambia cuando roomId cambia

  useEffect(() => {
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [options]); // ✅ Solo cambia cuando options cambia
  // ...
```

sin embargo es mejor pasar el objeto directamente para quitar la dependencia

```tsx
function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const options = { // ✅ ¡No necesitas useMemo o dependencias de objetos!
      serverUrl: 'https://localhost:1234',
      roomId: roomId
    }

    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]); // ✅ Solo cambia cuando roomId cambia
  // ...
```

