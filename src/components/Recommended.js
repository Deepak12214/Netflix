import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { useParams } from "react-router-dom";
import useRecommendationMovies from "../hooks/useRecommendationMovies";

const Recommended = () => {
const { resId } = useParams();
useRecommendationMovies(resId);
const store = useSelector((store)=>store.movies);
const recommendedMovies = store.recommendationMovies;
if(!recommendedMovies) return;
  return (
    <div>
      <MovieList title={"Recommended Movies"} movies={recommendedMovies} />
    </div>
  )
}
export default Recommended
