import React, { useState } from "react";
import googleLogo from "../images/googlelogo.png";
import { BiSearchAlt2 } from "react-icons/bi";
import { ImMic } from "react-icons/im";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${searchInput}`);
    // console.log("searched  for", searchInput);
  };

  return (
    <>
      <Header />
      <main>
        <img className="banner" src={googleLogo} alt="google" />
        {/* <div className="search-bar-container"> */}
        <form onSubmit={handleSearch} className="search-bar-container">
          <BiSearchAlt2 />
          <input
            className="search-bar"
            type={"text"}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <ImMic className="microphone-search" />
        </form>
        {/* </div> */}
        <div className="btn-container">
          <button>Google Search</button>
          <button>I'm Feeling Lucky</button>
        </div>
      </main>
    </>
  );
};
export default Home;
