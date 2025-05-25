// "use client"
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import React, { useState, useRef, useEffect } from 'react'

// export default function Nav() {
//     const [isOpen, setIsOpen] = useState(false)
//     const navRef = useRef<HTMLDivElement>(null)
//     const menuRef = useRef<HTMLDivElement>(null)
//     const pathname = usePathname()

//     useEffect(() => {
//         function handleClickOutside(event: MouseEvent) {
//             if (
//                 navRef.current &&
//                 !navRef.current.contains(event.target as Node) &&
//                 menuRef.current &&
//                 !menuRef.current.contains(event.target as Node)
//             ) {
//                 setIsOpen(false)
//             }
//         }

//         if (isOpen) {
//             document.addEventListener('mousedown', handleClickOutside)
//         }

//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside)
//         }
//     }, [isOpen])
//     const linkStyles = (path: string) => {
//         const isActive = pathname === path
//         return `transition-all duration-200 text-xl ${isActive
//             ? 'text-white border-b-2 border-white font-semibold'
//             : 'text-gray-300 hover:text-white'
//             }`
//     }

//     const mobileLinkStyles = (path: string) => {
//         const isActive = pathname === path
//         return `transition-all duration-200 text-lg ${isActive
//             ? 'text-white font-semibold bg-gray-700 px-4 py-2 rounded-md w-full text-center'
//             : 'text-gray-300 hover:text-white'
//             }`
//     }
//     // return (
//     //     <>
//     //         <div ref={navRef} className="relative z-50 bg-gray-800 text-white">
//     //             <div className="flex h-20 justify-between items-center p-4">
//     //                 <div className=" font-bold text-xl">Sri Murugan Pet Industries</div>

//     //                 <button
//     //                     className="md:hidden z-50"
//     //                     onClick={() => setIsOpen(!isOpen)}
//     //                 >
//     //                     {isOpen ? (
//     //                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//     //                         </svg>
//     //                     ) : (
//     //                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//     //                         </svg>
//     //                     )}
//     //                 </button>

//     //                 <nav className="hidden md:flex space-x-4">
//     //                     <Link href="/" className="hover:text-gray-400 text-xl">Home</Link>
//     //                     <Link href="/product" className="hover:text-gray-400 text-xl">Product Catalog</Link>
//     //                     {/* <Link href="/about" className="hover:text-gray-400">About</Link> */}
//     //                     <Link href="/contact" className="hover:text-gray-400 text-xl">Contact US</Link>
//     //                 </nav>
//     //             </div>

//     //             {isOpen && (
//     //                 <>
//     //                     <div
//     //                         className="fixed inset-0bg-opacity-50 z-40"
//     //                         onClick={() => setIsOpen(false)}
//     //                     />
//     //                     <nav ref={menuRef} className="fixed top-[68px] left-0 right-0 bg-gray-800 z-50">
//     //                         <div className="flex flex-col  items-center space-y-4 p-4">
//     //                             <Link href="/" className="hover:text-gray-400 ">Home</Link>
//     //                             <Link href="/product" className="hover:text-gray-400">Product Catalog</Link>
//     //                             {/* <Link prefetch={true} href="/about" className="hover:text-gray-400">About</Link> */}
//     //                             <Link href="/contact" className="hover:text-gray-400">Contact US</Link>
//     //                         </div>
//     //                     </nav>
//     //                 </>
//     //             )}
//     //         </div>
//     //     </>
//     // )

//     return (
//         <>
//             <div ref={navRef} className="relative z-50 bg-gray-800 text-white">
//                 <div className="flex h-20 justify-between items-center p-4 mx-auto">
//                     <div className="font-bold text-xl">Sri Murugan Pet Industries</div>

//                      <button
//                         className="md:hidden z-50"
//                         onClick={() => setIsOpen(!isOpen)}
//                     >
//                         {isOpen ? (
//                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                         ) : (
//                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                             </svg>
//                         )}
//                     </button>

