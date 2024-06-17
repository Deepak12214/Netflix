import React from 'react'

const MoviesAbout = ({title, overview,release_date,original_language,popularity , id,backdrop_path ,genres,runtime ,revenue,tagline}) => {
  return (<>
        <div className="info w-full h-screen pt-60 px-12 absolute text-white bg-gradient-to-r from-black ">
            <h1 className="font-bold text-5xl w-8/12 ">{title}</h1>
            <div className="w-7/12 pt-20">{overview}</div>
            <div className="flex pt-2 gap-4 opacity-70 ">
                <p>IMDb : 8.2</p>
                <p>{Math.floor(runtime/60)} h {(runtime%60)} min</p>
                <p>{original_language==="en"?"English":"Hindi"}</p>
                <p>{isNaN(parseInt(release_date)) ? release_date : parseInt(release_date)}</p>
                <p className='bg-gray-700 px-1 '>X-RAY</p>
                <p className='bg-gray-700 px-1'>HDR</p>
                <p className='bg-gray-700 px-1' >UHD</p>
                <p className='bg-gray-700 px-1' >U/A 13+</p>
          </div>
          <div className="genre">
              <ul  className='underline flex gap-3'>
                  {genres &&  genres.map((genre)=>{
                    return (
                      <li key={genre.name}>{genre.name}</li>
                    )
                  })
                  
                  }
            </ul>
          </div>

          <div className="member flex items-center pt-5">
              <img className="w-4 h-4 mr-1 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Eo_circle_light-blue_checkmark.svg/1200px-Eo_circle_light-blue_checkmark.svg.png" alt="gold" />
              <p>Watch with a Prime membership</p>
          </div>

          <div className="flex my-2 ">
          <div className='bg-white text-black hover:opacity-90 hover:text-gray-700 p-4 px-5 text-lg rounded-lg hover:scale-110 transform transition duration-50000'>Watch with Prime</div>
          <div className="mx-4 text- bg-gray-600   px-5 hover:text-black hover:bg-white hover:scale-110 bg-opacity-50 rounded-lg pt-2transform transition duration-50000 ">
            <p>Rent movie</p>
            <p className='-mt-1'>UHD <del>₹370</del> ₹279</p>
          </div>
          <div className=" text- bg-gray-600   px-5 hover:text-black hover:bg-white hover:scale-110 bg-opacity-50 rounded-lg pt-2 transform transition duration-50000">
            <p>More purchase</p>
            <p className='-mt-1'>options</p>
          </div>

          <div className="mx-4 icon flex gap-3 items-center">
          <div className="hover:scale-125  hover:bg-white bg-gray-600 bg-opacity-50  p-2 rounded-full transform transition duration-50000 "><img className='invert w-8 h-8 hover:invert-0' src="https://img.icons8.com/?size=100&id=60979&format=png&color=000000" alt="" /></div>
          <div className="hover:scale-125  hover:bg-white bg-gray-600 bg-opacity-50  p-2 rounded-full transform transition duration-50000 "><img className='invert w-8 h-8 hover:invert-0' src="https://img.icons8.com/?size=100&id=3220&format=png&color=000000" alt="" /></div>
          <div className="hover:scale-125  hover:bg-white bg-gray-600 bg-opacity-50  p-2 rounded-full transform transition duration-50000 "><img className='invert w-8 h-8 hover:invert-0' src="https://img.icons8.com/?size=100&id=3RR8QoUJMAri&format=png&color=000000" alt="" /></div>
          <div className="hover:scale-125  hover:bg-white bg-gray-600 bg-opacity-50  p-2 rounded-full transform transition duration-50000 "><img className='invert w-8 h-8 hover:invert-0' src="https://img.icons8.com/?size=100&id=87706&format=png&color=000000" alt="" /></div>
          <div className="hover:scale-125  hover:bg-white bg-gray-600 bg-opacity-50  p-2 rounded-full transform transition duration-50000 "><img className='invert w-8 h-8 hover:invert-0' src="https://img.icons8.com/?size=100&id=8nzTB8GBZSIN&format=png&color=000000" alt="" /></div>
          </div>

          </div>

        <p>Rentals include 30 days to start watching this video and 48 hours to finish once started</p>
    </div>

    </>


  )
}

export default MoviesAbout
