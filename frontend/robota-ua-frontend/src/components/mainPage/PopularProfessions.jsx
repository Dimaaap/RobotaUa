import React from 'react'
import PopularBadge from '../shared/PopularBadge'
import Link from 'next/link'
import { topProfessions } from '@/dataStorage/topProfessions'

const PopularProfessions = () => {
  return (
    <div className="px-14 w-full mb-5">
      <div className="flex justify-between">
        <h2 className="font-extrabold text-2xl 
        mb-5">
            Популярні професії
        </h2>
        <Link className="flex text-red-500 font-bold 
        cursor-pointer hover:text-red-700" 
        href="/">
            Популярні професії
        </Link>
      </div>
      <div className="flex gap-2">
        {
            topProfessions.map(profession => (
                <PopularBadge text={profession.title} 
                href={profession.href} key={profession.id} />
            ))
        }
      </div>
    </div>
  )
}

export default PopularProfessions
