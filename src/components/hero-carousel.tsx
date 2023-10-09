'use client'

import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

const heroImages = [
  { imgUrl: '/assets/images/hero-1.svg', alt: 'smart watch' },
  { imgUrl: '/assets/images/hero-2.svg', alt: 'bag' },
  { imgUrl: '/assets/images/hero-3.svg', alt: 'lamp' },
  { imgUrl: '/assets/images/hero-4.svg', alt: 'air fryer' },
  { imgUrl: '/assets/images/hero-5.svg', alt: 'chair' },
]

export function HeroCarousel() {
  return (
    <div className="relative h-[700px] w-full max-w-[560px] rounded bg-secondary py-5 pb-5 sm:mx-auto sm:px-10 sm:pt-20">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}
      >
        {heroImages.map((image, i) => (
          <Image
            key={`${i}_${image.alt}`}
            src={image.imgUrl}
            alt={image.alt}
            height={484}
            width={484}
            className="object-contain"
          />
        ))}
      </Carousel>

      <Image
        src="/assets/icons/hand-drawn-arrow.svg"
        alt="arrow"
        height={175}
        width={175}
        className="absolute -left-[15%] bottom-0 max-xl:hidden"
      />
    </div>
  )
}
