import { useDarkMode } from "@/hooks"
import { BlogHeader, CodeBlock, TipCard } from "@/blog-components"
import "./ReactHookForm.css"

function ReactHookPerform() {
  const { isDarkMode } = useDarkMode()

  return (
    <div className={`useState-container ${isDarkMode ? "dark" : "light"}`}>
      <BlogHeader
        title="🏆 React Hook Form - Arquitectura Performante"
        subtitle="La mejor manera de crear formularios con componentes reutilizables, type-safe y optimizados"
      />

      <section className="section">
        <h2>🎯 Arquitectura Recomendada</h2>
        <div className="card">
          <p>
            La clave para formularios escalables y performantes es separar los{" "}
            <strong>componentes reutilizables</strong> de los{" "}
            <strong>formularios específicos</strong>.
          </p>
        </div>

        <div className="code-block">
          <div className="code-label">📁 Estructura de Carpetas</div>
          <CodeBlock
            language="bash"
            code={`/src
  /components
    /forms              # Componentes reutilizables
      FormInput.tsx     # Input genérico
      FormSelect.tsx    # Select genérico
      FormTextArea.tsx  # TextArea genérico
      FormCheckbox.tsx  # Checkbox genérico
      index.ts          # Exports
      
  /features
    /auth
      LoginForm.tsx     # Formulario específico
      SignupForm.tsx    # Formulario específico
    /profile
      ProfileForm.tsx   # Formulario específico`}
          />
        </div>
      </section>

      <section className="section">
        <h2>✅ Opción 1: Componentes con register (Más Performante)</h2>
        <div className="card">
          <p>
            <strong>✨ Ventajas:</strong> Máximo rendimiento, componentes no
            controlados, mínimos re-renders
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            <strong>📌 Cuándo usar:</strong> Inputs nativos (input, select,
            textarea) sin librerías externas
          </p>
        </div>

        <div className="code-block">
          <div className="code-label">
            components/forms/FormInput.tsx (Genérico)
          </div>
          <CodeBlock
            language="typescript"
            code={`import { FieldValues, Path, UseFormRegister, FieldErrors } from "react-hook-form"

interface FormInputProps<T extends FieldValues> {
  label: string
  name: Path<T>
  register: UseFormRegister<T>
  errors?: FieldErrors<T>
  type?: "text" | "email" | "password" | "number" | "tel"
  placeholder?: string
  required?: boolean
  className?: string
}

export function FormInput<T extends FieldValues>({
  label,
  name,
  register,
  errors,
  type = "text",
  placeholder,
  required = false,
  className = "",
}: FormInputProps<T>) {
  const error = errors?.[name]

  return (
    <div className={\`form-field \${className}\`}>
      <label htmlFor={name}>
        {label}
        {required && <span className="required">*</span>}
      </label>
      
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? \`\${name}-error\` : undefined}
        {...register(name)} // ✨ Sin forwardRef, React 19+ lo maneja
      />
      
      {error && (
        <span id={\`\${name}-error\`} className="error-message" role="alert">
          {error.message as string}
        </span>
      )}
    </div>
  )
}`}
          />
        </div>

        <div className="code-block">
          <div className="code-label">
            components/forms/FormSelect.tsx (Genérico)
          </div>
          <CodeBlock
            language="typescript"
            code={`import { FieldValues, Path, UseFormRegister, FieldErrors } from "react-hook-form"

interface Option {
  value: string
  label: string
}

interface FormSelectProps<T extends FieldValues> {
  label: string
  name: Path<T>
  register: UseFormRegister<T>
  errors?: FieldErrors<T>
  options: Option[]
  placeholder?: string
  required?: boolean
}

export function FormSelect<T extends FieldValues>({
  label,
  name,
  register,
  errors,
  options,
  placeholder = "Seleccionar...",
  required = false,
}: FormSelectProps<T>) {
  const error = errors?.[name]

  return (
    <div className="form-field">
      <label htmlFor={name}>
        {label}
        {required && <span className="required">*</span>}
      </label>
      
      <select
        id={name}
        aria-invalid={!!error}
        {...register(name)} // ✨ No forwardRef needed
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      
      {error && (
        <span className="error-message" role="alert">
          {error.message as string}
        </span>
      )}
    </div>
  )
}`}
          />
        </div>

        <div className="code-block">
          <div className="code-label">
            components/forms/FormTextArea.tsx (Genérico)
          </div>
          <CodeBlock
            language="typescript"
            code={`import { FieldValues, Path, UseFormRegister, FieldErrors } from "react-hook-form"

interface FormTextAreaProps<T extends FieldValues> {
  label: string
  name: Path<T>
  register: UseFormRegister<T>
  errors?: FieldErrors<T>
  placeholder?: string
  rows?: number
  required?: boolean
}

export function FormTextArea<T extends FieldValues>({
  label,
  name,
  register,
  errors,
  placeholder,
  rows = 4,
  required = false,
}: FormTextAreaProps<T>) {
  const error = errors?.[name]

  return (
    <div className="form-field">
      <label htmlFor={name}>
        {label}
        {required && <span className="required">*</span>}
      </label>
      
      <textarea
        id={name}
        rows={rows}
        placeholder={placeholder}
        aria-invalid={!!error}
        {...register(name)}
      />
      
      {error && (
        <span className="error-message" role="alert">
          {error.message as string}
        </span>
      )}
    </div>
  )
}`}
          />
        </div>

        <div className="code-block">
          <div className="code-label">components/forms/index.ts (Exports)</div>
          <CodeBlock
            language="typescript"
            code={`export { FormInput } from "./FormInput"
export { FormSelect } from "./FormSelect"
export { FormTextArea } from "./FormTextArea"`}
          />
        </div>
      </section>

      <section className="section">
        <h2>🎯 Formulario Específico con Zod</h2>
        <div className="card">
          <p>
            Ahora creamos un formulario específico (ej. <code>LoginForm</code>)
            que usa estos componentes reutilizables con validación Zod:
          </p>
        </div>

        <div className="code-block">
          <div className="code-label">features/auth/LoginForm.tsx</div>
          <CodeBlock
            language="typescript"
            code={`import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormInput, FormSelect } from "@/components/forms"

// ✅ Schema Zod - Validación centralizada
const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email es requerido")
    .email("Email inválido"),
  password: z
    .string()
    .min(8, "Mínimo 8 caracteres")
    .regex(/[A-Z]/, "Debe contener una mayúscula")
    .regex(/[0-9]/, "Debe contener un número"),
  accountType: z.enum(["personal", "business"], {
    required_error: "Selecciona tipo de cuenta",
  }),
})

type LoginFormData = z.infer<typeof loginSchema>

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      accountType: "",
    },
  })

  const onSubmit = async (data: LoginFormData) => {
    try {
      console.log("Login:", data)
      // await loginAPI(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <FormInput
        label="Email"
        name="email"
        type="email"
        register={register}
        errors={errors}
        placeholder="tu@email.com"
        required
      />

      <FormInput
        label="Contraseña"
        name="password"
        type="password"
        register={register}
        errors={errors}
        placeholder="••••••••"
        required
      />

      <FormSelect
        label="Tipo de Cuenta"
        name="accountType"
        register={register}
        errors={errors}
        options={[
          { value: "personal", label: "Personal" },
          { value: "business", label: "Empresa" },
        ]}
        required
      />

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Iniciando..." : "Iniciar Sesión"}
      </button>
    </form>
  )
}`}
          />
        </div>

        <div className="info-box">
          <strong>✨ Ventajas de este enfoque:</strong>
          <ul style={{ marginTop: "0.5rem", paddingLeft: "1.5rem" }}>
            <li>✅ Componentes 100% reutilizables y type-safe</li>
            <li>✅ Sin forwardRef (React 19+)</li>
            <li>✅ Validación centralizada con Zod</li>
            <li>✅ Máximo rendimiento (uncontrolled)</li>
            <li>✅ Fácil de mantener y escalar</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>🎮 Opción 2: useController (Para Componentes Controlados)</h2>
        <div className="card">
          <p>
            <strong>✨ Ventajas:</strong> Control total del estado, ideal para
            librerías externas
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            <strong>📌 Cuándo usar:</strong> Material-UI, React Select, Ant
            Design, o componentes personalizados complejos
          </p>
        </div>

        <div className="code-block">
          <div className="code-label">
            components/forms/ControlledInput.tsx
          </div>
          <CodeBlock
            language="typescript"
            code={`import { useController, Control, FieldValues, Path } from "react-hook-form"

interface ControlledInputProps<T extends FieldValues> {
  name: Path<T>
  control: Control<T>
  label: string
  type?: "text" | "email" | "password"
  placeholder?: string
  rules?: any
}

export function ControlledInput<T extends FieldValues>({
  name,
  control,
  label,
  type = "text",
  placeholder,
  rules,
}: ControlledInputProps<T>) {
  const {
    field,
    fieldState: { error, invalid },
  } = useController({
    name,
    control,
    rules,
  })

  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      
      <input
        {...field}
        id={name}
        type={type}
        placeholder={placeholder}
        aria-invalid={invalid}
      />
      
      {error && (
        <span className="error-message" role="alert">
          {error.message}
        </span>
      )}
    </div>
  )
}`}
          />
        </div>

        <div className="code-block">
          <div className="code-label">Uso con Material-UI</div>
          <CodeBlock
            language="typescript"
            code={`import { TextField } from "@mui/material"
import { useController, Control, FieldValues, Path } from "react-hook-form"

interface MUIInputProps<T extends FieldValues> {
  name: Path<T>
  control: Control<T>
  label: string
}

export function MUIInput<T extends FieldValues>({
  name,
  control,
  label,
}: MUIInputProps<T>) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: "Campo requerido" },
  })

  return (
    <TextField
      {...field}
      label={label}
      error={!!error}
      helperText={error?.message}
      fullWidth
    />
  )
}

// Uso en formulario
function MyForm() {
  const { control, handleSubmit } = useForm()
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MUIInput name="username" control={control} label="Username" />
    </form>
  )
}`}
          />
        </div>
      </section>

      <section className="section">
        <h2>🌳 Opción 3: FormProvider (Forms Anidados)</h2>
        <div className="card">
          <p>
            <strong>✨ Ventajas:</strong> No necesitas pasar register/control
            por props
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            <strong>📌 Cuándo usar:</strong> Formularios con múltiples niveles
            de componentes anidados
          </p>
        </div>

        <div className="code-block">
          <div className="code-label">
            components/forms/FormInputContext.tsx
          </div>
          <CodeBlock
            language="typescript"
            code={`import { useFormContext, FieldValues, Path } from "react-hook-form"

interface FormInputContextProps<T extends FieldValues> {
  name: Path<T>
  label: string
  type?: "text" | "email" | "password"
}

export function FormInputContext<T extends FieldValues>({
  name,
  label,
  type = "text",
}: FormInputContextProps<T>) {
  // ✨ Obtiene register y errors del contexto
  const {
    register,
    formState: { errors },
  } = useFormContext<T>()

  const error = errors?.[name]

  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type} {...register(name)} />
      {error && (
        <span className="error-message">{error.message as string}</span>
      )}
    </div>
  )
}`}
          />
        </div>

        <div className="code-block">
          <div className="code-label">features/auth/SignupForm.tsx</div>
          <CodeBlock
            language="typescript"
            code={`import { useForm, FormProvider } from "react-hook-form"
import { FormInputContext } from "@/components/forms"

type SignupData = {
  email: string
  password: string
  confirmPassword: string
}

export function SignupForm() {
  const methods = useForm<SignupData>()

  const onSubmit = (data: SignupData) => {
    console.log(data)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {/* ✨ No necesitas pasar register/errors como props */}
        <FormInputContext name="email" label="Email" type="email" />
        <FormInputContext name="password" label="Password" type="password" />
        <FormInputContext
          name="confirmPassword"
          label="Confirm Password"
          type="password"
        />
        
        {/* Componentes profundamente anidados pueden acceder al contexto */}
        <NestedSection />
        
        <button type="submit">Sign Up</button>
      </form>
    </FormProvider>
  )
}

function NestedSection() {
  const { watch } = useFormContext<SignupData>()
  const password = watch("password")
  
  return <p>Password length: {password?.length || 0}</p>
}`}
          />
        </div>
      </section>

      <section className="section">
        <h2>⚡ Comparativa de Performance</h2>
        <div className="table-container">
          <table className="methods-table">
            <thead>
              <tr>
                <th>Enfoque</th>
                <th>Performance</th>
                <th>Cuándo usar</th>
                <th>Re-renders</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>register</strong>
                </td>
                <td>🟢 Excelente</td>
                <td>Inputs nativos HTML</td>
                <td>Mínimos</td>
              </tr>
              <tr>
                <td>
                  <strong>useController</strong>
                </td>
                <td>🟡 Buena</td>
                <td>Librerías externas (MUI, React Select)</td>
                <td>Controlados</td>
              </tr>
              <tr>
                <td>
                  <strong>Controller</strong>
                </td>
                <td>🟡 Buena</td>
                <td>Librerías externas en JSX</td>
                <td>Controlados</td>
              </tr>
              <tr>
                <td>
                  <strong>FormProvider</strong>
                </td>
                <td>🟢 Excelente</td>
                <td>Forms anidados profundos</td>
                <td>Según implementación</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <h2>💡 Best Practices - Resumen</h2>
        <div className="tips-grid">
          <TipCard
            icon="🎯"
            title="Usa register"
            description="Para inputs nativos - máxima performance"
          />
          <TipCard
            icon="🎮"
            title="Usa useController"
            description="Para librerías externas y componentes controlados"
          />
          <TipCard
            icon="🌳"
            title="Usa FormProvider"
            description="Para evitar prop drilling en forms profundos"
          />
          <TipCard
            icon="✅"
            title="Schema Validation"
            description="Usa Zod/Yup para validación compleja y type-safe"
          />
          <TipCard
            icon="🔧"
            title="Genéricos TypeScript"
            description="Componentes 100% reutilizables y type-safe"
          />
          <TipCard
            icon="🚫"
            title="No forwardRef"
            description="React 19+ no lo necesita con {...register(name)}"
          />
          <TipCard
            icon="📦"
            title="Separa Componentes"
            description="Componentes genéricos vs formularios específicos"
          />
          <TipCard
            icon="♿"
            title="Accesibilidad"
            description="Usa aria-invalid, aria-describedby, role=alert"
          />
        </div>
      </section>

      <section className="section">
        <h2>🎯 Ejemplo Completo - E-commerce Checkout</h2>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormInput, FormSelect, FormTextArea } from "@/components/forms"

const checkoutSchema = z.object({
  // Información personal
  fullName: z.string().min(2, "Nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().regex(/^\\d{10}$/, "Teléfono debe tener 10 dígitos"),
  
  // Dirección
  address: z.string().min(5, "Dirección requerida"),
  city: z.string().min(2, "Ciudad requerida"),
  state: z.string().min(2, "Estado requerido"),
  zipCode: z.string().regex(/^\\d{5}$/, "Código postal inválido"),
  
  // Pago
  paymentMethod: z.enum(["credit-card", "paypal", "bank-transfer"]),
  notes: z.string().optional(),
})

type CheckoutData = z.infer<typeof checkoutSchema>

export function CheckoutForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<CheckoutData>({
    resolver: zodResolver(checkoutSchema),
    mode: "onBlur", // Valida al perder el focus
  })

  const paymentMethod = watch("paymentMethod")

  const onSubmit = async (data: CheckoutData) => {
    try {
      await processCheckout(data)
      console.log("Checkout exitoso:", data)
    } catch (error) {
      console.error("Error en checkout:", error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="checkout-form">
      <section className="form-section">
        <h2>Información Personal</h2>
        
        <FormInput
          label="Nombre Completo"
          name="fullName"
          register={register}
          errors={errors}
          required
        />
        
        <FormInput
          label="Email"
          name="email"
          type="email"
          register={register}
          errors={errors}
          required
        />
        
        <FormInput
          label="Teléfono"
          name="phone"
          type="tel"
          register={register}
          errors={errors}
          placeholder="1234567890"
          required
        />
      </section>

      <section className="form-section">
        <h2>Dirección de Envío</h2>
        
        <FormInput
          label="Dirección"
          name="address"
          register={register}
          errors={errors}
          required
        />
        
        <div className="form-row">
          <FormInput
            label="Ciudad"
            name="city"
            register={register}
            errors={errors}
            required
          />
          
          <FormInput
            label="Estado"
            name="state"
            register={register}
            errors={errors}
            required
          />
          
          <FormInput
            label="Código Postal"
            name="zipCode"
            register={register}
            errors={errors}
            required
          />
        </div>
      </section>

      <section className="form-section">
        <h2>Método de Pago</h2>
        
        <FormSelect
          label="Método de Pago"
          name="paymentMethod"
          register={register}
          errors={errors}
          options={[
            { value: "credit-card", label: "Tarjeta de Crédito" },
            { value: "paypal", label: "PayPal" },
            { value: "bank-transfer", label: "Transferencia Bancaria" },
          ]}
          required
        />
        
        {paymentMethod === "credit-card" && (
          <p className="info-message">
            Serás redirigido a la página de pago seguro
          </p>
        )}
        
        <FormTextArea
          label="Notas adicionales"
          name="notes"
          register={register}
          errors={errors}
          placeholder="Instrucciones especiales para la entrega..."
          rows={3}
        />
      </section>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary"
      >
        {isSubmitting ? "Procesando..." : "Finalizar Compra"}
      </button>
    </form>
  )
}

async function processCheckout(data: CheckoutData) {
  // Simular API call
  return new Promise((resolve) => setTimeout(resolve, 2000))
}`}
          />
        </div>
      </section>

      <section className="section">
        <h2>🎨 CSS Recomendado</h2>
        <div className="code-block">
          <CodeBlock
            language="css"
            code={`.form-field {
  margin-bottom: 1.5rem;
}

.form-field label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-primary);
}

.form-field label .required {
  color: var(--error-color);
  margin-left: 0.25rem;
}

.form-field input,
.form-field select,
.form-field textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 1rem;
  transition: all 0.2s;
}

