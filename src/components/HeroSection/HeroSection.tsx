import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

import { album } from "@/assets"
import { useDarkMode } from "@/hooks"

import { FaArrowRight } from "react-icons/fa6"
import { HiOutlineRocketLaunch } from "react-icons/hi2"

import Dialog from "../Dialog/Dialog"
import "./HeroSection.css"
import { useRef } from "react"

const HeroSection = () => {
  const { isDarkMode } = useDarkMode()
  const theme = isDarkMode ? "dark" : "light"

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const { t } = useTranslation()

  return (
    <motion.div
      ref={ref}
      className="hero-section-wrapper"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div className={`hero-avatar ${theme}`} variants={itemVariants}>
        <img src={album.Profile} alt="Profile" />
      </motion.div>

      <motion.div className="hero-chip" variants={itemVariants}>
        <motion.p className={`hero-chip-text ${theme}`}>
          <HiOutlineRocketLaunch size={16} />

          {t("HeroSection.Chip")}
        </motion.p>
      </motion.div>

      <motion.h1
        className={`hero-title ${theme}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        {t("HeroSection.Title_Primary")}
      </motion.h1>

      <motion.p
        className={`hero-subtitle ${theme}`}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {t("HeroSection.Title_Secondary")}
      </motion.p>

      <motion.div className="hero-buttons" variants={itemVariants}>
        <Dialog
          buttonClassName={`button-primary ${theme}`}
          buttonContent={
            <>
              {t("HeroSection.Button_Primary")}a
              <FaArrowRight size={12} />
            </>
          }
          externalLink="https://www.linkedin.com/in/roberto-g-905753190/"
        />

        <Dialog
          buttonClassName={`button-secondary ${theme}`}
          buttonContent={t("HeroSection.Button_Secondary")}
          externalLink="https://www.linkedin.com/in/roberto-g-905753190/"
        />
      </motion.div>
    </motion.div>
  )
}

export default HeroSection
