import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import Filter from "./filter";

export default function Navbar({modalOpen}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
     
      <div className="flex justify-center items-center mt-3">
        <div className="h-[80px] bg-white shadow-md border rounded-full flex flex-row w-auto lg:w-auto sm:w-full px-4">
       
          <div className="flex justify-center items-center w-20">
            <img
              className="w-10"
              src="https://www.cybermindworks.com/images/cmwlogo.svg"
              alt="Logo"
            />
          </div>

         
          <div className="hidden lg:flex justify-center items-center flex-grow">
            <ul className="flex m-5 gap-16 font-semibold">
              <li>Home</li>
              <li>Find Jobs</li>
              <li>Find Talents</li>
              <li>About Us</li>
              <li>Testimonials</li>
            </ul>
          </div>

         
          <div className="hidden lg:flex justify-center items-center mr-10">
            <button className="bg-violet-600 h-[38px] px-5 rounded-full flex justify-center items-center text-white"
               onClick={()=>modalOpen(true)}
            >
              Create Jobs
            </button>
          </div>

        
          <div className="lg:hidden flex items-center">
            <button
              className="text-gray-700 text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

     
      {menuOpen && (
        <div className="bg-white shadow-md border rounded-lg mt-2 mx-4 lg:hidden">
          <ul className="flex flex-col p-4 gap-3 font-semibold">
            <li>Home</li>
            <li>Find Jobs</li>
            <li>Find Talents</li>
            <li>About Us</li>
            <li>Testimonials</li>
            <li>
              <button className="bg-violet-600 h-[38px] w-full rounded-full flex justify-center items-center text-white">
                Create Jobs
              </button>
            </li>
          </ul>
        </div>
      )}

      
      {/* <div>
        <Filter />
      </div> */}
    </div>
  );
}
