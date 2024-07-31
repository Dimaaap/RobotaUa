import BottomHeader from "@/components/BottomHeader";
import MainHeader from "@/components/MainHeader";
import BannerDefence from "@/components/mainPage/bannerDefence";
import CompaniesContainer from "@/components/mainPage/CompaniesContainer";
import MessangersBanner from "@/components/mainPage/MessangersBanner";
import PopularLocations from "@/components/mainPage/PopularLocations";
import PopularProfessions from "@/components/mainPage/PopularProfessions";

export default function Home() {
  return (
    <div className="w-full">
      <MainHeader />
      <BottomHeader />
      <BannerDefence />
      <CompaniesContainer />
      <MessangersBanner />
      <PopularProfessions />
      <PopularLocations />
      <hr />
    </div>
  );
}
