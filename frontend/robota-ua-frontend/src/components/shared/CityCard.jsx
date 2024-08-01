import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const CityCard = ({ image, title }) => {
  return (
    <div className="rounded-md">
      <Link href="/">
        <Image src={image} width={200} height={100}
          className="object-top" />
          <div className="text-center justify-center 
          py-1 bg-white font-bold h-[60px]">
            <span className="mt-3 inline-block">
              { title }
            </span>
          </div>
      </Link>
    </div>
  )
}

export default CityCard
