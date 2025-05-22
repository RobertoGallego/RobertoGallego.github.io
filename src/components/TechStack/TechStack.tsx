import { TbDeviceDesktopCode } from "react-icons/tb"
import Chip from "../Chip/Chip"
import { VscServerProcess, VscTools } from "react-icons/vsc"
import { FaArrowTrendUp, FaMasksTheater } from "react-icons/fa6"
import { IoMdCloudOutline } from "react-icons/io"
import { LiaPenNibSolid } from "react-icons/lia"
import { PiBinocularsFill } from "react-icons/pi"
import { MdOutlineRoomService } from "react-icons/md"
import StackCategoryContent from "../StackCategory"
import { useState } from "react"
import useDarkMode from "../../hooks/useDarkMode"
import { useTranslation } from "react-i18next"

const TechStack = () => {
  const { isDarkMode } = useDarkMode()
  const [categoryNumber, setCategory] = useState(1)
  const { t } = useTranslation()

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        fontSize: 16,
        alignItems: "flex-start",
        width: "100%",
        marginTop: 100,
        paddingInline: 10,
        backgroundColor: isDarkMode ? "#181816" : "#f8f8f8",
        padding: 60,
        borderRadius: 10,
      }}
    >
      <h1>{t("TechStack.Title")}</h1>

      <p style={{ maxWidth: 700, fontSize: 16, marginTop: 5, color: "grey" }}>
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
            maxWidth: 800,
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
            Icon={FaArrowTrendUp}
            status={categoryNumber === 8}
            label={t("TechStack.Improving")}
            iconColor="Teal"
            onClick={() => {
              setCategory(8)
            }}
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
