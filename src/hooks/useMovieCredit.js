import { useDispatch } from "react-redux";
import {addMovieCreadits} from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";


const useMovieCredit = (resId) => {
    const dispatch= useDispatch();
    const getMovieCredit= async ()=>{
      const data= await fetch('https://api.themoviedb.org/3/movie/'+resId+'/credits?language=en-US', options)
      const json= await data.json();
      console.log(json);
      dispatch(addMovieCreadits(json));
    };
    useEffect(()=>{
        getMovieCredit();
    },[]);
}
export default useMovieCredit;