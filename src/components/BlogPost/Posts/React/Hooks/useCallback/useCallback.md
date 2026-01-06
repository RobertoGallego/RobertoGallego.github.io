useCallback

permite almacenar la definición de una función entre renderizados subsecuentes.
optimización de rendimiento.

```tsx
const cachedFn = useCallback(fn, dependencies)
```

```tsx
import { useCallback } from 'react';

export default function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);
```

parametros

fn: La función que deseas guardar en caché, si no cambia si las dependencias no han cambiado.

dependencias: La lista de todos los valores reactivos dentro de la función fn. Los valores reactivos incluyen props, estado y todas las variables y funciones declaradas directamente dentro del cuerpo de tu componente.

Almacenar una función con useCallback solo es beneficioso en unos pocos casos:

Al enviarla como prop al componente envuelto en memo.

La función que estás enviando se usa más tarde como una dependencia de algún Hook. Por ejemplo, cuando otra función envuelta en useCallback depende de ella, o cuando dependes de dicha función desde useEffect.

No existe ningún beneficio en envolver una función en useCallback en otros casos. Aunque tampoco afecta negativamente hacerlo.

Ejemplo 1
Omitir rerenderizados con useCallback y memo

```tsx
import { useState } from "react"
import ProductPage from "./ProductPage.js"

export default function App() {
  const [isDark, setIsDark] = useState(false)
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Modo Oscuro
      </label>
      <hr />
      <ProductPage
        referrerId="wizard_of_oz"
        productId={123}
        theme={isDark ? "dark" : "light"}
      />
    </>
  )
}
```

```tsx
import { useCallback } from "react"
import ShippingForm from "./ShippingForm.js"

export default function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback(
    (orderDetails) => {
      post("/product/" + productId + "/buy", {
        referrer,
        orderDetails,
      })
    },
    [productId, referrer]
  )

  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  )
}

function post(url, data) {
  // Imagina que esto envía una petición...
  console.log("POST /" + url)
  console.log(data)
}
```

```tsx
import { memo, useState } from "react"

const ShippingForm = memo(function ShippingForm({ onSubmit }) {
  const [count, setCount] = useState(1)

  console.log("[ARTIFICIALLY SLOW] Rendering <ShippingForm />")
  let startTime = performance.now()
  while (performance.now() - startTime < 500) {
    // No hace nada por 500 ms para emular un componente lento
  }

  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const orderDetails = {
      ...Object.fromEntries(formData),
      count,
    }
    onSubmit(orderDetails)
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <b>
          Nota: ¡<code>ShippingForm</code> está artificialmente ralentizado!
        </b>
      </p>
      <label>
        Número de items:
        <button type="button" onClick={() => setCount(count - 1)}>
          –
        </button>
        {count}
        <button type="button" onClick={() => setCount(count + 1)}>
          +
        </button>
      </label>
      <label>
        Calle:
        <input name="street" />
      </label>
      <label>
        Ciudad:
        <input name="city" />
      </label>
      <label>
        Código postal:
        <input name="zipCode" />
      </label>
      <button type="submit">Enviar</button>
    </form>
  )
})

export default ShippingForm
```

Ejemplo 2
Siempre rerenderizar un componente
para que puedas ver lo que sucede cuando un componente de React que estás renderizando es realmente lento. Intenta incrementar el contador y cambiar el tema.

```tsx
import { useState } from "react"
import ProductPage from "./ProductPage.js"

export default function App() {
  const [isDark, setIsDark] = useState(false)
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Modo Oscuro
      </label>
      <hr />
      <ProductPage
        referrerId="wizard_of_oz"
        productId={123}
        theme={isDark ? "dark" : "light"}
      />
    </>
  )
}
```

```tsx
import ShippingForm from "./ShippingForm.js"

export default function ProductPage({ productId, referrer, theme }) {
  function handleSubmit(orderDetails) {
    post("/product/" + productId + "/buy", {
      referrer,
      orderDetails,
    })
  }

  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  )
}

function post(url, data) {
  // Imagina que esto envía una petición...
  console.log("POST /" + url)
  console.log(data)
}
```

