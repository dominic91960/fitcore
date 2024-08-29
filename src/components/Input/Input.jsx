const Input = ({ type, name, placeholder }) => {
  return (
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      className="mb-[0.7em] w-[28ch] px-[0.8em] py-[0.4em] text-[12px] text-black placeholder:capitalize sm:w-full sm:px-[1em] sm:py-[0.6em] lg:text-[13px] 2xl:text-[14px]"
      required
    />
  );
};

export default Input;
