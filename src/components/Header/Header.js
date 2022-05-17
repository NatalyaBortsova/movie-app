import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import user from "../../assets/user.png";
import "./Header.scss";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if(term === '') return alert('Please enter search term!')
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm('');
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav nav">
          <div className="logo">
            {" "}
            <Link to="/">Movie React-App </Link>
          </div>
          <div className="header__search search">
            <form action="#" className="search__form" onSubmit={submitHandler}>
              <input
                className="search__input"
                type="text"
                name="search"
                id="search"
                value={term}
                placeholder="Search movies or shows"
                onChange={(e) => setTerm(e.target.value)}
              />
              <button className="search__button" type="submit">
                <FaSearch />
              </button>
            </form>
          </div>
          <div className="header__user user-image">
            <img src={user} alt="user" height={38} width={38} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
