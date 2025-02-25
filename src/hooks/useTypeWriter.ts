import { useState, useEffect } from "react";

const useTypewriter = (
  text: string,
  delay: number,
  infinite: boolean = false,
  position: number = 1
) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Reinicia el estado después de un pequeño retraso para permitir que la animación actual termine
    const timeout = setTimeout(() => {
      setCurrentText("");
      setCurrentIndex(0);
    }, delay);

    return () => clearTimeout(timeout);
  }, [position, delay]); // Reinicia cuando cambia la posición

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
    } else if (infinite) {
      timeout = setTimeout(() => {
        setCurrentText("");
        setCurrentIndex(0);
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text]);

  return { currentText };
};

export default useTypewriter;