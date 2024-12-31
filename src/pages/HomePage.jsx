import BuyYourCar from "../components/BuyYourCar";
import CarListing from "../components/CarListing";
import Forth from "../components/Forth";
import HeroSection from "../components/HeroSection";
import HowToBuy from "../components/HowToBuy";
import Navbar from "../components/Navbar"
import Search from "../components/Search";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";
import WhyChooseUS from "../components/WhyChooseUS";

const HomePage = () => {
  return (
    <div>
      <div className="conatiner">
        <div className="">
          <Navbar />
        </div>
        <div className="">
          <HeroSection />
        </div>

        <div className="">
          <Search />
        </div>
        {/* second section is just a white space */}
        <div className="">
          <SecondSection />
        </div>

        <div className="">
          <ThirdSection />
        </div>

        <div className="">
          <Forth />
        </div>

        <div className="">
          <WhyChooseUS />
        </div>

        <div className="">
          <BuyYourCar />
        </div>

        <div className="">
          <CarListing />
        </div>

        <div className="">
          <HowToBuy />
        </div>
      </div>
    </div>
  );
}

export default HomePage
