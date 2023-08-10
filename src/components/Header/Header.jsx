import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchForm from '../SearchForm/SearchForm';
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            Find your book of choice.
          </h2><br />
          <p className="header-text fs-18 fw-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  )
}

export default Header
