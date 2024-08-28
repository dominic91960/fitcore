import heroBg from "../../assets/Hero/hero-bg.png";

const data = [
  { mainTxt: "10+", subTxt: ["Years", "experience"] },
  { mainTxt: "5k", subTxt: ["Happy", "clients"] },
  { mainTxt: "4", subTxt: ["Professional", "trainers"] },
];

const Hero = () => {
  return (
    <section className="flex flex-col justify-center sm:h-[100vh] sm:min-h-[600px]">
      <div
        className="flex flex-grow flex-col items-center justify-center bg-cover bg-top bg-no-repeat px-[10vw] pt-[72px] md:px-[5vw]"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <h1 className="relative mt-12 flex w-full flex-col items-center justify-center">
          {/* <span
            className="absolute bottom-[72%] w-full text-center text-[40px] font-black uppercase text-transparent sm:-top-[38%] sm:bottom-[62%] sm:text-[78px] md:-top-[40%] md:text-[102px] lg:text-[138px] xl:text-[178px] 2xl:text-[212px]"
            style={{
              fontFamily: "Raleway",
              WebkitTextStroke: "calc(1em / 38) #FFFD01",
            }}
          > */}
          <span
            className="absolute bottom-[72%] w-full text-center text-[40px] font-black uppercase text-transparent sm:bottom-[45%] sm:text-[78px] md:bottom-[42%] md:text-[102px] lg:bottom-[38%] lg:text-[138px] xl:bottom-[34%] xl:text-[178px] 2xl:bottom-[31%] 2xl:text-[212px]"
            style={{
              fontFamily: "Raleway",
              WebkitTextStroke: "calc(1em / 38) #FFFD01",
            }}
          >
            You fitness
          </span>
          <span className="z-10 text-center text-[30px] font-bold uppercase leading-none sm:text-[38px] md:text-[50px] lg:text-[70px] xl:text-[90px] 2xl:text-[106px]">
            Begin your <br /> fitness journey
          </span>
          <button className="mx-auto my-3 w-fit bg-primary px-2 py-1 text-[10px] font-extrabold uppercase text-black md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            Register now
          </button>
        </h1>
      </div>
      <div className="flex w-full bg-black">
        {data.map(({ mainTxt, subTxt }, i) => (
          <article
            key={i}
            className={`my-4 flex w-1/3 justify-center py-4 ${i === 1 && "border-x"}`}
          >
            <figure className="w-fit">
              <h3 className="text-2xl font-semibold text-primary sm:text-4xl lg:text-5xl 2xl:text-6xl">
                {mainTxt}
              </h3>
              <figcaption className="w-fit text-[9px] font-semibold uppercase sm:text-[12px] lg:text-[16px] 2xl:text-[20px]">
                {subTxt[0]} <br /> {subTxt[1]}
              </figcaption>
            </figure>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Hero;
