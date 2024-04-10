import React, { useState } from "react";
import resultpage_img from '../assets/resultpage_img.png'
const ResultPage = () => {
  const [loader, setLoader] = useState(true);

  setTimeout(() => {
    setLoader(false);
  }, 3000);

  return (
    loader? <Loader/>:
    <div className="flex justify-center items-center h-screen w-screen flex-col">
      <div className=" text-center p-7 mb-10">
        <h1 className="text-3xl font-semibold">
          Learning paths based on your answers
        </h1>
        <p className="p-5 ">
          Choose one to get started. You can switch anytime.
        </p>
      </div>
      <div className="flex justify-center max-md:flex-col">
        <div className=" flex border-2 p-6 max-md:m-3 lg:w-1/3 text-center rounded-lg cursor-pointer relative  transition hover:ease-in-out hover:duration-300 hover:scale-105">
          <div className=" absolute -top-4 left-1/3 bg-yellow-500 p-1 rounded-3xl text-sm">MOST POPULAR</div>
          <p className=" text-xl text-left p-3"><span className="font-semibold">Foundational Math</span> Build your foundational skills in algebra, geometry and probability.</p>
          <img src={resultpage_img} alt='learning path' className="w-36 h-36"/>
        </div>
        <div className=" flex border-2 max-md:m-3 lg:ml-5 p-6 lg:w-1/3 text-center rounded-lg cursor-pointer  transition hover:ease-in-out hover:duration-300 hover:scale-105">
          <p className=" text-xl text-left p-3"><span className="font-semibold">Mathematic Thinking</span> Build your foundational skills in algebra, geometry and probability.</p>
          <img src={resultpage_img} alt='learning path' className="w-36 h-36"/>
        </div>
      </div>
    </div>
  );
};
const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen flex-col">
      <div className="h-16 w-16 rounded-full border-[9px] border-yellow-500 border-t-transparent animate-spin"></div>
      <p className="p-10 text-xl font-semibold lg:w-1/2 text-center">
        Finding learning path recommendation for you based on your responses
      </p>
    </div>
  );
};
export default ResultPage;
