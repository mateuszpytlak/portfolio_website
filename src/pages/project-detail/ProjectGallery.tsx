import { useEffect, useState } from 'react'

type ProjectGalleryProps = {
  gallery: string[]
  projectSlug: string
  projectTitle: string
}

function ProjectGallery({
  gallery,
  projectSlug,
  projectTitle,
}: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    setActiveIndex(0)
  }, [projectSlug])

  useEffect(() => {
    if (gallery.length <= 1 || isHovering) {
      return
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      return
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % gallery.length)
    }, 6000)

    return () => window.clearInterval(timer)
  }, [gallery, isHovering])

  const handlePrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? gallery.length - 1 : current - 1,
    )
  }

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % gallery.length)
  }

  return (
    <div className="space-y-4">
      <div
        className="relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-[var(--bg-alt)]/60"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {gallery.map((image, index) => (
            <div className="min-w-full" key={`${projectSlug}-image-${index}`}>
              <img
                alt={`${projectTitle} screen ${index + 1}`}
                className="h-full w-full object-cover"
                loading="lazy"
                src={image}
              />
            </div>
          ))}
        </div>
        {gallery.length > 1 ? (
          <>
            <button
              aria-label="Previous screenshot"
              className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-black/50 text-lg font-semibold leading-none text-white transition hover:border-white/40"
              onClick={handlePrevious}
              type="button"
            >
              {'<'}
            </button>
            <button
              aria-label="Next screenshot"
              className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-black/50 text-lg font-semibold leading-none text-white transition hover:border-white/40"
              onClick={handleNext}
              type="button"
            >
              {'>'}
            </button>
          </>
        ) : null}
        {gallery.length > 1 ? (
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-2">
            {gallery.map((_, index) => (
              <button
                aria-label={`Go to screenshot ${index + 1}`}
                className={`h-2 w-2 rounded-full transition ${
                  index === activeIndex
                    ? 'bg-[var(--accent)]'
                    : 'bg-white/20 hover:bg-white/50'
                }`}
                key={`${projectSlug}-dot-${index}`}
                onClick={() => setActiveIndex(index)}
                type="button"
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default ProjectGallery
