import { useDarkMode } from "@/hooks"
import { BlogHeader, CodeBlock, TipCard } from "@/blog-components"
import "./ReactHookForm.css"

function ReactHookForm() {
  const { isDarkMode } = useDarkMode()

  return (
    <div className={`useState-container ${isDarkMode ? "dark" : "light"}`}>
      <BlogHeader
        title="React Hook Form - Guía Completa"
        subtitle="Biblioteca de formularios performante, flexible y extensible con validación fácil de usar"
      />

      <section className="section">
        <h2>📚 Introducción</h2>
        <div className="card">
          <p>
            <strong>React Hook Form</strong> es una biblioteca que simplifica la
            gestión de formularios en React con un rendimiento excepcional.
          </p>
          <div className="highlight-box">
            <strong>💡 Concepto clave:</strong> <code>register</code> - Ayuda a
            manejar los valores para su validación y envío (submit)
          </div>
        </div>
      </section>

      <section className="section">
        <h2>🚀 Ejemplo Básico</h2>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`type Inputs = {
  example: string
  exampleRequired: string
  firstName: string
  gender: string
  lastName: string
  age: number
}

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<Inputs>({
  defaultValues: {
    example: "test42",
  },
  disabled: false,
})

const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <input defaultValue="test" {...register("example")} />

    <input
      {...register("exampleRequired", { required: true })}
      aria-invalid={!!errors.exampleRequired}
      aria-describedby={errors.exampleRequired ? "Hello World" : undefined}
    />
    {errors.exampleRequired && <span>This field is required</span>}

    <label>First Name</label>
    <input {...register("firstName", { required: true, maxLength: 20 })} />

    <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />

    <input type="number" {...register("age", { min: 18, max: 99 })} />
    {errors.age && <span>Age must be between 18 and 99</span>}

    <select {...register("gender")}>
      <option value="female">female</option>
      <option value="male">male</option>
      <option value="other">other</option>
    </select>

    <input type="submit" />
  </form>
)`}
          />
        </div>

        <div className="card">
          <h3>Validaciones Built-in</h3>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
            <li>
              <code>required</code> - Campo requerido
            </li>
            <li>
              <code>min</code> / <code>max</code> - Valores mínimo/máximo
            </li>
            <li>
              <code>minLength</code> / <code>maxLength</code> - Longitud de texto
            </li>
            <li>
              <code>pattern</code> - Patrón regex
            </li>
            <li>
              <code>validate</code> - Función de validación personalizada
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>🎨 Componentes Reutilizables</h2>
        <div className="card">
          <h3>Input Reutilizable</h3>
          <p>Crea inputs reutilizables con tipos seguros:</p>
        </div>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`type InputProps = {
  label: Path<Inputs>
  register: UseFormRegister<Inputs>
  required: boolean
}

const Input = ({ label, register, required }: InputProps) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required })} />
  </>
)

// Uso
<Input label="First Name" register={register} required />`}
          />
        </div>

        <div className="card">
          <h3>Select Reutilizable (Moderno - React 19+)</h3>
          <p>
            Sin necesidad de <code>forwardRef</code>. El <code>{`{...register(name)}`}</code>{" "}
            maneja automáticamente ref, onChange, onBlur y name.
          </p>
        </div>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`import { UseFormRegister, FieldValues, Path } from "react-hook-form"

interface SelectProps<T extends FieldValues> {
  label: string
  name: Path<T>
  register: UseFormRegister<T>
  options: { value: string; label: string }[]
}

export function Select<T extends FieldValues>({
  label,
  name,
  register,
  options,
}: SelectProps<T>) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select id={name} {...register(name)}>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}

// Uso
<Select
  label="Age"
  name="age"
  register={register}
  options={[
    { value: "20", label: "20" },
    { value: "30", label: "30" },
  ]}
/>`}
          />
        </div>
        <div className="info-box">
          <strong>✨ Nota:</strong> En React 19+ ya no es necesario usar{" "}
          <code>forwardRef</code>. El <code>{`{...register(name)}`}</code> maneja
          automáticamente la ref.
        </div>
      </section>

      <section className="section">
        <h2>🔌 Integración con Librerías UI</h2>
        <div className="card">
          <p>
            React Hook Form facilita la integración con librerías externas de
            componentes UI (Material-UI, React Select, Ant Design, etc.).
          </p>
          <p style={{ marginTop: "1rem" }}>
            <strong>Importante:</strong> Si el componente no expone la ref del
            input, usa el componente <code>Controller</code> para el registro.
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            También compatible con <strong>React Native</strong>.
          </p>
        </div>

        <div className="code-block">
          <div className="code-label">Controlled Inputs con Controller</div>
          <CodeBlock
            language="typescript"
            code={`import Select from "react-select"
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { Input } from "@material-ui/core"

interface IFormInput {
  firstName: string
  lastName: string
  iceCreamType: { label: string; value: string }
}

const App = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      iceCreamType: {},
    },
  })

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <Input {...field} />}
      />

      <Controller
        name="iceCreamType"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
          />
        )}
      />
      <input type="submit" />
    </form>
  )
}`}
          />
        </div>
      </section>

      <section className="section">
        <h2>🎣 useController Hook</h2>
        <div className="card">
          <p>Hook para crear inputs controlados reutilizables:</p>
        </div>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`import { useForm, useController, UseControllerProps } from "react-hook-form"

const { field, fieldState } = useController(props)

const { handleSubmit, control } = useForm<FormValues>({
  defaultValues: {
    FirstName: "",
  },
  mode: "onChange",
})`}
          />
        </div>
      </section>

      <section className="section">
        <h2>⚠️ Manejo de Errores</h2>
        <div className="card">
          <p>
            Los errores retornan un objeto. Usa aria attributes para
            accesibilidad:
          </p>
        </div>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`aria-invalid={!!errors.exampleRequired}
aria-describedby={errors.exampleRequired ? "Hello World" : undefined}`}
          />
        </div>
      </section>

      <section className="section">
        <h2>📤 Form Component - Submit Directo a API</h2>
        <div className="card">
          <p>
            Envía el formulario directamente a una API/backend usando el
            componente <code>&lt;Form /&gt;</code> sin escribir tu propio fetch.
          </p>
          <h3 style={{ marginTop: "1.5rem" }}>Cómo funciona:</h3>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "1rem" }}>
            <li>React Hook Form valida los campos</li>
            <li>
              Si todo está OK → hace POST automático a <code>/api/save</code>
            </li>
            <li>
              Envía los datos como <code>FormData</code> (no JSON por defecto)
            </li>
            <li>
              Si el servidor responde OK → <code>onSuccess()</code>
            </li>
            <li>
              Si falla → <code>onError()</code>
            </li>
          </ol>
        </div>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`<Form
  action="/api/save" // Send post request with the FormData
  // encType={'application/json'} you can also switch to json object
  onSuccess={() => {
    alert("Your application is updated.")
  }}
  onError={() => {
    alert("Submission has failed.")
  }}
  control={control}
>`}
          />
        </div>
      </section>

      <section className="section">
        <h2>✅ Schema Validation</h2>
        <div className="card">
          <p>
            Compatible con: <strong>Yup</strong>, <strong>Zod</strong>,{" "}
            <strong>Joi</strong>
          </p>
        </div>
        <div className="code-block">
          <div className="code-label">Ejemplo con Zod</div>
          <CodeBlock
            language="typescript"
            code={`import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

// Schema Zod
const schema = z.object({
  firstName: z.string().min(1, "Nombre requerido"),
  age: z
    .number({ invalid_type_error: "Edad requerida" })
    .int("Debe ser un número entero")
    .positive("Debe ser positiva"),
})

type FormData = z.infer<typeof schema>

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          placeholder="Nombre"
          {...register("firstName")}
          aria-invalid={!!errors.firstName}
        />
        <p>{errors.firstName?.message}</p>
      </div>

      <div>
        <input
          type="number"
          placeholder="Edad"
          {...register("age", { valueAsNumber: true })}
          aria-invalid={!!errors.age}
        />
        <p>{errors.age?.message}</p>
      </div>

      <button type="submit">Enviar</button>
    </form>
  )
}`}
          />
        </div>
      </section>

      <section className="section">
        <h2>⚙️ useForm - Configuración</h2>
        <div className="card">
          <p>
            <code>useForm</code> tiene múltiples propiedades de configuración:
          </p>
        </div>

        <div className="tips-grid">
          <TipCard
            icon="📝"
            title="defaultValues"
            description="Valores por defecto del form (cached). Soporta async/sync"
          />
          <TipCard
            icon="✅"
            title="mode"
            description="Estrategia de validación ANTES del submit"
          />
          <TipCard
            icon="🔄"
            title="reValidateMode"
            description="Estrategia de validación DESPUÉS del submit"
          />
          <TipCard
            icon="⚡"
            title="values"
            description="Valores reactivos para actualizar el form"
          />
          <TipCard
            icon="❌"
            title="errors"
            description="Errores del servidor. Mantén la referencia estable"
          />
          <TipCard
            icon="🎯"
            title="criteriaMode"
            description="Mostrar todos los errores o uno a la vez"
          />
          <TipCard
            icon="🔍"
            title="shouldFocusError"
            description="Habilitar/deshabilitar focus automático en errores"
          />
          <TipCard
            icon="🚫"
            title="disabled"
            description="Deshabilitar todo el form con todos los inputs"
          />
          <TipCard
            icon="🔧"
            title="resolver"
            description="Integra tu librería de validación (Yup, Zod, Joi)"
          />
        </div>

        <div className="info-box" style={{ marginTop: "1.5rem" }}>
          <strong>⚠️ Importante:</strong> Evita proporcionar <code>undefined</code>{" "}
          como valor por defecto en <code>defaultValues</code>
        </div>
      </section>

      <section className="section">
        <h2>🔧 useForm - Métodos Principales</h2>

        <div className="card">
          <h3>register</h3>
          <p>
            Registra un input o select y aplica reglas de validación. El nombre es
            requerido y único.
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            <strong>⚠️</strong> Un input <code>disabled</code> resultará en{" "}
            <code>undefined</code> en el form
          </p>
        </div>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`<input
  {...register("firstName", { required: true })}
  placeholder="First name"
/>

<input
  {...register("lastName", { minLength: 2 })}
  placeholder="Last name"
/>

<select {...register("category")}>
  <option value="">Select...</option>
  <option value="A">Category A</option>
  <option value="B">Category B</option>
</select>

// Checkboxes
<input {...register("checkbox")} type="checkbox" value="A" />
<input {...register("checkbox")} type="checkbox" value="B" />

// Radio buttons
<input {...register("radio")} type="radio" value="A" />
<input {...register("radio")} type="radio" value="B" />`}
          />
        </div>

        <div className="card" style={{ marginTop: "1.5rem" }}>
          <h4>Destructuring assignment</h4>
          <p>También puedes desestructurar los métodos de register:</p>
        </div>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`const { onChange, onBlur, name, ref } = register('firstName')

<input
  onChange={onChange}
  onBlur={onBlur}
  name={name}
  ref={ref}
/>
// equivalente a
<input {...register('firstName')} />`}
          />
        </div>
      </section>

      <section className="section">
        <h2>📊 formState</h2>
        <div className="card">
          <p>Contiene información del estado del formulario:</p>
        </div>

        <div className="table-container">
          <table className="methods-table">
            <thead>
              <tr>
                <th>Propiedad</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>isDirty</code>
                </td>
                <td>true cuando el usuario hace un cambio</td>
              </tr>
              <tr>
                <td>
                  <code>dirtyFields</code>
                </td>
                <td>Object con los fields que el usuario modificó</td>
              </tr>
              <tr>
                <td>
                  <code>touchedFields</code>
                </td>
                <td>Fields que el usuario tocó</td>
              </tr>
              <tr>
                <td>
                  <code>isSubmitted</code>
                </td>
                <td>true si el form fue enviado</td>
              </tr>
              <tr>
                <td>
                  <code>isSubmitting</code>
                </td>
                <td>true durante el proceso de submit</td>
              </tr>
              <tr>
                <td>
                  <code>isValid</code>
                </td>
                <td>true si el form no tiene errores</td>
              </tr>
              <tr>
                <td>
                  <code>errors</code>
                </td>
                <td>Object con los errores de los fields</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="code-block" style={{ marginTop: "1.5rem" }}>
          <CodeBlock
            language="typescript"
            code={`useEffect(() => {
  if (formState.errors.firstName) {
    // do your logic here
  }
}, [formState]) // ✅ correcto

// ❌ [formState.errors] no disparará el useEffect`}
          />
        </div>
      </section>

      <section className="section">
        <h2>👁️ watch & subscribe</h2>
        <div className="card">
          <h3>watch</h3>
          <p>Observa inputs específicos y retorna su valor:</p>
        </div>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`// Watch single field
const name = watch("name")

// Watch multiple fields
const [name, name1] = watch(["name", "name1"])

// Watch entire form
const formValues = watch()`}
          />
        </div>

        <div className="card" style={{ marginTop: "1.5rem" }}>
          <h3>subscribe</h3>
          <p>Suscribe a cambios del formState y valores.</p>
          <p style={{ marginTop: "0.5rem" }}>
            <strong>⚠️</strong> Solo para suscribirse a cambios. No dispatches
            state updates ni triggers re-renders.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>📝 handleSubmit</h2>
        <div className="card">
          <p>
            Recibe los datos del form si la validación es exitosa. Puede ser sync o
            async:
          </p>
        </div>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`// Sync
handleSubmit(onSubmit)()

// Async
handleSubmit(async (data) => await fetchAPI(data))

// Con manejo de errores
const onSubmit = async () => {
  try {
    // await fetch()
  } catch (e) {
    // handle your error
  }
}

const onError: SubmitErrorHandler<FormValues> = (errors) => 
  console.log(errors)

return <form onSubmit={handleSubmit(onSubmit, onError)} />`}
          />
        </div>
      </section>

      <section className="section">
        <h2>🔄 reset & resetField</h2>
        <div className="card">
          <h3>reset</h3>
          <p>Resetea todo el formState, referencias a fields y suscripciones.</p>
          <p style={{ marginTop: "0.5rem" }}>
            <strong>💡 Recomendación:</strong> Resetear dentro de{" "}
            <code>useEffect</code> después del submission.
          </p>
        </div>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`useEffect(() => {
  if (formState.isSubmitSuccessful) {
    reset({ something: "" })
  }
}, [formState, reset])

// Opciones
reset() // vuelve a defaultValues
reset({ test: "test" }) // actualiza defaultValues y form values
reset(undefined, { keepDirtyValues: true }) // mantiene valores modificados`}
          />
        </div>

        <div className="card" style={{ marginTop: "1.5rem" }}>
          <h3>resetField</h3>
          <p>Resetea un field state individualmente.</p>
          <p style={{ marginTop: "0.5rem" }}>
            Opciones: <code>keepError</code>, <code>keepDirty</code>,{" "}
            <code>keepTouched</code>, <code>defaultValue</code>
          </p>
        </div>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`<button onClick={() => resetField("firstName", { keepError: true })}>
  Reset keep error
</button>

<button onClick={() => resetField("firstName", { keepTouched: true })}>
  Reset keep touched
</button>

<button onClick={() => resetField("firstName", { defaultValue: "New" })}>
  Update defaultValue
</button>`}
          />
        </div>
      </section>

      <section className="section">
        <h2>❌ setError & clearErrors</h2>
        <div className="card">
          <h3>setError</h3>
          <p>Agrega errores manualmente:</p>
        </div>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`setError("registerInput", { 
  type: "custom", 
  message: "custom message" 
})

// Errores globales con root
setError("root.serverError", { type: "400" })
setError("root.random", { type: "random" })

// Múltiples errores
const inputs = [
  { type: "manual", name: "username", message: "Double Check This" },
  { type: "manual", name: "firstName", message: "Triple Check This" },
]

inputs.forEach(({ name, type, message }) => {
  setError(name, { type, message })
})`}
          />
        </div>

        <div className="card" style={{ marginTop: "1.5rem" }}>
          <h3>clearErrors</h3>
          <p>Limpia los errores:</p>
        </div>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`register("test.firstName", { required: true })
register("test.lastName", { required: true })

clearErrors("test") // limpia ambos errores
clearErrors("test.firstName") // limpia error individual`}
          />
        </div>
      </section>

      <section className="section">
        <h2>✏️ setValue & setFocus</h2>
        <div className="card">
          <h3>setValue</h3>
          <p>Agrega valor dinámicamente a un campo registrado.</p>
          <p style={{ marginTop: "0.5rem" }}>
            <strong>Re-render solo cuando:</strong> Un error es disparado/corregido
            o setValue causa actualización de state (dirty, touched)
          </p>
        </div>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`// ✅ Performant
setValue("yourDetails.firstName", "value")

// ❌ Less performant
setValue("yourDetails", { firstName: "value" })

// Nested values
register("nestedValue", { value: { test: "data" } })
setValue("nestedValue", { test: "updatedData" }) // ✅`}
          />
        </div>

        <div className="card" style={{ marginTop: "1.5rem" }}>
          <h3>setFocus</h3>
          <p>Programa un focus en un input registrado:</p>
        </div>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`React.useEffect(() => {
  setFocus("firstName")
}, [setFocus])

return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <input {...register("firstName")} placeholder="First Name" />
    <input type="submit" />
  </form>
)`}
          />
        </div>
      </section>

      <section className="section">
        <h2>📖 getValues & getFieldState</h2>
        <div className="card">
          <h3>getValues</h3>
          <p>
            Helper optimizado para leer valores del form.{" "}
            <strong>No causa re-render</strong> (a diferencia de <code>watch</code>
            ).
          </p>
        </div>

        <div className="card" style={{ marginTop: "1.5rem" }}>
          <h3>getFieldState</h3>
          <p>
            Retorna field state individual. Ayuda a obtener nested field state de
            manera type-safe.
          </p>
        </div>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`// Con suscripción en useForm
const {
  register,
  formState: { isDirty },
} = useForm()

register("test")
getFieldState("test") // ✅

// Sin suscripción (pasando formState)
const { register, formState } = useForm()
const { isDirty } = getFieldState("test", formState) // ✅`}
          />
        </div>
      </section>

      <section className="section">
        <h2>⚡ trigger</h2>
        <div className="card">
          <p>
            Dispara manualmente la validación del formulario o un input. Muy útil
            cuando un input depende de otro.
          </p>
        </div>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`const {
  register,
  trigger,
  formState: { errors },
} = useForm<FormInputs>()

return (
  <form>
    <input {...register("firstName", { required: true })} />
    <input {...register("lastName", { required: true })} />
    
    <button type="button" onClick={() => trigger("lastName")}>
      Trigger Single
    </button>
    
    <button type="button" onClick={() => trigger(["firstName", "lastName"])}>
      Trigger Multiple
    </button>
    
    <button type="button" onClick={() => trigger()}>
      Trigger All
    </button>
  </form>
)`}
          />
        </div>
      </section>

      <section className="section">
        <h2>🎣 Hooks Adicionales</h2>

        <div className="tips-grid">
          <TipCard
            icon="🎮"
            title="useController"
            description="Hook para crear inputs controlados reutilizables"
          />
          <TipCard
            icon="🔧"
            title="Controller"
            description="Wrapper para componentes controlados externos (React-Select, MUI)"
          />
          <TipCard
            icon="🌳"
            title="useFormContext"
            description="Accede al form context en estructuras anidadas"
          />
          <TipCard
            icon="📦"
            title="FormProvider"
            description="Componente que hostea el context object"
          />
          <TipCard
            icon="👁️"
            title="useWatch"
            description="Similar a watch pero aísla re-rendering. Mejor performance"
          />
          <TipCard
            icon="📊"
            title="useFormState"
            description="Se suscribe a form state. Reduce re-render en forms grandes"
          />
          <TipCard
            icon="📋"
            title="useFieldArray"
            description="Hook para field arrays (formularios dinámicos)"
          />
          <TipCard
            icon="❌"
            title="ErrorMessage"
            description="Componente para mostrar mensajes de error"
          />
        </div>
      </section>

      <section className="section">
        <h2>🎯 useController Ejemplo</h2>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`import { TextField } from "@material-ui/core"
import { useController, useForm } from "react-hook-form"

function Input({ control, name }) {
  const {
    field,
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    rules: { required: true },
  })

  return (
    <TextField
      onChange={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
      name={field.name}
      inputRef={field.ref}
    />
  )
}`}
          />
        </div>
      </section>

      <section className="section">
        <h2>🌳 useFormContext Ejemplo</h2>
        <div className="card">
          <p>
            Ideal para estructuras profundamente anidadas donde es inconveniente
            pasar el context como prop.
          </p>
        </div>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`import { useForm, FormProvider, useFormContext } from "react-hook-form"

export default function App() {
  const methods = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <NestedInput />
        <input {...methods.register("name")} />
        <input type="submit" />
      </form>
    </FormProvider>
  )
}

function NestedInput() {
  const { register } = useFormContext()
  return <input {...register("test")} />
}`}
          />
        </div>
        <div className="warning-card" style={{ marginTop: "1.5rem" }}>
          <strong>⚠️ Advertencia:</strong> Nunca pongas <code>methods</code> en
          el array de dependencias de useEffect
        </div>
      </section>

      <section className="section">
        <h2>📋 useFieldArray</h2>
        <div className="card">
          <p>
            Hook para trabajar con field arrays (formularios dinámicos). Mejor
            experiencia de usuario y performance.
          </p>
        </div>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`function FieldArray() {
  const { control, register } = useForm()
  const { fields, append, prepend, remove, swap, move, insert } = 
    useFieldArray({
      control,
      name: "test",
    })

  return (
    <>
      {fields.map((field, index) => (
        <input
          key={field.id} // ⚠️ importante incluir key con field.id
          {...register(\`test.\${index}.value\`)}
        />
      ))}
    </>
  )
}`}
          />
        </div>
      </section>

      <section className="section">
        <h2>❌ ErrorMessage Component</h2>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`import { ErrorMessage } from "@hookform/error-message"

<input
  {...register("singleErrorInput", { required: "This is required." })}
/>
<ErrorMessage errors={errors} name="singleErrorInput" />

// Con render personalizado
<ErrorMessage
  errors={errors}
  name="singleErrorInput"
  render={({ message }) => <p>{message}</p>}
/>`}
          />
        </div>
      </section>

      <section className="section">
        <h2>💡 Tips y Best Practices</h2>
        <div className="tips-grid">
          <TipCard
            icon="🚀"
            title="Performance"
            description="React Hook Form minimiza re-renders usando refs y subscripciones"
          />
          <TipCard
            icon="✅"
            title="Validación"
            description="Usa schema validation (Zod, Yup) para validación compleja"
          />
          <TipCard
            icon="♿"
            title="Accesibilidad"
            description="Usa aria-invalid y aria-describedby para mejor accesibilidad"
          />
          <TipCard
            icon="📦"
            title="Componentes"
            description="Crea componentes reutilizables con register o useController"
          />
          <TipCard
            icon="🎯"
            title="defaultValues"
            description="Siempre proporciona defaultValues para mejor experiencia"
          />
          <TipCard
            icon="🔄"
            title="Reset"
            description="Usa reset en useEffect después de submit exitoso"
          />
          <TipCard
            icon="⚡"
            title="Control"
            description="No accedas propiedades de control directamente, es interno"
          />
          <TipCard
            icon="🎨"
            title="UI Libraries"
            description="Usa Controller para integrar con librerías externas"
          />
        </div>
      </section>
    </div>
  )
}

export default ReactHookForm