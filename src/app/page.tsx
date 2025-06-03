"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import { useMediaQuery } from "@/hooks/use-media-query"
import type { Swiper as SwiperType } from "swiper"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

const images = [
  {
    url: "/Sri Murugan Batch images.png",
    alt: "Product Image 1",
  },
  {
    url: "/Sri Murugan Batch images 1.png",
    alt: "Product Image 2",
  },
  {
    url: "/Sri Murugan Batch images 2.png",
    alt: "Product Image 3",
  },
  {
    url: "/Sri Murugan Batch images 3.png",
    alt: "Product Image 4",
  },
  {
    url: "/Sri Murugan Batch images 4.png",
    alt: "Product Image 5",
  },
]

export default function ResponsiveSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef<SwiperType | null>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isTablet = useMediaQuery("(max-width: 1024px)")

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev()
    }
  }

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext()
    }
  }

  const getSlidesPerView = () => {
    if (isMobile) return 1
    if (isTablet) return 2
    return 3
  }
  // const getSlidesPerView = () => {
  //   if (isMobile) return 1.2
  //   if (isTablet) return 2.2
  //   return 3.2
  // }
  return (
    <div className="w-full bg-gradient-to-b from-slate-50 to-white mb-16">
      <div className="container mx-auto px-4 py-4 sm:py-8">
        {/* Slider Section */}
        <div className="w-full h-[350px]  xs:h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] relative group overflow-hidden">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            centeredSlides
            // centeredSlides={false} // Changed to false
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2.2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3.2,
                spaceBetween: 20,
              }
            }}
            loop
            slidesPerView={getSlidesPerView()}
            spaceBetween={isMobile ? 10 : 20}
            // className="w-full  h-full flex items-center"
          >
            {images.map((img, idx) => (
              <SwiperSlide
                key={idx}
                className="flex justify-center items-center transition-all duration-500 py-4 sm:py-6"
              >
                <motion.div
                  className="flex sm:w-[75%] md:w-[80%] w-[60%] h-[280px] sm:h-[320px] md:h-[380px] mx-auto overflow-hidden rounded-3xl"
                  animate={{
                    scale: idx === activeIndex ? 1.05 : 0.9,
                    opacity: idx === activeIndex ? 1 : 0.6,
                    y: idx === activeIndex ? -10 : 0,
                  }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <Image
                    src={img.url}
                    alt={img.alt}
                    fill
                    // className=" rounded-[3rem] shadow-xl transition-transform duration-300"
                    sizes="(max-width: 640px) 90vw, (max-width: 768px) 85vw, 75vw"
                    priority={idx === activeIndex}
                    quality={100}

                  />
                </motion.div>
              </SwiperSlide>
            ))}

            {/* {images.map((img, idx) => (
              <SwiperSlide
                key={idx}
                className="flex justify-center items-center transition-all duration-500 py-4 sm:py-6"
              >
                <motion.div
                  className="relative w-[90%] sm:w-[85%] md:w-[75%] h-[280px] sm:h-[320px] md:h-[380px] mx-auto overflow-hidden rounded-[2.5rem] shadow-xl"
                  animate={{
                    scale: idx === activeIndex ? 1.05 : 0.9,
                    opacity: idx === activeIndex ? 1 : 0.6,
                    y: idx === activeIndex ? -10 : 0,
                  }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <Image
                    src={img.url}
                    alt={img.alt}
                    fill
                    className="object-contain rounded-[2.5rem]"
                    sizes="(max-width: 640px) 90vw, (max-width: 768px) 85vw, 75vw"
                    priority={idx === activeIndex}
                    quality={100}
                  />
                </motion.div>
              </SwiperSlide>
            ))} */}

            {/* Navigation Buttons */}
            <button
              onClick={handlePrevClick}
              className="swiper-button-prev !w-8 !h-8 md:!w-10 md:!h-10 !left-1 md:!left-4 !opacity-100 transition-all duration-300 after:!text-[0px] z-20"
              aria-label="Previous Slide"
            >
              <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center bg-white/90 hover:bg-white shadow-md rounded-full">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-slate-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </button>

            <button
              onClick={handleNextClick}
              className="swiper-button-next !w-8 !h-8 md:!w-10 md:!h-10 !right-1 md:!right-4 !opacity-100 transition-all duration-300 after:!text-[0px] z-20"
              aria-label="Next Slide"
            >
              <div className="absolute right-0 top-0 w-full h-full flex items-center justify-center bg-white/90 hover:bg-white shadow-md rounded-full">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-slate-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </Swiper>
        </div>

        {/* About Us Section */}
        {/* <div className=" text-center max-w-4xl mx-auto px-4">
          <div className="inline-block mb-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 relative">
              About Us
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-slate-800 rounded-full"></span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
            <div className="mt-8 space-y-4 md:space-y-6 text-slate-700 font-serif">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                In a world demanding strength, lightness, and sustainability, PET stands out — and so do we. Established
                in 2021, our company was built on a mission to harness the true potential of Polyethylene Terephthalate
                (PET) — a high-performance thermoplastic polymer known for its versatility across industries.
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                From food and beverages to many other applications, PET continues to shape the way the world manufactures,
                packages, and innovates. At the heart of our operations is a commitment to quality, durability, and
                environmental responsibility.
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                We take pride in delivering PET products that not only meet performance standards but also support
                circular economy goals. As one of the most widely recycled plastics, PET plays a critical role in
                sustainable waste management, and we&#39;re proud to be part of that change.
              </p></div>

            <div className="w-full md:w-1/3 h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] relative rounded-lg overflow-hidden shadow-lg">
              <Image src={'/company.jpg'} alt="home" width={100} height={100} />

            </div>
          </div>
        </div> */}
        {/* About Us Section */}
        <div className=" text-center max-w-7xl mx-auto px-4">
          <div className="inline-block mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 relative">
              About Us
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-slate-800 rounded-full"></span>
            </h2>
          </div>
          <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-8 md:gap-12 lg:gap-16">

            {/* Text Content */}
            <div className="w-full md:w-2/3  space-y-4 md:space-y-6 text-slate-700 text-left font-serif">
              <p className="text-base sm:text-lg leading-relaxed">
                In a world demanding strength, lightness, and sustainability, PET stands out — and so do we. Established
                in 2021, our company was built on a mission to harness the true potential of Polyethylene Terephthalate
                (PET) — a high-performance thermoplastic polymer known for its versatility across industries.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                From food and beverages to many other applications, PET continues to shape the way the world manufactures,
                packages, and innovates. At the heart of our operations is a commitment to quality, durability, and
                environmental responsibility.
              </p>
              {/* <p className="text-base sm:text-lg leading-relaxed w-full">
                We take pride in delivering PET products that not only meet performance standards but also support
                circular economy goals. As one of the most widely recycled plastics, PET plays a critical role in
                sustainable waste management, and we&#39;re proud to be part of that change.
              </p> */}
            </div>

            {/* Image Container */}
            <div className="w-full md:w-2/3">
              <Image
                src="/company.jpg"
                alt="Company Image"
                width={1000}
                height={1600}
                className="object-cover w-full h-auto rounded-2xl"
                priority
              />
            </div>



          </div>
          <div className="w-full mt-4  space-y-4 md:space-y-6 text-slate-700 text-left font-serif">

            <p className="text-base sm:text-lg leading-relaxed w-full">
              We take pride in delivering PET products that not only meet performance standards but also support
              circular economy goals. As one of the most widely recycled plastics, PET plays a critical role in
              sustainable waste management, and we&#39;re proud to be part of that change.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


// {/* <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-8 md:gap-12 lg:gap-16">
//             {/* Text Content */}
//             <div className="w-full md:w-2/3 space-y-4 md:space-y-6 text-slate-700 text-left font-serif">
//               <p className="text-base sm:text-lg leading-relaxed">
//                 In a world demanding strength, lightness, and sustainability, PET stands out — and so do we. Established
//                 in 2021, our company was built on a mission to harness the true potential of Polyethylene Terephthalate
//                 (PET) — a high-performance thermoplastic polymer known for its versatility across industries.
//               </p>
//               <p className="text-base sm:text-lg leading-relaxed">
//                 From food and beverages to many other applications, PET continues to shape the way the world manufactures,
//                 packages, and innovates. At the heart of our operations is a commitment to quality, durability, and
//                 environmental responsibility.
//               </p>
//               <p className="text-base sm:text-lg leading-relaxed">
//                 We take pride in delivering PET products that not only meet performance standards but also support
//                 circular economy goals. As one of the most widely recycled plastics, PET plays a critical role in
//                 sustainable waste management, and we&#39;re proud to be part of that change.
//               </p>
//             </div>

//             {/* Image Container */}
//             {/* Image Container */}
//             <div className="w-full md:w-2/3 mb-8 md:mb-0"> {/* Slightly reduced width */}

//               <Image
//                 src="/company.jpg"
//                 alt="Company Image"
//                 width={1000} // Adjusted to better match desired dimensions
//                 height={1600} // Increased height
//                 className="object-cover w-full h-auto rounded-2xl" // Responsive width with natural height
//                 priority
//               />

//             </div>






//           </div> */}