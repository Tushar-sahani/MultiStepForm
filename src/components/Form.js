import React, { useState } from "react";
import student from "../assets/student.png";
import teacher from "../assets/teacher.png";
import parent from "../assets/parent.png";
import other from "../assets/other.png";
import professional from "../assets/professional.png";
import lifelong from "../assets/lifelonglearner.png";
import chart from "../assets/chart.png";
import target from "../assets/target.png";
import eyes from "../assets/eyes.png";
import globe from "../assets/globe.png";
import arrow from "../assets/arrow.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import pulley from "../assets/pulley-blob.mp4";
import cheerleader from "../assets/cheerleader-blorb.mp4";
import arithematic from "../assets/arithmetic.png";
import algebra from "../assets/algebra.png";
import calculas from "../assets/calculas.png";
import intermediate from "../assets/intermediate.png";
const Form = () => {
  const [showform, setShowForm] = useState(1);

  const handleForm = () => {
    setShowForm(showform + 1);
  };
  const handleFormBack = () => {
    setShowForm(showform - 1);
  };
  return (
    <div className="w-full mt-16">
      <div className= 'relative w-4/6 m-auto p-5'>
        <FontAwesomeIcon
            icon={faAngleLeft}
            className={`text-xl absolute -left-1 top-3 cursor-pointer ${showform == 1 ? "hidden" : "visible"}`}
            onClick={handleFormBack}
          />
        <div className="bg-green-600 h-1 m-auto w-full"></div>
      </div>
      <div className="flex align-middle justify-center flex-col">
        <div className={`${showform == 1 ? "visible" : "hidden"} m-auto`}>
          <div className=" text-center p-5">
            <h1 className="text-4xl font-semibold">
              Which describes your best?
            </h1>
            <p className="p-3">
              This will help us personalize your experience.
            </p>
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
                <span>Other</span>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className={`${showform == 2 ? "visible" : "hidden"} m-auto`}>
          <div className=" text-center p-7">
            <h1 className="text-4xl font-semibold">
              Which are you most interested in?
            </h1>
            <p className="p-5 ">
              Choose just one. This will help us get started (but won't limit
              your experience).
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
              <p className="pl-4 text-sm pt-2">
                Refressing my math foundations
              </p>
            </div>
            <div className="mt-2 flex h-14 border-[1.5px] border-s text-lg border-gray-200 p-2  pl-4 cursor-pointer rounded-lg">
              <img src={arrow} alt="lifelonglearner" className="w-7 h-7 mt-1" />
              <p className="pl-4 text-sm pt-2">
                Exercising my brain to stay sharp
              </p>
            </div>
            <div className="mt-2 flex h-14 border-[1.5px] border-s text-lg border-gray-200 p-2  pl-4 cursor-pointer rounded-lg">
              <img src={eyes} alt="teacher" className="w-7 h-7 mt-1" />
              <p className="pl-4 text-sm pt-2">something else</p>
            </div>
          </div>
        </div>
        <div
          className={`${
            showform == 3 ? "visible" : "hidden"
          } p-24 flex w-4/6 m-auto`}
        >
          <video
            loop
            autoplay=""
            muted
            src={pulley}
            type="video/mp4"
            className="w-72"
          />
          <div className="pt-20 col-start-3 ml-28">
            <h1 className="text-3xl font-semibold">
              You're in the right place
            </h1>
            <p className="pt-5 ">
              Brilliant gets you hands-on to help imporve your professional
              akills and knaowledge. Ypu'll interact with cpncepts and solve fun
              problems in math, science and computer science.
            </p>
          </div>
        </div>
        <div className={`${showform == 4 ? "visible" : "hidden"} p-5 m-auto`}>
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
              <img
                src={arithematic}
                alt="arithematic"
                className="m-auto w-28"
              />
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
        <div
          className={`${
            showform == 5 ? "visible" : "hidden"
          } p-24 m-auto flex w-3/4`}
        >
          <video
            loop
            autoplay=""
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

        <button
          className="bg-black text-white p-3 w-28 rounded-lg m-auto mt-3"
          onClick={handleForm}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Form;
