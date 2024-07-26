import Image from "next/image";
import Link from "next/link";

const MainHeader = () => {
  return (
    <div className="w-full h-full py-8 px-8 mx-auto bg-red-500 flex flex-row 
    justify-flex-between text-center gap-x-80">
      <div className="">
        <Link href="/" className="flex flex-row gap-2">
            <span className="">
              <Image src="https://images.cf-rabota.com.ua/2019/08/logo-white.svg" 
                alt="robota-ua-logo" width={150} height={75} 
                />  
            </span>
            <span>
                <Image src="/ukraine-flag.png" alt="Ukrainian flag" 
                width={20} height={10} 
                className="mt-1.5"/>
            </span>
        </Link>
      </div>
      <div className="flex flex-row border-solid border
    border-red-600 text-white rounded-md
    text-sm w-64">
        <div className="bg-red-600 px-2 py-1 
        w-1/2 cursor-pointer">
            Пошукачу
        </div>
        <div className="bg-red-500 px-4 py-1 
        text-center w-1/2 cursor-pointer hover:bg-white
        hover:text-red-500 ease-in duration-300">
            Роботодавцю
        </div>
      </div>
    </div>
  )
}

export default MainHeader
