import { useSelector } from "react-redux";
import useMovieCredit from "../hooks/useMovieCredit";
import Cast_CrewInfo from "./Cast_CrewInfo";
import { useParams } from "react-router-dom";

const Details = () => {
  const { resId } = useParams();
  useMovieCredit(resId);
  const Cast_crew = useSelector((store) => store.movies.movieCreadits);
  if (!Cast_crew) return null;
  const limitedCast = Cast_crew.cast.slice(0, 10);

  return (
    <div>
      <h2 className="text-2xl pb-3">Top 10 Cast Members</h2>
      <div className="Cast flex flex-wrap   gap-5">
        {limitedCast.map((cast) => (
          <Cast_CrewInfo
            key={cast.id}
            character={cast.character}
            original_name={cast.original_name}
            profile_path={cast.profile_path}
            popularity={cast.popularity}
          />
        ))}
      </div>
    </div>
  );
}

export default Details;
