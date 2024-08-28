import PlanItem from "./PlanItem";

const data = [
  {
    title: "Standard",
    price: "$35",
    features: ["true", "true", "false", "false"],
  },
  {
    title: "Premium",
    price: "$40",
    features: ["true", "true", "true", "false"],
  },
  {
    title: "Platinum",
    price: "$50",
    features: ["true", "true", "true", "true"],
  },
];

const Pricing = () => {
  return (
    <section className="px-[10vw] text-center sm:pt-8 md:px-[5vw]">
      <h2 className="mt-4 text-[14px] font-semibold uppercase text-primary md:text-[16px] lg:text-[18px]">
        Pricing plan
      </h2>
      <h3 className="mt-2 text-[18px] font-semibold capitalize md:text-[24px] lg:text-[30px]">
        Choose your best plan
      </h3>
      <menu className="flex flex-col items-center justify-center sm:my-[5%] sm:flex-row sm:gap-[5%]">
        {data.map(({ title, price, features }, i) => (
          <PlanItem key={i} title={title} price={price} features={features} />
        ))}
      </menu>
    </section>
  );
};

export default Pricing;
