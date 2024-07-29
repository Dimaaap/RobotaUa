import Image from "next/image"
import Link from "next/link"
import { BsBoxArrowInUpRight } from "react-icons/bs";

const BannerDefence = () => {
  return (
    <div className="w-11/12 ml-12 px-5 py-4
    bg-[url('/home-drone-bg.png')] flex flex-row gap-5">
      <div className="flex flex-col gap-2">
        <h3 className="font-extrabold">
            Рекрутинг для захисту України
        </h3>
        <p className="">
            Обери свою службу вільно та конфіденційно. 
            Будуй кар'єру за своїми правилами!
        </p>
        <Link href="/" className="">
            Про проєкт 
            <BsBoxArrowInUpRight size={12} />
        </Link>
      </div>
      <div className="">
        <Image src="/home-drone.svg" className="ml-20" alt="" 
        width={300} height={200} />
      </div>
    </div>
  )
}

export default BannerDefence
