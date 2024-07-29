import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { TbSquareRotatedFilled } from "react-icons/tb";

const BottomHeader = () => {
  return (
    <div className="w-full h-full bg-red-500 
    justify-center text-4xl relative
    text-white font-bold pt-5">
      <h2 className="text-center mb-10">
        robota.ua - працює на тебе
      </h2>
      <Image src="/home-image.svg" 
      className="absolute -top-3"  
      width={180} height={180} />
      <div className="flex flex-row gap-0">
        <form className="px-7 w-full relative" method="get">
          <CiSearch className="absolute text-gray-600 top-4 left-8 
          font-bold" 
          size={24} />
          <input className="text-sm w-full h-14 outline-none
          px-8 font-light text-gray-600 border border-black 
          border-r-[0]" 
          placeholder="Ким або в якій компанії хочете працювати?" /> 
          <span className="absolute right-130 bg-white text-black
           text-sm font-normal h-14 border border-black border-l-[0]
           align-middle px-2 py-2 cursor-pointer right-7">
            <CiLocationOn size={24} className="text-gray-600 absolute mr-2 
            mt-2" />
            <p className="ml-7 mt-2.5 inline-block">Вся Україна</p>
            <FaAngleDown size={15} className="inline-block
             text-gray-600 ml-2" />
          </span>
        </form>
        <button type="submit" className="text-sm font-black
        mr-7 border-2 border-white rounded-md w-60 h-14 flex 
        text-center justify-center py-3.5 hover:bg-white
        hover:text-red-500">
            <CiSearch size={20} className="mr-2" />
            Знайти роботу
          </button>
      </div>
      <div className="flex flex-row gap-10 font-light 
      text-sm ml-52 mt-7 mb-5">
        <div className="">
          <p>
            <b className="font-bold">105 557 </b> актуальних вакансій від 
            <b className="font-bold"> 33 872 </b> компаній
          </p>
        </div>
        <div className="">
          <TbSquareRotatedFilled size={20} />
        </div>
        <div className="mb-7">
          <p>
            <b className="font-bold">
              5 511 503 </b> 
            кандидатів довірили 
            нам власне резюме
          </p>
        </div>
      </div>
    </div>
  )
}

export default BottomHeader
