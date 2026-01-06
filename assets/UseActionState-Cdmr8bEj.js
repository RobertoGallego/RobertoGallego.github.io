import{u as x,j as e,r as g}from"./index-BQ6reGTr.js";import{H as f,t as n}from"./index-DNGCOx9y.js";const t=({code:a,language:r="typescript",isDarkMode:s})=>e.jsx(f,{theme:s?n.nightOwl:n.github,code:a,language:r,children:({className:i,style:o,tokens:l,getLineProps:m,getTokenProps:u})=>e.jsx("pre",{className:i,style:o,children:l.map((c,p)=>e.jsx("div",{...m({line:c}),children:c.map((h,j)=>e.jsx("span",{...u({token:h})},j))},p))})});async function v(a,r){const s=r.get("itemID");return await new Promise(i=>setTimeout(i,1e3)),s==="1"?{success:!0,cartSize:12}:{success:!1,message:"The item is sold out."}}function d({itemID:a,itemTitle:r}){const[s,i,o]=g.useActionState(v,{});return e.jsxs("form",{action:i,className:"form-demo",children:[e.jsx("h3",{children:r}),e.jsx("input",{type:"hidden",name:"itemID",value:a}),e.jsx("button",{type:"submit",className:"btn-primary",disabled:o,children:o?"Loading...":"Add to Cart"}),(s==null?void 0:s.success)&&e.jsxs("div",{className:"toast",children:["Added to cart! Your cart now has ",s.cartSize," items."]}),(s==null?void 0:s.success)===!1&&e.jsxs("div",{className:"error",children:["Failed to add to cart: ",s.message]})]})}const N=()=>{const{isDarkMode:a}=x();return e.jsxs("div",{className:`useState-container ${a?"dark":"light"}`,children:[e.jsxs("header",{className:`header ${a?"dark":"light"}`,children:[e.jsx("h1",{children:"📋 useActionState Hook"}),e.jsx("p",{className:"subtitle",children:"Permite actualizar el estado basado en el resultado de un formulario en action."})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📚 ¿Qué es useActionState?"}),e.jsxs("div",{className:"card",children:[e.jsxs("p",{children:[e.jsx("code",{children:"useActionState"})," permite manejar el estado de un formulario de forma automática. Devuelve una función para enviar el formulario (formAction), el estado actual (state) y si la acción está pendiente (isPending)."]}),e.jsxs("div",{className:"highlight-box",children:[e.jsx("strong",{children:"✨ Importante:"})," Se usa en el cliente y puede mostrar la respuesta del servidor incluso antes de que la página termine de hidratarse."]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🎯 Sintaxis"}),e.jsx("div",{className:"code-block",children:e.jsx(t,{language:"typescript",code:`const [state, formAction, isPending] = useActionState(fn, initialState, permalink?)

// Retorna:
// - state: el estado más reciente del formulario
// - formAction: función para enviar el formulario
// - isPending: booleano que indica si la acción está en curso`})}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Parámetros"}),e.jsxs("ul",{className:"anatomy-list",children:[e.jsxs("li",{children:[e.jsx("span",{className:"param",children:"fn"})," - Función que se llama al enviar el formulario. Recibe el estado previo y los datos del formulario."]}),e.jsxs("li",{children:[e.jsx("span",{className:"param",children:"initialState"})," - Valor inicial del estado del formulario (se ignora después de la primera acción)."]}),e.jsxs("li",{children:[e.jsx("span",{className:"param",children:"permalink (opcional)"})," - URL única de la página que modifica el formulario."]})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📝 onSubmit vs action"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"Ambos métodos son válidos y siguen siendo usados. La diferencia es cómo y dónde quieres manejar el formulario:"})}),e.jsx("div",{className:"table-container",children:e.jsxs("table",{className:"methods-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Método"}),e.jsx("th",{children:"Dónde se ejecuta"}),e.jsx("th",{children:"Caso de uso real"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onSubmit"})}),e.jsx("td",{children:"Cliente (navegador)"}),e.jsx("td",{children:"Login/Registro con validaciones, formularios complejos con React Hook Form"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"action"})," (cliente)"]}),e.jsx("td",{children:"Cliente (navegador)"}),e.jsx("td",{children:"Filtrar/buscar productos ya cargados, toggle favoritos locales"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"action"})," (servidor)"]}),e.jsx("td",{children:"Servidor"}),e.jsx("td",{children:"Crear posts en blog, guardar en DB, checkout/pagos, upload de archivos"})]})]})]})}),e.jsx("h3",{style:{marginTop:"2rem",color:"#667eea"},children:"Ejemplo 1: onSubmit - Login con validaciones"}),e.jsx("div",{className:"code-block",children:e.jsx(t,{language:"typescript",code:`// ✅ Caso REAL: Login con validaciones por campo
import { useForm } from 'react-hook-form'

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  
  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(data)
      })
      if (!response.ok) throw new Error('Credenciales inválidas')
      // Redirigir al dashboard
    } catch (error) {
      alert(error.message)
    }
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input 
        {...register('email', { 
          required: 'Email requerido',
          pattern: { value: /^\\S+@\\S+$/i, message: 'Email inválido' }
        })} 
      />
      {errors.email && <span>{errors.email.message}</span>}
      
      <input 
        type="password"
        {...register('password', { 
          required: 'Password requerido',
          minLength: { value: 8, message: 'Mínimo 8 caracteres' }
        })} 
      />
      {errors.password && <span>{errors.password.message}</span>}
      
      <button type="submit">Iniciar sesión</button>
    </form>
  )
}`})}),e.jsx("h3",{style:{marginTop:"2rem",color:"#667eea"},children:"Ejemplo 2: action (cliente) - Buscar productos locales"}),e.jsx("div",{className:"code-block",children:e.jsx(t,{language:"typescript",code:`// ✅ Caso REAL: Filtrar productos que ya tienes cargados (sin servidor)
import { useActionState } from 'react'

// Productos ya cargados desde la API inicial
const products = [
  { id: 1, name: 'iPhone 15', category: 'electronics', price: 999 },
  { id: 2, name: 'MacBook Pro', category: 'electronics', price: 2499 },
  { id: 3, name: 'Camiseta Nike', category: 'clothing', price: 29 }
]

function searchProducts(prevState, formData) {
  const query = formData.get('search')
  const category = formData.get('category')
  
  // Filtrar en el cliente (datos ya cargados)
  const results = products.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) && 
    (!category || p.category === category)
  )
  
  return { results, count: results.length }
}

