import React from "react";
import googleLogo from "../images/googlelogo.png";
import { BiSearchAlt2 } from "react-icons/bi";
import { ImMic } from "react-icons/im";

const Home = () => {
  return (
    <main>
      <img className="banner" src={googleLogo} alt="google" />
      <div className="search-bar-container">
        <BiSearchAlt2 />
        <input className="search-bar" type={"text"} />
        <ImMic className="microphone-search" />
      </div>
      <div className="btn-container">
        <button>Google Search</button>
        <button>I'm Feeling Lucky</button>
      </div>
    </main>
  );
};
export default Home;
