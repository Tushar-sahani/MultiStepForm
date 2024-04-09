import React from "react";
import pulley from "../assets/pulley-blob.mp4";

const SkillPage = () => {
  return (
    <div
      className='p-24 flex w-4/6 m-auto transition animate-fade'
    >
      <video
        loop
        autoPlay
        muted
        src={pulley}
        type="video/mp4"
        className="w-72"
      />
      <div className="pt-20 col-start-3 ml-28">
        <h1 className="text-3xl font-semibold">You're in the right place</h1>
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
