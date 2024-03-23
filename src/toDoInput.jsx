import React, { useState } from 'react'

const toDoInput = (props) => {

    const [input,setinput]=useState('')
  return (
    <div className='h-[100vh] bg-gray-400 border-2 '>
       <input
        type="text" 
         className="border-2" 
         onChange={(e)=>{
        setinput(e.target.value)
       }}/>
       <button onClick={()=>{
        props.adlist(input)
        setinput=('')
        }}>Add</button> ,
       <div>
       </div>``

    </div>
  )
}

export default toDoInput