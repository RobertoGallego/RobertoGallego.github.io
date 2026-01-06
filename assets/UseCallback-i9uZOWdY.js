import{u as j,j as e,r as i}from"./index-BQ6reGTr.js";import{H as f,t as m}from"./index-DNGCOx9y.js";const s=({code:o,language:t="typescript",isDarkMode:n})=>e.jsx(f,{theme:n?m.nightOwl:m.github,code:o,language:t,children:({className:a,style:c,tokens:l,getLineProps:r,getTokenProps:u})=>e.jsx("pre",{className:a,style:c,children:l.map((d,h)=>e.jsx("div",{...r({line:d}),children:d.map((b,x)=>e.jsx("span",{...u({token:b})},x))},h))})}),D=()=>{const{isDarkMode:o}=j();return e.jsxs("div",{className:`useState-container ${o?"dark":"light"}`,id:"useCallback",children:[e.jsxs("header",{className:`useState-header ${o?"dark":"light"}`,children:[e.jsx("h1",{children:"⚡ useCallback Hook"}),e.jsx("p",{className:"subtitle",children:"permite almacenar la definición de una función entre renderizados subsecuentes. optimización de rendimiento."})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🎯 Sintaxis"}),e.jsx("div",{className:"code-block",children:e.jsx(s,{language:"typescript",isDarkMode:o,code:"const cachedFn = useCallback(fn, dependencies)"})}),e.jsx("div",{className:"code-block",children:e.jsx(s,{language:"typescript",isDarkMode:o,code:`import { useCallback } from 'react';

export default function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📦 parametros"}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:[e.jsx("strong",{children:"fn:"})," La función que deseas guardar en caché, si no cambia si las dependencias no han cambiado."]})}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:[e.jsx("strong",{children:"dependencias:"})," La lista de todos los valores reactivos dentro de la función fn. Los valores reactivos incluyen props, estado y todas las variables y funciones declaradas directamente dentro del cuerpo de tu componente."]})}),e.jsxs("div",{className:"card",children:[e.jsx("p",{children:"Almacenar una función con useCallback solo es beneficioso en unos pocos casos:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Al enviarla como prop al componente envuelto en memo."}),e.jsx("li",{children:"La función que estás enviando se usa más tarde como una dependencia de algún Hook. Por ejemplo, cuando otra función envuelta en useCallback depende de ella, o cuando dependes de dicha función desde useEffect."})]})]}),e.jsxs("div",{className:"info-box",children:[e.jsx("strong",{children:"💡 Nota:"})," No existe ningún beneficio en envolver una función en useCallback en otros casos. Aunque tampoco afecta negativamente hacerlo."]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📌 Ejemplo 1"}),e.jsx("h3",{children:"Omitir rerenderizados con useCallback y memo"}),e.jsx("div",{className:"code-block",children:e.jsx(s,{isDarkMode:o,language:"typescript",code:`import { useState } from "react"
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
}`})}),e.jsx("div",{className:"code-block",children:e.jsx(s,{isDarkMode:o,language:"typescript",code:`import { useCallback } from "react"
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
}`})}),e.jsx("div",{className:"code-block",children:e.jsx(s,{isDarkMode:o,language:"typescript",code:`import { memo, useState } from "react"

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

export default ShippingForm`})}),e.jsx(g,{})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📌 Ejemplo 2"}),e.jsx("h3",{children:"Siempre rerenderizar un componente"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"para que puedas ver lo que sucede cuando un componente de React que estás renderizando es realmente lento. Intenta incrementar el contador y cambiar el tema."})}),e.jsx("div",{className:"code-block",children:e.jsx(s,{isDarkMode:o,language:"typescript",code:`import { useState } from "react"
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
}`})}),e.jsx("div",{className:"code-block",children:e.jsx(s,{isDarkMode:o,language:"typescript",code:`import ShippingForm from "./ShippingForm.js"

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
}`})}),e.jsx("div",{className:"code-block",children:e.jsx(s,{isDarkMode:o,language:"typescript",code:`import { memo, useState } from "react"

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

export default ShippingForm`})}),e.jsx(v,{}),e.jsxs("div",{className:"info-box",children:[e.jsx("strong",{children:"💡 Nota:"})," Generalmente, el código sin memoización funciona bien. Si tus interacciones son lo suficientemente rápidas, no necesitas de la memoización."]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🔄 Actualizar estado desde un callback en caché"}),e.jsx("div",{className:"code-block",children:e.jsx(s,{isDarkMode:o,language:"typescript",code:`function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = useCallback((text) => {
    const newTodo = { id: nextId++, text };
    setTodos([...todos, newTodo]);
  }, [todos]);
  // ...`})}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"Por lo general es mejor que tus funciones almacenadas tengan el menor número de dependencias posibles."})}),e.jsx("div",{className:"code-block",children:e.jsx(s,{isDarkMode:o,language:"typescript",code:`function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = useCallback((text) => {
    const newTodo = { id: nextId++, text };
    setTodos(todos => [...todos, newTodo]);
  }, []); // ✅ No se necesita la dependencia \`todos\`
  // ...`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"⚡ Prevenir que un Efecto se dispare frecuentemente"}),e.jsx("div",{className:"code-block",children:e.jsx(s,{isDarkMode:o,language:"typescript",code:`function ChatRoom({ roomId }) {
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
  // ...`})}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"Para solventar esto"})}),e.jsx("div",{className:"code-block",children:e.jsx(s,{isDarkMode:o,language:"typescript",code:`function ChatRoom({ roomId }) {
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
  // ...`})}),e.jsxs("div",{className:"info-box",children:[e.jsx("strong",{children:"💡 Mejor práctica:"})," Esto asegura que la función createOptions sea la misma entre renderizados subsecuentes, siempre que roomId sea el mismo. Sin embargo, es aún mejor eliminar la necesidad de una dependencia de la función."]}),e.jsx("div",{className:"code-block",children:e.jsx(s,{isDarkMode:o,language:"typescript",code:`function ChatRoom({ roomId }) {
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
  // ...`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🔧 Optimizar un Hook personalizado"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"Si estás escribiendo un Hook personalizado, es recomendable envolver cualquier función que el Hook devuelva con useCallback Esto asegura que los consumidores de tu Hook puedan optimizar su propio código cuando sea necesario. :"})}),e.jsx("div",{className:"code-block",children:e.jsx(s,{isDarkMode:o,language:"typescript",code:`function useRouter() {
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
}`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🔧 Solución de problemas"}),e.jsx("h3",{children:"No te olvides de las dependencias"}),e.jsx("div",{className:"code-block",children:e.jsx(s,{isDarkMode:o,language:"typescript",code:`function ProductPage({ productId, referrer }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);`})}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"si el problema persiste revisa las dependencias manualmenta"})}),e.jsx("div",{className:"code-block",children:e.jsx(s,{isDarkMode:o,language:"typescript",code:"console.log([productId, referrer])"})})]})]})};function g(){const[o,t]=i.useState(!1);return e.jsxs("div",{className:"demo-card",children:[e.jsx("h4",{children:"✨ Demo interactiva"}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:o,onChange:n=>t(n.target.checked)}),"Modo Oscuro"]}),e.jsx("hr",{}),e.jsx(k,{referrer:"wizard_of_oz",productId:123,theme:o?"dark":"light"})]})}function k({productId:o,referrer:t,theme:n}){const a=i.useCallback(c=>{p("/product/"+o+"/buy",{referrer:t,orderDetails:c})},[o,t]);return e.jsx("div",{className:n,children:e.jsx(S,{onSubmit:a})})}const S=i.memo(function({onSubmit:t}){const[n,a]=i.useState(1);console.log("[ARTIFICIALLY SLOW] Rendering <ShippingForm />");const c=performance.now();for(;performance.now()-c<500;);function l(r){r.preventDefault();const u=new FormData(r.target),d={...Object.fromEntries(u),count:n};t(d)}return e.jsxs("form",{onSubmit:l,children:[e.jsx("p",{children:e.jsxs("b",{children:["Nota: ¡",e.jsx("code",{children:"ShippingForm"})," está artificialmente ralentizado!"]})}),e.jsxs("label",{children:["Número de items:",e.jsx("button",{type:"button",onClick:()=>a(n-1),children:"–"}),n,e.jsx("button",{type:"button",onClick:()=>a(n+1),children:"+"})]}),e.jsxs("label",{children:["Calle:",e.jsx("input",{name:"street"})]}),e.jsxs("label",{children:["Ciudad:",e.jsx("input",{name:"city"})]}),e.jsxs("label",{children:["Código postal:",e.jsx("input",{name:"zipCode"})]}),e.jsx("button",{type:"submit",children:"Enviar"})]})});function v(){const[o,t]=i.useState(!1);return e.jsxs("div",{className:"demo-card",children:[e.jsx("h4",{children:"✨ Demo interactiva"}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:o,onChange:n=>t(n.target.checked)}),"Modo Oscuro"]}),e.jsx("hr",{}),e.jsx(C,{referrer:"wizard_of_oz",productId:123,theme:o?"dark":"light"})]})}function C({productId:o,referrer:t,theme:n}){function a(c){p("/product/"+o+"/buy",{referrer:t,orderDetails:c})}return e.jsx("div",{className:n,children:e.jsx(N,{onSubmit:a})})}const N=i.memo(function({onSubmit:t}){const[n,a]=i.useState(1);console.log("[ARTIFICIALLY SLOW] Rendering <ShippingForm />");const c=performance.now();for(;performance.now()-c<500;);function l(r){r.preventDefault();const u=new FormData(r.target),d={...Object.fromEntries(u),count:n};t(d)}return e.jsxs("form",{onSubmit:l,children:[e.jsx("p",{children:e.jsxs("b",{children:["Nota: ¡",e.jsx("code",{children:"ShippingForm"})," está artificialmente ralentizado!"]})}),e.jsxs("label",{children:["Número de items:",e.jsx("button",{type:"button",onClick:()=>a(n-1),children:"–"}),n,e.jsx("button",{type:"button",onClick:()=>a(n+1),children:"+"})]}),e.jsxs("label",{children:["Calle:",e.jsx("input",{name:"street"})]}),e.jsxs("label",{children:["Ciudad:",e.jsx("input",{name:"city"})]}),e.jsxs("label",{children:["Código postal:",e.jsx("input",{name:"zipCode"})]}),e.jsx("button",{type:"submit",children:"Enviar"})]})});function p(o,t){console.log("POST /"+o),console.log(t)}export{D as default};
