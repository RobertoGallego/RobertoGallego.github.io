import React, { useState } from 'react'
import './LazyImg.css'
import useDarkMode from '@/hooks/useDarkMode'

interface LazyImgProps {
  src: string
  alt?: string
  className?: string
  style?: React.CSSProperties
  borderRadius?: number | string
}

const LazyImg = ({ src, alt = '', className = '', style = {}, borderRadius = 0 }: LazyImgProps) => {
  const { isDarkMode } = useDarkMode()

  const [loaded, setLoaded] = useState(false)

  const handleLazyImg = () => {
    setLoaded(true)
  }

  return (
    <div className="lazy-img-wrapper">
      {!loaded && (
        <div className={`lazy-img-skeleton ${isDarkMode ? 'dark' : 'light'}`} style={{ borderRadius }} />
      )}

      <img
        src={src}
        alt={alt}
        className={className}
        style={style}
        onLoad={handleLazyImg}
        onError={handleLazyImg}
      />
    </div>
  )
}

export default LazyImg