function SearchForm() {
  const [state, formAction] = useActionState(searchProducts, { results: [] })
  
  return (
    <div>
      <form action={formAction}>
        <input name="search" placeholder="Buscar productos..." />
        <select name="category">
          <option value="">Todas las categorías</option>
          <option value="electronics">Electrónica</option>
          <option value="clothing">Ropa</option>
        </select>
        <button type="submit">Buscar</button>
      </form>
      
      <p>Encontrados: {state.count} productos</p>
      {state.results.map(p => (
        <div key={p.id}>
          {p.name} - \${p.price}
        </div>
      ))}
    </div>
  )
}`})}),e.jsx("h3",{style:{marginTop:"2rem",color:"#667eea"},children:"Ejemplo 3: action (servidor) - Crear post en blog"}),e.jsx("div",{className:"code-block",children:e.jsx(t,{language:"typescript",code:`// ✅ Caso REAL: Guardar post en base de datos (Next.js)
// actions.ts
"use server"
import { db } from '@/lib/db'

export async function createPost(prevState, formData) {
  const title = formData.get('title')
  const content = formData.get('content')
  
  // Validar en servidor
  if (!title || title.length < 5) {
    return { error: 'Título muy corto (mínimo 5 caracteres)' }
  }
  
  // Guardar en PostgreSQL/MongoDB
  const post = await db.posts.create({
    data: { 
      title, 
      content, 
      userId: session.user.id,
      createdAt: new Date()
    }
  })
  
  return { success: true, postId: post.id }
}

// CreatePostForm.tsx
import { useActionState } from 'react'
import { createPost } from './actions'

function CreatePostForm() {
  const [state, formAction, isPending] = useActionState(createPost, {})
  
  return (
    <form action={formAction}>
      <input 
        name="title" 
        placeholder="Título del post" 
        required 
      />
      <textarea 
        name="content" 
        placeholder="Escribe tu contenido..." 
        required 
      />
      
      <button type="submit" disabled={isPending}>
        {isPending ? 'Guardando...' : 'Publicar Post'}
      </button>
      
      {state.error && <p style={{color: 'red'}}>{state.error}</p>}
      {state.success && <p>✅ Post creado con ID: {state.postId}</p>}
    </form>
  )
}`})}),e.jsxs("div",{className:"info-box",style:{marginTop:"1.5rem"},children:[e.jsx("strong",{children:"💡 Resumen de casos reales:"}),e.jsxs("ul",{style:{marginTop:"0.5rem",paddingLeft:"1.5rem"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"onSubmit"})," → Login, registro, formularios con validaciones complejas (React Hook Form)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"action (cliente)"})," → Filtrar/buscar datos ya cargados, toggle favoritos sin servidor"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"action (servidor)"})," → Crear posts, guardar en DB, checkout, upload archivos (Next.js)"]})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🎮 Demo Interactiva"}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:["Cuando un form action se invoca, ",e.jsx("code",{children:"formAction"})," es la nueva función que llamas, ",e.jsx("code",{children:"state"})," contiene la respuesta del servidor, y ",e.jsx("code",{children:"isPending"})," indica si está en proceso."]})}),e.jsx(d,{itemID:"1",itemTitle:"JavaScript: The Definitive Guide"}),e.jsx(d,{itemID:"2",itemTitle:"JavaScript: The Good Parts"})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"💻 Ejemplo: Mensaje Simple"}),e.jsx("div",{className:"code-block",children:e.jsx(t,{language:"typescript",code:`import { useActionState } from "react"
import { addToCart } from "./actions.js"

