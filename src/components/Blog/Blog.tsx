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
  FranceFlag,
  Ausflag,
} from "../../assets"
import useDarkMode from "../../hooks/useDarkMode"
import { useTranslation } from "react-i18next"

const Blog = () => {
  const { isDarkMode } = useDarkMode()
  const { t } = useTranslation()

  return (
    <div style={{ width: "100%", marginTop: 100, paddingInline: 10 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: 20,
        }}
      >
        <h1>{t("Career.Title")}</h1>
        <p style={{ maxWidth: 700, fontSize: 16, marginTop: 5 }}>
          {t("Career.Description")}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: 20,
          gap: 10,
        }}
      >
        <BlogCard
          srcImage={Rncp7a}
          title={t("Career.Rncp7.Title")}
          date={"2019 - 2023"}
          chip={"Ecole 42"}
          srcFlag={FranceFlag}
          chipFlag={"Paris, France"}
          href="https://42.fr/le-campus-de-paris/diplome-informatique/expert-en-architecture-informatique/"
        />

        <BlogCard
          srcImage={Level21}
          title={t("Career.Certificate.Title")}
          date={"2019 - 2023"}
          chip={"Ecole 42"}
          srcFlag={FranceFlag}
          chipFlag={"Paris, France"}
          href="https://42.fr/le-campus-de-paris/diplome-informatique/"
        />

        <BlogCard
          srcImage={Rncp6a}
          title={t("Career.Rncp6.Title")}
          date={"2019 - 2021"}
          chip={"Ecole 42"}
          srcFlag={FranceFlag}
          chipFlag={"Paris, France"}
          href="https://42.fr/le-campus-de-paris/diplome-informatique/concepteur-developpeur-solutions-informatiques/"
        />

        <BlogCard
          srcImage={isDarkMode ? Thpdark : Thp}
          title={t("Career.Thp.Title")}
          date={"2018"}
          chip={"THP"}
          srcFlag={FranceFlag}
          chipFlag={"Paris, France"}
          href="https://www.thehackingproject.org/parcours/developpeur-web-fullstack"
        />

        <BlogCard
          srcImage={isDarkMode ? ClpsDark : Clps}
          title={t("Career.Clps.Title")}
          date={"2017"}
          chip={"CLPS FLE"}
          srcFlag={FranceFlag}
          chipFlag={"Paris, France"}
          href="https://www.clps.net/formation/formation-linguistique-fle-francais-langue-etrangere/"
        />

        <BlogCard
          srcImage={isDarkMode ? AccessDark : Access}
          title={t("Career.Access.Title")}
          date={"2015"}
          chip={"Access"}
          srcFlag={Ausflag}
          chipFlag={"Sydney, Australia"}
          href="https://studyinaustralia.tv/en/institution/28692-Access-Language-Centre"
        />

        {/* <BlogCard blogTitle={"Unab"}/> */}
        {/* <BlogCard blogTitle={"Epic react"}/> */}
      </div>
    </div>
  )
}

export default Blog
