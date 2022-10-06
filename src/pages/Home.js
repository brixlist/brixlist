import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="w-screen h-screen p-4 flex justify-center items-center">
        <p className="leading-relaxed">
          Hi, we are currently building out first app, check logs{" "}
          <Link to="/logs">
            <span className="text-red-600 underline underline-offset-2">here</span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Home;
