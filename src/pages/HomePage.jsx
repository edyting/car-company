import BuyYourCar from "../components/BuyYourCar";
import BuyYourCarSection from "../components/BuyYourCarSection";
import CarListing from "../components/CarListing";
import Collaborators from "../components/Collaborators";
import Forth from "../components/Forth";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar"
import News from "../components/News";
import Search from "../components/Search";
import SecondSection from "../components/SecondSection";
import TestimonialSection from "../components/TestimonialSection";
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
          <BuyYourCarSection/>
        </div>

        <div className="">
          <TestimonialSection/>
        </div>
        <div className="">
          <Collaborators/>
        </div>
        <div className="">
          <News/>
        </div>
      </div>
    </div>
  );
}

export default HomePage
