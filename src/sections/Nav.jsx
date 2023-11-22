import React from "react";
import requests from "../request";

const Nav = ({ setSelectedOption }) => {
  return (
    <nav className="relative">
      <div className="flex text-white overflow-x-scroll overflow-y-hidden scrollbar-hide px-[2.5rem] whitespace-nowrap text-2xl">
        <h2
          className="cursor-pointer mx-[2.8125rem] opacity-70 hover:opacity-100 hover:scale-125 duration-200"
          onClick={() => setSelectedOption(requests.fetchTrending)}
        >
          Trending
        </h2>
        <h2
          className="cursor-pointer mx-[2.8125rem] opacity-70 hover:opacity-100 hover:scale-125 duration-200"
          onClick={() => setSelectedOption(requests.fetchTopRated)}
        >
          Top Rated
        </h2>
        <h2
          className="cursor-pointer mx-[2.8125rem] opacity-70 hover:opacity-100 hover:scale-125 duration-200"
          onClick={() => setSelectedOption(requests.fetchActionMovies)}
        >
          Action
        </h2>
        <h2
          className="cursor-pointer mx-[2.8125rem] opacity-70 hover:opacity-100 hover:scale-125 duration-200"
          onClick={() => setSelectedOption(requests.fetchComedyMovies)}
        >
          Comedy
        </h2>
        <h2
          className="cursor-pointer mx-[2.8125rem] opacity-70 hover:opacity-100 hover:scale-125 duration-200"
          onClick={() => setSelectedOption(requests.fetchHorrorMovies)}
        >
          Horror
        </h2>
        <h2
          className="cursor-pointer mx-[2.8125rem] opacity-70 hover:opacity-100 hover:scale-125 duration-200"
          onClick={() => setSelectedOption(requests.fetchRomanceMovies)}
        >
          Romance
        </h2>
        <h2
          className="cursor-pointer mx-[2.8125rem] opacity-70 hover:opacity-100 hover:scale-125 duration-200"
          onClick={() => setSelectedOption(requests.fetchMystery)}
        >
          Mystery
        </h2>
        <h2
          className="cursor-pointer mx-[2.8125rem] opacity-70 hover:opacity-100 hover:scale-125 duration-200"
          onClick={() => setSelectedOption(requests.fetchSciFi)}
        >
          Sci-fi
        </h2>
        <h2
          className="cursor-pointer mx-[2.8125rem] opacity-70 hover:opacity-100 hover:scale-125 duration-200"
          onClick={() => setSelectedOption(requests.fetchWestern)}
        >
          Western
        </h2>
        <h2
          className="cursor-pointer mx-[2.8125rem] opacity-70 hover:opacity-100 hover:scale-125 duration-200"
          onClick={() => setSelectedOption(requests.fetchAnimation)}
        >
          Animation
        </h2>
        <h2
          className="cursor-pointer mx-[2.8125rem] opacity-70 hover:opacity-100 hover:scale-125 duration-200"
          onClick={() => setSelectedOption(requests.fetchAnimation)}
        >
          TV Movie
        </h2>
      </div>

      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12"></div>
    </nav>
  );
};

export default Nav;
