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

const TechStack = () => {
  const [categoryNumber, setCategory] = useState(1)

  return (
    <div
      style={{
        display: "flex",
        gap: 20,
        flexDirection: "column",
        // maxWidth: 800,
        marginBottom: 60,
        alignItems: "flex-start",
        width: "100%",
        marginTop: 60,
      }}
    >
      {/* <p>Core Values</p> */}

      <h1>Tech Stack · 2025</h1>

      <p style={{ maxWidth: 700 }}>
        Our values aren't just words on a wall—they're the principles that guide
        our daily actions and long-term vision, shaping our culture and driving
        our success.
      </p>

      <div
        style={{
          display: "flex",
          gap: 4,
          flexWrap: "wrap",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{ display: "flex", gap: 4, flexWrap: "wrap", maxWidth: 800 }}
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
            label="Design & UX"
            onClick={() => {
              setCategory(5)
            }}
            iconColor="Olive"
          />

          <Chip
            Icon={VscTools}
            status={categoryNumber === 6}
            label="Productivity Tools"
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
            label="Currently Improving"
            iconColor="Teal"
            onClick={() => {
              setCategory(8)
            }}
          />

          <Chip
            Icon={MdOutlineRoomService}
            status={categoryNumber === 9}
            label="Services"
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
