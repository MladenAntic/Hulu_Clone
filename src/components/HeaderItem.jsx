import React from "react";

const HeaderItem = ({ Icon, text }) => {
  return (
    <div className="flex flex-col items-center text-center cursor-pointer hover:text-white group max-lg:w-16 max-md:w-12">
      <Icon fontSize="large" className="mb-1 group-hover:animate-bounce" />
      <p className="uppercase tracking-widest mx-auto text-lg opacity-0 group-hover:opacity-100 max-lg:mx-0">
        {text}
      </p>
    </div>
  );
};

export default HeaderItem;
