import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import useSimilarMovies from "../hooks/useSimilarMovies";
import { useParams } from "react-router-dom";

const Similar = () => {
const { resId } = useParams();
useSimilarMovies(resId);
const store = useSelector((store)=>store.movies);
const similarMovies = store.similarMovies;
if(!similarMovies) return;
  return (
    <div>
      <MovieList title={"Similar Movies"} movies={similarMovies} />
    </div>
  )
}

export default Similar
