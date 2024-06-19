import { useParams } from 'react-router-dom';
import MainContainerInfo from './MainContainerInfo';
import useMovieInfo from '../hooks/useMovieInfo';
import { useSelector } from 'react-redux';
import Similar from './Similar';
import Recommended from './Recommended';


const MoviesInfo = () => {
  const { resId } = useParams();
  useMovieInfo(resId);
  const store = useSelector((store)=>store.movies);
  const data = store.movieInfo;
  if(!data) return ;
  return (
    <div>
      <MainContainerInfo movieInfo={data} />
      <div className="div p-2 space-y-10 pt-4  bg-[#0f0f0f] text-white ">
        <Similar/>
        <Recommended/>
      </div>
    </div>
  );
};

export default MoviesInfo;