function AddToCartForm({ itemID, itemTitle }) {
  const [message, formAction, isPending] = useActionState(addToCart, null)
  
  return (
    <form action={formAction}>
      <h2>{itemTitle}</h2>
      <input type="hidden" name="itemID" value={itemID} />
      <button type="submit">Add to Cart</button>
      {isPending ? "Loading..." : message}
    </form>
  )
}`})}),e.jsx("div",{className:"code-block",children:e.jsx(t,{language:"typescript",code:`"use server"

export async function addToCart(prevState, queryData) {
  const itemID = queryData.get("itemID")
  
  if (itemID === "1") {
    return "Added to cart"
  } else {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000)
    })
    return "Couldn't add to cart: the item is sold out."
  }
}`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📦 Ejemplo: Estado con Objeto"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"Puedes devolver un objeto más complejo con múltiples propiedades:"})}),e.jsx("div",{className:"code-block",children:e.jsx(t,{language:"typescript",code:`function AddToCartForm({ itemID, itemTitle }) {
  const [formState, formAction] = useActionState(addToCart, {})
  
  return (
    <form action={formAction}>
      <h2>{itemTitle}</h2>
      <input type="hidden" name="itemID" value={itemID} />
      <button type="submit">Add to Cart</button>
      
      {formState?.success && (
        <div className="toast">
          Added to cart! Your cart now has {formState.cartSize} items.
        </div>
      )}
      
      {formState?.success === false && (
        <div className="error">
          Failed to add to cart: {formState.message}
        </div>
      )}
    </form>
  )
}`})}),e.jsx("div",{className:"code-block",children:e.jsx(t,{language:"typescript",code:`"use server"

export async function addToCart(prevState, queryData) {
  const itemID = queryData.get("itemID")
  
  if (itemID === "1") {
    return {
      success: true,
      cartSize: 12,
    }
  } else {
    return {
      success: false,
      message: "The item is sold out.",
    }
  }
}`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"💡 Tips y Best Practices"}),e.jsxs("div",{className:"tips-grid",children:[e.jsxs("div",{className:"tip-card",children:[e.jsx("span",{className:"tip-icon",children:"🔄"}),e.jsx("h3",{children:"Estado Automático"}),e.jsx("p",{children:"Maneja estado del formulario sin useState manual"})]}),e.jsxs("div",{className:"tip-card",children:[e.jsx("span",{className:"tip-icon",children:"⏳"}),e.jsx("h3",{children:"isPending"}),e.jsx("p",{children:"Indica visualmente cuando la acción está en progreso"})]}),e.jsxs("div",{className:"tip-card",children:[e.jsx("span",{className:"tip-icon",children:"🌐"}),e.jsx("h3",{children:"Server Actions"}),e.jsx("p",{children:"Funciona perfectamente con acciones del servidor"})]}),e.jsxs("div",{className:"tip-card",children:[e.jsx("span",{className:"tip-icon",children:"⚡"}),e.jsx("h3",{children:"Pre-hidratación"}),e.jsx("p",{children:"Muestra respuestas antes de que cargue el JavaScript"})]}),e.jsxs("div",{className:"tip-card",children:[e.jsx("span",{className:"tip-icon",children:"📋"}),e.jsx("h3",{children:"FormData"}),e.jsx("p",{children:"Recibe automáticamente los datos del formulario"})]}),e.jsxs("div",{className:"tip-card",children:[e.jsx("span",{className:"tip-icon",children:"🎯"}),e.jsx("h3",{children:"Estado Previo"}),e.jsx("p",{children:"Accede al estado anterior en cada invocación"})]})]})]}),e.jsx("footer",{className:"footer",children:e.jsx("p",{children:"📚 Curso de React 2025 | Creado con ❤️ para la comunidad hispanohablante"})})]})};export{N as default};
