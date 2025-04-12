import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';


const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <header className="flex flex-col w-full bg-white border-b border-gray-200">
      {/* Main header row */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left section with menu and logo */}
        <div className="flex items-center gap-4">
          <button className="lg:hidden text-2xl text-gray-700">
            <HiMenu />
          </button>
          <h1 className="font-bold text-xl tracking-tight">
            <Link to="/" className="text-gray-800">
              <span className="text-blue-500">Property</span>
              <span className="text-gray-800">Noma</span>
            </Link>
          </h1>
        </div>

        {/* Center section with nav and search - hidden on mobile */}
        <div className="hidden lg:flex items-center gap-6 flex-1 justify-center max-w-4xl"> 
          <nav className="flex items-center gap-8">
            <div className="flex items-center gap-1 cursor-pointer">
              <span className="text-[15px] font-medium">Properties</span>
              
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <span className="text-[15px] font-medium">Explore</span>
              
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <span className="text-[15px] font-medium">Find Agents</span>
              
            </div>
            <Link to="/blog" className="text-[15px] font-medium">
              Blog
            </Link>
          </nav>

          {/* Desktop search */}
          <div className="relative flex-1 min-w-[280px]">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full bg-gray-100 px-4 py-3 pl-12 rounded-lg text-[15px] focus:outline-none focus:bg-gray-50 transition-colors"
            />
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          </div>
        </div>

        {/* Right section with search icon and login */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsSearchVisible(!isSearchVisible)}
            className="lg:hidden p-2 text-gray-700"
          >
            <FaSearch className="text-xl" />
          </button>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/signup"
              className="px-4 py-2 text-[15px] font-medium hover:text-gray-600"
            >
              Sign up
            </Link>
          </div>
          <Link
            to="/login"
            className="px-4 py-2 text-[15px] font-medium text-white bg-[#0D0C22] rounded-lg hover:bg-gray-800"
          >
            Log in
          </Link>
        </div>
      </div>

      {/* Mobile search bar - shown when search is clicked */}
      {isSearchVisible && (
        <div className="lg:hidden px-4 py-3 border-t border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full bg-gray-100 px-4 py-3 pl-12 rounded-lg text-[15px] focus:outline-none focus:bg-gray-50 transition-colors"
            />
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;


