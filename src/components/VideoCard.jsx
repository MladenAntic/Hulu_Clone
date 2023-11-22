import React, { forwardRef } from "react";
import TextTruncate from "react-text-truncate";
import ThumbUpSharpIcon from "@mui/icons-material/ThumbUpSharp";
import { CImage } from "@coreui/react";

const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div
      ref={ref}
      className="text-white w-[28.125rem] mt-[3.125rem] px-[1.25rem] duration-100 hover:scale-110 cursor-pointer group"
    >
      <CImage
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt="Movie Poster"
        className="object-contain mb-3"
        fluid
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      <h2 className="pt-[0.625rem] text-2xl">{movie.title || movie.original_name}</h2>
      <p className="flex items-center gap-[0.3125rem] opacity-0 group-hover:opacity-100">
        {movie.release_date || movie.first_air_date} • <ThumbUpSharpIcon />
        {movie.vote_count}
      </p>
    </div>
  );
});

export default VideoCard;
