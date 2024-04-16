import React, { createContext, useState } from "react";
import { Data } from "./data";

export const MyContext = createContext();

export const UserContext = ({ children }) => {

    // const [newMovie,setNewMovie]=useState([])

    const [MoviesArray,setMoviesArray]=useState(Data)
  
 console.log(MoviesArray);

  return (
    <MyContext.Provider value={{MoviesArray,setMoviesArray}}>
      {children}
    </MyContext.Provider>
  );
};

