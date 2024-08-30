import Slider from "react-slick";

import ImageSection from "../components/ImageSection";
import bgMobile from "../assets/images/Trainers/bg-mobile.png";
import bgDesktop from "../assets/images/Trainers/bg-desktop.png";
import kevin from "../assets/images/Trainers/kevin.png";
import brian from "../assets/images/Trainers/brian.png";
import shene from "../assets/images/Trainers/shene.png";
import alex from "../assets/images/Trainers/alex.png";
import one from "../assets/images/Trainers/review-one.png";
import two from "../assets/images/Trainers/review-two.png";
import three from "../assets/images/Trainers/review-three.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/styles/Reviews.css";

const trainerData = [
  {
    img: kevin,
    name: "Kevin dias",
    role: "Founder & CEO",
    roleDesc: "Owner of FitCore and Gym Trainer",
    qual: "Multiple fitness and personal training certifications",
    clients: "Training 50 clients",
    rating: 5,
  },
  {
    img: brian,
    name: "Brian domi",
    role: "Gym Trainer",
    roleDesc: "Professional Gym Trainer",
    qual: "Multiple fitness and personal training certifications",
    clients: "Training 40 clients",
    rating: 4,
  },
  {
    img: shene,
    name: "Shene lofi",
    role: "Gym Trainer",
    roleDesc: "Professional Gym Trainer",
    qual: "Multiple fitness and personal training certifications",
    clients: "Training 30 clients",
    rating: 5,
  },
  {
    img: alex,
    name: "Kevin dias",
    role: "Gym Trainer",
    roleDesc: "Professional Gym Trainer",
    qual: "Multiple fitness and personal training certifications",
    clients: "Training 36 clients",
    rating: 3,
  },
];

const reviewData = [
  {
    img: one,
    result: ["Improved strength and fitness", " 1 kg muscle mass gained"],
    desc: "Stefen Stark achieved impressive results by gaining 1 kg of muscle mass. Before starting his tailored training program, Stefen had adefined yet lean physique. After diligently following the programand applying expert guidance, he successfully increased his musclemass by 1 kg, showcasing enhanced muscle definition and overall strength.",
    poster: "Stefan stark",
  },
  {
    img: two,
    result: ["Improved strength and fitness", " 1 kg muscle mass gained"],
    desc: "Stefen Stark achieved impressive results by gaining 1 kg of muscle mass. Before starting his tailored training program, Stefen had adefined yet lean physique. After diligently following the programand applying expert guidance, he successfully increased his musclemass by 1 kg, showcasing enhanced muscle definition and overall strength.",
    poster: "Aslik Thors",
  },
  {
    img: three,
    result: ["Improved strength and fitness", " 1 kg muscle mass gained"],
    desc: "Stefen Stark achieved impressive results by gaining 1 kg of muscle mass. Before starting his tailored training program, Stefen had adefined yet lean physique. After diligently following the programand applying expert guidance, he successfully increased his musclemass by 1 kg, showcasing enhanced muscle definition and overall strength.",
    poster: "Brian Stark",
  },
];

const Trainers = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <ImageSection
        alt="A trainer"
        bgMobile={bgMobile}
        bgDesktop={bgDesktop}
        title={["We offer specialized training from", "our expert team"]}
      />
      {/* -------- -------- TRAINERS SECTION -------- -------- */}
      <section className="px-[10vw] md:px-[5vw]">
        {trainerData.map(
          ({ img, name, role, roleDesc, qual, clients, rating }, i) => (
            <article
              key={i}
              className={`flex h-fit justify-center pb-[8%] pt-[10%] sm:py-[5%] ${i % 2 !== 0 && "flex-row-reverse"} ${i === 3 ? "border-b-0" : "border-b-2 border-b-primary"}`}
            >
              <figure className="flex flex-col items-center justify-center text-center">
                <div className="w-[100px] rounded-full border-2 border-primary sm:w-[120px] md:w-[160px] lg:w-[200px] lg:border-4 xl:w-[260px] 2xl:w-[340px]">
                  <img
                    src={img}
                    alt="Kevin"
                    className="w-full p-[8%] sm:p-[5%]"
                  />
                </div>
                <figcaption>
                  <h3 className="mt-[0.7em] text-[14px] font-medium capitalize leading-none sm:text-[18px] md:text-[23px] lg:text-[27px] xl:text-[38px] 2xl:text-[44px]">
                    {name}
                  </h3>
                  <h4 className="mt-[0.4em] text-[11px] font-medium capitalize leading-none text-[#7C736E] sm:text-[12px] md:text-[15px] lg:text-[18px] xl:text-[24px] 2xl:text-[28px]">
                    {role}
                  </h4>
                </figcaption>
              </figure>
              <ul
                className={`flex h-[110px] min-h-fit w-fit flex-col justify-center text-[10px] font-medium leading-relaxed text-[#7C736E] sm:h-[120px] sm:text-[11px] md:h-[150px] md:text-[14px] lg:h-[200px] lg:text-[16px] xl:h-[240px] xl:text-[21px] 2xl:h-[340px] 2xl:text-[25px] ${i % 2 !== 0 ? "me-[5%] translate-x-[2ch]" : "ms-[5%] sm:-translate-x-[1ch]"}`}
              >
                <li className="relative capitalize">
                  <span className="absolute -translate-x-[1ch]">&#8226;</span>
                  Name: {name}
                </li>
                <li className="relative">
                  <span className="absolute -translate-x-[1ch]">&#8226;</span>
                  Role: {roleDesc}
                </li>
                <li className="relative">
                  <span className="absolute -translate-x-[1ch]">&#8226;</span>
                  Qualifications: {qual}
                </li>
                <li className="relative">
                  <span className="absolute -translate-x-[1ch]">&#8226;</span>
                  {clients}
                </li>
                <li className="relative">
                  <span className="absolute -translate-x-[1ch]">&#8226;</span>
                  Rating:
                  {Array.from({ length: rating }).map((_, i) => (
                    <span key={i} className="text-[#E7A600]">
                      &nbsp;&#9733;
                    </span>
                  ))}
                </li>
              </ul>
            </article>
          ),
        )}
      </section>
      {/* -------- -------- REVIEW SECTION -------- -------- */}
      <section className="bg-gradient-to-t from-[#454545] via-[#969696] to-[#D9D9D9] px-[10vw] pb-[11.5%] md:px-[5vw]">
        <h2 className="pb-[1em] pt-[1.5em] text-center font-extrabold uppercase text-black">
          Success <span className="text-primary">story</span>
        </h2>
        <Slider {...settings}>
          {reviewData.map(({ img, result, desc, poster }, i) => (
            <div key={i}>
              <article className="relative mx-auto mt-[18%] w-full rounded-3xl bg-secondary px-[4%] pb-[3%] pt-[20%]">
                <figure className="absolute left-0 right-0 top-0 mx-auto w-1/2 -translate-y-1/2">
                  <img
                    src={img}
                    alt="Stefan Stark"
                    className="w-full rounded"
                  />
                </figure>
                <div className="mx-auto w-[70%]">
                  <hr className="border-t-2 border-t-primary" />
                  <p className="flex items-start py-[1.4em] text-[8px] leading-none">
                    <span className="text-[11px] leading-[9px]">Result-</span>
                    <span className="ps-[1ch]">
                      {result[0]} <br /> <br /> {result[1]}
                    </span>
                  </p>
                </div>
                <p className="pb-[1em] text-[8px]">{desc}</p>
                <h4 className="-translate-x-[6%] text-right text-[11px] font-medium text-primary">
                  {poster}
                </h4>
              </article>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default Trainers;
