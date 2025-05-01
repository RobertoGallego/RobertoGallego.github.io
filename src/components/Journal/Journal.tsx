import JournalCard from "./JournalCard"
import Tech from "../../assets/tech.jpg"
import { Noop, Klarys, Taste, Tecnostrike } from "../../assets"

const Journal = () => {
  return (
    <div style={{ width: "100%", marginBottom: 200 }}>
      <div style={{ marginBottom: 20 }}>
        <h1>Journal</h1>
        <p style={{ color: "gray" }}>
          A collection of my thoughts, ideas, and experiences.{" "}
        </p>
      </div>

      <JournalCard srcImage={Klarys}/>
      <JournalCard srcImage={Noop} />
      <JournalCard srcImage={Tecnostrike} />
      <JournalCard srcImage={Tech} />
    </div>
  )
}

export default Journal
