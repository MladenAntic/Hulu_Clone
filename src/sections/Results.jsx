import React, { useEffect, useState } from "react";
import VideoCard from "../components/VideoCard";
import axios from "../axios";
import FlipMove from "react-flip-move";

const Results = ({ selectedOption }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);

      return request;
    }

    fetchData();
  }, [selectedOption]);

  return (
    <div className="flex justify-center flex-wrap">
      {movies.map((movie) => (
        <FlipMove>
          <VideoCard key={movie.id} movie={movie} />
        </FlipMove>
      ))}
    </div>
  );
};

export default Results;
