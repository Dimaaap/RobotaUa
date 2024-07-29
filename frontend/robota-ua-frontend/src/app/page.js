import BottomHeader from "@/components/BottomHeader";
import MainHeader from "@/components/MainHeader";
import BannerDefence from "@/components/mainPage/bannerDefence";

export default function Home() {
  return (
    <div className="w-full">
      <MainHeader />
      <BottomHeader />
      <BannerDefence />
    </div>
  );
}
