// src/App.js
import React, { useState, useEffect } from 'react';
import MovieCard from './components/MovieCard';


function App() {

    const [movies,setMovies] = useState([])
  useEffect(()=>{

    fetch('https://api.tvmaze.com/search/shows?q=all')
    .then((res)=> res.json())
    .then((data)=> {console.log(data); setMovies(data)})

  },[])
  

  return (
    <div className='grid grid-cols-7 gap-4 p-3'>
      {movies.map((item) =>{
        return(item.show.image?<MovieCard  item={item}/>:null)
      })}
    </div>
  );
}

export default App;
