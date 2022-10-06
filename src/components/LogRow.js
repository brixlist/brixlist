import React from "react";

const LogRow = ({ props }) => {
  return (
      <div className="mb-3 flex flex-row justify-start items-center" key={props.node_id}>
        [<span className="text-sm flex justify-center items-center">{props.commit.committer.date.substring(0, 10)}</span>]
        <span className="text-base ml-3 flex justify-center items-center">{props.commit.message}</span>
      </div>
  );
};

export default LogRow;
