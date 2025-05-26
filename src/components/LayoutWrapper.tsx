'use client'

import { usePathname } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

// Define valid routes
const validRoutes = ['/', '/product', '/contact']

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isValidRoute = validRoutes.includes(pathname)

  return (
    <>
      {isValidRoute && <Nav />}
      {children}
      {isValidRoute && <Footer />}
    </>
  )
}