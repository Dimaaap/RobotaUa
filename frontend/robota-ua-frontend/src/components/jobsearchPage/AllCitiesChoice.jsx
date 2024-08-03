"use client";

import Link from 'next/link'
import React, { useState } from 'react'

const AllCitiesChoice = () => {

  const [filter, setFilter] = useState("cities");

  return (
    <div className="bg-white rounded-md w-[85%] mt-12 
    px-12 ml-24 py-12">
        <div className="flex gap-2">
            <Link href="/jobsearch/cities" 
            className={`${filter === "cities" ? "bg-gray-200 text-black" : 
            "bg-transparent text-red-500"} px-2 py-1 rounded-md`} 
            onClick={() => setFilter("cities")}>
              Міста
            </Link>
            <Link href="/"
            className={`${filter === "regions" ? "bg-gray-200 text-black" : 
              "bg-transparent text-red-500"} px-2 py-1 rounded-md`} 
              onClick={() => setFilter("regions")}>
                Області
            </Link>
        </div>
    </div>
  )
}

export default AllCitiesChoice
