import JournalCard from "./JournalCard"
import Tech from "../../assets/tech.jpg"
import {
  Noop,
  Klarys,
  Tecnostrike,
  FranceFlag,
  Ausflag,
  ChileFlag,
  Switzerlandflag,
} from "../../assets"

const Journal = () => {
  return (
    <div style={{ width: "100%", marginTop: 100, paddingInline: 10 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: 20,
        }}
      >
        <h1>Work Experience</h1>
        <p style={{ maxWidth: 700, fontSize: 16, marginTop: 5 }}>
          Here are some highlights of my last work experiences, showcasing the
          projects and roles I've been a part of.
        </p>
      </div>

      <JournalCard
        srcImage={Klarys}
        title={"Klarys the fresh food platform"}
        subtitle={
          "The first eProcurement platform adapted to the specific challenges of fresh food."
        }
        date={"2021 - 2024"}
        chip={"React"}
        flags={[
          { src: FranceFlag, label: "Rennes, France" },
          { src: Switzerlandflag, label: "Lausanne, Switzerland" },
        ]}
        workPosition={"Frontend Engineer"}
      />

      <JournalCard
        srcImage={Noop}
        title={"Noop solution vod plug and play"}
        subtitle={"Specializes in video on demand solutions, developing customizable platforms for streaming and content management."}
        date={"2020"}
        chip={"React Native"}
        flags={[{ src: FranceFlag, label: "Rennes, France" }]}
        workPosition={"Mobile Developer"}
      />

      <JournalCard
        srcImage={Tech}
        title={"Taste and baguette"}
        subtitle={"Focused on delivering exceptional customer service, managing orders, and ensuring a smooth experience while gaining international experience in Australia."}
        date={"2015"}
        chip={"Restaurant"}
        flags={[{ src: Ausflag, label: "Sydney, Australia" }]}
        workPosition={"Bartender & Barista"}
      />

      <JournalCard
        srcImage={Tecnostrike}
        title={"Tecnostrike tecnogps"}
        subtitle={"GPS fleet management platform using real-time tracking, route control, and device sales."}
        date={"2010 - 2014"}
        chip={"IT Support"}
        flags={[{ src: ChileFlag, label: "Santiago, Chile" }]}
        workPosition={"Co Founder"}
      />
    </div>
  )
}

export default Journal
