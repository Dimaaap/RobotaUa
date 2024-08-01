import React from 'react'
import Link from "next/link"
import { topCities } from '@/dataStorage/topSities'
import PopularBadge from '../shared/PopularBadge'

const PopularLocations = () => {
  return (
    <div className="px-14 w-full mb-8">
      <div className="flex justify-between">
        <h2 className="font-extrabold text-2xl mb-5">
            Популярні міста
        </h2>
        <Link className="flex text-red-500 font-bold 
        cursor-pointer hover:text-red-700" href="jobsearch/cities">
            Подивитись всі міста
        </Link>
      </div>
      <div className="flex gap-2">
        {
            topCities.map(
                city => (
                    <PopularBadge 
                    text={city.title} 
                    href={city.href}
                    key={city.id} />
                )
            )
        }
      </div>
    </div>
  )
}

export default PopularLocations
