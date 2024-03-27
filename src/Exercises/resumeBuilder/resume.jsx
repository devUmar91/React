import React, { useState, useEffect} from "react";
import Experience from "./experience";
import Skills from "./skills";
import Education from "./Education";


function ResumeBuilder() {
  const [experiences,setExperiences]=useState([])
   const   resume = {
    experience : [ { year:2012, company:'xyz', role:'something' }],
    education:[ "BA Fail","Matric Pass","MS in Chemistry"],
    skills : [ 'react js', 'node js']

    }
   console.log(resume.experience[0].year);
    
  
   

    
  return (
    <>
      <div className="flex  justify-center  bg-slate-100 ">
        <div className="w-[40%] bg-slate-300 flex flex-col gap-6 ">
        <div>
          <h1 className="font-bold text-center text-pretty">My Resume</h1>
        </div>
        <Skills  Skills={resume.skills}/>
        <Education Education={resume.education}/>
        <Experience  Experience={resume.experience[0]}  />
        </div>
      </div>
    </>
  );
}




export default ResumeBuilder;
