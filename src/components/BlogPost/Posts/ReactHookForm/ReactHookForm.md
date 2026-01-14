```tsx
    type Inputs = {
  example: string
  exampleRequired: string
  firstName: string
  gender: string
  lastName: string
  age: number
  "First Name": string
}

type InputProps = {
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

      const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<Inputs>({
      defaultValues: {
        example: "test42",
      },
      disabled: false
    })

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    console.log(errors)

      <h1>Basic React Hook Form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register("example")} />

        <input {...register("exampleRequired", { required: true })}
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

        <Input label="First Name" register={register} required />


        <input type="submit" />


        <p>Register fields es el concepto clave esto ayuda a manejar los valores para su validacion y su envio (submit) : ...register("gender")</p>

        <h2>Using built-in form validation</h2>
        <p>required - min - max - minLength - maxLength - pattern - validate</p>


      </form>

```

<!-- a revisar ya que forwardRef es antiguo -->
<!-- const Select = React.forwardRef<
HTMLSelectElement,
{ label: string } & ReturnType<UseFormRegister<IFormValues>>

> (({ onChange, onBlur, name, label }, ref) => (
> <>

    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>

</>
))

<Select label="Age" {...register("Age")} /> -->

Sí — forwardRef ya no se usa en la nueva recomendación de React + React Hook Form para este caso. La forma moderna es pasar el ref desde register directamente al componente sin forwardRef, y usar props ya tipadas.

Aquí tienes una versión actualizada y correcta sin forwardRef:

```tsx
import React from "react"
import { UseFormRegister, FieldValues, Path } from "react-hook-form"

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
```

Integrating with UI libraries

React Hook Form ha facilitado la integración con librerías externas de componentes UI.
Si el componente no expone la ref del input, entonces deberías usar el componente Controller, que se encargará del proceso de registro.
Tambien con React Native

Controlled Inputs

```tsx
import Select from "react-select"
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
}
```

Using Hooks API

```tsx
import { useForm, useController, UseControllerProps } from "react-hook-form"

const { field, fieldState } = useController(props)

const { handleSubmit, control } = useForm<FormValues>({
  defaultValues: {
    FirstName: "",
  },
  mode: "onChange",
})
```

Handle errors return an object

Ejemplo required validation rule.

```tsx
  aria-invalid={!!errors.exampleRequired}
  aria-describedby={errors.exampleRequired ? "Hello World" : undefined}
```

enviar el formulario directamente a una API / backend usando el <Form /> de React Hook Form, sin escribir tu propio fetch

Cuando haces Submit:

React Hook Form valida los campos

Si todo está OK 👉 hace POST automático a /api/save

Envía los datos como FormData (no JSON por defecto)

Si el servidor responde OK → onSuccess()

Si falla → onError()

```tsx
<Form
  action="/api/save" // Send post request with the FormData
  // encType={'application/json'} you can also switch to json object
  onSuccess={() => {
    alert("Your application is updated.")
  }}
  onError={() => {
    alert("Submission has failed.")
  }}
  control={control}
>
```

Schema Validation
Se puede usar usar con yup zod joi

Ejemplo con Zod

```tsx
import { useForm } from "react-hook-form"
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
}
```

useForm tiene otras propiedades aparte de defaultValues
soporta async/sync defaultValues: async () => fetch('/api-endpoint');

mode : Validation strategy before submitting behaviour.
reValidateMode : Validation strategy after submitting behaviour.

defaultValues : Default values for the form, this value will be cached. ex. FieldValues | () => Promise<FieldValues>
You should avoid providing undefined as a default value

values : Reactive values to update the form values.
errors : Server returns errors to update form. ⚠ Important: Keep the errors object reference-stable to avoid infinite re-renders.
resetOptions : Option to reset form state update while updating new form values.
criteriaMode : Display all validation errors or one at a time.
shouldFocusError : Enable or disable built-in focus management.
delayError : Delay error from appearing instantly.
shouldUseNativeValidation : Use browser built-in form constraint API.
shouldUnregister : Enable and disable input unregister after unmount.
disabled : Disable the entire form with all associated inputs.
Schema validation props:

