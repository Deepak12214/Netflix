import Header from './Header';
import MoviesAbout from './MoviesAbout';
import VideoBackground from './VideoBackground'
const VideoFirstContainer = ({resId,MovieInfo}) => {
    const {original_title, overview,release_date,original_language,popularity , id,backdrop_path ,genres,runtime ,revenue,tagline} =MovieInfo;
  return (
    <div>
        <Header bool={null}/>
        <div className="video-info flex justify-around">
            <div className="w-2/3">
            <VideoBackground id={resId}/>
            </div>
            <div className="info w-3/12 ">
            <MoviesAbout title={original_title} overview={overview} release_date={release_date} original_language={original_language} genres={genres} runtime={runtime} revenue={revenue} tagline={tagline}  popularity={popularity}
            style={null} id={id}/>
            </div>
        </div>
    </div>
  )
}

export default VideoFirstContainer
