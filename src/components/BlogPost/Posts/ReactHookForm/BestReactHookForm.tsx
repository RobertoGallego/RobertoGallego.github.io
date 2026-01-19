import { FormProvider, useForm, useFormContext, SubmitErrorHandler } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const schema = z.object({
  FirstName: z.string().min(1, "This is required."),
  GivenName: z.string().min(3, "Min 3 characters."),
})

type Schema = z.infer<typeof schema>

const signupUser = async (data: Schema): Promise<{ success: boolean; error?: string; field?: keyof Schema }> => {
  await new Promise(resolve => setTimeout(resolve, 1000))

  if (data.FirstName === "a") {
    return {
      success: false,
      error: "Ese usuario ya existe",
      field: "FirstName"
    }
  }

  return {
    success: true
  }
}

export default function App() {
  const methods = useForm<Schema>({
    defaultValues: {
      FirstName: "",
      GivenName: "",
    },
    resolver: zodResolver(schema),
    mode: "onSubmit",
    reValidateMode: "onChange",
    shouldFocusError: true,
  })

  const { handleSubmit, setError } = methods

  const onSubmit = async (data: Schema) => {
    try {
      const response = await signupUser(data)

      if (!response.success && response.field && response.error) {
        setError(response.field, {
          type: "server",
          message: response.error
        })
      } else {
        console.log("Usuario registrado exitosamente:", data)
      }
    } catch (e) {
      console.error("Error de conexión:", e)
    }
  }

  const onError: SubmitErrorHandler<Schema> = (errors) => {
    console.log("Validation errors:", errors)
  }

  console.log("Render form")

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit, onError)}>

        <FirstNameInput />

        <GivenNameInput />

        <input type="submit" />
      </form>
    </FormProvider>
  )
}

const FirstNameInput = () => {
  const { register } = useFormContext()

  return (
    <div>
      <label>First Name</label>
      <input {...register("FirstName")} />
      <ErrorDisplay name="FirstName" />
    </div>
  )
}

const GivenNameInput = () => {
  const { register } = useFormContext()

  return (
    <div>
      <label>Given Name</label>
      <input {...register("GivenName")} />
      <ErrorDisplay name="GivenName" />
    </div>
  )
}

const ErrorDisplay = ({ name }: { name: keyof Schema }) => {
  const { formState: { errors } } = useFormContext<Schema>()

  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => <p style={{ color: "red" }}>{message}</p>}
    />
  )
}