import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <h3>NOT FOUND</h3>
          <Link to="/login">Go Back</Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
