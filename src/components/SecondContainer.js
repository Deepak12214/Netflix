import { useSelector } from "react-redux"
import MovieList from "./MovieList";

const SecondContainer = () => {
  const movies=useSelector((store)=> store.movies.nowPlayingMovies);
  const mov=useSelector((store)=> store.movies.trendingMovies);

  return (
    <div className="div  bg-zinc-950 ">
      <div className=" text-white relative space-y-5 -mt-56">
        <MovieList title="Now Playing" movies={movies} />
        <MovieList title="Trending" movies={mov} />
        <MovieList title="Popular" movies={movies} />
        <MovieList title="New Release" movies={movies} />
        <MovieList title="Horror" movies={movies} />
        <MovieList title="Anime" movies={movies} />

    </div>
    </div>
  )
}

export default SecondContainer
