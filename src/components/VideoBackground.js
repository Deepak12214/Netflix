import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
const VideoBackground = ({ id }) => {
  useMovieTrailer(id);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  return (
    <div className="">
      <iframe
        id="youtube-video"
        className="w-full aspect-video pointer-events-none"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
