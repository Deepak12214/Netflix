import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";


const useTrendingMovie = () => {
    const dispatch= useDispatch();
    const getTrendingMovie= async ()=>{
      const data= await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options);
      const json= await data.json();
      dispatch(addTrendingMovies(json.results));
    };
    useEffect(()=>{
        getTrendingMovie();
    },[]);
}

export default useTrendingMovie;
