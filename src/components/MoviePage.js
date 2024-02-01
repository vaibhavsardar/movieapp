import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { HiMiniStar } from "react-icons/hi2";
import Popup from './Popup';

const MoviePage = () => {
    const [movie,setMovie] = useState([])
    const { id } = useParams()
    const [isPopupOpen, setPopupOpen] = useState(false);

    const handleOpenPopup = () => {
      setPopupOpen(true);
    };
  
    const handleClosePopup = () => {
      setPopupOpen(false);
    };

    useEffect(()=>{
  
      fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res)=> res.json())
      .then((data)=> {console.log(data); setMovie(data)})
  
    },[id])
  return (
    <div  style={{backgroundImage:"url"}}>
        <div style={{  background:  `linear-gradient(109.6deg, rgb(0, 0, 0) 11.2%, rgb(11, 132, 145) 91.1%)` }} className="container   text-white mx-auto px-24 h-[70vh]  py-16 bg-no-repeat bg-bottom ... ">
          <div className='flex gap-5 '>
            <img alt='poster' src={movie.image?.original} className='  h-[400px] w-[300px] '/>
            <div className=' flex flex-col justify-around'>
              <h1 className=' text-5xl font-bold '>{movie.name}</h1>
              <div className=' text-3xl w-36 flex p-1  justify-between px-2  items-center  bg-black text-white'><div className='flex items-center gap-1'><HiMiniStar /><p> {movie.rating?.average?movie.rating?.average+'/10':'NA'}</p></div> </div>
              <p >{movie.language}</p>
              <p>{movie.premiered}</p>
              {/* <p className=' text-sm'>{movie.genres[0]? movie.genres[0]:null}{movie.genres[1] ?"/"+movie.genres[1]: null}{movie.genres[2] ?"/"+movie.genres[2]: null}</p> */}
               <p>{movie.genres?.map((g)=> g+',')}</p>
              <button onClick={handleOpenPopup} class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-4 w-52 rounded-md">
               Book tickets
             </button>
            </div>
          </div>
          
       </div>
       <Popup movie={movie} isOpen={isPopupOpen} onClose={handleClosePopup} />
       <div className='p-4'>
        <h2 className='text-3xl font-bold'>Summary</h2>
        <p>{ movie.summary?.toString().replace(/(<([^>]+)>)/ig, '')}</p>
       </div>
       
    </div>
  )
}

export default MoviePage
