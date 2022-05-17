import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { FaThumbsUp, FaCalendar } from "react-icons/fa";
import { FcFilmReel } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from "../../features/movies/movieSlice";

import "./MovieDetail.scss";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  console.log(data);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);

  return (
    <div className="movie-info">
      {Object.keys(data).length === 0 ? (
        <div className="movie-info__loading">...Loading</div>
      ) : (
        <>
          <div className="movie-info__content">
            <h2 className="movie-info__title">{data.Title}</h2>
            <div className="movie-info__rating">
              <span>
                IMBD Rating <AiFillStar style={{ color: "#ff9e00" }} />:{" "}
                {data.imdbRating}
              </span>
              <span>
                IMBD Votes <FaThumbsUp style={{ color: "#fafafa" }} />:{" "}
                {data.imdbVotes}
              </span>
              <span>
                Runtime <FcFilmReel />: {data.Runtime}
              </span>
              <span>
                Year <FaCalendar style={{ color: "pink" }} />: {data.Year}
              </span>
            </div>
            <div className="movie-info__text">{data.Plot}</div>
            <div className="movie-info__descr">
              <div>
                <span>Director</span> <span>{data.Director}</span>
              </div>
              <div>
                <span>Actors</span> <span>{data.Actors}</span>
              </div>
              <div>
                <span>Genres</span> <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="movie-info__image">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
