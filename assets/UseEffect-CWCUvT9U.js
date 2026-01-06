import{u,j as e,r as o}from"./index-BQ6reGTr.js";import{H as v,t as l}from"./index-DNGCOx9y.js";const n=({code:s,language:c="typescript"})=>{const{isDarkMode:a}=u();return e.jsx(v,{theme:a?l.nightOwl:l.github,code:s,language:c,children:({className:i,style:r,tokens:t,getLineProps:h,getTokenProps:p})=>e.jsx("pre",{className:i,style:r,children:t.map((d,m)=>e.jsx("div",{...h({line:d}),children:d.map((x,j)=>e.jsx("span",{...p({token:x})},j))},m))})})},b=()=>{const{isDarkMode:s}=u();return e.jsxs("div",{className:`useState-container ${s?"dark":"light"}`,id:"useEffect",children:[e.jsxs("header",{className:`useState-header ${s?"dark":"light"}`,children:[e.jsx("h1",{children:"🔄 useEffect Hook"}),e.jsx("p",{className:"subtitle",children:"permite sincronizar un componente con un sistema externo."})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🎯 Sintaxis"}),e.jsx("div",{className:"code-block",children:e.jsx(n,{language:"typescript",code:`useEffect(() => {
  const connection = createConnection(serverUrl, roomId)
  connection.connect()
  return () => {
    connection.disconnect()
  }
}, [serverUrl, roomId])
// ...`})}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:[e.jsx("strong",{children:"configuración:"})," La función con la lógica de tu Efecto."]})}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:[e.jsx("strong",{children:"dependencias opcionales:"})," La lista de todos los valores reactivos referenciados dentro del código de configuración. Los valores reactivos incluyen props, estados, y todas las variables y funciones declaradas directamente dentro del cuerpo de tu componente."]})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📌 USO"}),e.jsx("h3",{children:"Conexión a un sistema externo"}),e.jsxs("div",{className:"card",children:[e.jsx("p",{children:"Estos sistemas no están controlados por React"}),e.jsxs("ul",{children:[e.jsx("li",{children:"código de configuración"}),e.jsx("li",{children:"código de limpieza"}),e.jsx("li",{children:"dependencias"})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("p",{children:"Este te permite mantener tu componente sincronizado"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Un temporizador gestionado con setInterval() y clearInterval()."}),e.jsx("li",{children:"Una suscripción de eventos usando window.addEventListener() y window.removeEventListener()."}),e.jsx("li",{children:"Una biblioteca de animación de terceros con una API como animation.start() y animation.reset()."}),e.jsx("li",{children:"Controlar un cuadro de diálogo modal"}),e.jsx("li",{children:"Monitorear visibilidad de un elemento por ejemplo para gestionar un IntersectionObserver"}),e.jsx("li",{children:"Controlar un widget que no sea de React"})]})]}),e.jsxs("div",{className:"info-box",children:[e.jsx("strong",{children:"💡 Nota:"})," Si no estas conectado a ningún sistema externo, probablemente no necesites un efecto."]}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"Los valores reactivos incluyen props y todas las variables y funciones declaradas directamente dentro de su componente."})}),e.jsx("div",{className:"code-block",children:e.jsx(n,{language:"typescript",code:`function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState("https://localhost:1234")

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId)
    connection.connect()
    return () => connection.disconnect()
  }, []) // 🔴 React Hook useEffect tiene dependencias faltantes: 'roomId' y 'serverUrl'
  // ...
}`})}),e.jsx("div",{className:"card",children:e.jsx("p",{children:'Para eliminar una dependencia, tienes que "demostrar" al linter que no necesita ser una dependencia.'})}),e.jsx("div",{className:"code-block",children:e.jsx(n,{language:"typescript",code:`const serverUrl = "https://localhost:1234" // Ya no es un valor reactivo

function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId)
    connection.connect()
    return () => connection.disconnect()
  }, [roomId]) // ✅ Todas las dependencias declaradas
  // ...
}`})}),e.jsxs("div",{className:"info-box",children:[e.jsx("strong",{children:"💡 Nota:"})," Un efecto con dependencias vacías no se vuelve a ejecutar cuando cambian las props o el estado del componente."]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🔄 Actualización del estado basado en el estado anterior de un efecto"}),e.jsx("div",{className:"code-block",children:e.jsx(n,{language:"typescript",code:`function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count + 1) // Quieres incrementar el contador cada segundo...
    }, 1000)
    return () => clearInterval(intervalId)
  }, [count]) // 🚩 ... pero al especificar \`count\` como dependencia siempre reinician el intervalo.
  // ...
}`})}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"Como count es un valor reactivo debe especificarce en deps mejor pasar el actulizador de estado asi no es necesario count in deps"})}),e.jsx("div",{className:"code-block",children:e.jsx(n,{language:"typescript",code:"setCount((c) => c + 1) // ✅ Pasar un actualizador de estado"})}),e.jsx(f,{})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🗑️ Eliminación de dependencias de objetos innecesarios"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"Evita utilizar como dependencia un objeto creado durante el renderizado. En su lugar, crea el objeto dentro del Efecto"})}),e.jsxs("div",{className:"info-box",children:[e.jsx("strong",{children:"⚠️ Nota:"})," Este esta aun en experimental : Eliminación de dependencias de funciones innecesarias, hará que tu Efecto se vuelva a ejecutar después de cada rerenderizado"]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📖 Lectura de las últimas props y el estado desde un Efecto"}),e.jsx("div",{className:"code-block",children:e.jsx(n,{language:"typescript",code:`function Page({ url, shoppingCart }) {
  useEffect(() => {
    logVisit(url, shoppingCart.length)
  }, [url, shoppingCart]) // ✅ Todas las dependencias declaradas
  // ...
}`})}),e.jsx("div",{className:"card",children:e.jsx("p",{children:'Sin embargo, a veces querrá leer las últimas props y estados de un efecto sin "reaccionar" a ellos.'})}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"¿Qué pasa si quieres registrar una nueva visita a la página después de cada cambio de url, pero no si sólo cambia el shoppingCart?"})}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"Para hacer esto usa useEffectEvent, y mueve el código que lea al shoppingCart dentro de tal Hook:"})}),e.jsx("div",{className:"code-block",children:e.jsx(n,{language:"typescript",code:`function Page({ url, shoppingCart }) {
  const onVisit = useEffectEvent((visitedUrl) => {
    logVisit(visitedUrl, shoppingCart.length)
  })

  useEffect(() => {
    onVisit(url)
  }, [url]) // ✅ Todas las dependencias declaradas
  // ...
}`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"💻 Mostrar contenidos diferentes en el servidor y en el cliente"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"En raras ocasiones, es posible que necesites mostrar un contenido diferente en el cliente. Por ejemplo, si su aplicación lee algunos datos del localStorage, no puede hacerlo en el servidor. Así es como típicamente se implementaría esto:"})}),e.jsx("div",{className:"code-block",children:e.jsx(n,{language:"typescript",code:`function MyComponent() {
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);
  }, []);

  if (didMount) {
    // ... devolver JSX sólo para clientes ...
  }  else {
    // ... devolver el JSX inicial ...
  }
}`})}),e.jsx(g,{})]})]})};function f(){const[s,c]=o.useState(0),[a,i]=o.useState(!1);return o.useEffect(()=>{if(!a)return;const r=setInterval(()=>{c(t=>t+1)},1e3);return()=>clearInterval(r)},[a]),e.jsxs("div",{className:"demo-card",children:[e.jsx("h4",{children:"✨ Demo interactiva - Contador"}),e.jsxs("div",{children:[e.jsxs("h3",{children:["Count: ",s]}),e.jsx("button",{onClick:()=>i(!a),children:a?"Pausar":"Iniciar"}),e.jsx("button",{onClick:()=>c(0),children:"Reset"})]})]})}function g(){const[s,c]=o.useState(!1);return o.useEffect(()=>{c(!0)},[]),e.jsxs("div",{className:"demo-card",children:[e.jsx("h4",{children:"✨ Demo interactiva - SSR"}),e.jsxs("div",{children:[s?e.jsx("p",{children:"✅ Renderizado en el cliente (puede acceder a localStorage)"}):e.jsx("p",{children:"⏳ Renderizado inicial (servidor o primera carga)"}),e.jsx("p",{children:e.jsxs("small",{children:["Estado: ",s?"Montado":"No montado"]})})]})]})}export{b as default};
