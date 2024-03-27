import React, { useState } from "react";
import Experience from "./experience";
import Skills from "./skills";
import Education from "./Education";

function ResumeBuilder() {
  const [experiences,setExperiences]=useState([])
   const   resume = {
    experience : [ { year:2012, company:'xyz', role:'something' }],
    education:[ ],
    skills : [ 'react js', 'node js']

    }
  //  console.log(resume.experience[0]);
    
   useEffect(() => {

    return(
     
    resume.experience.map((item)=>{
      // console.log(item);
      setExperiences(item)
      console.log(experiences);
    
    


})
    )

   }, [])
   

    
  return (
    <>
      <div className="flex  justify-center  bg-slate-100 ">
        <div className="w-[40%] bg-slate-300 flex flex-col gap-6 ">
        <div>
          <h1 className="font-bold text-center text-pretty">My Resume</h1>
        </div>
        <Skills   />
        <Education />
        <Experience  />
        </div>
      </div>
    </>
  );
}




export default ResumeBuilder;
