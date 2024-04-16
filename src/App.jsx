// import { useEffect, useState } from 'react'
// import { BrowserRouter , Route , Routes}
import { Link ,BrowserRouter,Routes,Route } from 'react-router-dom'
import { Movies } from './components'
import SingleMoviePage from './components/singleMoviePage'
import { AdminPage } from './components/adminPage'
import { UserContext } from './components/UserContext'


function App() {
 
     
  
  return (
  
  <UserContext>

    <BrowserRouter>
       <Routes>

        <Route  path='/' element={<Movies/>}/>
        <Route  path='/movies/:id' element={<SingleMoviePage/>}/>
        <Route   path='/admin'  element={<AdminPage/>}/>


       </Routes>
    
    </BrowserRouter>

    </UserContext>
          
  
  )
}

export default App
