const Input = ({ type, name, placeholder }) => {
  return (
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      className="mb-[0.7em] w-[28ch] px-[0.8em] py-[0.4em] text-[12px] text-black placeholder:capitalize sm:text-[13px] md:text-[14px] lg:w-[30ch] lg:text-[16px] xl:w-[33ch] xl:text-[17px]"
      required
    />
  );
};

export default Input;
