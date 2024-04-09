import React, {useEffect, useState } from "react";
import ExperiencePage from './ExperiencePage';
import InterestPage from './InterestPage';
import MathPage from './MathPage';
import RatingPage from './RatingPage';
import SkillPage from './SkillPage'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";


const Form = () => {
  const forms = [<ExperiencePage/>,<InterestPage/>,<SkillPage/>,<MathPage/>,<RatingPage/>]
  const [page ,setPage] = useState(0);
  
  const handlePages = () => {
    setPage((page)=>page + 1);
    console.log(page);
  };

  const handlePagesBack = () => {
    setPage((page)=>page - 1);
    console.log(page);
  };
  
  return (
    <div className="w-full mt-16">
      <div className= 'relative w-4/6 m-auto p-5'>
        <FontAwesomeIcon
            icon={faAngleLeft}
            className={`text-xl absolute -left-1 top-3 cursor-pointer ${page === 0 ? "hidden" : "visible"}`}
            onClick={handlePagesBack}
          />
        <div className="m-auto w-full">
          <div className={`${page === 0 ? 'w-1/5' : page === 1 ? 'w-2/5' : page === 2 ? 'w-3/5' :page === 3 ? 'w-4/5' : 'w-full'} h-1 bg-green-600`}></div>
        </div>
      </div>
      <div className="flex align-middle justify-center flex-col">
        {
          forms[page]
        }
        <button
          className="bg-black text-white p-3 w-28 rounded-lg m-auto mt-3"
          onClick={handlePages}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Form;
