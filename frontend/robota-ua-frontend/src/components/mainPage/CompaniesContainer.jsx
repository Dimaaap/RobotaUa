import Image from "next/image"
import Link from "next/link"
import { companiesLogos } from "../companiesLogos"

const CompaniesContainer = () => {
  return (
    <div className="px-12 mt-10 ml-20 mb-10 flex flex-wrap gap-6">
      {
        companiesLogos.map((company, index) => (
          <div className="w-1/6 mb-3">
            <Link href="/" className="">
              <Image key={index} src={company.logo} alt={company.title} 
              width={130} height={110} 
              className="max-w-44 max-h-24 hover:text-gray-200" />
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default CompaniesContainer
