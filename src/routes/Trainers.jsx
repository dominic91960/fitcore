import ImageSection from "../components/ImageSection/ImageSection";
import bgMobile from "../assets/Trainers/bg-mobile.png";
import bgDesktop from "../assets/Trainers/bg-desktop.png";

const Trainers = () => {
  return (
    <>
      <ImageSection alt="A trainer" bgMobile={bgMobile} bgDesktop={bgDesktop} />
    </>
  );
};

export default Trainers;
