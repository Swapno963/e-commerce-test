import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import daraz from "../assets/daraz.png";

export default function NavBar() {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Submitted value:", inputValue);
    navigate(`/search/${inputValue}`);
  };
  return (
    <div>
      <div className="w-full sm:w-4/5 mx-auto flex-row sm:flex sm:justify-around  justify-around items-center bg-[#F85606] rounded-md">
        <div className="flex justify-center">
          <a href="/">
            <img className="w-[150px]" src={daraz} alt="" />
          </a>
        </div>
        <div className="flex justify-center">
          <input
            onChange={handleInputChange}
            className="h-[40px] rounded-lg sm:w-[400px] w-[343px] py-2 px-3 border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 shadow-sm transition duration-300 ease-in-out"
            type="text"
            name=""
            id=""
          />
          <button
            onClick={handleSearch}
            type="submit"
            className="bg-blue-500 text-white px-3 py-1 ml-2 rounded-md"
          >
            Search
          </button>
        </div>
        <div className="flex justify-center text-gray-100  font-bold gap-8 sm:pb-0 py-4">
          <a className="hover:text-white" href="/create">
            Create product
          </a>
          <a className="hover:text-white" href="/login">
            Log In
          </a>
          <a className="hover:text-white" href="/register">
            Register
          </a>
        </div>
      </div>
    </div>
  );
}
