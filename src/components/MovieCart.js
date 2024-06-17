import React from 'react'
import { Link } from 'react-router-dom';

const MovieCart = ({poster,id}) => {
  return (
    <Link to={`/MoviesInfo/${id}`} >
    <div className='w-44'>
        <img className='rounded-lg' src={`https://image.tmdb.org/t/p/original` + poster} alt="Movies Poster" />
    </div>
    </Link>
  )
}

export default MovieCart;