import TechCard from "./TechCard/TechCard"
import {
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandJavascript,
  TbDeviceDesktopCode,
} from "react-icons/tb"
import { BiLogoTypescript } from "react-icons/bi"
import { SiMui, SiReactquery } from "react-icons/si"
import { FaArrowTrendUp, FaMasksTheater, FaReact } from "react-icons/fa6"
import { MdArrowOutward, MdOutlineRoomService } from "react-icons/md"
import zustand from "../assets/zustand.svg"
import { VscServerProcess, VscTools } from "react-icons/vsc"
import { IoMdCloudOutline } from "react-icons/io"
import { PiBinocularsFill } from "react-icons/pi"

interface TechStackProps {
  src?: string
  label: string
  Icon?: React.ElementType
  iconColor?: string
}

interface StackCategoryProps {
  CategoryTitle: string
  CategoryIcon: React.ElementType
  categoryColor: string
  categoryDescription: string
  categoryKeys: string[]
  techStack: TechStackProps[]
}

const StackCategoryData = [
  {
    id: 1,
    CategoyIcon: TbDeviceDesktopCode,
    categoryColor: "DarkOrange",
    CategoryTitle: "Frontend",
    categoryDescription:
      "Reactjs tanstack vitejs State Management redux react-query zustand context react-router tanstack router virtual",
    categoryKeys: [
      "Embrace experimentation and calculated risk-taking",
      "Challenge assumptions and existing processes",
      "Dedicate time and resources to exploring new ideas",
      "Learn from failures and iterate quickly",
    ],
    techStack: [
      {
        src: zustand,
        label: "Zustand",
      },
      {
        Icon: TbBrandHtml5,
        label: "HTML5",
        iconColor: "#e34c26",
      },
      {
        Icon: TbBrandCss3,
        label: "CSS3",
        iconColor: "#1572b6",
      },
      {
        Icon: TbBrandJavascript,
        label: "JavaScript",
        iconColor: "#f7df1e",
      },
      {
        Icon: BiLogoTypescript,
        label: "TypeScript",
        iconColor: "#3178c6",
      },
      {
        Icon: FaReact,
        label: "React",
        iconColor: "#61dbfb",
      },
      {
        Icon: SiMui,
        label: "Material UI",
        iconColor: "#569bbe",
      },
      {
        Icon: SiReactquery,
        label: "React Query",
        iconColor: "rgb(239 68 68)",
      },
    ],
  },
  {
    id: 2,
    CategoyIcon: VscServerProcess,
    categoryColor: "green",
    CategoryTitle: "Backend",
    categoryDescription:
      "Nodejs expressjs mongodb mongoose redis postgresql prisma,typeorm graphql apollo server",
    categoryKeys: [
      "Embrace experimentation and calculated risk-taking",
      "Challenge assumptions and existing processes",
      "Dedicate time and resources to exploring new ideas",
      "Learn from failures and iterate quickly",
    ],
  },
  {
    id: 3,
    CategoyIcon: FaMasksTheater,
    categoryColor: "DeepSkyBlue",
    CategoryTitle: "Testing & QA",
    categoryDescription:
      "Docker AWS CI/CD Terraform Kubernetes Nginx, mysql, postgresql, redis",
    categoryKeys: [
      "Embrace experimentation and calculated risk-taking",
      "Challenge assumptions and existing processes",
      "Dedicate time and resources to exploring new ideas",
      "Learn from failures and iterate quickly",
    ],
  },
  {
    id: 4,
    CategoyIcon: IoMdCloudOutline,
    categoryColor: "Gold",
    CategoryTitle: "Cloud",
    categoryDescription:
      "Docker AWS CI/CD Terraform Kubernetes Nginx, mysql, postgresql, redis",
    categoryKeys: [
      "Embrace experimentation and calculated risk-taking",
      "Challenge assumptions and existing processes",
      "Dedicate time and resources to exploring new ideas",
      "Learn from failures and iterate quickly",
    ],
  },
  {
    id: 5,
    CategoyIcon: TbDeviceDesktopCode,
    categoryColor: "Olive",
    CategoryTitle: "Design & UX",
    categoryDescription:
      "Figma, figjam, adobe xd, sketch, zeplin, invision, webflow, canva",
    categoryKeys: [
      "Embrace experimentation and calculated risk-taking",
      "Challenge assumptions and existing processes",
      "Dedicate time and resources to exploring new ideas",
      "Learn from failures and iterate quickly",
    ],
  },
  {
    id: 6,
    CategoyIcon: VscTools,
    categoryColor: "purple",
    CategoryTitle: "Productivity Tools",
    categoryDescription:
      "Figma, figjam, adobe xd, sketch, zeplin, invision, webflow, canva",
    categoryKeys: [
      "Embrace experimentation and calculated risk-taking",
      "Challenge assumptions and existing processes",
      "Dedicate time and resources to exploring new ideas",
      "Learn from failures and iterate quickly",
    ],
  },
  {
    id: 7,
    CategoyIcon: PiBinocularsFill,
    categoryColor: "brown",
    CategoryTitle: "R&D",
    categoryDescription:
      "Figma, figjam, adobe xd, sketch, zeplin, invision, webflow, canva",
    categoryKeys: [
      "Embrace experimentation and calculated risk-taking",
      "Challenge assumptions and existing processes",
      "Dedicate time and resources to exploring new ideas",
      "Learn from failures and iterate quickly",
    ],
  },
  {
    id: 8,
    CategoyIcon: FaArrowTrendUp,
    categoryColor: "Teal",
    CategoryTitle: "Currently Improving",
    categoryDescription:
      "Figma, figjam, adobe xd, sketch, zeplin, invision, webflow, canva",
    categoryKeys: [
      "Embrace experimentation and calculated risk-taking",
      "Challenge assumptions and existing processes",
      "Dedicate time and resources to exploring new ideas",
      "Learn from failures and iterate quickly",
    ],
  },
  {
    id: 9,
    CategoyIcon: MdOutlineRoomService,
    categoryColor: "Salmon",
    CategoryTitle: "Service",
    categoryDescription:
      "Figma, figjam, adobe xd, sketch, zeplin, invision, webflow, canva",
    categoryKeys: [
      "Embrace experimentation and calculated risk-taking",
      "Challenge assumptions and existing processes",
      "Dedicate time and resources to exploring new ideas",
      "Learn from failures and iterate quickly",
    ],
  },
]

