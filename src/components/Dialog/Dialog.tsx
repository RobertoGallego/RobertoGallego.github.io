import { useRef } from "react"
import { IoIosCloseCircleOutline } from "react-icons/io"
import useDarkMode from "../../hooks/useDarkMode"
import "./Dialog.css"

const Dialog = ({ buttonTitle }: { buttonTitle: string }) => {
  const { isDarkMode } = useDarkMode()
  const dialogRef = useRef<HTMLDialogElement>(null)

  const openDialog = () => {
    dialogRef.current?.showModal()
  }

  const closeDialog = () => {
    dialogRef.current?.close()
  }

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)

    dialogRef.current?.close()
  }

  return (
    <>
      <button onClick={openDialog}>{buttonTitle}</button>

      <dialog
        ref={dialogRef}
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "1px solid #0f0e2a",
          borderRadius: "10px",
          paddingBlock: ".8rem",
          paddingInline: ".8rem",
          backgroundColor: isDarkMode ? "#1e1e2a" : "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "6rem",
            justifyContent: "flex-end",
          }}
        >
          <p style={{}}>¿Seguro que quieres salir del sitio?</p>
          <button
            style={{
              background: "none",
              border: "none",
              color: isDarkMode ? "#ffffff" : "#000000",
              cursor: "pointer",
            }}
            onClick={closeDialog}
          >
            <IoIosCloseCircleOutline size={20} />
          </button>
        </div>
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            gap: "0.8rem",
            justifyContent: "flex-end",
          }}
        >
          <button
            style={{
              border: "1px solid",
              padding: ".4rem .8rem",
              borderRadius: "10px",
              color: isDarkMode ? "#ffffff" : "#000000",
              cursor: "pointer",
            }}
            onClick={copyLink}
          >
            Copy Link
          </button>
          
          <a
            style={{
              background: "#ff6347",
              padding: ".4rem .8rem",
              borderRadius: "10px",
              color: isDarkMode ? "#ffffff" : "#000000",
              cursor: "pointer",
            }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://google.com"
            onClick={() => dialogRef.current?.close()}
          >
            Sí, salir
          </a>
        </div>
      </dialog>
    </>
  )
}

export default Dialog
