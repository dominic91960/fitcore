import img from "../../assets/Home/Contact/img.png";

const data = [
  "Your Strength, Our Priority. FitCore provides premium gear to fuel your fitness journey.",
  "Train Hard, Stay Strong. Discover top-quality apparel and equipment at FitCore.",
  "Where Fitness Meets Lifestyle. FitCore offers everything you need to achieve your goals.",
  "Empowering Your Workout. FitCore delivers gear that helps you perform your best.",
];

const Contact = () => {
  return (
    <section className="bg-gradient-to-r from-secondary to-[#666666] px-[10vw] py-6 md:px-[5vw] md:py-0">
      <h2 className="text-center text-[22px] font-bold uppercase md:hidden">
        Welcome to <span className="text-primary">fitcore</span>
      </h2>
      <figure className="flex flex-col items-center md:flex-row-reverse md:items-stretch md:pt-6">
        {/* Image */}
        <div className="relative mx-auto my-4 flex w-[90%] justify-center md:my-0 md:w-[65%] md:items-end">
          <img src={img} alt="A bodybuilder" className="z-10 h-fit" />
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
          {data.map((e, i) => (
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
  );
};

export default Contact;
