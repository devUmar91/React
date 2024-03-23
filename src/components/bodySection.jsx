import Cards from "./cards";
import { CardsInfoArray } from "./CardInfo";
import React, { useState } from "react";

function Body() {
    // const  [count,setcount]=useState(0);
    //     function increment(){
    //        setcount((pre)=>pre+1)
    //     } 
  return (
    <div className="grid grid-cols-3 bg-slate-400 w-[80%] mt-[50px] pt-10 pb-10 gap-10 ml-[271px] md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1">
        {/* <button onClick={increment}>Click</button>  */}
      {CardsInfoArray.map((item) => {
       return <Cards title={item.Title} name={item.ChannelName} views={item.Views}  time={item.Time} />
      })}
    
{/* {count} */}
    </div>
  );
}

export default Body;
