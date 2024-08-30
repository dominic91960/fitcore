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
      <section className="px-[10vw] pb-[8%] md:px-[5vw]">
        {data.map(({ img, name, role, roleDesc, qual, clients, rating }, i) => (
          <article
            key={i}
            className={`flex h-fit justify-between border-b-2 border-b-primary pb-[8%] pt-[10%] ${(i %= 2) !== 0 && "flex-row-reverse"}`}
          >
            <figure className="flex flex-col items-center justify-center text-center">
              <div className="w-[100px] rounded-full border-2 border-primary">
                <img src={img} alt="Kevin" className="w-full p-[8%]" />
              </div>
              <figcaption>
                <h3 className="mt-[0.7em] text-[12px] font-medium capitalize leading-none">
                  {name}
                </h3>
                <h4 className="mt-[0.4em] text-[11px] font-medium capitalize leading-none text-[#7C736E]">
                  {role}
                </h4>
              </figcaption>
            </figure>
            <ul className="ms-[5%] flex h-[110px] min-h-fit w-fit flex-col justify-center text-[10px] font-medium leading-relaxed">
              <li>Name: {name}</li>
              <li>Role: {roleDesc}</li>
              <li>Qualifications: {qual}</li>
              <li>{clients}</li>
              <li>
                Rating:
                <span className="text-[#E7A600]">
                  {Array.from({ length: rating }).map(() => (
                    <> &#10030;</>
                  ))}
                </span>
              </li>
            </ul>
          </article>
        ))}
      </section>
    </>
  );
};

export default Trainers;
