import { useEffect, useState } from "react"
import "./App.css"
// import { UseState, UseReducer } from "@/hooks"

interface PokemonSprites {
  front_default: string
}

interface Pokemon {
  id: number
  name: string
  sprites: PokemonSprites
}

function App() {
  const [data, setData] = useState<Pokemon | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState<string>("charizard")
  const [inputValue, setInputValue] = useState<string>("charizard")

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${search}`
        )

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const result: Pokemon = await response.json()
        setData(result)
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message)
        } else if (typeof err === "string") {
          setError(err)
        } else {
          setError("An unknown error occurred")
        }
      } finally {
        setIsLoading(false)
      }
    }

    getData()
  }, [search])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSearch(inputValue)
  }

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1>Error: {error}</h1>
  if (!data) return <h1>No data available</h1>

  return (
    <div
      style={{
        backgroundColor: "#27388a",
        marginTop: 100,
        borderRadius: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
      }}
    >
      <form onSubmit={handleSubmit} style={{ width: "100%", marginBottom: 20 }}>
        <div style={{ display: "flex", gap: 10 }}>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Buscar Pokémon..."
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "8px",
              border: "none",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#FFCB05",
              color: "#2C72B8",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Search
          </button>
        </div>
      </form>

      <img
        height={150}
        width={150}
        src={data.sprites.front_default}
        alt="data.name"
      />
      <h3>{data.name}</h3>

      {/* <UseState /> */}
      {/* <UseReducer /> */}
    </div>
  )
}

export default App