//                     <nav className="hidden  md:flex space-x-8">
//                         <Link href="/" className={linkStyles('/')}>
//                             Home
//                         </Link>
//                         <Link href="/product" className={linkStyles('/product')}>
//                             Product Catalog
//                         </Link>
//                         <Link href="/contact" className={linkStyles('/contact')}>
//                             Contact US
//                         </Link>
//                     </nav>
//                 </div>

//                 {isOpen && (
//                     <>
//                         <div
//                             className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
//                             onClick={() => setIsOpen(false)}
//                         />
//                         <nav ref={menuRef} className="fixed top-[68px] left-0 right-0 bg-gray-800/95 backdrop-blur-sm z-50">
//                             <div className="flex flex-col items-center space-y-4 p-6">
//                                 <Link
//                                     href="/"
//                                     className={mobileLinkStyles('/')}
//                                     onClick={() => setIsOpen(false)}
//                                 >
//                                     Home
//                                 </Link>
//                                 <Link
//                                     href="/product"
//                                     className={mobileLinkStyles('/product')}
//                                     onClick={() => setIsOpen(false)}
//                                 >
//                                     Product Catalog
//                                 </Link>
//                                 <Link
//                                     href="/contact"
//                                     className={mobileLinkStyles('/contact')}
//                                     onClick={() => setIsOpen(false)}
//                                 >
//                                     Contact US
//                                 </Link>
//                             </div>
//                         </nav>
//                     </>
//                 )}
//             </div>
//         </>
//     )
// }


"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useRef, useEffect } from "react"

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    // Prevent body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden"
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  const linkStyles = (path: string) => {
    const isActive = pathname === path
    return `transition-all duration-200 text-base md:text-lg lg:text-xl ${isActive ? "text-white border-b-2 border-white font-semibold" : "text-gray-300 hover:text-white"
      }`
  }

  const mobileLinkStyles = (path: string) => {
    const isActive = pathname === path
    return `transition-all duration-200 text-lg py-3 ${isActive
        ? "text-white font-semibold bg-gray-700 px-4 py-3 rounded-md w-full text-center"
        : "text-gray-300 hover:text-white hover:bg-gray-700/50 px-4 py-3 rounded-md w-full text-center"
      }`
  }

  return (
    <>
      <div ref={navRef} className="sticky top-0 z-50 bg-gray-800 text-white shadow-md">
        <div className="container mx-auto flex h-16 md:h-20 justify-between items-center px-4">
          <div className="font-bold text-base sm:text-lg md:text-xl truncate max-w-[200px] sm:max-w-none">
            SRI MURUGAN PET INDUSTRIES
          </div>
          <button className="md:hidden z-50 p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            <Link href="/" className={linkStyles("/")}>
              Home
            </Link>
            <Link href="/product" className={linkStyles("/product")}>
              Product Catalog
            </Link>
            <Link href="/contact" className={linkStyles("/contact")}>
              Contact us
            </Link>
          </nav>
        </div>

        {isOpen && (
          <>
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setIsOpen(false)} />
            <nav
              ref={menuRef}
              className="fixed top-16 left-0 right-0 bottom-0 bg-gray-800/95 backdrop-blur-sm z-50 overflow-y-auto"
            >
              <div className="flex flex-col items-center space-y-4 p-6">
                <Link href="/" className={mobileLinkStyles("/")} onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                <Link href="/product" className={mobileLinkStyles("/product")} onClick={() => setIsOpen(false)}>
                  Product Catalog
                </Link>
                <Link href="/contact" className={mobileLinkStyles("/contact")} onClick={() => setIsOpen(false)}>
                  Contact US
                </Link>

                {/* <div className="pt-6 mt-6 border-t border-gray-700 w-full flex flex-col items-center">
                  <p className="text-gray-400 mb-4">Contact us directly:</p>
                  <a
                    href="tel:+919876543210"
                    className="flex items-center justify-center w-full px-4 py-3 mb-3 bg-gray-700 text-white rounded-md hover:bg-gray-600"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Call Us
                  </a>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-4 py-3 bg-green-600 text-white rounded-md hover:bg-green-700"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                    WhatsApp
                  </a>
                </div> */}
              </div>
            </nav>
          </>
        )}
      </div>
    </>
  )
}
