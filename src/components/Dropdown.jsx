import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({ selectedNumber, setSelectedNumber }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleNumberSelect = (number) => {
    setSelectedNumber(number);
    setIsOpen(false);
    console.log(number);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {selectedNumber !== null
          ? `Selected: ${selectedNumber}`
          : "Select a number"}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
          <div className="py-1">
            {numbers.map((number) => (
              <a
                key={number}
                href="#"
                onClick={() => handleNumberSelect(number)}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                {number}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
