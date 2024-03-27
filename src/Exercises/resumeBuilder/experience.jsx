import React from 'react'

function experience({Experience}) {
    console.log(Experience);
    // console.log(Year);
  return (
    <div>
        <h1>Experience</h1>
        <li>Year : {Experience.year}</li>
        <li>Company : {Experience.company}</li>
        <li>Role : {Experience.role}</li>
    </div>
  )
}

export default experience