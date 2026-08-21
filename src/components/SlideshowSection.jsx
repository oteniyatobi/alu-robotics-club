import { useEffect, useState } from 'react'

export function SlideshowSection({
  photos = [],
  children,
  className = '',
  id,
  overlayOpacity = 0.72,
}) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (photos.length <= 1) return
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % photos.length)
    }, 5200)
    return () => clearInterval(timer)
  }, [photos.length])

  return (
    <section id={id} className={`relative overflow-hidden ${className}`}>
      {photos.length > 0 && (
        <>
          {photos.map((src, i) => (
            <div
              key={src}
              aria-hidden="true"
              className="absolute inset-0 transition-opacity duration-[1400ms] ease-in-out"
              style={{ opacity: i === current ? 1 : 0 }}
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
          ))}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ backgroundColor: `rgba(0,22,58,${overlayOpacity})` }}
          />
        </>
      )}
      <div className="relative" style={{ zIndex: 2 }}>
        {children}
      </div>
    </section>
  )
}
