import { useEffect, useState, useRef, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { clinicData } from '@/data/clinicData'

export function Testimonials() {
  const testimonials = clinicData.testimonials || []
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(2)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1)
      } else {
        setItemsPerView(2)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - itemsPerView)

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  // Autoplay functionality with smooth rotation
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      handleNext()
    }, 5500)
    return () => clearInterval(timer)
  }, [isPaused, handleNext])

  // Touch gesture support
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const diff = touchStartX.current - touchEndX.current
    if (diff > 50) {
      handleNext()
    } else if (diff < -50) {
      handlePrev()
    }
    touchStartX.current = 0
    touchEndX.current = 0
  }

  const totalDots = maxIndex + 1

  return (
    <section className="bg-white px-6 py-20 lg:px-10 lg:py-28 overflow-hidden border-b border-[#dce5e0]">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="eyebrow">Patient voices</p>
            <h2 className="section-title">
              Kind words from
              <br />
              <em>our community.</em>
            </h2>
            <div className="mt-4 flex items-center gap-2">
              <div className="flex text-[#c89247]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-[#c89247] text-[#c89247]"
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-[#163b4a]">5.0</span>
              <span className="text-sm text-[#5f7975]">
                · Verified Patient Experiences in Delray Beach
              </span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="grid size-12 place-items-center rounded-full border border-[#cbd9d5] bg-[#f8faf6] text-[#163b4a] transition-all hover:bg-[#0077c8] hover:text-white hover:border-[#0077c8] cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="grid size-12 place-items-center rounded-full border border-[#cbd9d5] bg-[#f8faf6] text-[#163b4a] transition-all hover:bg-[#0077c8] hover:text-white hover:border-[#0077c8] cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div
          className="relative overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="w-full md:w-1/2 shrink-0 px-3 flex"
              >
                <blockquote className="group relative flex flex-col justify-between w-full bg-[#f4f7f3] border border-[#dce5e0] p-8 lg:p-9 transition-all duration-300 hover:border-[#163b4a] hover:bg-white hover:shadow-lg rounded-sm">
                  {/* Watermark Quote Icon */}
                  <div className="absolute top-6 right-6 text-[#9eb8ae]/25 transition-colors group-hover:text-[#163b4a]/15 pointer-events-none">
                    <Quote size={48} />
                  </div>

                  <div>
                    {/* Stars & Tag */}
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <div className="flex text-[#c89247] gap-0.5">
                        {[...Array(item.rating || 5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="fill-[#c89247] text-[#c89247]"
                          />
                        ))}
                      </div>
                      {item.treatment && (
                        <span className="rounded bg-[#e2ede7] px-2.5 py-0.5 text-[11px] font-semibold text-[#32584f]">
                          {item.treatment}
                        </span>
                      )}
                    </div>

                    {/* Quote */}
                    <p className="font-serif text-lg lg:text-xl leading-relaxed text-[#163b4a]">
                      {item.quote}
                    </p>
                  </div>

                  {/* Author */}
                  <footer className="mt-8 pt-5 border-t border-[#dce5e0]/70 flex items-center justify-between">
                    <span className="text-sm font-semibold uppercase tracking-wider text-[#355b51]">
                      {item.author}
                    </span>
                    <span className="text-xs text-[#738e89]">
                      Verified Patient
                    </span>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {[...Array(totalDots)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 transition-all duration-300 rounded-full cursor-pointer ${
                currentIndex === idx
                  ? 'w-8 bg-[#0077c8]'
                  : 'w-2.5 bg-[#cbd9d5] hover:bg-[#8da89f]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
