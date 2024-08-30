import { Link } from "react-router-dom";

import PlanItem from "../components/PlanItem";

import heroBg from "../assets/images/Home/hero-bg.png";
import welcomeImg from "../assets/images/Home/welcome-img.png";
import processBg from "../assets/images/Home/processBg.png";
import connect from "../assets/images/Home/connect.png";
import choose from "../assets/images/Home/choose.png";
import schedule from "../assets/images/Home/schedule.png";
import change from "../assets/images/Home/change.png";
import standardItem from "../assets/images/Home/standardItem.png";
import premiumItem from "../assets/images/Home/premiumItem.png";
import platinumItem from "../assets/images/Home/platinumItem.png";

const heroData = [
  { mainTxt: "10+", subTxt: ["Years", "experience"] },
  { mainTxt: "5k", subTxt: ["Happy", "clients"] },
  { mainTxt: "4", subTxt: ["Professional", "trainers"] },
];

const welcomeData = [
  "Your Strength, Our Priority. FitCore provides premium gear to fuel your fitness journey.",
  "Train Hard, Stay Strong. Discover top-quality apparel and equipment at FitCore.",
  "Where Fitness Meets Lifestyle. FitCore offers everything you need to achieve your goals.",
  "Empowering Your Workout. FitCore delivers gear that helps you perform your best.",
];

const processData = [
  { img: connect, txt: "Connect with us" },
  { img: choose, txt: "Choose your plan" },
  { img: schedule, txt: "Schedule exercise" },
  { img: change, txt: "Change your body" },
];

const pricingData = [
  {
    image: standardItem,
    title: "Standard",
    price: "$35",
    features: ["true", "true", "false", "false"],
  },
  {
    image: premiumItem,
    title: "Premium",
    price: "$40",
    features: ["true", "true", "true", "false"],
  },
  {
    image: platinumItem,
    title: "Platinum",
    price: "$50",
    features: ["true", "true", "true", "true"],
  },
];

