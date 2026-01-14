import { useRef, useImperativeHandle, forwardRef } from "react"
import "./useImperativeHandle.css"
import { useDarkMode } from "@/hooks"
import { BlogHeader, CodeBlock, TipCard } from "@/blog-components"

// Componente MyInput personalizado
type MyInputHandle = {
  focus: () => void
  scrollIntoView: () => void
}

const MyInput = forwardRef<MyInputHandle, React.InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(
      ref,
      () => {
        return {
          focus() {
            inputRef.current?.focus()
          },
          scrollIntoView() {
            inputRef.current?.scrollIntoView()
          },
        }
      },
      []
    )

    return <input {...props} ref={inputRef} />
  }
)

MyInput.displayName = "MyInput"

const UseImperativeHandle = () => {
  const { isDarkMode } = useDarkMode()
  const inputRef = useRef<MyInputHandle>(null)

  function handleFocus() {
    inputRef.current?.focus()
  }

  function handleScrollIntoView() {
    inputRef.current?.scrollIntoView()
  }

  return (
    <div className={`useState-container ${isDarkMode ? "dark" : "light"}`}>
      <BlogHeader
        title="🎯 useImperativeHandle Hook"
        subtitle="Te permite personalizar el identificador expuesto como una ref."
      />

      <section className="section">
        <h2>📚 ¿Qué es useImperativeHandle?</h2>
        <div className="card">
          <p>
            <code>useImperativeHandle</code> te permite{" "}
            <strong>personalizar el identificador ref</strong> que se expone a
            los componentes padres. En lugar de exponer todo el nodo DOM, puedes
            exponer solo métodos específicos.
          </p>
          <div className="highlight-box">
            <strong>✨ Importante:</strong> Llama a useImperativeHandle en el
            nivel superior de tu componente para personalizar el identificador
            ref que se expone.
          </div>
        </div>
      </section>

      <section className="section">
        <h2>🎯 Sintaxis</h2>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`useImperativeHandle(ref, createHandle, dependencies?)

// Parámetros:
// - ref: La ref que recibiste como prop
// - createHandle: identificador ref que quieres exponer
// - dependencies: valores reactivos`}
          />
        </div>
      </section>

      <section className="section">
        <h2>📋 Exponer un identificador ref personalizado</h2>
        <div className="card">
          <p>
            Para exponer un nodo DOM al elemento padre, pasa la prop ref al nodo
            y personaliza qué métodos exponer:
          </p>
        </div>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`import { useRef, useImperativeHandle } from "react"

function MyInput({ ref, ...props }) {
  const inputRef = useRef(null)

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current.focus()
        },
        scrollIntoView() {
          inputRef.current.scrollIntoView()
        },
      }
    },
    []
  )

  return <input {...props} ref={inputRef} />
}

export default MyInput`}
          />
        </div>
      </section>

      <section className="section">
        <h2>🎮 Demo Interactiva</h2>
        <div className="demo-card">
          <div className="demo-display" style={{ width: "100%" }}>
            <MyInput
              ref={inputRef}
              type="text"
              placeholder="Input con métodos personalizados..."
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "8px",
                border: "1px solid rgba(102, 126, 234, 0.3)",
                background: "rgba(26, 26, 46, 0.5)",
                color: "#e2e8f0",
                fontSize: "1rem",
                fontFamily: "inherit",
              }}
            />
          </div>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            <button className="btn-primary" onClick={handleFocus}>
              🎯 Focus
            </button>
            <button className="btn-secondary" onClick={handleScrollIntoView}>
              📜 Scroll Into View
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>📝 Ejemplo Completo</h2>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`import { useRef, useImperativeHandle } from "react"

function MyInput({ ref }) {
  const inputRef = useRef(null)

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current.focus()
        },
        scrollIntoView() {
          inputRef.current.scrollIntoView()
        },
      }
    },
    []
  )

  return <input ref={inputRef} />
}`}
          />
        </div>
      </section>

      <section className="section">
        <h2>⚠️ No sobreutilizar las refs</h2>
        <div className="warning-card">
          <h3>🚫 Cuándo NO usar refs</h3>
          <p>
            Solo debes usar las refs para <strong>comportamientos imperativos</strong>{" "}
            que no puedes expresar como props:
          </p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
            <li>✅ Desplazarse a un nodo</li>
            <li>✅ Enfocar un nodo</li>
            <li>✅ Activar una animación</li>
            <li>✅ Seleccionar texto</li>
          </ul>
        </div>

        <div className="card" style={{ marginTop: "1.5rem" }}>
          <h3>💡 Mejor Práctica: Usa Props cuando sea posible</h3>
          <p>
            Si puedes expresar algo como una prop, no deberías usar una ref.
          </p>
        </div>

        <div className="comparison">
          <div className="code-block error">
            <div className="code-label">❌ Mal: Usar ref para estado</div>
            <CodeBlock
              language="typescript"
              code={`// No hagas esto:
<Modal ref={modalRef} />

// Y luego:
modalRef.current.open()
modalRef.current.close()`}
            />
          </div>

          <div className="code-block success">
            <div className="code-label">✅ Bien: Usar props</div>
            <CodeBlock
              language="typescript"
              code={`// Mejor:
<Modal isOpen={isOpen} />

// Y controlar con estado:
const [isOpen, setIsOpen] = useState(false)`}
            />
          </div>
        </div>

        <div className="info-box" style={{ marginTop: "1rem" }}>
          <strong>💡 Consejo:</strong> En vez de exponer un identificador
          imperativo como <code>{`{ open, close }`}</code> del componente Modal,
          es mejor tomar <code>isOpen</code> como una prop, algo como{" "}
          <code>{`<Modal isOpen={isOpen} />`}</code>. Efectos puede ayudarte a
          exponer comportamientos imperativos via props.
        </div>
      </section>

      <section className="section">
        <h2>💡 Tips y Best Practices</h2>
        <div className="tips-grid">
          <TipCard
            icon="🎯"
            title="Comportamientos Imperativos"
            description="Usa solo para acciones que no se pueden expresar como props"
          />
          <TipCard
            icon="🔒"
            title="Encapsulación"
            description="Expón solo los métodos necesarios, no todo el DOM"
          />
          <TipCard
            icon="📦"
            title="Dependencies"
            description="Pasa array de dependencias para optimizar"
          />
          <TipCard
            icon="🚫"
            title="Evita Sobreuso"
            description="Prefiere props sobre refs siempre que sea posible"
          />
          <TipCard
            icon="🔄"
            title="forwardRef"
            description="Necesario para pasar refs a componentes personalizados"
          />
          <TipCard
            icon="⚡"
            title="Casos de Uso"
            description="Focus, scroll, animaciones, selección de texto"
          />
        </div>
      </section>
    </div>
  )
}

export default UseImperativeHandle
