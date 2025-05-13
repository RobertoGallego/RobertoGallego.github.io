import TechCard from "./TechCard/TechCard"
import { TbDeviceDesktopCode } from "react-icons/tb"
import { FaArrowTrendUp, FaMasksTheater } from "react-icons/fa6"
import { MdArrowOutward, MdOutlineRoomService } from "react-icons/md"

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
  Firebase,
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
  PrismaDark,
  PrismaLight,
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
} from "../assets"

interface TechStackProps {
  src?: string | { light: string; dark: string }
  label: string
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
      { src: ChartJS, label: "ChartJS" },
      { src: Electron, label: "Electron" },
      { src: Expo, label: "Expo" },
      { src: HTML5, label: "HTML5" },
      { src: CSSOld, label: "CSS" },
      { src: JavaScript, label: "JavaScript" },
      { src: TypeScript, label: "TypeScript" },
      { src: Zustand, label: "Zustand" },
      { src: ReactQuery, label: "React Query" },
      { src: ReactRouter, label: "React Router" },
      { src: MaterialUI, label: "Material UI" },
      { src: StyledComponents, label: "Styled" },
      { src: TailwindCSS, label: "Tailwind CSS" },
      { src: ViteJS, label: "Vite" },
      { src: Zod, label: "Zod" },
      { src: TanStack, label: "TanStack" },
      { src: Preact, label: "Preact" },
      { src: SolidJS, label: "SolidJS" },
      { src: Storybook, label: "Storybook" },
      { src: Million, label: "Million.js" },
      { src: MotionDark, label: "Motion" },
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
    techStack: [
      { src: { light: ExpressLight, dark: ExpressDark }, label: "Express" },
      { src: SocketIOLight, label: "Socket.IO" },
      { src: JWT, label: "JWT" },
      { src: { light: PrismaLight, dark: PrismaDark }, label: "Prisma" },
      { src: GraphQL, label: "GraphQL" },
      { src: MongoDB, label: "MongoDB" },
      { src: PostgreSQL, label: "PostgreSQL" },
      { src: Redis, label: "Redis" },
      { src: Supabase, label: "Supabase" },
      { src: Drizzle, label: "Drizzle" },
      { src: Bun, label: "Bun" },
      { src: Firebase, label: "Firebase" },
      { src: Neon, label: "Neon" },
      { src: { light: GoLight, dark: GoDark }, label: "Go" },
      { src: Hono, label: "Hono" },
      { src: NodeJS, label: "Node.js" },
      { src: BetterAuthLight, label: "BetterAuth" },
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
    techStack: [
      { src: Cypress, label: "Cypress" },
      { src: Jest, label: "Jest" },
      { src: Vitest, label: "Vitest" },
      { src: Playwright, label: "Playwright" },
      { src: Sentry, label: "Sentry" },
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
    techStack: [
      { src: Docker, label: "Docker" },
      { src: Firebase, label: "Firebase" },
      { src: DigitalOcean, label: "DigitalOcean" },
      { src: Cloudflare, label: "Cloudflare" },
      { src: CloudflareWorkers, label: "Cloudflare Workers" },
      { src: Heroku, label: "Heroku" },
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
    techStack: [
      { src: Photoshop, label: "Photoshop" },
      { src: Premiere, label: "Premiere" },
      { src: Illustrator, label: "Illustrator" },
      { src: Figma, label: "Figma" },
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
    techStack: [
      { src: VSCode, label: "VSCode" },
      { src: Neovim, label: "Neovim" },
      { src: Notion, label: "Notion" },
      { src: Obsidian, label: "Obsidian" },
      { src: Linear, label: "Linear" },
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
      { src: DotenvX, label: "Dotenv" },
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
      { src: OBS, label: "OBS" },
      { src: HuggingFace, label: "Hugging Face" },
      { src: WordPress, label: "WordPress" },
      { src: OpenAILight, label: "OpenAI" },
      { src: Pilot, label: "Pilot" },
      { src: OXC, label: "OXC" },
      { src: PrettierDark, label: "Prettier" },
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
        flexWrap: "wrap",
        // maxWidth: 800
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
              backgroundColor: "#000000",
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
            marginTop: 10,
            marginBottom: 20,
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

        <div
          style={{
            display: "flex",
            gap: 10,
            alignItems: "center",
            flexWrap: "wrap",
            marginTop: 20,
          }}
        >
          {techStack.map((tech) => (
            <TechCard key={tech.label} src={tech.src} label={tech.label} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default StackCategoryContent
