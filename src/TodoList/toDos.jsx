import React from 'react'

function toDos({toDoData,delFn}) {
    
  return (
    <>

<div className="flex flex-row shadow-md bg-slate-70 px-20 mt-1 w-[100%] p-4 justify-between m-0">
  <input type="checkBox"  className='bg-red-300'/>
  <h1 className="">{toDoData}</h1>
  <div className="flex gap-1">
    <span 
     onClick={()=>delFn(toDoData)}
    className="bg-red-400 px-2 rounded cursor-pointer hover:bg-red-500 transition-all ">Del</span>
    <span className="bg-green-400 px-2 rounded cursor-pointer  hover:bg-green-500 transition-all">Edit</span>
    {/* <span className="bg-blue-500 rounded px-2">Remove</span> */}
  </div>
</div>


    </>
  )
}

export default toDos