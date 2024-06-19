const Cast_CrewInfo = ({character,original_name,profile_path,popularity
}) => {
  return (
    <div className="rounded-xl w-[12%] text-sm p-2 bg-slate-800 shadow-2xl shadow-slate-950 text-white bg-gradient-to-r from-black ">
    <div>
      <img className="rounded-xl" src={`https://image.tmdb.org/t/p/original${profile_path}`}  alt="Cast_Photo" />
    </div>
    <div className="">
            <h1>{original_name}</h1>
            <h2>Character : {character}</h2>
            <h3>Popularity : {popularity}</h3>
    </div>
    </div>
  )
}

export default Cast_CrewInfo
