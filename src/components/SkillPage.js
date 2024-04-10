import React from "react";
import pulley from "../assets/pulley-blob.mp4";

const SkillPage = () => {
  return (
    <div
      className='lg:p-24 flex w-4/6 m-auto transition animate-fade max-md:flex-col md:align-middle max-md:mt-8 max-md:mb-8 -mb-10'
    >
      <video
        loop
        autoPlay
        muted
        src={pulley}
        type="video/mp4"
        className="w-72"
      />
      <div className="pt-20 max-md:pt-16 col-start-3 lg:ml-28 max-md:text-center">
        <h1 className="lg:text-3xl text-xl font-semibold">You're in the right place</h1>
        <p className="pt-5 ">
          Brilliant gets you hands-on to help imporve your professional skills
          and knowledge. Ypu'll interact with concepts and solve fun problems
          in math, science and computer science.
        </p>
      </div>
    </div>
  );
};

export default SkillPage;
