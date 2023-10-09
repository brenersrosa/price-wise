import Image from 'next/image'
import Link from 'next/link'
import { Heart, Search, User } from 'lucide-react'

export function Navbar() {
  return (
    <header className="w-full">
      <nav className="flex items-center justify-between px-6 py-4 md:px-20">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/icons/logo.svg"
            width={27}
            height={27}
            alt="Logo Price Wise"
          />

          <p className="font-semibold text-foreground">
            Price<span className="font-bold text-primary">Wise</span>
          </p>
        </Link>

        <div className="flex items-center gap-5">
          <Search className="h-6 w-6 text-foreground" />
          <Heart className="h-6 w-6 text-foreground" />
          <User className="h-6 w-6 text-foreground" />
        </div>
      </nav>
    </header>
  )
}
