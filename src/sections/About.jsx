import Title from "components/Title";

function About() {
  return (

    <>

    <img src="images/wave.svg" alt="" className=" w-full h-[45px]" />
      <section className="mx-8 rounded-b-2xl py-12" id="about">
      <div className="container-wrapper grid lg:grid-cols-2 gap-10 ">
        <div>
          <img
            src="/images/about.jpeg"
            className=" rounded-3xl h-auto sm:h-[400px] w-auto"
            alt=""
          />
        </div>

        <div>
          <Title className="lh-1_5 mb-3  py-2 stroke-black  font-bold font-coffee text-[#000000]">About Us</Title>

          <p className=" text-2xl font-medium text-black ">
          Thug Pepe - $PEPET on Solana is fueled by humor and brotherhood, we hustle in the Solana meme world, aiming for lambo and gangsta gains. Roll with meme wizards and crypto fanatics, embracing the tough love of the internet: resilience, comedy, and trolling.
          </p>
        </div>
      </div>
    </section>
    </>
  
  );
}

export default About;
