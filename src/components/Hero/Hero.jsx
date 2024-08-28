import heroBg from "../../assets/Hero/hero-bg.png";
import Button from "./Button";

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
          <span
            className="absolute -top-[25%] w-full text-center text-[38px] font-black uppercase text-transparent sm:-top-[38%] sm:text-[78px] md:-top-[40%] md:text-[102px] lg:text-[138px] xl:text-[178px] 2xl:text-[212px]"
            style={{
              fontFamily: "Raleway",
              WebkitTextStroke: "calc(1em / 38) #FFFD01",
            }}
          >
            You fitness
          </span>
          <span className="z-10 text-center text-[30px] font-bold uppercase leading-none sm:text-[38px] md:text-[50px] lg:text-[70px] xl:text-[96px] 2xl:text-[114px]">
            Begin your <br /> fitness journey
          </span>
          <Button
            content="Register now"
            style={{
              textTransform: "uppercase",
              fontWeight: "800",
              padding: "4px 8px",
              margin: "12px 0px",
            }}
          />
        </h1>
      </div>
      <div className="flex w-full bg-black">
        {data.map(({ mainTxt, subTxt }, i) => (
          <article
            className={`my-4 flex w-1/3 justify-center py-4 ${i === 1 && "border-x"}`}
          >
            <figure className="w-fit">
              <h3 className="text-3xl font-semibold text-primary sm:text-4xl lg:text-5xl 2xl:text-6xl">
                {mainTxt}
              </h3>
              <figcaption className="w-fit text-[10px] font-bold uppercase sm:text-[12px] lg:text-[16px] 2xl:text-[20px]">
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
