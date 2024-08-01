import { topCities } from "@/dataStorage/topCityIntoCard"
import CityCard from "../shared/CityCard"

const CitiesContainer = () => {
  return (
    <div className="flex items-center justify-center mt-24">
        <div className="grid grid-cols-5 gap-4">
            {
            topCities.map((city) => (
                <div key={city.id} className="w-full"> 
                    <CityCard image={city.img} title={city.title} />
                </div>
            ))
      }
        </div>
    </div>
  )
}

export default CitiesContainer
