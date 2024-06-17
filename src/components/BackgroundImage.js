const BackgroundImage = ({poster}) => {
  return (
    <div className=" flex-none w-full h-screen overflow-hidden rounded">
      <img className=' object-cover rounded-lg' src={`https://image.tmdb.org/t/p/original` + poster} alt="Movies Poster" />
    </div>
  )
}

export default BackgroundImage
