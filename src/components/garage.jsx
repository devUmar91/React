import React from 'react'


function Car(props) {
    return <li>I am a { props.brand }</li>;
  }
  function Garage() {
    const cars = ['Ford', 'BMW', 'Audi','Mercedes','Porsche','Rolls Royce'];
    return (
      <>
        <h1 className='text-[50px] font-extrabold'>My favourite Cars Brands</h1>
        <ul className='font-bold text-[30px]'>
            {cars.map((car)=>{
                return <Car brand={car}/>
                
            })}
        </ul>
      </>
    );
  }
  export default Garage

