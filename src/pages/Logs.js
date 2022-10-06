import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogRow from "../components/LogRow";

const Logs = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getLogsData() {
      fetch("https://api.github.com/repos/brixlist/brixlist/commits")
        .then((response) => response.json())
        .then((actualData) => setData(actualData))
        .catch((err) => {
          console.log(err.message);
        });
    }

    getLogsData();
  }, []);

  return (
    <>
      <div className="p-4">
        <Link to="/" className="underline underline-offset-2">
          <div className="flex flex-row justify-left items-center gap-x-2 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
            <p>Home</p>
          </div>
        </Link>
        {data ? (
          data.map((d, key) => {
            return (
              <>
                <LogRow key={d.node_id} props={d} />
              </>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Logs;
