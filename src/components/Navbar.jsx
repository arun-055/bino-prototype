import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-gray-900 w-full shadow-lg sticky top-0 z-50">
      
     
      <div className="text-4xl font-bold text-green-500">
        Bino
      </div>

    
      <div className="flex gap-4 text-white mr-3">
        <Link to="/" className="hover:text-mauve-900 font-semibold ">
          <div className="bg-indigo-400 p-2 rounded-full hover:bg-indigo-300">
            Home
            </div>
        </Link>

        <Link to="/watchlist" className="hover:text-mauve-900 font-semibold">
         <div className="bg-indigo-400 p-2 rounded-full hover:bg-indigo-300">
            Watchlist
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;