import React from "react";
import student from "../assets/student.png";
import teacher from "../assets/teacher.png";
import parent from "../assets/parent.png";
import other from "../assets/other.png";
import professional from "../assets/professional.png";
import lifelong from "../assets/lifelonglearner.png";

const ExperiencePage = () => {
  return (
    <div className={`m-auto`}>
      <div className=" text-center p-5">
        <h1 className="text-4xl font-semibold">Which describes your best?</h1>
        <p className="p-3">This will help us personalize your experience.</p>
      </div>
      <div>
        <div className="mt-1 flex h-14 border-[1.5px] border-s text-lg border-gray-200 p-2  pl-4 cursor-pointer rounded-lg">
          <img src={student} alt="student" />
          <p className=" pl-4 text-sm pt-3">
            <span className="font-semibold">Student</span> or soon to be
            enrolled
          </p>
        </div>
        <div className="mt-2 flex h-14 border-[1.5px] border-s text-lg border-gray-200 p-2  pl-4 cursor-pointer rounded-lg">
          <img src={professional} alt="professional" />
          <p className="pl-4 text-sm pt-3">
            <span>Professional</span> pursuing a career
          </p>
        </div>
        <div className="mt-2 flex h-14 border-[1.5px] border-s text-lg border-gray-200 p-2  pl-4 cursor-pointer rounded-lg">
          <img src={parent} alt="parent" />
          <p className="pl-4 text-sm pt-3">
            <span>Parent</span> of a school-age child
          </p>
        </div>
        <div className="mt-2 flex h-14 border-[1.5px] border-s text-lg border-gray-200 p-2  pl-4 cursor-pointer rounded-lg">
          <img src={lifelong} alt="lifelonglearner" />
          <p className="pl-4 text-sm pt-3">
            <span>lifelong learner</span>
          </p>
        </div>
        <div className="mt-2 flex h-14 border-[1.5px] border-s text-lg border-gray-200 p-2  pl-4 cursor-pointer rounded-lg">
          <img src={teacher} alt="teacher" />
          <p className="pl-4 text-sm pt-3">
            <span>Teacher</span>
          </p>
        </div>
        <div className="mt-3 flex h-14 border-[1.5px] border-s text-lg border-gray-200 p-2  pl-4 cursor-pointer rounded-lg">
          <img src={other} alt="other" />
          <p className="pl-4 text-sm pt-3">
            <span>Other</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
