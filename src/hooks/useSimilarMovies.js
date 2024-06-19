import { useDispatch } from "react-redux";
import {addSimilarMovies} from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";


const useSimilarMovies = (resId) => {
    const dispatch= useDispatch();
    const getSimilarMovies= async ()=>{
      const data= await fetch(`https://api.themoviedb.org/3/movie/${resId}/similar?language=en-US&page=1`, options);
      const json= await data.json();
      dispatch(addSimilarMovies(json.results));
    };
    useEffect(()=>{
        getSimilarMovies();
    },[resId]);
}

export default useSimilarMovies;