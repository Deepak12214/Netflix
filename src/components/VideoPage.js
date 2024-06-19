import { Outlet,NavLink, useParams } from 'react-router-dom'
import useMovieInfo from '../hooks/useMovieInfo'
import { useSelector } from 'react-redux';
import VideoFirstContainer from './VideoFirstContainer';
const VideoPage = () => {
    const {resId}=useParams();
    useMovieInfo(resId);
    const MovieInfo=useSelector((store)=>store.movies.movieInfo);
    if(!MovieInfo) return ;
  return (
  <div className='bg-[#0f0f0f]' >
        <VideoFirstContainer resId={resId} MovieInfo={MovieInfo}/>
        <div className="p-3 flex justify-center">
      <div className=" text-white   w-11/12  ">
        <ul className="flex justify-center  gap-6 text-sm items-center" >
            <NavLink to="Detail"  className={({ isActive }) => (isActive ? '  bg-white text-black border-4 border-red-700 rounded-2xl shadow-black shadow-3xl py-2.5 px-5  ' : 'bg-red-700 bg-gradient-to-r from-black rounded-2xl shadow-black shadow-3xl py-2.5 px-5')} ><li>Details</li>
            </NavLink>

            <NavLink to="Similar" className={({ isActive }) => (isActive ? ' bg-white text-black border-4 border-red-700 rounded-2xl shadow-black shadow-3xl py-2.5 px-5  ' : 'bg-red-700 bg-gradient-to-r from-black rounded-2xl shadow-black shadow-3xl py-2.5 px-5')}><li>Similar Movies</li></NavLink>

            <NavLink to="Recommended" className={({ isActive }) => (isActive ? '  bg-white text-black border-4 border-red-700 rounded-2xl shadow-black shadow-3xl py-2.5 px-5  ' : 'bg-red-700 bg-gradient-to-r from-black rounded-2xl shadow-black shadow-3xl py-2.5 px-5')}><li>Recommended Movies</li></NavLink>

        </ul>
      </div>
    </div>
    <div className=" text-white px-5">
      <Outlet/>
    </div>
    </div>
  )
}

export default VideoPage;