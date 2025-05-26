// app/not-found.tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-white text-slate-800 px-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-6">Sorry, the page you&#39;re looking for doesn&#39;t exist.</p>
      <Link href="/">
        <span className="px-6 py-2 bg-slate-800 text-white rounded hover:bg-slate-700 cursor-pointer">
          Go Back Home
        </span>
      </Link>
    </div>
  )
}
