import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Navbar } from '@/components/navbar'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Price Wise',
  description:
    'Track product prices effortlessly and save money on your online shopping.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-background ${inter.className}`}>
        <main className="max-w-10xl mx-auto">
          <Navbar />
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  )
}
