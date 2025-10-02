import { useState } from "react"
import { useTranslation } from "react-i18next"

import { useDarkMode } from "@/hooks"

import { TbDeviceDesktopCode } from "react-icons/tb"
import { VscServerProcess, VscTools } from "react-icons/vsc"
import { FaMasksTheater } from "react-icons/fa6"
import { IoMdCloudOutline } from "react-icons/io"
import { LiaPenNibSolid } from "react-icons/lia"
import { PiBinocularsFill } from "react-icons/pi"
import { MdOutlineRoomService } from "react-icons/md"

import StackCategoryContent from "../StackCategory"
import Chip from "../../Chip/Chip"

import "./TechStack.css"

const TechStack = () => {
  const { isDarkMode } = useDarkMode()
  const [categoryNumber, setCategory] = useState(1)
  const { t } = useTranslation()
  const theme = isDarkMode ? "dark" : "light"

  return (
    <div className={`tech-stack ${theme}`}>
      <h1>{t("TechStack.Title")}</h1>

      <p className={`tech-stack-description ${theme}`}>
        {t("TechStack.Description")}
      </p>

      <div
        style={{
          display: "flex",
          gap: 4,
          flexWrap: "wrap",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 4,
            flexWrap: "wrap",
            marginTop: 15,
          }}
        >
          <Chip
            Icon={TbDeviceDesktopCode}
            label="Frontend"
            iconColor="DarkOrange"
            status={categoryNumber === 1}
            onClick={() => {
              setCategory(1)
            }}
          />

          <Chip
            Icon={VscServerProcess}
            label="Backend"
            iconColor="Green"
            status={categoryNumber === 2}
            onClick={() => {
              setCategory(2)
            }}
          />

          <Chip
            Icon={FaMasksTheater}
            label="Testing & QA"
            iconColor="DeepSkyBlue"
            status={categoryNumber === 3}
            onClick={() => {
              setCategory(3)
            }}
          />

          <Chip
            Icon={IoMdCloudOutline}
            status={categoryNumber === 4}
            label="Cloud"
            onClick={() => setCategory(4)}
            iconColor="Gold"
          />

          <Chip
            Icon={LiaPenNibSolid}
            status={categoryNumber === 5}
            label={t("TechStack.Design")}
            onClick={() => {
              setCategory(5)
            }}
            iconColor="Olive"
          />

          <Chip
            Icon={VscTools}
            status={categoryNumber === 6}
            label={t("TechStack.Productivity")}
            iconColor="purple"
            onClick={() => {
              setCategory(6)
            }}
          />

          <Chip
            Icon={PiBinocularsFill}
            status={categoryNumber === 7}
            label="R&D"
            onClick={() => {
              setCategory(7)
            }}
            iconColor="brown"
          />

          <Chip
            Icon={MdOutlineRoomService}
            status={categoryNumber === 9}
            label={t("TechStack.Services")}
            iconColor="Salmon"
            onClick={() => {
              setCategory(9)
            }}
          />
        </div>

        <StackCategoryContent categoryNumber={categoryNumber} />
      </div>
    </div>
  )
}

export default TechStack
