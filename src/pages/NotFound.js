import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const redirectTo = () => {
    navigate("/");
  };
  return (
    <>
      <h1>NotFound</h1>
      <button onClick={redirectTo}>Home</button>
    </>
  );
}

export default NotFound;
