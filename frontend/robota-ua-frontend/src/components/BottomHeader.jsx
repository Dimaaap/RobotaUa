import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { TbSquareRotatedFilled } from "react-icons/tb";
import SearchVacancyForm from "./shared/SearchVacancyForm";
import FindJobBtn from "./shared/FindJobBtn";

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
        <SearchVacancyForm />
        <FindJobBtn />
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
