import React from "react";
import arithematic from "../assets/arithmetic.png";
import algebra from "../assets/algebra.png";
import calculas from "../assets/calculas.png";
import intermediate from "../assets/intermediate.png";

const MathPage = () => {
  return (
    <div className={`p-5 m-auto`}>
      <div className=" text-center p-7">
        <h1 className="text-3xl font-semibold">
          What is your math confort level?
        </h1>
        <p className="p-5 ">
          Choose the highest level you feel confident in -- you can always
          adjust later.
        </p>
      </div>
      <div className="flex">
        <div className="border-2 p-7 m-auto w-56 h-48 text-center ml-3 rounded-lg cursor-pointer">
          <img src={arithematic} alt="arithematic" className="m-auto w-28" />
          <h1 className="pt-8 text-sm">Arithmetic</h1>
          <p className="text-gray-500 p-2">Indroductory</p>
        </div>
        <div className="border-2 p-8 m-auto w-56 h-48 text-center ml-3 rounded-lg cursor-pointer">
          <img src={algebra} alt="arithematic" className="m-auto w-32" />
          <h1 className="pt-8 text-sm">Basic Algebra</h1>
          <p className="text-gray-500 p-2">Foundational</p>
        </div>
        <div className="border-2 p-9 m-auto w-56 h-48 text-center ml-3 rounded-lg cursor-pointer">
          <img src={intermediate} alt="arithematic" className="m-auto " />
          <h1 className="pt-8 text-sm ">Intermediate Algebra</h1>
          <p className="text-gray-500 p-2">Intermediate</p>
        </div>
        <div className="border-2 p-7 m-auto w-56 h-48 text-center ml-3 rounded-lg cursor-pointer">
          <img src={calculas} alt="arithematic" className="m-auto  w-24" />
          <h1 className="pt-8 text-sm">Calculus</h1>
          <p className="text-gray-500 p-2">Advanced</p>
        </div>
      </div>
    </div>
  );
};

export default MathPage;
