import React from "react";

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <div className="text-black flex justify-center ">
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        className="py-1 px-4 md:w-96 w-48 rounded-lg "
        placeholder="Search ..."
      />
    </div>
  );
};