Option : Description
resolver : Integrates with your preferred schema validation library.

```tsx
resolver: async (data, context, options) => {
  // you can debug your validation schema here
  console.log("formData", data)
  console.log(
    "validation result",
    await anyResolver(schema)(data, context, options)
  )
  return anyResolver(schema)(data, context, options)
}
```

context : A context object to supply for your schema validation.

The errors props will react to changes and update the server errors state, which is useful when your form needs to be updated by external server returned errors.

```tsx
function App() {
  const { errors, data } = useFetch("/api")

  useForm({
    errors, // will get updated once errors returns
  })
}
```

useForm return props

register registrar un input o select elemento y aplicar reglas de validacion, el nombre es requerido
y unico, disabled input will result in an undefined form value

ex.

````tsx
  <input
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

  <input {...register("checkbox")} type="checkbox" value="A" />
  <input {...register("checkbox")} type="checkbox" value="B" />
  <input {...register("checkbox")} type="checkbox" value="C" />

  <input {...register("radio")} type="radio" value="A" />
  <input {...register("radio")} type="radio" value="B" />
  <input {...register("radio")} type="radio" value="C" />

  <input type="submit" />
      ```
````

```tsx
Destructuring assignment
const { onChange, onBlur, name, ref } = register('firstName');
// include type check against field path with the name you have supplied.

<input
  onChange={onChange} // assign onChange event
  onBlur={onBlur} // assign onBlur event
  name={name} // assign name prop
  ref={ref} // assign ref prop
/>
// same as above
<input {...register('firstName')} />
```

Custom Register

register('firstName', { required: true, min: 8 });
<TextInput onTextChange={(value) => setValue('lastChange', value))} />

---

unregister
quita el registro tiene un segundo args para el estado del input

ex.

```tsx
import React, { useEffect } from "react"
import { useForm } from "react-hook-form"

interface IFormInputs {
  firstName: string
  lastName?: string
}

export default function App() {
  const { register, handleSubmit, unregister } = useForm<IFormInputs>()
  const onSubmit = (data: IFormInputs) => console.log(data)

  React.useEffect(() => {
    register("lastName")
  }, [register])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <button type="button" onClick={() => unregister("lastName")}>
        unregister
      </button>
      <input type="submit" />
    </form>
  )
}
```

---

formState

contiene informacion del estado del formulario

isDirty: cuando el usuario hace un cambio importante de tener un defaultValue para poder compararlo
dirtyFields: un object con los fields que el usuario modifico

touchedFields: que fields toco el usuario

defaultValues

isSubmitted: si el formulario fue enviado = true, se queda en true hasta que se invoque reset()

isSubmitSuccessful: indica que el formulario se esta enviando true

isSubmitting: indica que el formulario se esta enviando true

isLoading: si se esta enviando async

submitCount: cuantas veces se envio

isValid: si el formulario no tiene errores es true

isValidating: durante la validacion es trrue

validatingFields: captura el field que esta teniendo un async validacion

errors: un object con los fields error tambien hay un componenten <ErrorMessage />

```tsx
useEffect(() => {
  if (formState.errors.firstName) {
    // do the your logic here
  }
}, [formState]) // ✅
// ❌ [formState.errors] will not trigger the useEffect
```

disabled: en true si el formulario esta desactivado

isReadt: Set to true when formState subscription setup is ready.

```tsx
Renders children before the parent completes setup. If you're using useForm methods (eg. setValue) in a child before the subscription is ready, it can cause issues. Use an isReady flag to ensure the form is initialized before updating state from the child.

const {
 setValue,
 formState: { isReady }
} = useForm();

// Parent component: ✅
useEffect(() => setValue('test', 'data'), [])

