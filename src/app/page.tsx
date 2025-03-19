import Footer from "@/components/Footer";
import AboutUs from "@/components/aboutUs-page";
import HeroPage from "@/components/hero-page";
import Seperation from "@/components/seperation";
import TrendingMemes from "@/components/trending-page";
import WhyChooseUs from "@/components/why-choose-us";

export default async function Home() {

  //const user = await currentUser();

  return (
    <div className="flex flex-col bg-amber-500">
      <HeroPage />
      <Seperation />
      <AboutUs />
      <TrendingMemes />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}
