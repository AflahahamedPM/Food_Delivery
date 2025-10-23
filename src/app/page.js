import FeaturedRestaurents from "@/components/home/FeaturedRestaurents";
import Herosection from "@/components/home/Herosection";
import TodaysPicks from "@/components/home/TodaysPicks";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Herosection />
      <TodaysPicks />
      <FeaturedRestaurents />
    </div>
  );
}
