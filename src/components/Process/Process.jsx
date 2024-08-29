import processBg from "../../assets/Home/Process/processBg.png";
import connect from "../../assets/Home/Process/connect.png";
import choose from "../../assets/Home/Process/choose.png";
import schedule from "../../assets/Home/Process/schedule.png";
import change from "../../assets/Home/Process/change.png";

const data = [
  { img: connect, txt: "Connect with us" },
  { img: choose, txt: "Choose your plan" },
  { img: schedule, txt: "Schedule exercise" },
  { img: change, txt: "Change your body" },
];

const Process = () => {
  return (
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
        {data.map(({ img, txt }, i) => (
          <figure>
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
  );
};

export default Process;
