
const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-full aspect-video pt-72 px-12 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="font-bold text-5xl w-5/12 ">{title}</h1>
      <p className="w-1/3 pt-4">{overview}</p>
      <div className="pt-5">
        <button className="bg-white text-black hover:bg-opacity-70 font-semibold  p-3 px-12 text-xl  rounded-lg ">Play</button>
        <button className="mx-2 bg-gray-500   p-3 px-12 text-xl  bg-opacity-50 rounded-lg ">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