// Children component: ✅
useEffect(() => isReady && setValue('test', 'data'), [isReady])
```

---

watch

este metodo mirara inputs especificos y retornara su valor:

Watching single field : const name = watch("name")
Watching some fields : const [name, name1] = watch(["name", "name1"])
Watching the entire form: const formValues = watch()

---

subscribe

suscribe a un cambio del formState y valores updates.

This function is intended for subscribing to changes only; dispatching state updates or triggering re-renders is not allowed. eg setValue or reset

---

handleSubmit

This function will receive the form data if form validation is successful.

```tsx
// sync
handleSubmit(onSubmit)()

// You can pass an async function for asynchronous validation.
handleSubmit(async (data) => await fetchAPI(data))

const onSubmit = async () => {
  // async request which may result error
  try {
    // await fetch()
  } catch (e) {
    // handle your error
  }
}

const onError: SubmitErrorHandler<FormValues> = (errors) => console.log(errors)

return <form onSubmit={handleSubmit(onSubmit, onError)} />
```

---

reset

resetea todo el formState, referencias al fields y subcripciones

For controlled components you will need to pass defaultValues to useForm in order to reset the Controller components' value.

It's recommended to reset inside useEffect after submission.

useEffect(() => {
reset({
data: "test",
})
}, [isSubmitSuccessful])

It's fine to run reset without argument as long as you have provided a defaultValues at useForm.

```tsx
reset() // update form back to default values

reset({ test: "test" }) // update your defaultValues && form values

reset(undefined, { keepDirtyValues: true }) // reset other form state but keep defaultValues and form values
```

```tsx
const onSubmit = (data) => {
  // It's recommended to reset in useEffect as execution order matters
  // reset({ ...data })
}

React.useEffect(() => {
  if (formState.isSubmitSuccessful) {
    reset({ something: "" })
  }
}, [formState, submittedData, reset])
```

---

resetField

resetea un field state individualmente

despues de invocar esta funcion

isValid form state will be reevaluated.
isDirty form state will be reevaluated.

options keepError - keepDirty - keepTouched - defaultValue

```tsx
<form>
  <input {...register("firstName", { required: true })} />

  <p>isDirty: {isDirty && "dirty"}</p>
  <p>touchedFields: {touchedFields.firstName && "touched field"}</p>
  <p>dirtyFields:{dirtyFields.firstName && "dirty field"}</p>
  <p>isValid: {isValid && "valid"}</p>
  <p>error: {errors.firstName && "error"}</p>

  <hr />

  <button
    type="button"
    onClick={() => resetField("firstName", { keepError: true })}
  >
    Reset keep error
  </button>
  <button
    type="button"
    onClick={() => resetField("firstName", { keepTouched: true })}
  >
    Reset keep touched fields
  </button>
  <button
    type="button"
    onClick={() => resetField("firstName", { keepDirty: true })}
  >
    Reset keep dirty fields
  </button>
  <button
    type="button"
    onClick={() => resetField("firstName", { defaultValue: "New" })}
  >
    update defaultValue
  </button>
</form>
```

setError
agregar error manualmente

setError("registerInput", { type: "custom", message: "custom message" })

puedes agregar errores globales con root

```tsx
setError("root.serverError", {
  type: "400",
})
setError("root.random", {
  type: "random",
})
```

```tsx
 onClick={() => {
  const inputs = [
    {
      type: "manual",
      name: "username",
      message: "Double Check This",
    },
    {
      type: "manual",
      name: "firstName",
      message: "Triple Check This",
    },
  ]

  inputs.forEach(({ name, type, message }) => {
    setError(name, { type, message })
  })
}}
```

single error ex

```tsx
import * as React from "react"
import { useForm } from "react-hook-form"

type FormInputs = {
  username: string
}