.form-field input:focus,
.form-field select:focus,
.form-field textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-field input[aria-invalid="true"],
.form-field select[aria-invalid="true"],
.form-field textarea[aria-invalid="true"] {
  border-color: var(--error-color);
}

.error-message {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: var(--error-color);
}

.form-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.form-section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
}

.form-section h2 {
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
}`}
          />
        </div>
      </section>

      <section className="section">
        <h2>🏆 Conclusión</h2>
        <div className="card">
          <h3>🎯 La Mejor Manera:</h3>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "1rem" }}>
            <li>
              <strong>Componentes genéricos reutilizables</strong> en carpeta
              separada
            </li>
            <li>
              <strong>Usa register</strong> para máxima performance (inputs
              nativos)
            </li>
            <li>
              <strong>Validación Zod</strong> para schemas type-safe y centralizados
            </li>
            <li>
              <strong>Sin forwardRef</strong> - React 19+ no lo necesita
            </li>
            <li>
              <strong>FormProvider</strong> solo cuando tengas anidación profunda
            </li>
            <li>
              <strong>useController</strong> solo para librerías externas
            </li>
          </ol>
        </div>

        <div className="info-box" style={{ marginTop: "1.5rem" }}>
          <strong>📊 Performance:</strong> Este enfoque minimiza re-renders,
          mantiene el código limpio y escalable, y proporciona type-safety
          completo con TypeScript.
        </div>
      </section>
    </div>
  )
}

export default ReactHookPerform