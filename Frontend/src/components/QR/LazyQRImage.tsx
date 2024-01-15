import React from "react"

interface QRImageProps {
  src: string
  alt: string
}

const LazyQRImage = ({ src, alt }: QRImageProps) => {
  return <img className="qr-image" src={src} alt={alt} />
}

export default LazyQRImage
