import JournalCard from "./JournalCard"
import Tech from "../../assets/tech.jpg"
import { Noop, Klarys, Taste, Tecnostrike } from "../../assets"

const Journal = () => {
  return (
    <div style={{ width: "100%", marginBottom: 200 }}>
      <div style={{ marginBottom: 20 }}>
        <h1>Work Experience</h1>
        <p style={{ color: "gray", maxWidth: 700 }}>
          Here are some highlights of my last work experiences, showcasing the
          projects and roles I've been a part of.
        </p>
      </div>

      <JournalCard srcImage={Klarys} />
      <JournalCard srcImage={Noop} />
      <JournalCard srcImage={Tech} />
      <JournalCard srcImage={Tecnostrike} />
    </div>
  )
}

export default Journal
