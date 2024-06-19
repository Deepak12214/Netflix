import { useDispatch } from "react-redux";
import {addRecommendationMovies} from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";


const useRecommendationMovies = (resId) => {
    const dispatch= useDispatch();
    const getRecommendationMovies= async ()=>{
      const data=await  
      fetch('https://api.themoviedb.org/3/movie/'+resId+'/recommendations?language=en-US&page=1', options)
      const json= await data.json();
      dispatch(addRecommendationMovies(json.results));
      console.log(json);
    };
    useEffect(()=>{
        getRecommendationMovies();
    },[resId]);
}

export default useRecommendationMovies
