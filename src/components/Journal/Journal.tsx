import JournalCard from "./JournalCard"

const Journal = () => {
  return (
    <div style={{ width: "100%", marginBottom: 200 }}>
        <div style={{ marginBottom: 20 }}>
          <h1>Journal</h1>
          <p style={{ color: "gray" }}>
            A collection of my thoughts, ideas, and experiences.{" "}
          </p>
        </div>

        <JournalCard />
        <JournalCard />
        <JournalCard />

      </div>
  )
}

export default Journal