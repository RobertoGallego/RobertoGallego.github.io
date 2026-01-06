useEffect

permite sincronizar un componente con un sistema externo.

```tsx
useEffect(() => {
  const connection = createConnection(serverUrl, roomId)
  connection.connect()
  return () => {
    connection.disconnect()
  }
}, [serverUrl, roomId])
// ...
```

configuración: La función con la lógica de tu Efecto.

dependencias opcionales: La lista de todos los valores reactivos referenciados dentro del código de configuración. Los valores reactivos incluyen props, estados, y todas las variables y funciones declaradas directamente dentro del cuerpo de tu componente.

USO

Conexión a un sistema externo

Estos sistemas no están controlados por React

- código de configuración
- código de limpieza
- dependencias

Este te permite mantener tu componente sincronizado

    Un temporizador gestionado con setInterval() y clearInterval().

    Una suscripción de eventos usando window.addEventListener() y window.removeEventListener().

    Una biblioteca de animación de terceros con una API como animation.start() y animation.reset().

    Controlar un cuadro de diálogo modal

    Monitorear visibilidad de un elemento por ejemplo para gestionar un IntersectionObserver

    Controlar un widget que no sea de React

Si no estas conectado a ningún sistema externo, probablemente no necesites un efecto.

Los valores reactivos incluyen props y todas las variables y funciones declaradas directamente dentro de su componente.

```tsx
function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState("https://localhost:1234")

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId)
    connection.connect()
    return () => connection.disconnect()
  }, []) // 🔴 React Hook useEffect tiene dependencias faltantes: 'roomId' y 'serverUrl'
  // ...
}
```

Para eliminar una dependencia, tienes que “demostrar” al linter que no necesita ser una dependencia.

```tsx
const serverUrl = "https://localhost:1234" // Ya no es un valor reactivo

function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId)
    connection.connect()
    return () => connection.disconnect()
  }, [roomId]) // ✅ Todas las dependencias declaradas
  // ...
}
```

Un efecto con dependencias vacías no se vuelve a ejecutar cuando cambian las props o el estado del componente.

Actualización del estado basado en el estado anterior de un efecto

```tsx
function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count + 1) // Quieres incrementar el contador cada segundo...
    }, 1000)
    return () => clearInterval(intervalId)
  }, [count]) // 🚩 ... pero al especificar `count` como dependencia siempre reinician el intervalo.
  // ...
}
```

Como count es un valor reactivo debe especificarce en deps mejor pasar el actulizador de estado asi no es necesario count in deps

```tsx
setCount((c) => c + 1) // ✅ Pasar un actualizador de estado
```

Eliminación de dependencias de objetos innecesarios

Evita utilizar como dependencia un objeto creado durante el renderizado. En su lugar, crea el objeto dentro del Efecto

Este esta aun en experimental :
Eliminación de dependencias de funciones innecesarias, hará que tu Efecto se vuelva a ejecutar después de cada rerenderizado

Lectura de las últimas props y el estado desde un Efecto

por ejemplo

```tsx
function Page({ url, shoppingCart }) {
  useEffect(() => {
    logVisit(url, shoppingCart.length)
  }, [url, shoppingCart]) // ✅ Todas las dependencias declaradas
  // ...
}
```

Sin embargo, a veces querrá leer las últimas props y estados de un efecto sin “reaccionar” a ellos.

¿Qué pasa si quieres registrar una nueva visita a la página después de cada cambio de url, pero no si sólo cambia el shoppingCart?

Para hacer esto usa useEffectEvent, y mueve el código que lea al shoppingCart dentro de tal Hook:

```tsx
function Page({ url, shoppingCart }) {
  const onVisit = useEffectEvent((visitedUrl) => {
    logVisit(visitedUrl, shoppingCart.length)
  })

  useEffect(() => {
    onVisit(url)
  }, [url]) // ✅ Todas las dependencias declaradas
  // ...
}
```

Mostrar contenidos diferentes en el servidor y en el cliente

En raras ocasiones, es posible que necesites mostrar un contenido diferente en el cliente. Por ejemplo, si su aplicación lee algunos datos del localStorage, no puede hacerlo en el servidor. Así es como típicamente se implementaría esto:

```tsx
unction MyComponent() {
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);
  }, []);

  if (didMount) {
    // ... devolver JSX sólo para clientes ...
  }  else {
    // ... devolver el JSX inicial ...
  }
}
```
