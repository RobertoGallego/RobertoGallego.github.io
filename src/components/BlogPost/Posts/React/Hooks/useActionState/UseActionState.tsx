import { useActionState } from "react"
import "./useActionState.css"
import { Highlight, themes } from "prism-react-renderer"
import { useDarkMode } from "@/hooks"

const CodeBlock = ({
  code,
  language = "typescript",
  isDarkMode,
}: {
  code: string
  language?: string
  isDarkMode?: boolean
}) => (
  <Highlight
    theme={isDarkMode ? themes.nightOwl : themes.github}
    code={code}
    language={language}
  >
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div key={i} {...getLineProps({ line })}>
            {line.map((token, key) => (
              <span key={key} {...getTokenProps({ token })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
)

// Tipo para el estado del formulario
type FormState = {
  success?: boolean
  cartSize?: number
  message?: string
}

// Simulación de acción del servidor
async function addToCart(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const itemID = formData.get("itemID")

  // Simular delay del servidor
  await new Promise((resolve) => setTimeout(resolve, 1000))

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
}

// Componente de formulario individual
function AddToCartForm({ itemID, itemTitle }: { itemID: string; itemTitle: string }) {
  const [formState, formAction, isPending] = useActionState(addToCart, {})

  return (
    <form action={formAction as any} className="form-demo">
      <h3>{itemTitle}</h3>
      <input type="hidden" name="itemID" value={itemID} />
      <button type="submit" className="btn-primary" disabled={isPending}>
        {isPending ? "Loading..." : "Add to Cart"}
      </button>
      {formState?.success && (
        <div className="toast">
          Added to cart! Your cart now has {formState.cartSize} items.
        </div>
      )}
      {formState?.success === false && (
        <div className="error">Failed to add to cart: {formState.message}</div>
      )}
    </form>
  )
}

const UseActionState = () => {
  const { isDarkMode } = useDarkMode()
  
  return (
    <div className={`useState-container ${isDarkMode ? "dark" : "light"}`}>
      <header className={`header ${isDarkMode ? "dark" : "light"}`}>
        <h1>📋 useActionState Hook</h1>
        <p className="subtitle">
          Permite actualizar el estado basado en el resultado de un formulario en
          action.
        </p>
      </header>

      <section className="section">
        <h2>📚 ¿Qué es useActionState?</h2>
        <div className="card">
          <p>
            <code>useActionState</code> permite manejar el estado de un formulario
            de forma automática. Devuelve una función para enviar el formulario
            (formAction), el estado actual (state) y si la acción está pendiente
            (isPending).
          </p>
          <div className="highlight-box">
            <strong>✨ Importante:</strong> Se usa en el cliente y puede mostrar la
            respuesta del servidor incluso antes de que la página termine de
            hidratarse.
          </div>
        </div>
      </section>

      <section className="section">
        <h2>🎯 Sintaxis</h2>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`const [state, formAction, isPending] = useActionState(fn, initialState, permalink?)

// Retorna:
// - state: el estado más reciente del formulario
// - formAction: función para enviar el formulario
// - isPending: booleano que indica si la acción está en curso`}
          />
        </div>

        <div className="card">
          <h3>Parámetros</h3>
          <ul className="anatomy-list">
            <li>
              <span className="param">fn</span> - Función que se llama al enviar
              el formulario. Recibe el estado previo y los datos del formulario.
            </li>
            <li>
              <span className="param">initialState</span> - Valor inicial del
              estado del formulario (se ignora después de la primera acción).
            </li>
            <li>
              <span className="param">permalink (opcional)</span> - URL única de
              la página que modifica el formulario.
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>📝 onSubmit vs action</h2>
        <div className="card">
          <p>
            Ambos métodos son válidos y siguen siendo usados. La diferencia es
            cómo y dónde quieres manejar el formulario:
          </p>
        </div>
        <div className="table-container">
          <table className="methods-table">
            <thead>
              <tr>
                <th>Método</th>
                <th>Dónde se ejecuta</th>
                <th>Caso de uso real</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>onSubmit</code>
                </td>
                <td>Cliente (navegador)</td>
                <td>
                  Login/Registro con validaciones, formularios complejos con React Hook Form
                </td>
              </tr>
              <tr>
                <td>
                  <code>action</code> (cliente)
                </td>
                <td>Cliente (navegador)</td>
                <td>
                  Filtrar/buscar productos ya cargados, toggle favoritos locales
                </td>
              </tr>
              <tr>
                <td>
                  <code>action</code> (servidor)
                </td>
                <td>Servidor</td>
                <td>
                  Crear posts en blog, guardar en DB, checkout/pagos, upload de archivos
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 style={{ marginTop: "2rem", color: "#667eea" }}>
          Ejemplo 1: onSubmit - Login con validaciones
        </h3>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`// ✅ Caso REAL: Login con validaciones por campo
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
}`}
          />
        </div>

        <h3 style={{ marginTop: "2rem", color: "#667eea" }}>
          Ejemplo 2: action (cliente) - Buscar productos locales
        </h3>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`// ✅ Caso REAL: Filtrar productos que ya tienes cargados (sin servidor)
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
}`}
          />
        </div>

        <h3 style={{ marginTop: "2rem", color: "#667eea" }}>
          Ejemplo 3: action (servidor) - Crear post en blog
        </h3>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`// ✅ Caso REAL: Guardar post en base de datos (Next.js)
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
}`}
          />
        </div>

        <div className="info-box" style={{ marginTop: "1.5rem" }}>
          <strong>💡 Resumen de casos reales:</strong>
          <ul style={{ marginTop: "0.5rem", paddingLeft: "1.5rem" }}>
            <li>
              <strong>onSubmit</strong> → Login, registro, formularios con validaciones complejas (React Hook Form)
            </li>
            <li>
              <strong>action (cliente)</strong> → Filtrar/buscar datos ya cargados, toggle favoritos sin servidor
            </li>
            <li>
              <strong>action (servidor)</strong> → Crear posts, guardar en DB, checkout, upload archivos (Next.js)
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>🎮 Demo Interactiva</h2>
        <div className="card">
          <p>
            Cuando un form action se invoca, <code>formAction</code> es la nueva
            función que llamas, <code>state</code> contiene la respuesta del
            servidor, y <code>isPending</code> indica si está en proceso.
          </p>
        </div>

        <AddToCartForm itemID="1" itemTitle="JavaScript: The Definitive Guide" />
        <AddToCartForm itemID="2" itemTitle="JavaScript: The Good Parts" />
      </section>

      <section className="section">
        <h2>💻 Ejemplo: Mensaje Simple</h2>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`import { useActionState } from "react"
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
}`}
          />
        </div>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`"use server"

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
}`}
          />
        </div>
      </section>

      <section className="section">
        <h2>📦 Ejemplo: Estado con Objeto</h2>
        <div className="card">
          <p>
            Puedes devolver un objeto más complejo con múltiples propiedades:
          </p>
        </div>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`function AddToCartForm({ itemID, itemTitle }) {
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
}`}
          />
        </div>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`"use server"

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
}`}
          />
        </div>
      </section>

      <section className="section">
        <h2>💡 Tips y Best Practices</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <span className="tip-icon">🔄</span>
            <h3>Estado Automático</h3>
            <p>Maneja estado del formulario sin useState manual</p>
          </div>

          <div className="tip-card">
            <span className="tip-icon">⏳</span>
            <h3>isPending</h3>
            <p>Indica visualmente cuando la acción está en progreso</p>
          </div>

          <div className="tip-card">
            <span className="tip-icon">🌐</span>
            <h3>Server Actions</h3>
            <p>Funciona perfectamente con acciones del servidor</p>
          </div>

          <div className="tip-card">
            <span className="tip-icon">⚡</span>
            <h3>Pre-hidratación</h3>
            <p>Muestra respuestas antes de que cargue el JavaScript</p>
          </div>

          <div className="tip-card">
            <span className="tip-icon">📋</span>
            <h3>FormData</h3>
            <p>Recibe automáticamente los datos del formulario</p>
          </div>

          <div className="tip-card">
            <span className="tip-icon">🎯</span>
            <h3>Estado Previo</h3>
            <p>Accede al estado anterior en cada invocación</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>
          📚 Curso de React 2025 | Creado con ❤️ para la comunidad
          hispanohablante
        </p>
      </footer>
    </div>
  )
}

export default UseActionState
