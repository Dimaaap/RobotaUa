import Link from "next/link"
import Image from "next/image";
import { FaViber } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const MessangersBanner = () => {
  return (
    <div className="flex flex-row bg-gray-100 
    relative w-11/12 m-auto px-5 py-3 gap-10 mb-7">
      <div className="flex flex-col">
        <h2 className="font-extrabold text-xl mb-3">
            Свіжі вакансії миттєво з'являються в 
            месенджерах!
        </h2>
        <div className="flex flex-row gap-3">
            <Link href="/" className="flex flex-row gap-1 
            bg-transparent border-2 border-purple-600 px-4 
            py-3 rounded-md font-bold text-purple-600 
            hover:text-white hover:bg-purple-600">
            <FaViber size={20} className="" />
            Отримувати в Viber
        </Link>
        <Link href="/" 
        className="flex flex-row gap-1 bg-transparent 
        border-2 border-blue-400 px-4 py-3 rounded-md 
        font-bold text-blue-400 
        hover:text-white hover:bg-blue-400">
            <FaTelegram size={20} className="" />
            Отримувати в Telegram
        </Link>
        </div>
        
      </div>
      <div className="-right-3 -top-7 absolute">
        <Image src="/home-social-desktop.png" alt="" 
        width={200} height={170}/>
      </div>
    </div>
  )
}

export default MessangersBanner
