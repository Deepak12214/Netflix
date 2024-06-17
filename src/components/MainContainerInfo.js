import BackgroundImage from './BackgroundImage'
import MoviesAbout from './MoviesAbout'
import Header from './Header'
const MainContainerInfo = ({movieInfo}) => {
const {original_title, overview,release_date,original_language,popularity , id,backdrop_path ,genres,runtime ,revenue,tagline} =movieInfo;
console.log(movieInfo);
  return (<>
    <div className="">
      <Header/>
     
      <MoviesAbout title={original_title} overview={overview} release_date={release_date} original_language={original_language} genres={genres} runtime={runtime} revenue={revenue} tagline={tagline}  popularity={popularity}/>
      <BackgroundImage poster={backdrop_path}/>
      </div>
    </>
  )
}

export default MainContainerInfo

/*
-backdrop_path, 
-genres
  -0 - .name 
  -1- . name
-original_language:"en"
-original_title
-overview
-popularity
-release_date
-revenue
-runtime: 167
-
tagline: "Long live the fighters."
*/
