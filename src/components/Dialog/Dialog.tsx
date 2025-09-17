import { useRef } from "react"
import { useTranslation } from "react-i18next"

import { useDarkMode } from "@/hooks"

import { FaRegCopy } from "react-icons/fa"
import { IoMdCloseCircleOutline } from "react-icons/io"

import "./Dialog.css"

interface DialogProps {
  buttonClassName?: string
  buttonContent?: React.ReactNode
  externalLink: string
  style?: React.CSSProperties
}

const Dialog = ({
  buttonClassName,
  buttonContent,
  externalLink = "#",
  style,
}: DialogProps) => {
  const { t } = useTranslation()
  const { isDarkMode } = useDarkMode()
  const dialogRef = useRef<HTMLDialogElement>(null)

  const openDialog = () => dialogRef.current?.showModal()
  const closeDialog = () => dialogRef.current?.close()

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    dialogRef.current?.close()
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    console.log(e.target, dialogRef.current)
    if (e.target === dialogRef.current) {
      closeDialog()
    }
  }

  return (
    <>
      <button className={buttonClassName} style={style} onClick={openDialog}>
        {buttonContent}
      </button>

      <dialog
        onClick={handleBackdropClick}
        ref={dialogRef}
        className={`dialog ${isDarkMode ? "dark" : "light"}`}
      >
        <div className="dialog-inner" onClick={(e) => e.stopPropagation()}>
          <div className="dialog-header">
            <p>{t("Dialog.Title")}</p>

            <button
              className={`dialog-close ${isDarkMode ? "dark" : "light"}`}
              onClick={closeDialog}
            >
              <IoMdCloseCircleOutline size={20} />
            </button>
          </div>

          <div
            className={`dialog-link-container ${isDarkMode ? "dark" : "light"}`}
          >
            <p>{externalLink}</p>

            <button
              className={`dialog-copy ${isDarkMode ? "dark" : "light"}`}
              onClick={copyLink}
            >
              <FaRegCopy />
            </button>
          </div>

          <div className="dialog-actions">
            <a
              className={`dialog-exit ${isDarkMode ? "dark" : "light"}`}
              target="_blank"
              rel="noopener noreferrer"
              href={externalLink}
              onClick={() => dialogRef.current?.close()}
            >
              {t("Dialog.Action")}
            </a>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default Dialog
