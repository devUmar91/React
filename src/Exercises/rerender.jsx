import React, { useEffect, useState } from 'react'

function Rerender() {


    const [clickCount,setClickCount]=useState(0)
    
    const increment=()=>{
        setClickCount(clickCount+1)

    }

    useEffect(()=>{
        document.addEventListener('mousedown', increment);

    })

  return (
    <div>
         <h1>Click: {clickCount}</h1>
    </div>
  )
}

export default Rerender