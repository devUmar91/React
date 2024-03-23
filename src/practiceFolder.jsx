import React, { useState } from 'react'

function practiceFolder() {
    const [activeColor,setActiveColor]=useState('pink')

  return (
    <div className="w-full h-screen duration-200 py-5 px-8"
         style={{backgroundColor:activeColor}}
    >
        <button onClick={()=>setActiveColor('Green')} className=' border-slate-500 	 rounded-[10px] bg-slate-100  px-5 mr-5 py-2 ml-3'>Green</button>
        <button onClick={()=>setActiveColor('Yellow')} className='border-slate-50    rounded-[10px] bg-slate-100  px-5 py-2 mr-5 ml-3'>Yellow</button>
        <button onClick={()=>setActiveColor('Orange')} className='border-slate-500	 rounded-[10px] bg-slate-100  px-5 py-2 mr-5 ml-3'>Orange</button>
        <button onClick={()=>setActiveColor('purple')} className='border-slate-500	 rounded-[10px] bg-slate-100  px-5 py-2 mr-5 ml-3'>Purple</button>
        {/* <h1 className='text-center'>{activeTab}</h1> */}
    </div>
  ) 
}

export default practiceFolder



