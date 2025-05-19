import BlogCard from "./BlogCard"
import {
  Rncp6a,
  Rncp7a,
  Level21,
  Thpdark,
  Thp,
  AccessDark,
  Access,
  ClpsDark,
  Clps,
} from "../../assets"
import { FranceFlag, Ausflag } from "../../assets"
import useDarkMode from "../../hooks/useDarkMode"

const Blog = () => {
  const { isDarkMode } = useDarkMode()

  return (
    <div style={{ width: "100%", marginTop: 100, paddingInline: 10 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: 20,
        }}
      >
        <h1>Diplome & Certificate</h1>
        <p style={{ maxWidth: 700, fontSize: 16, marginTop: 5 }}>
        professional achievements and certifications
        </p>
      </div>


      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: 20,
          gap: 20,
        }}
      >
        <BlogCard
          srcImage={Rncp7a}
          title={"RNCP 7, It expert en architecture informatique"}
          date={"2019 - 2023"}
          chip={"Ecole 42"}
          srcFlag={FranceFlag}
          chipFlag={"Paris, France"}
        />

        <BlogCard
          srcImage={Level21}
          title={"Certificate of completion 42, computer architect"}
          date={"2019 - 2023"}
          chip={"Ecole 42"}
          srcFlag={FranceFlag}
          chipFlag={"Paris, France"}
        />

        <BlogCard
          srcImage={Rncp6a}
          title={"RNCP 6, It solution designer and developer web and mobile"}
          date={"2019 - 2021"}
          chip={"Ecole 42"}
          srcFlag={FranceFlag}
          chipFlag={"Paris, France"}
        />

        <BlogCard
          srcImage={isDarkMode ? Thpdark : Thp}
          title={"Formation fullstack web"}
          date={"2018"}
          chip={"THP"}
          srcFlag={FranceFlag}
          chipFlag={"Paris, France"}
        />
        
        <BlogCard
          srcImage={isDarkMode ? ClpsDark : Clps}
          title={"Formation linguistique francais langue etrangere"}
          date={"2017"}
          chip={"CLPS FLE"}
          srcFlag={FranceFlag}
          chipFlag={"Paris, France"}
        />
        
        <BlogCard
          srcImage={isDarkMode ? AccessDark : Access}
          title={"Diplome d'anglais professionnel"}
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
