import { useState } from "react";
import {HiMagnifyingGlass, HiMiniXMark} from "react-icons/hi2";
const SearchBar = () => {
    const [searchTerm,setSearchTerm] = useState("");
    const [isOpen,setIsOpen] = useState(false);

    const handleSearchToggle = () => {
      setIsOpen(!isOpen);
    };

    const handleSearch = (e) => {
      e.preventDefault;
      console.log("searchTerm",searchTerm);
      setIsOpen(false);
    };

  return (
    <div className={`flex items-center justify-center w-full transition-all duration-10 ${isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"}`}>
      {isOpen ? 
      (<form 
        onSubmit={handleSearch}
        className="relative flex items-center justify-center w-full">
        <div className="relative w-1/2">
          <input 
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            className="bg-gray-200 py-2 pl-4 pr-4 rounded-lg focus:outline-none w-full placeholder:text-gray-700"
          />
          {/* Search Icon */}
          <button 
            type="submit"
            className="absolute -right-1 top-1/2 transform -translate-1/2 text-gray-600 hover:text-gray-800">
            <HiMagnifyingGlass className="h-6 w-6" />
          </button>
        </div>
        {/* Close Button */}
        <button 
          onClick={handleSearchToggle}
          type="button"
          className="absolute bg-gray-500 rounded-full right-85 top-1/2 transform -translate-y-1/2 text-gray-900 hover:text-gray-400 overflow-hidden">
          <HiMiniXMark className="h-7 w-7" />   
        </button>
      </form>) 
      : 
      (<button onClick={handleSearchToggle}>
        <HiMagnifyingGlass className="h-7 w-7"/>
      </button>)}
    </div>
  );
}

export default SearchBar;
