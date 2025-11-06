import { flag, logo, album } from "@/assets"

interface WorkExperienceItem {
  srcImage: string
  title: string
  subtitle: string
  date: string
  chip: string
  flags: { src: string; label: string }[]
  workPositionKey: string
  href: string
}

const workExperienceData: WorkExperienceItem[] = [
  {
    srcImage: logo.Klarys,
    title: "Works.Klarys.Title",
    subtitle: "Works.Klarys.Description",
    date: "2021 - 2024",
    chip: "React",
    flags: [
      { src: flag.FranceFlag, label: "Rennes, France" },
      { src: flag.SwitzerlandFlag, label: "Lausanne, Switzerland" },
    ],
    workPositionKey: "Works.Klarys.Role",
    href: "https://www.klarys.io",
  },
  {
    srcImage: logo.Noop,
    title: "Works.Noop.Title",
    subtitle: "Works.Noop.Description",
    date: "2020",
    chip: "React Native",
    flags: [{ src: flag.FranceFlag, label: "Rennes, France" }],
    workPositionKey: "Works.Noop.Role",
    href: "https://www.noop.fr",
  },
  {
    srcImage: logo.Bensimon,
    title: "Works.Bensimon.Title",
    subtitle: "Works.Bensimon.Description",
    date: "2017 - 2018",
    chip: "CMS",
    flags: [{ src: flag.FranceFlag, label: "Paris, France" }],
    workPositionKey: "Works.Bensimon.Role",
    href: "https://www.bensimon.com",
  },
  {
    srcImage: logo.LaMaisonGenerale,
    title: "Works.MaisonGenerale.Title",
    subtitle: "Works.MaisonGenerale.Description",
    date: "2015 - 2017",
    chip: "CMS",
    flags: [{ src: flag.FranceFlag, label: "Saint-Malo, France" }],
    workPositionKey: "Works.MaisonGenerale.Role",
    href: "https://www.lamaisongenerale.com",
  },
  {
    srcImage: album.Tech,
    title: "Works.Marchem.Title",
    subtitle: "Works.Marchem.Description",
    date: "2014 - 2015",
    chip: "WordPress",
    flags: [{ src: flag.Ausflag, label: "Sydney, Australia" }],
    workPositionKey: "Works.Marchem.Role",
    href: "https://www.marchem.com.au",
  },
  {
    srcImage: logo.Tecnostrike,
    title: "Works.Tecnostrike.Title",
    subtitle: "Works.Tecnostrike.Description",
    date: "2010 - 2014",
    chip: "CMS",
    flags: [{ src: flag.ChileFlag, label: "Santiago, Chile" }],
    workPositionKey: "Works.Tecnostrike.Role",
    href: "https://www.tecnostrike.cl",
  },
]

export default workExperienceData
