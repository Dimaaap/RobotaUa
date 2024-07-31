import Link from 'next/link'
import React from 'react'

const PopularBadge = ({ text, href }) => {
  return (
    <Link href={href} className="border 
    border-gray-200 rounded-md px-4 py-2 
    hover:bg-gray-200">
        {text}
    </Link>
  )
}

export default PopularBadge
