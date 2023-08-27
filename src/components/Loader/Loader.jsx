import React from 'react';
import LoaderImg from "../../images/loader.svg";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="oader flex flex-c">
      <img src = {LoaderImg} alt = "loader" />
    </div>
  )
}

export default Loader
