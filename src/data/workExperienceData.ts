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
    srcImage: album.Tech,
    title: "Works.Taste.Title",
    subtitle: "Works.Taste.Description",
    date: "2015",
    chip: "Restaurant",
    flags: [{ src: flag.Ausflag, label: "Sydney, Australia" }],
    workPositionKey: "Works.Taste.Role",
    href: "https://tastebaguette.com/",
  },
  {
    srcImage: logo.Tecnostrike,
    title: "Works.Tecnostrike.Title",
    subtitle: "Works.Tecnostrike.Description",
    date: "2010 - 2014",
    chip: "IT Support",
    flags: [{ src: flag.ChileFlag, label: "Santiago, Chile" }],
    workPositionKey: "Works.Tecnostrike.Role",
    href: "https://www.tecnostrike.cl",
  },
]

export default workExperienceData
