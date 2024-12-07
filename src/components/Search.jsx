import React from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

const Search = () => {
  return (
    <div className="w-8/12">
      <div className="px-6 py-4 bg-white rounded-md flex justify-between">
        <div className="flex items-center bg-white">
          {" "}
          <CiSearch className="w-5 h-5 bg-white" />
          <input
            type="text"
            placeholder="Search hare"
            className="bg-white/80 px-8 py-2 outline-none"
          />
        </div>
        <div className="flex items-center bg-white">
          {" "}
          <HiOutlineAdjustmentsHorizontal className="w-7 H-7 bg-white" /> Filter
        </div>{" "}
      </div>
    </div>
  );
};

export default Search;
