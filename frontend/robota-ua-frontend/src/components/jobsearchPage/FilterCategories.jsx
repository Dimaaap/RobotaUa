"use client";

import { useEffect, useState } from 'react'
import Link from "next/link"
import { usePathname } from 'next/navigation'

const FilterCategories = () => {

    const router = usePathname();
    const [activeId, setActiveId] = useState(null);

    useEffect(() => {
        const lastPart = router.split("/").pop();
        setActiveId(lastPart);
    }, [router])
 
  return (
    <div className="flex flex-row border
    border-b-gray-300 font-normal bg-white">
        <Link href="/" className={`px-28 py-5
        hover:text-red-500 
        ${activeId === "rubrics" ? 'border-b-2 border-red-500 text-red-500' : ''}`} 
        id="rubrics">
            За рубриками
        </Link>
        <Link href="/" className={`px-28 py-5
        hover:text-red-500 
        ${activeId === "professions" ? "border-b-2 border-red-500 text-red-500": ""}`} 
        id="professions">
            За професіями
        </Link>
        <Link href="jobsearch/cities" 
        className={`px-28 py-5 hover:text-red-500 
            ${activeId == "cities" ? "border-b-2 border-red-500 text-red-500": ""}`} 
        id="cities">
            По містах
        </Link>
        <Link href="/" className={`px-28 py-5 
        hover:text-red-500 
        ${activeId === "companies" ? "border-b-2 border-red-500 text-red-500": ""}`} 
        id="companies">
            По компаніях
        </Link>
    </div>
  )
}

export default FilterCategories
