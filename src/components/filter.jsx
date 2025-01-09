import React, { useEffect, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { IoIosSearch } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

export default function Filter({ setFilter, fetchDatas, filterData }) {
  const [salary, setSalary] = useState(filterData.salary || 0);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSalaryChange = (e) => {
    const value = parseInt(e.target.value, 10); 
    setSalary(value); 
    setFilter(prevState => ({
      ...prevState,
      salary: value
    }));
  };

  useEffect(() => {
    setSalary(filterData.salary || 0); 
  }, [filterData.salary]);

  return (
    <div className="w-full h-auto py-4 shadow-md bg-white">
      <div className="flex flex-col md:flex-row items-center md:items-end h-auto md:h-[80%] gap-4 md:gap-0 m-5 mb-5">
        {/* Search by Job Title */}
        <div className="w-full md:w-1/4 flex justify-center items-end border-b md:border-b-0 md:border-r border-gray-700 pb-2 md:pb-0">
          <div className="flex flex-row gap-2 items-center w-[90%]">
            <IoIosSearch className="w-6 h-6 text-gray-500" />
            <input
              type="text"
              name="jobTitle"
              placeholder="Search By Job Title, Role"
              className="w-full bg-transparent focus:outline-none text-gray-500"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="w-full md:w-1/4 flex justify-center items-end border-b md:border-b-0 md:border-r border-gray-700 pb-2 md:pb-0">
          <div className="flex flex-row gap-2 items-center w-[90%]">
            <IoLocationOutline className="w-6 h-6 text-gray-500" />
            <select
              name="location"
              className="w-full bg-transparent focus:outline-none text-gray-500"
              onChange={handleInputChange}
            >
              <option value="">Select Location</option>
              <option>Bangalore</option>
              <option>Chennai</option>
              <option>Mumbai</option>
            </select>
          </div>
        </div>

        <div className="w-full md:w-1/4 flex justify-center items-end border-b md:border-b-0 md:border-r border-gray-700 pb-2 md:pb-0">
          <div className="flex flex-row gap-2 items-center w-[90%]">
            <FaRegUser className="w-6 h-6 text-gray-500" />
            <select
              name="jobType"
              className="w-full bg-transparent focus:outline-none text-gray-500"
              onChange={handleInputChange}
            >
              <option value="">Job Type</option>
              <option>Full time</option>
              <option>Part time</option>
              <option>Contract</option>
              <option>Internship</option>
            </select>
          </div>
        </div>

        <div className="w-full md:w-1/4 flex flex-col justify-center items-start md:items-center pb-2 md:pb-0">
          <div className="flex flex-row justify-between w-[90%] items-center mb-2">
            <h1 className="text-sm md:text-base text-gray-700">
              Salary Per Annum (LPA)
            </h1>
            <span className="text-sm text-gray-700">{`${salary} LPA`}</span>{" "}
            {/* Display the selected salary */}
          </div>
          <input
            type="range"
            min="0"
            max="50"
            step="1"
            value={salary}
            onChange={handleSalaryChange}
            className="w-[90%]"
          />
          {/* <RangeSlider
            className="w-[90%]"
            value={salary}
            onChange={handleSalaryChange}
            // min={20}
            // max={0}   // Range from 0 to 20 LPA
            step={1}   // Step increment of 1 LPA
          /> */}
        </div>
      </div>
    </div>
  );
}
