import ImageSection from "../components/ImageSection/ImageSection";
import bgMobile from "../assets/Trainers/bg-mobile.png";
import bgDesktop from "../assets/Trainers/bg-desktop.png";
import kevin from "../assets/Trainers/kevin.png";
import brian from "../assets/Trainers/brian.png";
import shene from "../assets/Trainers/shene.png";
import alex from "../assets/Trainers/alex.png";

const data = [
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

const Trainers = () => {
  return (
    <>
      <ImageSection
        alt="A trainer"
        bgMobile={bgMobile}
        bgDesktop={bgDesktop}
        title={["We offer specialized training from", "our expert team"]}
      />
      <section className="px-[10vw] md:px-[5vw]">
        {data.map(({ img, name, role, roleDesc, qual, clients, rating }, i) => (
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
              className={`flex h-[110px] min-h-fit w-fit flex-col justify-center text-[10px] font-medium leading-relaxed text-[#7C736E] sm:h-[120px] sm:text-[11px] md:h-[150px] md:text-[14px] lg:h-[200px] lg:text-[16px] xl:h-[240px] xl:text-[21px] 2xl:h-[340px] 2xl:text-[25px] ${i % 2 !== 0 ? "me-[5%] translate-x-[2ch]" : "ms-[5%] -translate-x-[1ch]"}`}
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
        ))}
      </section>
    </>
  );
};

export default Trainers;