const App = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormInputs>()
  const onSubmit = (data: FormInputs) => {
    console.log(data)
  }

  React.useEffect(() => {
    setError("username", {
      type: "manual",
      message: "Dont Forget Your Username Should Be Cool!",
    })
  }, [setError])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username")} />
      {errors.username && <p>{errors.username.message}</p>}

      <input type="submit" />
    </form>
  )
}
```

---

clearErrors

limpia los errores

register("test.firstName", { required: true })
register("test.lastName", { required: true })
clearErrors("test") // will clear both errors from test.firstName and test.lastName
clearErrors("test.firstName") // for clear single input error

---

setValue

agregar el valor dinamicamente de un valor registrado

You can use methods such as replace or update for field array, however, they will cause the component to unmount and remount for the targeted field array.

Only the following conditions will trigger a re-render:

When an error is triggered or corrected by a value update.
When setValue cause state update, such as dirty and touched.

recomendaciones:

setValue("yourDetails.firstName", "value") // ✅ performant
setValue("yourDetails", { firstName: "value" }) ❌ // less performant

register("nestedValue", { value: { test: "data" } }) // register a nested value input
setValue("nestedValue.test", "updatedData") // ❌ failed to find the relevant field
setValue("nestedValue", { test: "updatedData" }) // ✅ setValue find input and update

---

setFocus

progamar un focus en un input, tiene que tener la red registrada en el hook form

```tsx
import * as React from "react"
import { useForm } from "react-hook-form"

type FormValues = {
  firstName: string
}

export default function App() {
  const { register, handleSubmit, setFocus } = useForm<FormValues>()
  const onSubmit = (data: FormValues) => console.log(data)
  renderCount++

  React.useEffect(() => {
    setFocus("firstName")
  }, [setFocus])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} placeholder="First Name" />
      <input type="submit" />
    </form>
  )
}
```

---

getValues

un optimizado helper para leer form values, este no hace re-render como watch

---

getFieldState

retorna field state individualmente esto nos ayudara a a obtener nested field state de una manera typesafe

```tsx

You can subscribe at the useForm, useFormContext or useFormState. This is will establish the form state subscription and getFieldState second argument will no longer be required.

const {
  register,
  formState: { isDirty },
} = useForm()

register("test")
getFieldState("test") // ✅

const { isDirty } = useFormState()

register("test")
getFieldState("test") // ✅

const {
  register,
  formState: { isDirty },
} = useFormContext()

register("test")
getFieldState("test") // ✅

When form state subscription is not setup, you can pass the entire formState as the second optional argument by following the example below:

const { register } = useForm()
register("test")
const { isDirty } = getFieldState("test") // ❌ formState isDirty is not subscribed at useForm
const { register, formState } = useForm()
const { isDirty } = getFieldState("test", formState) // ✅ formState.isDirty subscribed
const { formState } = useFormContext()
const { touchedFields } = getFieldState("test", formState) // ✅ formState.touchedFields subscribed
```

---

trigger

manualmente trigger el formulario o un input validacion este es muy util cuando un input depende de otro input

ex.

```tsx
import { useForm } from "react-hook-form"

type FormInputs = {
  firstName: string
  lastName: string
}

export default function App() {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm<FormInputs>()

  return (
    <form>
      <input {...register("firstName", { required: true })} />
      <input {...register("lastName", { required: true })} />
      <button
        type="button"
        onClick={() => {
          trigger("lastName")
        }}
      >
        Trigger
      </button>
      <button
        type="button"
        onClick={() => {
          trigger(["firstName", "lastName"])
        }}
      >
        Trigger Multiple
      </button>
      <button
        type="button"
        onClick={() => {
          trigger()
        }}
      >
        Trigger All
      </button>
    </form>
  )
}
```

---

control

este objeto contiene metodos para registrar componentes into react hook form

Important: do not access any of the properties inside this object directly. It's for internal usage only.

---

ahora tenemos useController

es un hook usa Controller es interesante para crear reusable controller inputs

ex.

```tsx
import { TextField } from "@material-ui/core"
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
      onChange={field.onChange} // send value to hook form
      onBlur={field.onBlur} // notify when input is touched/blur
      value={field.value} // input value
      name={field.name} // send down the input name
      inputRef={field.ref} // send input ref, so we can focus on input when error appear
    />
  )
}
```

---

Controller

React Hook Form embraces uncontrolled components and native inputs, however it's hard to avoid working with external controlled component such as React-Select, AntD and MUI. This wrapper component will make it easier for you to work with them.

---

useFormContext

este accede al form context, useFormContext is intended to be used in deeply nested structures, where it would become inconvenient to pass the context as a prop.

This hook will return all the useForm return methods and props.

```tsx
import { useForm, FormProvider, useFormContext } from "react-hook-form"

