import { useEffect, useState } from "react"

interface People {
  name: string
}

const Fetch = () => {
  const [data, setData] = useState<People[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true)
        setError(null)

        const response = await fetch("https://swapi.dev/api/people")

        if (!response.ok) {
          throw new Error(`error status: ${response.status}`)
        }

        const success = await response.json()
        setData(success.results)
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message)
        } else {
          setError("An unknown error occurred")
        }
      } finally {
        setIsLoading(false)
      }
    }

    getData()
  }, [])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      {data.map((people: People, index: number) => {
        return (
          <div key={index}>
            <h3>{people.name}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Fetch
