import CitiesContainer from "@/components/jobsearchPage/CitiesContainer"
import FilterCategories from "@/components/jobsearchPage/FilterCategories"
import ShortenHeader from "@/components/jobsearchPage/shortenHeader"
import AllCitiesChoice from "@/components/jobsearchPage/AllCitiesChoice"
import CitiesByTitle from "@/components/jobsearchPage/CitiesByTitle"

export default function Home() {
    return(
        <div className="w-full">
          <ShortenHeader />
          <div className="bg-gray-200">
            <FilterCategories /> 
            <CitiesContainer />
            <AllCitiesChoice />
            <CitiesByTitle />
          </div>
        </div>
    )
}