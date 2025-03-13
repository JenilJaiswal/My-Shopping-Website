import {Link} from 'react-router-dom'
import{HiBars3BottomRight, HiOutlineShoppingBag, HiOutlineUser} from 'react-icons/hi2'
import SearchBar from './SearchBar';
const Navbar = () => {
  return (
    <>
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
            {/* Logo Left */}
            <div>
                <Link 
                    to="/" 
                    className="text-2xl font-medium">
                        JENIL
                </Link>
            </div>
            {/* Center Navigation Link */}
            <div className="hidden md:flex space-x-6">
                <Link 
                    to="#" 
                    className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                        Men
                </Link>
                <Link 
                    to="#" 
                    className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                        Women
                </Link>
                <Link 
                    to="#" 
                    className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                        Top wear
                </Link>
                <Link 
                    to="#" 
                    className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                        Bottom wear
                </Link>
            </div>
            {/* Right Icons */}
            <div className="flex items-center space-x-4">
                <Link to="/profile" className="text-gray-700 hover:text-black">
                    <HiOutlineUser className="text-gray-700 h-7 w-7" />
                </Link>
                <button className="h-7 w-8 text-gray-700">
                    <HiOutlineShoppingBag className="h-7 w-7 text-gray-700" />
                    <span className="absolute -top-1 bg-red-700 text-white text-xs rounded-full px-2 py-1 my-15">
                     4
                    </span>
                </button>
                {/* Search */}
                    <SearchBar />
                <button md:hidden>
                    <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
                </button>
            </div>
        </nav>
    </>
  );
}

export default Navbar;
