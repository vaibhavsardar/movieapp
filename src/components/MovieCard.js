import React from 'react'
import { HiMiniStar } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const MovieCard = ({item}) => {
  return (
    <Link to={`movie/${item.show.id}`}>
    {item.show.image?.original ? <div className=' flex flex-col items-start '>
                  <div className=' rounded-md overflow-hidden flex flex-col  ' > 
                    <div className=''><img alt='poster' src={item.show.image?.original} className=' h-[260px] w-[200px] '/></div>
                    <div className=' flex h-7 justify-between px-2  items-center  bg-black text-white'><div className='flex items-center gap-1'><HiMiniStar /><p> {item.show.rating.average?item.show.rating.average+'/10':'NA'}</p></div> <p >{item.show.language}</p></div>
                  </div>
                  <div>
                    <h3 className=' text-lg font-bold text-gray-700'>{item.show.name}</h3>
                  </div>
                  <div>
                    <p className=' text-sm'>{item.show.genres[0]}{item.show.genres[1] ?"/"+item.show.genres[1]: null}{item.show.genres[2] ?"/"+item.show.genres[2]: null}</p>
                    
                  </div>
                </div>:null}
      
    </Link>
  )
}

export default MovieCard
