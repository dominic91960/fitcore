import React from "react";

const Button = ({ content, style }) => {
  return (
    <button
      className="w-fit bg-primary text-sm text-black md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
      style={style}
    >
      {content}
    </button>
  );
};

export default Button;
