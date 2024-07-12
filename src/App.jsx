import Navbar from "components/Navbar";
import About from "sections/About";
import BackedBy from "sections/BackedBy";
import FeaturedOn from "sections/FeaturedOn";
import Get from "sections/Get";
import Hero from "sections/Hero";
import JoinCommunity from "sections/JoinCommunity";
import Mission from "sections/Mission";
import Product from "sections/Product";
import Roadmap from "sections/Roadmap";
import Tokenomics from "sections/Tokenomics";

function App() {
  return (
    <div className="flex flex-col relative z-10">
        <div className=" w-full z-20">
            <Navbar />
          </div>

      <main className="flex-1">
        <div className="relative z-10">
        

          <div className="">
            <Hero />
          </div>
        </div>

        <div className="mb-20" id="about">
          <About />
        </div>

        <div className="mb-14 lg:mb-20" id="tokenomics">
          <Tokenomics />
        </div>
        <div className="mb-14 lg:mb-20" id="tokenomics">
         <Product/>
        </div>
        <div>
          {/* <Mission/> */}
        </div>
        <img
          src="/images/white-strip.svg"
          className="w-full scale-x-[1.2] -mb-12"
          alt=""
        />

        <div id="roadmap ">
          <Roadmap />
        </div>

        {/* <div className="mb-20">
          <Get />
        </div> */}

        {/* <div>
          <BackedBy />
        </div> */}

        {/* <img
          src="/images/star.png"
          className="h-[10rem] lg:h-[12rem] mt-[-1.4rem] lg:mt-[-2.4rem] mb-[-1.4rem] lg:mb-[-2.4rem] w-full object-contain z-[60] relative pointer-events-none select-none"
          alt=""
        /> */}

     
      </main>

      <div id="contact">
        <JoinCommunity />
      </div>
    </div>
  );
}

export default App;
