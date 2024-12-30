import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar"
import Search from "../components/Search";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";

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
              
              <div className="">
                  <SecondSection/>
        </div>
        
        <div className="">
          <ThirdSection/>
        </div>
      </div>
    </div>
  );
}

export default HomePage
