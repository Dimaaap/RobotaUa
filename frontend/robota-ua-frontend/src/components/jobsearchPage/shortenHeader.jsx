import Link  from "next/link";
import Image from "next/image";
import { BiSolidLike } from "react-icons/bi";
import { MdVpnKey } from "react-icons/md";
import { CiSearch, CiLocationOn } from "react-icons/ci"
import { FaAngleDown } from "react-icons/fa6"



const ShortenHeader = () => {
  return (
    <div className="flex flex-col">
        <div className="w-full h-full px-8 mx-auto 
        bg-red-500 flex flex-row justify-between text-center 
        gap-x-80">
        <div className="flex flex-row gap-10">
            <Link href="/" className="flex flex-row gap-2 py-5">
                <span className="">
                <Image src="https://images.cf-rabota.com.ua/2019/08/logo-white.svg" 
                    alt="robota-ua-logo" width={130} height={55} 
                    />  
                </span>
                <span>
                    <Image src="/ukraine-flag.png" alt="Ukrainian flag" 
                    width={15} height={8} 
                    className="mt-1.5"/>
                </span>
            </Link>
            <Link href="/" className="flex flex-row gap-1
            text-white font-bold px-2 hover:bg-red-600 py-5 
            align-middle ease-in duration-500">
                <BiSolidLike size={20} className="mt-0.5"/>
                Рекомендовані
            </Link>
            <Link href="/" className="border-2 border-white rounded-md 
            text-white font-bold h-[46px] mt-2 px-4 py-1.5 hover:bg-white 
            hover:text-red-500 ease-in duration-500">
                Створити резюме
            </Link>
        </div>
        <div className="flex flex-row gap-5">
            <Link href="/" className="px-7 py-5 hover:bg-red-600 flex flex-row gap-1 
            ease-in duration-500">
                <span className="text-white inline-block w-1/2
                ">
                <MdVpnKey size={20} />
                </span>
                <span className="text-white font-semibold inline-block">
                Увійти
                </span>
            </Link>
        </div>
        </div>
        <div className="flex flex-row bg-red-500">
            <form className="px-7 w-full relative mb-5" method="get">
            <CiSearch className="absolute text-gray-600 top-2 left-8 
            font-bold" 
            size={24} />
            <input className="text-sm w-full h-10 
            outline-none
            px-8 font-normal text-gray-700 border border-black 
            border-r-[0]"
            placeholder="Пошук за професією, компанією чи містом" /> 
            <span className="absolute right-130 bg-white text-black
            text-sm font-normal h-[40px] border border-black border-l-[0] px-1
            align-middle cursor-pointer right-7">
                <CiLocationOn size={24} className="text-gray-600 absolute mr-2
                mt-[7px]" />
                <p className="ml-7 mt-[10px] inline-block">Вся Україна</p>
                <FaAngleDown size={15} className="inline-block
                text-gray-600 ml-2" />
            </span>
            </form>
            <button className="border-2 border-white mr-5 
            px-3 py-1 h-[40px] rounded-md text-white font-bold 
            -ml-1 hover:bg-white hover:text-red-500 ease-in duration-200">
                <CiSearch size={20} />
            </button>
        </div>
    </div>
  )
}

export default ShortenHeader
