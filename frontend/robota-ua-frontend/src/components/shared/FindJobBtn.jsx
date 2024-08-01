import React from 'react'
import { CiSearch } from 'react-icons/ci'

const FindJobBtn = () => {
  return (
    <button type="submit" className="text-sm font-black
        mr-7 border-2 border-white rounded-md w-60 h-14 flex 
        text-center justify-center py-3.5 hover:bg-white
        hover:text-red-500">
            <CiSearch size={20} className="mr-2" />
            Знайти роботу
        </button>
  )
}

export default FindJobBtn
