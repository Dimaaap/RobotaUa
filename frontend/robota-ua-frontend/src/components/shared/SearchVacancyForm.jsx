import { CiSearch, CiLocationOn } from "react-icons/ci"
import { FaAngleDown } from "react-icons/fa6"

const SearchVacancyForm = ({ height, placeholder }) => {
  return (
    <form className="px-7 w-full relative" method="get">
          <CiSearch className="absolute text-gray-600 top-4 left-8 
          font-bold" 
          size={24} />
          <input className="text-sm w-full h-14 
          outline-none
          px-8 font-normal text-gray-700 border border-black 
          border-r-[0]"
          placeholder={ placeholder ? placeholder : "Ким або в якій компанії хочете працювати?" } /> 
          <span className="absolute right-130 bg-white text-black
           text-sm font-normal h-[55px] border border-black border-l-[0]
           border-t-[0] border-b-[0]
           align-middle px-2 mt-[1px] cursor-pointer right-7">
            <CiLocationOn size={24} className="text-gray-600 absolute mr-2 
            mt-[15px]" />
            <p className="ml-7 mt-[17px] inline-block">Вся Україна</p>
            <FaAngleDown size={15} className="inline-block
             text-gray-600 ml-2" />
          </span>
        </form>
  )
}

export default SearchVacancyForm
