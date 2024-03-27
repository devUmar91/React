import React, { children } from 'react'

function Border({children}) {
  return (
    <div style={{border: '1px solid black', padding: '10px', height:"100px"}}>
        {children}
    </div>
  )
}

export default Border