const Home = () => {
  return (
    <>
      {/* -------- -------- HERO SECTION -------- -------- */}
      <section className="flex flex-col justify-center sm:h-[100vh] sm:min-h-[600px]">
        <div
          className="flex flex-grow flex-col items-center justify-center bg-cover bg-top bg-no-repeat px-[10vw] pt-[72px] md:px-[5vw]"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <h1 className="relative mt-12 flex w-full flex-col items-center justify-center">
            <span
              className="absolute bottom-[72%] w-full text-center text-[40px] font-black uppercase text-transparent sm:bottom-[45%] sm:text-[78px] md:bottom-[42%] md:text-[102px] lg:bottom-[38%] lg:text-[138px] xl:bottom-[34%] xl:text-[176px] 2xl:bottom-[31%] 2xl:text-[212px]"
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
              <Link to="/register">Register now</Link>
            </button>
          </h1>
        </div>
        <div className="flex w-full">
          {heroData.map(({ mainTxt, subTxt }, i) => (
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
      {/* -------- -------- WELCOME SECTION -------- -------- */}
      <section className="bg-gradient-to-r from-secondary to-[#666666] px-[10vw] py-6 md:px-[5vw] md:py-0">
        <h2 className="text-center text-[22px] font-bold uppercase md:hidden">
          Welcome to <span className="text-primary">fitcore</span>
        </h2>
        <figure className="flex flex-col items-center md:flex-row-reverse md:items-stretch md:pt-6">
          {/* Image */}
          <div className="relative mx-auto my-4 flex w-[90%] justify-center md:my-0 md:w-[65%] md:items-end">
            <img src={welcomeImg} alt="A bodybuilder" className="z-10 h-fit" />
            <div className="absolute h-full w-[80%] border-4 border-b-0 border-[#04D9FF] md:top-0 md:h-[90%] md:w-[87%] md:border-b-4"></div>
            <div className="absolute z-10 h-full w-[80%] border-b-4 border-[#04D9FF] md:hidden"></div>
          </div>
          {/* Text area */}
          <figcaption className="flex flex-col self-center text-center md:mb-6 md:w-[35%] md:text-left">
            <h2 className="hidden text-center text-[22px] font-bold uppercase md:block md:text-left md:text-[19px] lg:text-[26px] xl:text-[33px] 2xl:text-[39px]">
              Welcome to <span className="text-primary">fitcore</span>
            </h2>
            <h3 className="text-xs font-semibold capitalize text-[#7C736E] md:my-[1em] md:text-[9px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px]">
              Meet your <span className="uppercase">coach</span>
            </h3>
            {welcomeData.map((e, i) => (
              <p
                key={i}
                className="my-[0.6em] w-[34ch] text-xs leading-normal md:w-full md:text-[9px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px]"
              >
                {e}
              </p>
            ))}
            <button className="mx-auto my-3 w-fit bg-primary px-[0.8em] py-[0.5em] text-[11px] font-extrabold uppercase text-black md:mb-0 md:mt-[1.8em] md:text-[8px] lg:text-[11px] xl:text-[14px] 2xl:text-[17px]">
              Contact with us
            </button>
          </figcaption>
        </figure>
      </section>
      {/* -------- -------- PRICING SECTION -------- -------- */}
      <section
        id="pricing"
        className="px-[10vw] pb-12 text-center sm:py-8 md:px-[5vw]"
      >
        <h2 className="mt-4 text-[14px] font-semibold uppercase text-primary md:text-[16px] lg:text-[18px]">
          Pricing plan
        </h2>
        <h3 className="mt-2 text-[18px] font-semibold capitalize md:text-[24px] lg:text-[30px]">
          Choose your best plan
        </h3>
        <menu className="flex flex-col items-center justify-center sm:my-[5%] sm:flex-row sm:gap-[5%]">
          {pricingData.map(({ image, title, price, features }, i) => (
            <PlanItem
              key={i}
              image={image}
              title={title}
              price={price}
              features={features}
            />
          ))}
        </menu>
      </section>
      {/* -------- -------- PROCESS SECTION -------- -------- */}
      <section
        className="bg-cover bg-center px-[10vw] text-center md:px-[5vw]"
        style={{ backgroundImage: `url(${processBg})` }}
      >
        <h2 className="pt-[0.8em] text-[22px] font-bold uppercase md:pt-[1.8em] lg:text-[29px] xl:text-[37px] 2xl:text-[43px]">
          Our <span className="text-primary">working process</span>
        </h2>
        <p className="mx-auto mt-[0.5em] max-w-[48ch] text-[9px] sm:max-w-[70ch] lg:text-[12px] xl:text-[15px] 2xl:text-[18px]">
          Enjoy the freedom to train at your own pace with full access to our
          state-of-the-art equipment and facilities.
        </p>
        <menu className="mx-auto grid max-w-screen-xl grid-cols-2 grid-rows-2 gap-y-10 py-10 md:grid-cols-4 md:grid-rows-1 md:pb-[10%] md:pt-[7%]">
          {processData.map(({ img, txt }, i) => (
            <figure key={i}>
              <img
                src={img}
                alt="Connect with us"
                className="mx-auto w-[50%] md:w-full"
              />
              <figcaption className="mt-4 flex items-center justify-center gap-[0.3em]">
                <p className="flex size-[0px] items-center justify-center rounded-full bg-white p-[0.7em] text-[13px] font-bold text-black lg:text-[16px] xl:text-[19px] 2xl:text-[22px]">
                  {i + 1}
                </p>
                <p className="text-[11px] font-semibold capitalize lg:text-[14px] xl:text-[17px] 2xl:text-[20px]">
                  {txt}
                </p>
              </figcaption>
            </figure>
          ))}
        </menu>
      </section>
    </>
  );
};

export default Home;
