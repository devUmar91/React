import { useEffect, useState } from "react";
import { Moviecards } from "./Moviecards";
import { Link } from "react-router-dom";
import { MyContext } from "./UserContext";
import { useContext } from "react";

export const Movies = () => {
  const { MoviesArray } = useContext(MyContext);
  const [originalArray, setOriginalArray] = useState(MoviesArray);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const uniqueCategories = [...new Set(MoviesArray.map(item => item.category))];
    setCategories(uniqueCategories);
  }, [MoviesArray]);

  const filterCategories = (option) => {
    setSelectedCategory(option);
    const filtered = originalArray.filter((item) => item.category === option);
    setFilteredMovies(filtered);
  };

  const resetFilter = () => {
    setSelectedCategory('');
    setFilteredMovies([]);
  };

  return (
    <div className="flex justify-between">
      {/* Left */}
      <div className="Categories w-[30vw] mt-[120px]">
        <h1 className="font-bold ml-[20px]">All Categories</h1>
        <div>
          {categories.map((item) => (
            <button key={item} onClick={() => filterCategories(item)} className={`block ml-5 bg-slate-400 mb-2 px-8 text-center w-[120px] rounded-md ${selectedCategory === item ? 'bg-blue-500' : ''}`}>
              {item}
            </button>
          ))}
          {selectedCategory && (
            <button onClick={resetFilter} className="block ml-5 bg-slate-400 mb-2 px-8 text-center w-[120px] rounded-md">
              Reset Filter
            </button>
          )}
        </div>
      </div>

      {/* Right */}
      <div>
        <h1 className="text-center text-[40px] font-bold">Movies</h1>
        <div className="flex justify-center">
          <Link to={'/admin'} className="bg-blue-400 rounded-lg p-5 ml-[80px]">Go to Admin</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 mt-3 gap-4">
          {(filteredMovies.length > 0 ? filteredMovies : MoviesArray).map((item) => (
            <div key={item.id}>
              <Moviecards
                Id={item.id}
                Title={item.title}
                Details={item.description}
                Category={item.category}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
