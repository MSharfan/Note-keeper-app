import React from "react";
import { FaBook } from "react-icons/fa";

function LoadingPage() {
  return (
    <div className="loading-container">
      <div className="loader">
        <FaBook className="loading-icon" />
      </div>
      <h2 className="loading-text">Note Keeper</h2>
    </div>
  );
}

export default LoadingPage;
