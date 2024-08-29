import cardBg from "../../assets/Home/Pricing/card-bg.png";
import checkedCheckbox from "../../assets/Home/Pricing/checkedCheckbox.png";
import unCheckedCheckbox from "../../assets/Home/Pricing/uncheckedCheckbox.png";

const data = [
  "Personal trainer",
  "Special meditation",
  "Using all tools",
  "24 hour service",
];

const PlanItem = ({ image, title, price, features }) => {
  return (
    <article className="mt-6 w-[180px] max-w-[280px] flex-grow bg-white text-black">
      <figure>
        <img src={image} alt={title} className="w-full" />
      </figure>
      <div className="flex h-[34px] items-end justify-center">
        <div className="flex size-[68px] flex-col items-center justify-center rounded-full border-[6px] border-primary bg-white font-bold leading-none lg:size-[78px]">
          <p className="text-[16px] lg:text-[18px]">{price}</p>
          <p className="text-[12px] lg:text-[13px]">Monthly</p>
        </div>
      </div>
      <ul
        className="mx-auto w-fit bg-contain bg-center bg-no-repeat capitalize"
        style={{ backgroundImage: `url(${cardBg})` }}
      >
        <h4 className="mt-1 text-[14px] font-black lg:text-[17px]">{title}</h4>
        {data.map((e, i) => {
          const src =
            features[i] === "true"
              ? `${checkedCheckbox}`
              : `${unCheckedCheckbox}`;
          return (
            <li
              key={i}
              className="mt-4 flex gap-[1em] text-[11px] font-semibold lg:text-[12px]"
            >
              <img src={src} alt={features[i]} className="size-[16px]" />
              <span>{e}</span>
            </li>
          );
        })}
        <button className="mx-auto my-4 w-fit bg-primary px-[1.2em] py-[0.7em] text-[10px] font-extrabold uppercase text-black lg:text-[11px]">
          Join today
        </button>
      </ul>
    </article>
  );
};

export default PlanItem;
