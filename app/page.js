import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h2>Welcome to home page</h2>
      <Link href="/blog" className="text-green-600">Blog</Link>
    </main>
  )
}
  