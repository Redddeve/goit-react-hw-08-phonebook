import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div
      className=" flex
     justify-center items-center"
    >
      <div>
        <h2 className="text-4xl font-bold">Oops, page not found!</h2>
        <Link className="text-teal-500 underline" to="/">
          Go back to homepage
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
