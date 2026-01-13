import { useForm } from 'react-hook-form'
import type { Path, SubmitHandler, UseFormRegister } from 'react-hook-form'

import './ReactHookForm.css'

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

function ReactHookForm() {
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

  return (
    <>
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
    </>
  )
}

export default ReactHookForm
