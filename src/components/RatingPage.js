import React from "react";
import cheerleader from "../assets/cheerleader-blorb.mp4";

const RatingPage = () => {
  return (
    <div
      className='p-24 m-auto flex w-3/4 transition animate-fade'
    >
      <video
        loop
        autoPlay
        muted
        src={cheerleader}
        type="video/mp4"
        className="w-72 ml-16"
      />
      <div className="pt-12 col-start-3 ml-28">
        <h1 className="text-3xl font-semibold">You're on your way!</h1>
        <p className="pt-7 text-4xl text-yellow-500">
          &#9733;&#9733;&#9733;&#9733;&#9733;
        </p>
        <p className="pt-2 italic leading-6">
          "Through its engaging and well-structured courses, Brilliant has
          taught me mathematical concepts that I previously struggled to
          understand. I now feel confident approaching both technical job
          interviews and real world problem solving situations."
        </p>
        <p className="italic mt-5">- Jacob S. </p>
      </div>
      
    </div>
  );
};

export default RatingPage;
