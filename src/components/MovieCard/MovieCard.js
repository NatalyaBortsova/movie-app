import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss";

const MovieCard = (props) => {
  const { data } = props;
  return (
    <article className="card">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="card__image">
          <img src={data.Poster} alt={data.Title} width={265} height={300} />
        </div>
        <div className="card__bottom">
          <h2 className="card__title">{data.Title}</h2>
          <div className="card__date">{data.Year}</div>
        </div>
      </Link>
    </article>
  );
};

export default MovieCard;
