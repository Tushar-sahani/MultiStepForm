import React from "react";
import chart from "../assets/chart.png";
import target from "../assets/target.png";
import eyes from "../assets/eyes.png";
import globe from "../assets/globe.png";
import arrow from "../assets/arrow.png";

const InterestPage = () => {
  return (
    <div className={` m-auto`}>
      <div className=" text-center p-7">
        <h1 className="text-4xl font-semibold">
          Which are you most interested in?
        </h1>
        <p className="p-5 ">
          Choose just one. This will help us get started (but won't limit your
          experience).
        </p>
      </div>
      <div>
        <div className="mt-2 flex h-14 border-[1.5px] border-s text-lg border-gray-200 p-2  pl-4 cursor-pointer rounded-lg">
          <img src={chart} alt="professional" className="w-7 h-7 mt-1" />
          <p className=" pl-4 text-sm pt-2">
            Learning specific skills to advance my career
          </p>
        </div>
        <div className="mt-2 flex h-14 border-[1.5px] border-s text-lg border-gray-200 p-2  pl-4 cursor-pointer rounded-lg">
          <img src={globe} alt="professional" className="w-7 h-7 mt-1" />
          <p className="pl-4 text-sm pt-2">
            Exploring new topic I'm interested in
          </p>
        </div>
        <div className="mt-2 flex h-14 border-[1.5px] border-s text-lg border-gray-200 p-2  pl-4 cursor-pointer rounded-lg">
          <img src={target} alt="parent" className="w-7 h-7 mt-1" />
          <p className="pl-4 text-sm pt-2">Refressing my math foundations</p>
        </div>
        <div className="mt-2 flex h-14 border-[1.5px] border-s text-lg border-gray-200 p-2  pl-4 cursor-pointer rounded-lg">
          <img src={arrow} alt="lifelonglearner" className="w-7 h-7 mt-1" />
          <p className="pl-4 text-sm pt-2">Exercising my brain to stay sharp</p>
        </div>
        <div className="mt-2 flex h-14 border-[1.5px] border-s text-lg border-gray-200 p-2  pl-4 cursor-pointer rounded-lg">
          <img src={eyes} alt="teacher" className="w-7 h-7 mt-1" />
          <p className="pl-4 text-sm pt-2">something else</p>
        </div>
      </div>
    </div>
  );
};

export default InterestPage;
