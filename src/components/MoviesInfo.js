import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainContainerInfo from './MainContainerInfo';
import { options } from '../utils/constants';
import MovieList from './MovieList';

const MoviesInfo = () => {
  const [data, setData] = useState({});
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommendationMovies, setRecommendationMovies] = useState([]);
  const { resId } = useParams();

  const getMovieInfo = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${resId}?language=en-US`, options);
    const json = await response.json();
    setData(json);
    console.log('Movie Info:', json);
  };

  const getSimilarMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${resId}/similar?language=en-US`, options);
    const json = await response.json();
    setSimilarMovies(json.results);  
    console.log('Similar Movies:', json);
  };

  const getRecommendationMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${resId}/recommendations?language=en-US`, options);
    const json = await response.json();
    setRecommendationMovies(json.results);  
    console.log('Recommended Movies:', json);
  };

  
  useEffect(() => {
    getMovieInfo();
    getRecommendationMovies();
    getSimilarMovies();

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [resId]); 
 
  return (
    <div>
      <MainContainerInfo movieInfo={data} />
      <div className="div  bg-zinc-950 text-white ">
      <MovieList title={"Similar Movies"} movies={similarMovies} />
      <MovieList title={"Recommendation Movies"} movies={recommendationMovies} />
      </div>
    </div>
  );
};

export default MoviesInfo;
