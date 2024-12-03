import React from "react";
import career from "../../assets/career.png";
const Career = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="content flex flex-col gap-6 justify-center items-center">
          <p className="text-[14px] font-medium leading-5">
            CAREER AT FINSWEET
          </p>
          <h1 className="font-semibold leading-[58px] text-center text-[48px] w-[55%]">
            We hired people who are Always Passionate about <br /> what they do
          </h1>
          <p className="text-[16px] font-normal leading-6 w-[45%] text-center pb-8">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw .
          </p>
        </div>
        <div className="image w-full justify-center items-center h-full">
          <img className="w-full" src={career} alt="image career" />
        </div>
        <div>
          <p className="text-[18px] font-medium leading-7 mt-20 text-center mb-4">
            See Our open positions
          </p>
          <span className="block text-center">👇</span>
        </div>
      </div>
    </section>
  );
};

export default Career;
