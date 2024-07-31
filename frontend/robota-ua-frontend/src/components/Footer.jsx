import React from 'react'
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube, 
    FaLinkedin, FaTelegram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { BsDiamondFill } from "react-icons/bs";
import RobotaHelper from './svgImages/robotaHelper';
import RobotaBudni from './svgImages/robotaBudni';
import TheNetwork from './svgImages/theNetwork';
import GrupaPracuj from './svgImages/groupaPracuj';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
        <div className="flex gap-32 px-14 mt-7 mb-5">
        <div className="flex flex-col gap-5">
            <div className="">
            <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 117 20" className="w-[170px]">
                    <path d="M32.664 7.27574C33.436 6.43879 34.3753 5.96249 35.6442 5.96249H36.202V8.99943C33.1775 8.99943 32.664 9.04419 32.664 10.1701V13.9625H29.7278V5.96249H32.664V7.27574ZM54.7875 5.811C57.1805 5.811 59.0449 7.12986 59.0449 9.9594C59.0449 12.7889 57.1805 14.1076 54.7875 14.1076C53.3099 14.1076 52.3332 13.388 51.8075 12.7181V13.9594H48.8714V4.16675H51.8075V7.20075C52.3332 6.53077 53.3099 5.811 54.7875 5.811ZM53.9509 11.4852C55.14 11.4852 55.9474 10.9519 55.9474 9.95938C55.9474 8.96684 55.14 8.43359 53.9509 8.43359C52.6296 8.43359 51.8074 8.96684 51.8074 9.95938C51.8074 10.9519 52.6296 11.4852 53.9509 11.4852ZM65.123 5.69263C67.9712 5.69263 70.2904 7.01091 70.2904 9.95914C70.2904 12.9371 67.9712 14.1667 65.123 14.1667C62.2745 14.1667 59.9552 12.9371 59.9552 9.95914C59.9552 7.01091 62.2745 5.69263 65.123 5.69263ZM65.1231 11.5447C66.3121 11.5447 67.1196 10.9818 67.1196 9.95915C67.1196 8.93673 66.3121 8.37384 65.1231 8.37384C63.8015 8.37384 62.9798 8.93673 62.9798 9.95915C62.9798 10.9818 63.8015 11.5447 65.1231 11.5447ZM42.423 5.69263C45.2711 5.69263 47.5904 7.01091 47.5904 9.95914C47.5904 12.9371 45.2711 14.1667 42.423 14.1667C39.5745 14.1667 37.2552 12.9371 37.2552 9.95914C37.2552 7.01091 39.5745 5.69263 42.423 5.69263ZM42.4229 11.5447C43.6119 11.5447 44.4194 10.9818 44.4194 9.95915C44.4194 8.93673 43.6119 8.37384 42.4229 8.37384C41.1014 8.37384 40.2796 8.93673 40.2796 9.95915C40.2796 10.9818 41.1014 11.5447 42.4229 11.5447ZM75.5166 4.1814V5.95922H78.3061V8.62589H75.5166V10.4039C75.5166 11.3519 76.8676 11.1743 78.3061 11.0999V13.9596C77.3224 14.1073 76.3096 14.1073 76.1336 14.1073C74.4155 14.1073 72.5806 13.337 72.5806 10.8481V8.62589H70.9658V5.95922H72.5806V4.1814H75.5166ZM86.6887 7.20073V5.95919H89.6248V13.9593H86.6887V12.718C86.1632 13.3878 85.1865 14.1076 83.7085 14.1076C81.3155 14.1076 79.4509 12.7889 79.4509 9.95938C79.4509 7.12984 81.3155 5.81097 83.7085 5.81097C85.1865 5.81097 86.1632 6.53075 86.6887 7.20073ZM84.5451 11.4852C85.8663 11.4852 86.6886 10.9519 86.6886 9.95938C86.6886 8.96684 85.8663 8.43359 84.5451 8.43359C83.3563 8.43359 82.5485 8.96684 82.5485 9.95938C82.5485 10.9519 83.3563 11.4852 84.5451 11.4852ZM113.73 5.97384H116.667V13.974H113.73V12.7328C113.205 13.4027 112.228 14.1222 110.75 14.1222C108.357 14.1222 106.493 12.8038 106.493 9.97403C106.493 7.14449 108.357 5.82562 110.75 5.82562C112.228 5.82562 113.205 6.5454 113.73 7.21538V5.97384ZM111.587 11.5002C112.909 11.5002 113.73 10.9666 113.73 9.97403C113.73 8.9816 112.909 8.44824 111.587 8.44824C110.398 8.44824 109.591 8.9816 109.591 9.97403C109.591 10.9666 110.398 11.5002 111.587 11.5002ZM92.6931 10.8924C93.8675 10.8924 94.5428 11.6634 94.5428 12.5076C94.5428 13.3522 93.8675 14.0929 92.6931 14.0929C91.5041 14.0929 90.8287 13.3522 90.8287 12.5076C90.8287 11.6634 91.5041 10.8924 92.6931 10.8924ZM102.133 9.27781V5.9592H105.069V13.9593H102.133V12.7044C101.629 13.371 100.601 14.1076 99.2992 14.1076C96.6863 14.1076 95.2476 12.7596 95.2476 10.0186V5.9592H98.1838V9.48532C98.1838 10.878 98.9324 11.1741 100.151 11.1741C101.384 11.1741 102.133 10.6704 102.133 9.27781Z" 
                    ></path>
                    <path d="M9.89898 7.31348V6H6.96295V14H9.89898V10.2076C9.89898 9.08146 10.4128 9.03717 13.4369 9.03717V6H12.8791C11.6103 6 10.6709 6.47665 9.89898 7.31348Z" 
                    ></path>
                    <path d="M0 10.0001C0 4.48504 4.44441 0 9.90939 0C15.3743 0 19.8186 4.48504 19.8186 10.0001C19.8186 15.5151 15.3743 20 9.90939 20C4.44441 20 0 15.5151 0 10.0001ZM1.98186 10.0001C1.98186 14.4103 5.53921 18 9.90944 18C14.2796 18 17.8367 14.4103 17.8367 10.0001C17.8367 5.58983 14.2796 1.99997 9.90944 1.99997C5.53921 1.99997 1.98186 5.58983 1.98186 10.0001Z" fill="#FF5252">
                    </path>
                </svg>
            </div>
            <div className="flex flex-col gap-3">
                <select className="border border-gray-400 rounded-md 
                h-[40px] w-full px-4" >
                    <option value="Українська">
                        Українська
                    </option>
                    <option value="російська">
                        російська
                    </option>
                </select>
                <small className="flex flex-row gap-1">
                    Дякуємо, що обрали українську
                    <Image src="/ukraine-flag.png" width={20}
                    height={20} 
                    className="rounded-sm"
                    />
                </small>
                <div className="flex flex-row gap-4">
                    <Link 
                    href="https://www.facebook.com/robotauaofficial"
                    target="_blank" 
                    className="hover:text-blue-600">
                        <FaFacebook size={22} />
                    </Link>
                    <Link 
                    href="https://www.instagram.com/robotaua_official/"
                    target="_blank">
                        <FaInstagram size={22} />
                    </Link>
                    <Link 
                    href="https://www.tiktok.com/@robotaua_official" 
                    target="_blank">
                        <AiFillTikTok size={22} />
                    </Link>
                    <Link 
                    href="https://www.youtube.com/@rabotaua/"
                    target="_blank" 
                    className="hover:text-red-600">
                        <FaYoutube size={22} />
                    </Link>
                    <Link 
                    href="https://www.linkedin.com/company/robota-ua/" 
                    target="_blank"
                    className="hover:text-blue-600">
                        <FaLinkedin size={22} />
                    </Link>
                    <Link 
                    href="https://t.me/budnirobotaua"
                    target="_blank"
                    className="hover:text-blue-500">
                        <FaTelegram size={22} />
                    </Link>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-3">
            <h5 className="font-bold">Пошукачу</h5>
            <Link href="/" 
            className="flex flex-row gap-1 text-sm 
            hover:text-red-500">
                <BsDiamondFill size={8} className="mt-1" />
                Знайти роботу
            </Link>
            <Link href="/" 
            className="flex flex-row gap-1 text-sm 
            hover:text-red-500">
                <BsDiamondFill size={8} className="mt-1" />
                Розмістити резюме
            </Link>
            <Link href="/" 
            className="flex flex-row gap-1 text-sm 
            hover:text-red-500">
                <BsDiamondFill size={8} className="mt-1" />
                Як скласти резюме
            </Link>
        </div>
        <div className="flex flex-col gap-3">
            <h5 className="font-bold">Роботодавцю</h5>
            <Link href="/" 
            className="flex flex-row gap-1 text-sm 
            hover:text-red-500" >
                <BsDiamondFill size={8} className="mt-1" />
                Додати вакансію
            </Link>
            <Link href="/"
            className="flex flex-row gap-1 text-sm 
            hover:text-red-500">
                <BsDiamondFill size={8} className="mt-1" />
                Знайти резюме
            </Link>
            <Link href="/"
            className="flex flex-row gap-1 text-sm 
            hover:text-red-500">
                <BsDiamondFill size={8} className="mt-1" />
                Наші послуги
            </Link>
        </div>
        <div className="flex flex-col gap-3">
            <h5 className="font-bold">robota.ua</h5>
            <Link href="/" 
            className="flex flex-row gap-1 text-sm 
            hover:text-red-500">
                <BsDiamondFill size={8} className="mt-1" />
                Про компанію
            </Link>
            <Link href="/" 
            className="flex flex-row gap-1 text-sm 
            hover:text-red-500">
                <BsDiamondFill size={8} className="mt-1" />
                Брендова документація
            </Link>
            <Link href="/" 
            className="flex flex-row gap-1 text-sm 
            hover:text-red-500">
                <BsDiamondFill size={8} className="mt-1" />
                Написати в техпідтримку
            </Link>
        </div>
        </div>
        <hr />
        <div className="flex flex-row gap-8 px-12 mt-4">
            <div className="text-[10px] flex flex-col gap-1 w-2/5">
                <small>
                    ТОВ "Робота Інтернешнл" &copy; 2024
                </small>
                <small>
                    Усі права захищені та охороняються 
                    діючим законодавством України. Використання 
                    матеріалів з даного сайту можливе тільки 
                    з письмового дозволу компанії ТОВ "Робота Інтернешнл". 
                    Адміністрація не несе відповідальності за 
                    зміст розміщених оголошень.
                </small>
                <div className="flex flex-row 
                mt-2 text-[10px] text-gray-500 
                gap-3 mb-7">
                <Link href="https://images.cf-rabota.com.ua/alliance/privacy_offer.pdf"
                target='_blank'>
                    Конфіденційність
                </Link>
                <BsDiamondFill size={5} className="mt-1.5" />
                <Link href="https://images.cf-rabota.com.ua/alliance/terms_of_use_seeker.pdf" 
                target='_blank'>
                    Умови користування
                </Link>
                <BsDiamondFill size={5} className="mt-1.5" />
                <Link href="https://images.cf-rabota.com.ua/alliance/public_offer_2022.pdf" 
                target='_blank'>
                    Договір публічної оферти
                </Link>
            </div>
            </div>
            <div className="flex flex-col gap-2">
                <Link className="mt-5" href="/">
                    <RobotaHelper />
                </Link>
                <small className="text-[8px]">
                    Помічник з управління рекрутингом
                </small>
            </div>
            <div className="flex flex-col gap-2">
                <Link className="mt-5" 
                href="https://budni.robota.ua/" target="_blank">
                    <RobotaBudni />
                </Link>
                <span className="text-[8px]">
                    Медіаплатформа про роботу та життя
                </span>
            </div>
            <div className="flex flex-col gap-2">
                <Link className="mt-5" 
                href="https://www.pracuj.pl/" target="_blank">
                   <GrupaPracuj />
                </Link>
                <small className="text-[8px]">
                    robota.ua входить в Grupa Pracuj
                </small>
            </div>
            <div className="flex flex-col gap-2">
                <Link className="mt-5" href="/">
                    <TheNetwork />
                </Link>
                <small className="text-[8px]">
                    robota.ua - учасник the Network
                </small>
            </div>
        </div>
    </>
    
  )
}

export default Footer
