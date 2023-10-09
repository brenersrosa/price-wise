import { ArrowRight } from 'lucide-react'

import { Searchbar } from '@/components/searchbar'
import { HeroCarousel } from '@/components/hero-carousel'

export default function Home() {
  return (
    <>
      <section className="px-6 py-24 md:px-20">
        <div className="flex gap-16 max-xl:flex-col">
          <div className="flex flex-col justify-center">
            <p className="flex gap-2 text-sm font-medium text-primary">
              Smart Shopping Starts Here:
              <ArrowRight className="h-4 w-4" />
            </p>
            <h1 className="mt-4 text-6xl font-bold leading-[72px] tracking-[-1.2px] text-foreground">
              Unleash the Power of
              <span className="text-primary"> PriceWise</span>
            </h1>
            <p className="mt-6 text-muted-foreground">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more.
            </p>

            <Searchbar />
          </div>

          <HeroCarousel />
        </div>
      </section>
    </>
  )
}