export default function App() {
  const methods = useForm()
  const onSubmit = (data) => console.log(data)
  const { register, reset } = methods

  useEffect(() => {
    reset({
      name: "data",
    })
  }, [reset]) // ❌ never put `methods` as the deps

  return (
    <FormProvider {...methods}>
      // pass all methods into the context
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <NestedInput />
        <input {...register("name")} />
        <input type="submit" />
      </form>
    </FormProvider>
  )
}

function NestedInput() {
  const { register } = useFormContext() // retrieve all hook methods
  return <input {...register("test")} />
}
```

---

FormProvider

este componente hostea el object

```tsx
import { useForm, FormProvider, useFormContext } from "react-hook-form"

export default function App() {
  const methods = useForm()

  const onSubmit = (data) => console.log(data)
  const { register, reset } = methods

  useEffect(() => {
    reset({
      name: "data",
    })
  }, [reset]) // ❌ never put `methods` as the deps

  return (
    <FormProvider {...methods}>
      // pass all methods into the context
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <NestedInput />
        <input {...register("name")} />
        <input type="submit" />
      </form>
    </FormProvider>
  )
}

function NestedInput() {
  const { register } = useFormContext() // retrieve all hook methods

  return <input {...register("test")} />
}
```

---

useWatch

Behaves similarly to the watch API, however, this will isolate re-rendering at the custom hook level and potentially result in better performance for your application.

Watch

A React Hook Form component that provides the same functionality as useWatch, but in component form. Instead of using the hook inside another component, you can use <Watch /> directly in your JSX to subscribe to and render form values.

---

useFormState

se suscribe a cada form state isolate the re render en el custom hook level, usando este hook
reduce the re render impact en largo y complejos forms

```tsx
import { useForm, useFormState } from "react-hook-form"

function Child({ control }) {
  const { dirtyFields } = useFormState({ control })

  return dirtyFields.firstName ? <p>Field is dirty.</p> : null
}

export default function App() {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      firstName: "firstName",
    },
  })
  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} placeholder="First Name" />
      <Child control={control} />

      <input type="submit" />
    </form>
  )
}
```

---

ErrorMessage

componente para inputs error message

```tsx
  <input
        {...register("singleErrorInput", { required: "This is required." })}
      />
      <ErrorMessage errors={errors} name="singleErrorInput" />

      <ErrorMessage
        errors={errors}
        name="singleErrorInput"
        render={({ message }) => <p>{message}</p>}
      />
```

FormStateSubscribe

un hook que provide la misma funcionalidad que useFormState pero en componentes form, en vez de usar este hook adentro de otro componente puedes usar FormStateSubscribe directamente en el jsx

```tsx
import { useForm, FormStateSubscribe } from "react-hook-form"

const App = () => {
  const { register, control } = useForm()

  return (
    <div>
      <form>
        <input {...register("foo", { min: 3 })} />
        <input {...register("bar")} />
        {/* re-render only when form state of `foo` changes */}
        <FormStateSubscribe
          control={control}
          name="foo"
          render={({ errors }) => <span>{errors.foo?.message}</span>}
        />
      </form>
    </div>
  )
}
```

---

useFieldArray

custom hook para trabajar con field arrays (dynamic form) mejor exp de usuario y performance

```tsx
function FieldArray() {
  const { control, register } = useForm();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormProvider)
    name: "test", // unique name for your Field Array
  });

  return (
    {fields.map((field, index) => (
      <input
        key={field.id} // important to include key with field's id
        {...register(`test.${index}.value`)}
      />
    ))}
  );
}
```

---

useLens
