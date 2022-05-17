import React from "react";
import Slider from "react-slick";
import { Settings } from "../../common/settings";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";

import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  let renderMovies,
    renderShows = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show, index) => <MovieCard key={index} data={show} />)
    ) : (
      <div className="movies-error">
        <h3>{shows.Error}</h3>
      </div>
    );

  return (
    <>
      <div className="movie-block">
        <h2 className="movie-block__title">Movies</h2>
        <div className="movie-block__inner">
          <Slider {...Settings}>{renderMovies}</Slider>
        </div>
      </div>
      <div className="movie-block">
        <h2 className="movie-block__title">Shows</h2>
        <div className="movie-block__inner"> <Slider {...Settings}>{renderShows}</Slider></div>
      </div>
    </>
  );
};

export default MovieListing;