const StackCategoryContent = ({
  categoryNumber,
}: {
  categoryNumber: number
}) => {
  const category = StackCategoryData.find((cat) => cat.id === categoryNumber)

  if (!category) return <div>Category not found</div>

  return (
    <StackCategory
      key={category.id}
      categoryColor={category.categoryColor}
      CategoryTitle={category.CategoryTitle}
      CategoryIcon={category.CategoyIcon}
      categoryDescription={category.categoryDescription}
      categoryKeys={category.categoryKeys}
      techStack={category.techStack || []}
    />
  )
}

const StackCategory = ({
  CategoryTitle,
  categoryColor,
  CategoryIcon,
  categoryDescription,
  categoryKeys,
  techStack = [],
}: StackCategoryProps) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        marginTop: 40,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 10,
            alignItems: "center",
          }}
        >
          <CategoryIcon
            style={{
              backgroundColor: "#1b1b1b",
              borderRadius: 10,
              padding: 10,
            }}
            color={categoryColor}
            size={50}
          />

          <h1>{CategoryTitle}</h1>
        </div>

        <p
          style={{
            fontSize: 16,
            color: "grey",
            marginBlock: 10,
            maxWidth: 450,
          }}
        >
          {categoryDescription}
        </p>
        <h4>Key Principles:</h4>

        <div
          style={{
            display: "flex",
            gap: 4,
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <MdArrowOutward color={categoryColor} />
          <p>{categoryKeys[0]}</p>
        </div>

        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          <MdArrowOutward color={categoryColor} />
          <p>{categoryKeys[1]}</p>
        </div>

        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          <MdArrowOutward color={categoryColor} />
          <p>{categoryKeys[2]}</p>
        </div>

        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          <MdArrowOutward color={categoryColor} />
          <p>{categoryKeys[3]}</p>
        </div>

        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          {techStack.map((tech) => (
            <TechCard
              key={tech.label}
              src={tech.src}
              label={tech.label}
              Icon={tech.Icon}
              iconColor={tech.iconColor}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default StackCategoryContent
