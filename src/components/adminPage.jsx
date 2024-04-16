import React, { useState, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from './UserContext';

export const AdminPage = () => {
  const { MoviesArray, setMoviesArray } = useContext(MyContext);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const descriptionTextareaRef = useRef(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    // Adjust the height of the textarea
    if (descriptionTextareaRef.current) {
      descriptionTextareaRef.current.style.height = 'auto';
      descriptionTextareaRef.current.style.height = descriptionTextareaRef.current.scrollHeight + 'px';
    }
  };

  const handleSubmit = () => {
    // Create a new movie object with the input values
    if (title === '' || category === '' || description === '') {
      return alert('Fill all fields');
    } else {
      const newMovie = {
        id: MoviesArray.length + 1, // Assigning a new ID based on the length of the existing array
        title: title,
        category: category,
        description: description
      };
      setMoviesArray([...MoviesArray, newMovie]);
    }

    // Reset input fields
    setTitle('');
    setCategory('');
    setDescription('');
  };

  return (
    <>
      <div className='flex justify-center'>
        <div className='mt-10 bg-slate-400 p-10 rounded-md'>
          <h1 className='text-center mb-5 font-bold'>Admin Page</h1>

          <input className='px-10 py-2 w-[60vw] mb-2 outline-none rounded-lg' type='text' placeholder='Enter movie Title' value={title} onChange={handleTitleChange} /><br />
          <input className='px-10 mb-2 py-2 w-[60vw] outline-none rounded-lg' type='text' placeholder='Enter category' value={category} onChange={handleCategoryChange} /><br />
          <textarea
            ref={descriptionTextareaRef}
            className='px-10  py-5 mb-2 w-[60vw] outline-none rounded-lg'
            placeholder='Enter Description'
            value={description}
            onChange={handleDescriptionChange}
            style={{ minHeight: '100px', resize: 'none' }} // Set initial minHeight and disable resize
          /><br />
          <div className='flex justify-end'>
            <button className='p-3 bg-slate-600 rounded-md' onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-10'>
        <Link to={'/'} className='bg-blue-400 rounded-lg p-5 font-bold'>Go to Home</Link>
      </div>
    </>
  );
};
