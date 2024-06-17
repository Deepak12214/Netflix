import Header from './Header'
import MainContainer from './MainContainer'
import SecondContainer from './SecondContainer'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import useTrendingMovie from '../hooks/useTrendingMovie'
const Browse = () => {
  useNowPlayingMovies();
  useTrendingMovie();
  return (
    <div className='scroll-smooth'>
      <Header/>
      <MainContainer/>
      <SecondContainer/>
    </div>
  )
}

export default Browse
