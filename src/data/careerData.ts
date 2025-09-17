import { logo, flag } from "@/assets"

interface CareerItem {
  srcImage: string
  srcImageDark?: string
  title: string
  date: string
  chip: string
  srcFlag: string
  chipFlag: string
  href: string
}

const careerData: CareerItem[] = [
  {
    srcImage: logo.Rncp7A,
    title: "Career.Rncp7.Title",
    date: "2019 - 2023",
    chip: "Ecole 42",
    srcFlag: flag.FranceFlag,
    chipFlag: "Paris, France",
    href: "https://42.fr/le-campus-de-paris/diplome-informatique/expert-en-architecture-informatique/",
  },
  {
    srcImage: logo.Level21,
    title: "Career.Certificate.Title",
    date: "2019 - 2023",
    chip: "Ecole 42",
    srcFlag: flag.FranceFlag,
    chipFlag: "Paris, France",
    href: "https://42.fr/le-campus-de-paris/diplome-informatique/",
  },
  {
    srcImage: logo.Rncp6A,
    title: "Career.Rncp6.Title",
    date: "2019 - 2021",
    chip: "Ecole 42",
    srcFlag: flag.FranceFlag,
    chipFlag: "Paris, France",
    href: "https://42.fr/le-campus-de-paris/diplome-informatique/concepteur-developpeur-solutions-informatiques/",
  },
  {
    srcImage: logo.ThpA,
    srcImageDark: logo.ThpDark,
    title: "Career.Thp.Title",
    date: "2018",
    chip: "THP",
    srcFlag: flag.FranceFlag,
    chipFlag: "Paris, France",
    href: "https://www.thehackingproject.org/parcours/developpeur-web-fullstack",
  },
  {
    srcImage: logo.ClpsDark,
    srcImageDark: logo.ClpsLangDark,
    title: "Career.Clps.Title",
    date: "2017",
    chip: "CLPS FLE",
    srcFlag: flag.FranceFlag,
    chipFlag: "Paris, France",
    href: "https://www.clps.net/formation/formation-linguistique-fle-francais-langue-etrangere/",
  },
  {
    srcImage: logo.AccessLang,
    srcImageDark: logo.AccessLangDark,
    title: "Career.Access.Title",
    date: "2015",
    chip: "Access",
    srcFlag: flag.Ausflag,
    chipFlag: "Sydney, Australia",
    href: "https://studyinaustralia.tv/en/institution/28692-Access-Language-Centre",
  },
]

export default careerData