```tsx
import { memo, useState } from "react"

const ShippingForm = memo(function ShippingForm({ onSubmit }) {
  const [count, setCount] = useState(1)

  console.log("[ARTIFICIALLY SLOW] Rendering <ShippingForm />")
  let startTime = performance.now()
  while (performance.now() - startTime < 500) {
    // No hace nada por 500 ms para emular un componente lento
  }

  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const orderDetails = {
      ...Object.fromEntries(formData),
      count,
    }
    onSubmit(orderDetails)
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <b>
          Nota: ¡<code>ShippingForm</code> está artificialmente ralentizado!
        </b>
      </p>
      <label>
        Número de items:
        <button type="button" onClick={() => setCount(count - 1)}>
          –
        </button>
        {count}
        <button type="button" onClick={() => setCount(count + 1)}>
          +
        </button>
      </label>
      <label>
        Calle:
        <input name="street" />
      </label>
      <label>
        Ciudad:
        <input name="city" />
      </label>
      <label>
        Código postal:
        <input name="zipCode" />
      </label>
      <button type="submit">Enviar</button>
    </form>
  )
})

export default ShippingForm
```

Generalmente, el código sin memoización funciona bien. Si tus interacciones son lo suficientemente rápidas, no necesitas de la memoización.

Actualizar estado desde un callback en caché

```tsx
function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = useCallback((text) => {
    const newTodo = { id: nextId++, text };
    setTodos([...todos, newTodo]);
  }, [todos]);
  // ...
```

Por lo general es mejor que tus funciones almacenadas tengan el menor número de dependencias posibles.

````tsx
function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = useCallback((text) => {
    const newTodo = { id: nextId++, text };
    setTodos(todos => [...todos, newTodo]);
  }, []); // ✅ No se necesita la dependencia `todos`
  // ...```
````

Prevenir que un Efecto se dispare frecuentemente

```tsx
function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  function createOptions() {
    return {
      serverUrl: 'https://localhost:1234',
      roomId: roomId
    };
  }

  useEffect(() => {
    const options = createOptions();
    const connection = createConnection(options);
    connection.connect();
        return () => connection.disconnect();
  }, [createOptions]); // 🔴 Problema: Esta dependencia cambia en cada renderizado
  // ...
```

Para solventar esto

```tsx
function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  const createOptions = useCallback(() => {
    return {
      serverUrl: 'https://localhost:1234',
      roomId: roomId
    };
  }, [roomId]); // ✅ Solo cambia cuando roomId cambia

  useEffect(() => {
    const options = createOptions();
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [createOptions]); // ✅ Solo cambia cuando createOptions cambia
  // ...
```

Esto asegura que la función createOptions sea la misma entre renderizados subsecuentes, siempre que roomId sea el mismo. Sin embargo, es aún mejor eliminar la necesidad de una dependencia de la función.

```tsx
function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    function createOptions() { // ✅ No es necesario usar useCallback ni dependencias de función
      return {
        serverUrl: 'https://localhost:1234',
        roomId: roomId
      };
    }

    const options = createOptions();
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]); // ✅ Solo cambia cuando roomId cambia
  // ...
```

Optimizar un Hook personalizado

Si estás escribiendo un Hook personalizado, es recomendable envolver cualquier función que el Hook devuelva con useCallback Esto asegura que los consumidores de tu Hook puedan optimizar su propio código cuando sea necesario. :

```tsx
function useRouter() {
  const { dispatch } = useContext(RouterStateContext)

  const navigate = useCallback(
    (url) => {
      dispatch({ type: "navigate", url })
    },
    [dispatch]
  )

  const goBack = useCallback(() => {
    dispatch({ type: "back" })
  }, [dispatch])

  return {
    navigate,
    goBack,
  }
}
```

Solución de problemas

No te olvides de las dependencias

```tsx
function ProductPage({ productId, referrer }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);
```

si el problema persiste revisa las dependencias manualmenta

```tsx
console.log([productId, referrer])
```
