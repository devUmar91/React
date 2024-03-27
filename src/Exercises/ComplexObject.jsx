import React from "react";

function ComplexObject() {
  const people = [
    {
      gender: "male",
      firstName: "John",
    },
    {
      gender: "female",
      firstName: "Jane",
    },
    {
      gender: "male",
      firstName: "Bob",
    },
    {
      gender: "other",
      firstName: "Emily",
    },
    { gender: "Male", firstName: "Charlie" },
    {
        gender: "male",
        firstName: "shurti",
      },{
        gender: "male",
        firstName: "glitch",
      },
  ];

  const males = people.filter((person) => person.gender.toLowerCase() === "male");
  //    console.log(males);
  return (
    <div className="flex justify-center align-center flex-col">
      <h1 style={{ textAlign: "Center" }} className="text-[50px] font-bold">
        Names of males
      </h1>
      {
      males.map((male) => {
        return <li className="text-center">{male.firstName}</li>;
      })}
    </div>
  );
}

export default ComplexObject;
