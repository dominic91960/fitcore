import PlanItem from "./PlanItem";
import standardItem from "../../assets/Home/Pricing/standardItem.png";
import premiumItem from "../../assets/Home/Pricing/premiumItem.png";
import platinumItem from "../../assets/Home/Pricing/platinumItem.png";

const data = [
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

const Pricing = () => {
  return (
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
        {data.map(({ image, title, price, features }, i) => (
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
  );
};

export default Pricing;
