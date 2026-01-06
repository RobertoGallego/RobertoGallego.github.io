import{u as g,j as t,r as d}from"./index-BQ6reGTr.js";import{H as j,t as u}from"./index-DNGCOx9y.js";const s=({code:e,language:n="typescript",isDarkMode:i})=>t.jsx(j,{theme:i?u.nightOwl:u.github,code:e,language:n,children:({className:a,style:r,tokens:o,getLineProps:c,getTokenProps:p})=>t.jsx("pre",{className:a,style:r,children:o.map((l,m)=>t.jsx("div",{...c({line:l}),children:l.map((h,x)=>t.jsx("span",{...p({token:h})},x))},m))})}),P=()=>{const{isDarkMode:e}=g();return t.jsxs("div",{className:`useState-container ${e?"dark":"light"}`,id:"useTransition",children:[t.jsxs("header",{className:`header ${e?"dark":"light"}`,children:[t.jsx("h1",{children:"⚡ useTransition Hook"}),t.jsx("p",{className:"subtitle",children:"renderizar una parte de la interfaz de usuario en segundo plano."})]}),t.jsxs("section",{className:"section",children:[t.jsx("h2",{children:"🎯 Sintaxis"}),t.jsx("div",{className:"card",children:t.jsx("p",{children:"transicion pendiente - marcar una actualizacion - no recibe parámetro."})}),t.jsx("div",{className:"code-block",children:t.jsx(s,{language:"typescript",code:"const [isPending, startTransition] = useTransition()"})}),t.jsx("div",{className:"code-block",children:t.jsx(s,{language:"typescript",code:`function TabContainer() {
  const [isPending, startTransition] = useTransition()
  const [tab, setTab] = useState("about")

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab)
    })
  }
  // ...
}`})}),t.jsx("div",{className:"card",children:t.jsx("p",{children:'The function (update some state) passed to startTransition is called an "Action".'})}),t.jsx("div",{className:"code-block",children:t.jsx(s,{language:"typescript",code:`      onClick={() => {
        startTransition(async () => {
          await submitAction();
        });
      }}`})})]}),t.jsxs("section",{className:"section",children:[t.jsx("h2",{children:"📌 Ejemplo 1"}),t.jsx("div",{className:"code-block",children:t.jsx(s,{language:"typescript",code:`import { useState, useTransition } from "react"
import { updateQuantity } from "./api"
import Item from "./Item"
import Total from "./Total"

export default function App({}) {
  const [quantity, setQuantity] = useState(1)
  const [isPending, startTransition] = useTransition()

  const updateQuantityAction = async (newQuantity) => {
    // To access the pending state of a transition,
    // call startTransition again.
    startTransition(async () => {
      const savedQuantity = await updateQuantity(newQuantity)
      startTransition(() => {
        setQuantity(savedQuantity)
      })
    })
  }

  return (
    <div>
      <h1>Checkout</h1>
      <Item action={updateQuantityAction} />
      <hr />
      <Total quantity={quantity} isPending={isPending} />
    </div>
  )
}`})}),t.jsx("div",{className:"code-block",children:t.jsx(s,{language:"typescript",code:`import { startTransition } from "react"

export default function Item({ action }) {
  function handleChange(event) {
    // To expose an action prop, await the callback in startTransition.
    startTransition(async () => {
      await action(event.target.value)
    })
  }
  return (
    <div className="item">
      <span>Eras Tour Tickets</span>
      <label htmlFor="name">Quantity: </label>
      <input type="number" onChange={handleChange} defaultValue={1} min={1} />
    </div>
  )
}`})}),t.jsx("div",{className:"code-block",children:t.jsx(s,{language:"typescript",code:`const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})

export default function Total({ quantity, isPending }) {
  return (
    <div className="total">
      <span>Total:</span>
      <span>
        {isPending ? "🌀 Updating..." : \`\${intl.format(quantity * 9999)}\`}
      </span>
    </div>
  )
}`})}),t.jsx("div",{className:"code-block",children:t.jsx(s,{language:"typescript",code:`export async function updateQuantity(newQuantity) {
  return new Promise((resolve, reject) => {
    // Simulate a slow network request.
    setTimeout(() => {
      resolve(newQuantity)
    }, 2000)
  })
}`})}),t.jsx(y,{})]}),t.jsxs("section",{className:"section",children:[t.jsx("h2",{children:"🚀 Construir un enrutador preparado para Suspense"}),t.jsxs("div",{className:"card",children:[t.jsx("p",{children:"This is recommended for three reasons:"}),t.jsxs("ul",{children:[t.jsx("li",{children:"Transitions are interruptible"}),t.jsx("li",{children:"Transitions prevent unwanted loading indicators"}),t.jsx("li",{children:"Transitions wait for all pending actions"})]}),t.jsx("p",{children:"Here is a simplified router example using Transitions for navigations."})]}),t.jsx("div",{className:"code-block",children:t.jsx(s,{language:"typescript",code:`import { Suspense, useState, useTransition } from "react"
import IndexPage from "./IndexPage.js"
import ArtistPage from "./ArtistPage.js"
import Layout from "./Layout.js"

export default function App() {
  return (
    <Suspense fallback={<BigSpinner />}>
      <Router />
    </Suspense>
  )
}

function Router() {
  const [page, setPage] = useState("/")
  const [isPending, startTransition] = useTransition()

  function navigate(url) {
    startTransition(() => {
      setPage(url)
    })
  }

  let content
  if (page === "/") {
    content = <IndexPage navigate={navigate} />
  } else if (page === "/the-beatles") {
    content = (
      <ArtistPage
        artist={{
          id: "the-beatles",
          name: "The Beatles",
        }}
      />
    )
  }
  return <Layout isPending={isPending}>{content}</Layout>
}

function BigSpinner() {
  return <h2>🌀 Loading...</h2>
}`})})]})]})};function y(){const[e,n]=d.useState(1),[i,a]=d.useTransition(),r=async o=>{a(async()=>{const c=await b(o);a(()=>{n(c)})})};return t.jsxs("div",{className:"demo-card",children:[t.jsx("h4",{children:"✨ Demo interactiva"}),t.jsxs("div",{children:[t.jsx("h3",{children:"Checkout"}),t.jsx(T,{action:r}),t.jsx("hr",{}),t.jsx(v,{quantity:e,isPending:i})]})]})}function T({action:e}){function n(i){const a=parseInt(i.target.value);!isNaN(a)&&a>0&&e(a)}return t.jsxs("div",{className:"item",children:[t.jsx("span",{children:"Eras Tour Tickets"}),t.jsx("label",{htmlFor:"quantity",children:"Quantity: "}),t.jsx("input",{id:"quantity",type:"number",onChange:n,defaultValue:1,min:1})]})}const f=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});function v({quantity:e,isPending:n}){return t.jsxs("div",{className:"total",children:[t.jsx("span",{children:"Total:"}),t.jsx("span",{children:n?"🌀 Updating...":`${f.format(e*9999)}`})]})}async function b(e){return new Promise(n=>{setTimeout(()=>{n(e)},2e3)})}export{P as default};
