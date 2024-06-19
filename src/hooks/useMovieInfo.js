import { useDispatch } from "react-redux";
import {addMovieInfo} from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";


const useMovieInfo = (resId) => {
    const dispatch= useDispatch();
    const getMovieInfo= async ()=>{
        const response = await fetch(`https://api.themoviedb.org/3/movie/${resId}?language=en-US`, options);
        const json = await response.json();
      dispatch(addMovieInfo(json));
    };
    useEffect(()=>{
      getMovieInfo();
      window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    },[resId]);
}
export default useMovieInfo
