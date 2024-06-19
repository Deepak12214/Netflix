import React from 'react'
import MovieCart from './MovieCart'

const MovieList = ({title,movies}) => {

  return (<div className='pl-2 '>
      <h1 className='text-2xl font-semibold pb-4'>{title}</h1>
    <div className='flex overflow-x-scroll scroll-smooth no-scrollbar '>
    <div className='flex gap-4 '>
      {movies &&  movies?.map((movie) => <MovieCart key={movie.id} id={movie.id} poster={movie.poster_path}/>)}
    </div>
    </div>
    </div>
  )
}

export default MovieList
