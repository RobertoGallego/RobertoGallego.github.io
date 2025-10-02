import { useTranslation } from "react-i18next"

import { icon } from "@/assets"
import { useDarkMode } from "@/hooks"

import { TbDeviceDesktopCode } from "react-icons/tb"
import { FaArrowTrendUp, FaMasksTheater } from "react-icons/fa6"
import { MdOutlineRoomService } from "react-icons/md"
import { VscServerProcess, VscTools } from "react-icons/vsc"
import { IoMdCloudOutline } from "react-icons/io"
import { PiBinocularsFill } from "react-icons/pi"
import { RiStackLine } from "react-icons/ri"

import TechCard from "./TechCard/TechCard"
import "./StackCategory.css"

interface TechStackProps {
  src?: string | { light: string; dark: string }
  label?: string
  empty?: number
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
    id: 0,
    CategoyIcon: RiStackLine,
    categoryColor: "#DC143C",
    CategoryTitle: "CategoryContent.Main.Title",
    categoryDescription: "CategoryContent.Main.Description",
    categoryKeys: [
      "CategoryContent.Main.Description_A",
      "CategoryContent.Main.Description_B",
      "CategoryContent.Main.Description_C",
      "CategoryContent.Main.Description_D",
    ],
    techStack: [
      { src: icon.TypeScript, label: "TypeScript" },
      { src: icon.React, label: "React" },
      { src: icon.ViteJS, label: "Vite" },
      { src: icon.Expo, label: "Expo" },
    ],
  },
  {
    id: 1,
    CategoyIcon: TbDeviceDesktopCode,
    categoryColor: "DarkOrange",
    CategoryTitle: "CategoryContent.Frontend.Title",
    categoryDescription: "CategoryContent.Frontend.Description",
    categoryKeys: [
      "CategoryContent.Frontend.Description_A",
      "CategoryContent.Frontend.Description_B",
      "CategoryContent.Frontend.Description_C",
      "CategoryContent.Frontend.Description_D",
    ],
    techStack: [
      { src: icon.HTML5, label: "HTML5" },
      { src: icon.CSSOld, label: "CSS" },
      { src: icon.JavaScript, label: "JavaScript" },
      { src: icon.TypeScript, label: "TypeScript" },
      { src: icon.React, label: "React" },
      { src: icon.Expo, label: "Expo" },
      { src: icon.ReactQuery, label: "TanStack Query" },
      { src: icon.TanStack, label: "TanStack Table" },
      { src: icon.ReactRouter, label: "React Router" },
      { src: icon.Storybook, label: "Storybook" },
      { src: icon.Zustand, label: "Zustand" },
      { src: icon.ViteJS, label: "Vite" },
      { src: icon.MaterialUI, label: "Material UI" },
      { src: icon.StyledComponents, label: "Styled Component" },
      { src: icon.Zod, label: "Zod" },
      { src: icon.ChartJS, label: "ChartJS" },
      { src: icon.MotionDark, label: "Motion" },
      { src: icon.PrettierDark, label: "Prettier" },
      { src: icon.Preact, label: "Preact" },
      { src: icon.Electron, label: "Electron" },
    ],
  },
  {
    id: 2,
    CategoyIcon: VscServerProcess,
    categoryColor: "green",
    CategoryTitle: "CategoryContent.Backend.Title",
    categoryDescription: "CategoryContent.Backend.Description",
    categoryKeys: [
      "CategoryContent.Backend.Description_A",
      "CategoryContent.Backend.Description_B",
      "CategoryContent.Backend.Description_C",
      "CategoryContent.Backend.Description_D",
    ],
    techStack: [
      { src: icon.NodeJS, label: "Node.js" },
      {
        src: { light: icon.ExpressLight, dark: icon.ExpressDark },
        label: "Express",
      },
      { src: icon.Supabase, label: "Supabase" },
      { src: icon.SocketIOLight, label: "Socket.IO" },
      { src: icon.JWT, label: "JWT" },
      { src: icon.GraphQL, label: "GraphQL" },
      { src: icon.MongoDB, label: "MongoDB" },
      { src: icon.PostgreSQL, label: "PostgreSQL" },
      { src: icon.Redis, label: "Redis" },
      { src: icon.Drizzle, label: "Drizzle" },
      { src: icon.Bun, label: "Bun" },
      { src: icon.Neon, label: "Neon" },
      { src: icon.Hono, label: "Hono" },
      { src: icon.BetterAuthLight, label: "BetterAuth" },
      { src: icon.DotenvX, label: "Dotenv" },
      { empty: 4 },
    ],
  },
  {
    id: 3,
    CategoyIcon: FaMasksTheater,
    categoryColor: "DeepSkyBlue",
    CategoryTitle: "CategoryContent.Testing.Title",
    categoryDescription: "CategoryContent.Testing.Description",
    categoryKeys: [
      "CategoryContent.Testing.Description_A",
      "CategoryContent.Testing.Description_B",
      "CategoryContent.Testing.Description_C",
      "CategoryContent.Testing.Description_D",
    ],
    techStack: [
      { src: icon.Cypress, label: "Cypress" },
      { src: icon.Jest, label: "Jest" },
      { src: icon.Vitest, label: "Vitest" },
      { src: icon.Playwright, label: "Playwright" },
      { empty: 16 },
    ],
  },
  {
    id: 4,
    CategoyIcon: IoMdCloudOutline,
    categoryColor: "Gold",
    CategoryTitle: "CategoryContent.Cloud.Title",
    categoryDescription: "CategoryContent.Cloud.Description",
    categoryKeys: [
      "CategoryContent.Cloud.Description_A",
      "CategoryContent.Cloud.Description_B",
      "CategoryContent.Cloud.Description_C",
      "CategoryContent.Cloud.Description_D",
    ],
    techStack: [
      { src: icon.Docker, label: "Docker" },
      { src: icon.DigitalOcean, label: "DigitalOcean" },
      {
        src: { light: icon.GitHubLight, dark: icon.GitHubDark },
        label: "GitHub Page",
      },
      { src: icon.Cloudflare, label: "Cloudflare" },
      { src: icon.CloudflareWorkers, label: "Cloudflare Workers" },
      { src: icon.Heroku, label: "Heroku" },
      { empty: 14 },
    ],
  },
  {
    id: 5,
    CategoyIcon: TbDeviceDesktopCode,
    categoryColor: "Olive",
    CategoryTitle: "CategoryContent.Design.Title",
    categoryDescription: "CategoryContent.Design.Description",
    categoryKeys: [
      "CategoryContent.Design.Description_A",
      "CategoryContent.Design.Description_B",
      "CategoryContent.Design.Description_C",
      "CategoryContent.Design.Description_D",
    ],
    techStack: [
      { src: icon.Photoshop, label: "Photoshop" },
      { src: icon.Premiere, label: "Premiere" },
      { src: icon.Illustrator, label: "Illustrator" },
      { src: icon.Figma, label: "Figma" },
      { empty: 16 },
    ],
  },
  {
    id: 6,
    CategoyIcon: VscTools,
    categoryColor: "purple",
    CategoryTitle: "CategoryContent.Productivity.Title",
    categoryDescription: "CategoryContent.Productivity.Description",
    categoryKeys: [
      "CategoryContent.Productivity.Description_A",
      "CategoryContent.Productivity.Description_B",
      "CategoryContent.Productivity.Description_C",
      "CategoryContent.Productivity.Description_D",
    ],
    techStack: [
      { src: icon.VSCode, label: "VSCode" },
      { src: icon.Notion, label: "Notion" },
      { src: icon.Neovim, label: "Neovim" },
      { src: icon.Obsidian, label: "Obsidian" },
      { src: icon.Postman, label: "Postman" },
      { src: icon.Slack, label: "Slack" },
      { src: icon.Discord, label: "Discord" },
      { src: icon.Chrome, label: "Chrome" },
      { src: icon.Firefox, label: "Firefox" },
      {
        src: { light: icon.GitHubLight, dark: icon.GitHubDark },
        label: "GitHub",
      },
      { src: icon.Git, label: "Git" },
      { src: icon.GitLab, label: "GitLab" },
      { src: icon.MarkdownLight, label: "Markdown" },
      { src: icon.PnpmLight, label: "PNPM" },
      { src: icon.Yarn, label: "Yarn" },
      { src: icon.Homebrew, label: "Homebrew" },
      { src: { light: icon.AppleLight, dark: icon.AppleDark }, label: "Apple" },
      { src: icon.Windows, label: "Windows" },
      { src: icon.ZenBrowserDark, label: "Zen Browser" },
      { src: icon.Ubuntu, label: "Ubuntu" },
    ],
  },
  {
    id: 7,
    CategoyIcon: PiBinocularsFill,
    categoryColor: "brown",
    CategoryTitle: "CategoryContent.R&D.Title",
    categoryDescription: "CategoryContent.R&D.Description",
    categoryKeys: [
      "CategoryContent.R&D.Description_A",
      "CategoryContent.R&D.Description_B",
      "CategoryContent.R&D.Description_C",
      "CategoryContent.R&D.Description_D",
    ],
    techStack: [
      { src: icon.Million, label: "Million" },
      { src: icon.SolidJS, label: "SolidJS" },
      { src: icon.TailwindCSS, label: "Tailwind CSS" },
      { src: icon.TanStack, label: "TanStack Router" },
      { src: icon.Hono, label: "Hono" },
      { empty: 14 },
    ],
  },
  {
    id: 8,
    CategoyIcon: FaArrowTrendUp,
    categoryColor: "Teal",
    CategoryTitle: "CategoryContent.Improving.Title",
    categoryDescription: "CategoryContent.Improving.Description",
    categoryKeys: [
      "CategoryContent.Improving.Description_A",
      "CategoryContent.Improving.Description_B",
      "CategoryContent.Improving.Description_C",
      "CategoryContent.Improving.Description_D",
    ],
  },
  {
    id: 9,
    CategoyIcon: MdOutlineRoomService,
    categoryColor: "Salmon",
    CategoryTitle: "CategoryContent.Services.Title",
    categoryDescription: "CategoryContent.Services.Description",
    categoryKeys: [
      "CategoryContent.Services.Description_A",
      "CategoryContent.Services.Description_B",
      "CategoryContent.Services.Description_C",
      "CategoryContent.Services.Description_D",
    ],
    techStack: [
      {
        src: icon.Bitwarden,
        label: "Bitwarden",
      },
      {
        src: icon.Deepseek,
        label: "Deepseek",
      },
      { src: icon.Shopify, label: "Shopify" },
      { src: icon.Stripe, label: "Stripe" },
      { src: icon.Twilio, label: "Twilio" },
      { src: icon.Linear, label: "Linear" },
      { src: icon.OBS, label: "OBS" },
      { src: icon.HuggingFace, label: "Hugging Face" },
      { src: icon.WordPress, label: "WordPress" },
      { src: icon.OpenAILight, label: "OpenAI" },
      { src: icon.Pilot, label: "Pilot" },
      { src: icon.OXC, label: "OXC" },
      { src: icon.Sentry, label: "Sentry" },
      { empty: 7 },
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
  techStack = [],
  categoryDescription,
}: StackCategoryProps) => {
  const { t } = useTranslation()
  const { isDarkMode } = useDarkMode()

  return (
    <div className="stack-category">
      <div className="stack-category-container">
        <div className="stack-category-header">
          <CategoryIcon
            className="stack-category-icon"
            style={{
              backgroundColor: isDarkMode ? "#1d1a35" : "#eeeeee",
            }}
            color={categoryColor}
            size={50}
          />

          <div className="stack-category-title">
            <h2>{t(CategoryTitle)}</h2>

            <p className="stack-category-description">
              {t(categoryDescription)}
            </p>
          </div>
        </div>

        <div className="stack-category-grid">
          {techStack.map((tech) => (
            <TechCard
              key={tech.label}
              src={tech.src}
              label={tech.label}
              empty={tech.empty}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default StackCategoryContent
