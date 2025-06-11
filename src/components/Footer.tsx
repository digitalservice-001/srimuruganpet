// import Link from "next/link"
// import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
//           {/* <div>
//             <h3 className="text-xl font-bold mb-4">About Us</h3>
//             <p className="text-gray-300 mb-4">
//               We provide high-quality products and exceptional customer service to meet all your needs.
//             </p>
//             <div className="flex space-x-4">
//               <Link href="#" className="text-gray-300 hover:text-white transition-colors">
//                 <Facebook size={20} />
//                 <span className="sr-only">Facebook</span>
//               </Link>
//               <Link href="#" className="text-gray-300 hover:text-white transition-colors">
//                 <Instagram size={20} />
//                 <span className="sr-only">Instagram</span>
//               </Link>
//               <Link href="#" className="text-gray-300 hover:text-white transition-colors">
//                 <Twitter size={20} />
//                 <span className="sr-only">Twitter</span>
//               </Link>
//             </div>
//           </div> */}

//           <div className="ml-32">
//             <h3 className="text-xl font-bold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/" className="text-gray-300 hover:text-white transition-colors">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/products" className="text-gray-300 hover:text-white transition-colors">
//                   Products
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-xl font-bold mb-4">Contact Info</h3>
//             <ul className="space-y-3">
//               <li className="flex items-start">
//                 <MapPin className="mr-2 h-5 w-5 text-gray-300 shrink-0 mt-0.5" />
//                 <span className="text-gray-300">123 Main Street, Coimbatore, Tamil Nadu, India - 641001</span>
//               </li>
//               <li className="flex items-center">
//                 <Phone className="mr-2 h-5 w-5 text-gray-300" />
//                 <span className="text-gray-300">+91 98765 43210</span>
//               </li>
//               <li className="flex items-center">
//                 <Mail className="mr-2 h-5 w-5 text-gray-300" />
//                 <span className="text-gray-300">info@example.com</span>
//               </li>
//             </ul>
//           </div>

//           {/* <div>
//             <h3 className="text-xl font-bold mb-4">Newsletter</h3>
//             <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
//             <form className="flex flex-col space-y-2">
//               <input
//                 type="email"
//                 placeholder="Your email address"
//                 className="px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
//                 required
//               />
//               <button type="submit" className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors">
//                 Subscribe
//               </button>
//             </form>
//           </div> */}
//         </div>

//         <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
//           {/* <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p> */}
//         </div>
//       </div>
//     </footer>
//   )
// }

'use client'

import { usePathname } from 'next/navigation'
import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
// import { useLocation } from 

export default function Footer() {
  const path = usePathname()
  // console.log("Footer rendered",usePathname())
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300 mb-4">
              We provide high-quality products and exceptional customer service to meet all your needs.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div> */}

          <div className="md:ml-0 lg:ml-32">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                {path !== "/" && (
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>

                )}
              </li>
              <li>
                <Link href="/product" className="text-gray-300 hover:text-white transition-colors">
                 Product Catalogue
                </Link>
              </li>
              {/* <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li> */}
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-gray-300 shrink-0 mt-0.5" />
                <span className="text-gray-300">12B vayampalayam road, Keeranatham,
                  Coimbatore -Tamil Nadu, India - 641035</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-gray-300" />
                <a href="tel:+919715074266" className="text-gray-300 hover:text-white">
                  +91 9715074266
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-gray-300" />
                <a href="mailto:info@example.com" className="text-gray-300 hover:text-white">
                  srimuruganpet@gmail.com
                </a>
              </li>
              <li className="flex items-center mt-4 pt-2">
                <a
                  href="https://wa.me/9715074266 "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>

          {/* <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              />
              <button type="submit" className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors">
                Subscribe
              </button>
            </form>
          </div> */}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Sri murugan pet industry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
