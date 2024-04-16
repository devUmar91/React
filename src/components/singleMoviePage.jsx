import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Data } from "./data";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { MyContext } from "./UserContext";



const SingleMoviePage = () => {
  const {MoviesArray}=useContext(MyContext)
  const [movie, setMovie] = useState({});
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const result = MoviesArray.find((item) => item.id == id);
    // console.log(item.id);
    setMovie(result);
    // const category=result.category
    const movies = MoviesArray.filter((item) => item.category == result.category);
    // console.log(moviess);
    setRecommendedMovies(movies);

    // console.log(movie);
  }, [id]);

  return (
    <div className="flex justify-around mt-6 px-5">
      <div className=" p-10">
        <div></div>
        <h1 className="font-bold">Movie Details</h1>
        <h2 className="mt-2 text-lg">{movie.description}</h2>
      </div>
      <div >
        <h1 className="text-center font-bold">Recommended movies</h1>
        <div className="grid grid-cols-2 gap-2">
        {
        recommendedMovies &&
          recommendedMovies.map((item) => {
            return (
              <span className="list-style-none">
                <div class="max-w-sm h-[300px] p-2 bg-slate-500 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.Title}
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-black dark:text-gray-400">
                    {item.description}
                  </p>
                  <h3 className="mb-2">Genre: {item.category}</h3>
                  <Link  to={`/movies/${item.id}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Open
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </span    >
            );
          })}
          </div>
      </div>
    </div>
  );
};

export default SingleMoviePage;
