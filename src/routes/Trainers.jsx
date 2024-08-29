import bg from "../assets/Trainers/bg.png";

const Trainers = () => {
  return (
    <>
      <section
        className="h-[250px] bg-cover bg-top sm:h-[50vh] sm:min-h-[400px]"
        style={{ backgroundImage: `url(${bg})` }}
      ></section>
    </>
  );
};

export default Trainers;
