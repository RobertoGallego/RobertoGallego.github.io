import BlogCard from "./BlogCard"
import {
  Rncp6a,
  Rncp7a,
  Level21,
  Thpdark,
  AccessDark,
  ClpsDark,
} from "../../assets"
import { FranceFlag, Ausflag } from "../../assets"

const Blog = () => {
  return (
    <div style={{ width: "100%" }}>
      <h1>Diplome & Certificate</h1>

      <p style={{ color: "#818181", fontSize: 14 }}>
        professional achievements and certifications
      </p>

      <p style={{ color: "#818181", fontSize: 14 }}></p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
          marginTop: 20,
          marginBottom: 60,
          gap: 20,
          justifyItems: "start",
        }}
      >
        <BlogCard
          srcImage={Rncp7a}
          title={"RNCP 7, It Expert en Architecture Informatique"}
          date={"2019 - 2023"}
          chip={"Ecole 42"}
          srcFlag={FranceFlag}
          chipFlag={"Paris, France"}
        />

        <BlogCard
          srcImage={Level21}
          title={"Certificate of Completion 42, Computer Architect"}
          date={"2019 - 2023"}
          chip={"Ecole 42"}
          srcFlag={FranceFlag}
          chipFlag={"Paris, France"}
        />

        <BlogCard
          srcImage={Rncp6a}
          title={"RNCP 6, It Solution Designer and Developer Web and Mobile"}
          date={"2019 - 2021"}
          chip={"Ecole 42"}
          srcFlag={FranceFlag}
          chipFlag={"Paris, France"}
        />

        <BlogCard
          srcImage={Thpdark}
          title={"Formation Fullstack Web"}
          date={"2018"}
          chip={"The Hacking Project"}
          srcFlag={FranceFlag}
          chipFlag={"Paris, France"}
        />
        
        <BlogCard
          srcImage={ClpsDark}
          title={"Formation linguistique FLE, Francais Langue Etrangere"}
          date={"2017"}
          chip={"CLPS FLE"}
          srcFlag={FranceFlag}
          chipFlag={"Paris, France"}
        />
        
        <BlogCard
          srcImage={AccessDark}
          title={"Diplome d'Acces Langue Anglais"}
          date={"2015"}
          chip={"Access"}
          srcFlag={Ausflag}
          chipFlag={"Sydney, Australia"}
        />

        {/* <BlogCard blogTitle={"Unab"}/> */}
        {/* <BlogCard blogTitle={"Epic react"}/> */}
      </div>
    </div>
  )
}

export default Blog
