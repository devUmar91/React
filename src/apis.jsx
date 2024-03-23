import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Products() {
 
    const [data,setData]=useState(null)
    
useEffect(()=>{

    const fetchData = async () => {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
       console.log(data);
       setData(data?.products)
}
fetchData()
},[])
        
  return (
    <div className='bg-slate-800 h-screen text-white flex justify-center items-center flex-col'>
        <h1>Products here</h1>
       {data &&   <h1> {data[23].title} </h1>}
       {data &&   <img src={data[23].images[0]} alt="" />}
        
    </div>
  )
}

export default Products