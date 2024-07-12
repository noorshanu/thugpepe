import { FaFacebookF, FaDiscord, FaInstagram } from "react-icons/fa";

const Button = ({ children, className, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      className={`py-3 px-4 rounded-full bg-[rgba(255,255,255,.2)] text-sm transition-all duration-200 hover:bg-white hover:text-black hover:border-black border ${className}`}
    >
      {children}
    </a>
  );
};


function JoinCommunity() {
  return (
    <section className=" relative z-10 overflow-hidden" id="contact">
      {/* <div
        className="absolute top-[4rem] left-0 w-full h-full -z-20 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(white 2px, transparent 2px),linear-gradient(90deg, white 2px, transparent 2px)",
          backgroundSize: "3rem 3rem",
        }}
      ></div> */}
      {/* <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-transparent to-[#000000]"></div> */}

      <div className="container-wrapper">
        <div className=" flex items-center justify-center">
          <img
            src="/images/glass.png"
            className="w-full max-w-[24rem]  lg:mx-0 hidden sm:block mx-auto"
            alt=""
          />

    
        </div>

        <div className="flex flex-col  items-center justify-center mb-2 lg:mb-20 text-center lg:text-left space-y-6 lg:space-y-0">
          <h1 className="text-3xl sm:text-5xl lg:text-4xl font-bold  lh-1_4 stroke-black  font-coffee ">
            Follow Us <br />
         
          </h1>

          <p className=" text-center py-2">
          $PEPET is all about Hustle, Laugh, Profit! Join the Solana movement <br /> where humor, hustle, and thug life turn screw-ups into 1000x gains!
          </p>
          <div className="flex items-center -m-1 flex-wrap justify-center lg:justify-normal">
            <Button  link="https://www.dextools.io/app/en/solana/pair-explorer/9s2JPHp6bWhmZNX9vYigWDLZMTkfoye666Ks1ZAkLjYM?t=1720797678528" className="bg-[#000] border-2 p-2 border-[#8ff852] m-2">DexTools</Button>
            <Button link="https://x.com/ThugPepeSol" className="bg-[#000] border-2 p-2 border-[#8ff852] m-2">
              Twitter
            </Button>
            <Button link="https://t.me/Thugpepe" className="bg-[#000] border-2 p-2 border-[#8ff852] m-1 ">
              Telegram
            </Button>
            
          </div>
      
        </div>

     
      
      </div>
      <div className=" bg-[#fd7c00] py-4">
      

      <p className="text-center text-">
        All rights reserved by <strong className=" font-coffee text-xl">Thug PEPE </strong>2024
      </p>
    </div>
    </section>
  );
}

export default JoinCommunity;
