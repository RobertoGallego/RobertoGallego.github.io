import TechCard from "./TechCard/TechCard"
import { TbDeviceDesktopCode } from "react-icons/tb"
import { FaArrowTrendUp, FaMasksTheater } from "react-icons/fa6"
import { MdOutlineRoomService } from "react-icons/md"

import { VscServerProcess, VscTools } from "react-icons/vsc"
import { IoMdCloudOutline } from "react-icons/io"
import { PiBinocularsFill } from "react-icons/pi"
import {
  AppleDark,
  AppleLight,
  BetterAuthLight,
  Bitwarden,
  Bun,
  ChartJS,
  Chrome,
  Cloudflare,
  CloudflareWorkers,
  CSSOld,
  Cypress,
  Deepseek,
  DigitalOcean,
  Discord,
  Docker,
  Hono,
  Drizzle,
  Electron,
  Expo,
  ExpressDark,
  ExpressLight,
  Figma,
  Firefox,
  GoDark,
  GoLight,
  GraphQL,
  HTML5,
  JavaScript,
  JWT,
  MaterialUI,
  Million,
  MongoDB,
  Neon,
  NodeJS,
  PostgreSQL,
  Preact,
  ReactQuery,
  ReactRouter,
  Redis,
  SocketIOLight,
  SolidJS,
  Storybook,
  StyledComponents,
  Supabase,
  TailwindCSS,
  TanStack,
  TypeScript,
  ViteJS,
  Zod,
  Zustand,
  Jest,
  Vitest,
  Playwright,
  Sentry,
  Heroku,
  Ubuntu,
  Premiere,
  Photoshop,
  Illustrator,
  VSCode,
  Neovim,
  Notion,
  Obsidian,
  Linear,
  Postman,
  Slack,
  GitHubLight,
  GitHubDark,
  Git,
  GitLab,
  MarkdownLight,
  PnpmLight,
  Yarn,
  Homebrew,
  Windows,
  ZenBrowserDark,
  Shopify,
  Stripe,
  Twilio,
  OBS,
  WordPress,
  HuggingFace,
  DotenvX,
  OpenAILight,
  Pilot,
  OXC,
  PrettierDark,
  MotionDark,
  React,
} from "../assets"
import useDarkMode from "../hooks/useDarkMode"
import { useTranslation } from "react-i18next"

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
      { src: HTML5, label: "HTML5" },
      { src: CSSOld, label: "CSS" },
      { src: JavaScript, label: "JavaScript" },
      { src: TypeScript, label: "TypeScript" },
      { src: React, label: "React" },
      { src: Expo, label: "Expo" },
      { src: ReactQuery, label: "TanStack Query" },
      { src: TanStack, label: "TanStack Table" },
      { src: ReactRouter, label: "React Router" },
      { src: Storybook, label: "Storybook" },
      { src: Zustand, label: "Zustand" },
      { src: ViteJS, label: "Vite" },
      { src: MaterialUI, label: "Material UI" },
      { src: StyledComponents, label: "Styled Component" },
      { src: Zod, label: "Zod" },
      { src: ChartJS, label: "ChartJS" },
      { src: MotionDark, label: "Motion" },
      { src: PrettierDark, label: "Prettier" },
      { src: Preact, label: "Preact" },
      { src: Electron, label: "Electron" },
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
      { src: NodeJS, label: "Node.js" },
      { src: { light: ExpressLight, dark: ExpressDark }, label: "Express" },
      { src: Supabase, label: "Supabase" },
      { src: SocketIOLight, label: "Socket.IO" },
      { src: JWT, label: "JWT" },
      { src: GraphQL, label: "GraphQL" },
      { src: MongoDB, label: "MongoDB" },
      { src: PostgreSQL, label: "PostgreSQL" },
      { src: Redis, label: "Redis" },
      { src: Drizzle, label: "Drizzle" },
      { src: Bun, label: "Bun" },
      { src: Neon, label: "Neon" },
      { src: { light: GoLight, dark: GoDark }, label: "Go" },
      { src: Hono, label: "Hono" },
      { src: BetterAuthLight, label: "BetterAuth" },
      { src: DotenvX, label: "Dotenv" },
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
      { src: Cypress, label: "Cypress" },
      { src: Jest, label: "Jest" },
      { src: Vitest, label: "Vitest" },
      { src: Playwright, label: "Playwright" },
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
      { src: Docker, label: "Docker" },
      { src: DigitalOcean, label: "DigitalOcean" },
      { src: { light: GitHubLight, dark: GitHubDark }, label: "GitHub Page" },
      { src: Cloudflare, label: "Cloudflare" },
      { src: CloudflareWorkers, label: "Cloudflare Workers" },
      { src: Heroku, label: "Heroku" },
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
      { src: Photoshop, label: "Photoshop" },
      { src: Premiere, label: "Premiere" },
      { src: Illustrator, label: "Illustrator" },
      { src: Figma, label: "Figma" },
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
      { src: VSCode, label: "VSCode" },
      { src: Notion, label: "Notion" },
      { src: Neovim, label: "Neovim" },
      { src: Obsidian, label: "Obsidian" },
      { src: Postman, label: "Postman" },
      { src: Slack, label: "Slack" },
      { src: Discord, label: "Discord" },
      { src: Chrome, label: "Chrome" },
      { src: Firefox, label: "Firefox" },
      { src: { light: GitHubLight, dark: GitHubDark }, label: "GitHub" },
      { src: Git, label: "Git" },
      { src: GitLab, label: "GitLab" },
      { src: MarkdownLight, label: "Markdown" },
      { src: PnpmLight, label: "PNPM" },
      { src: Yarn, label: "Yarn" },
      { src: Homebrew, label: "Homebrew" },
      { src: { light: AppleLight, dark: AppleDark }, label: "Apple" },
      { src: Windows, label: "Windows" },
      { src: ZenBrowserDark, label: "Zen Browser" },
      { src: Ubuntu, label: "Ubuntu" },
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
      { src: Million, label: "Million" },
      { src: SolidJS, label: "SolidJS" },
      { src: TailwindCSS, label: "Tailwind CSS" },
      { src: TanStack, label: "TanStack Router" },
      { src: { light: GoLight, dark: GoDark }, label: "Go" },
      { src: Hono, label: "Hono" },
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
        src: Bitwarden,
        label: "Bitwarden",
      },
      {
        src: Deepseek,
        label: "Deepseek",
      },
      { src: Shopify, label: "Shopify" },
      { src: Stripe, label: "Stripe" },
      { src: Twilio, label: "Twilio" },
      { src: Linear, label: "Linear" },
      { src: OBS, label: "OBS" },
      { src: HuggingFace, label: "Hugging Face" },
      { src: WordPress, label: "WordPress" },
      { src: OpenAILight, label: "OpenAI" },
      { src: Pilot, label: "Pilot" },
      { src: OXC, label: "OXC" },
      { src: Sentry, label: "Sentry" },
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
  categoryKeys,
  techStack = [],
}: StackCategoryProps) => {
  const { t } = useTranslation()
  const { isDarkMode } = useDarkMode()

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        marginTop: 40,
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
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
              backgroundColor: isDarkMode ? "#1d1a35" : "#eeeeee",
              borderRadius: 10,
              padding: 10,
            }}
            color={categoryColor}
            size={50}
          />

          <div>
            <h2>{t(CategoryTitle)}</h2>
            <div
              style={{
                display: "flex",
                // gap: 4,
                alignItems: "center",
              }}
            >
              {/* <MdArrowOutward color={categoryColor} /> */}
              <p>{t(categoryKeys[0])}</p>
            </div>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            marginTop: 20,
          }}
        >
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
