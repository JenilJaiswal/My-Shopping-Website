import {Link} from 'react-router-dom'
import{HiBars3BottomRight, HiOutlineShoppingBag, HiOutlineUser} from 'react-icons/hi2'
import SearchBar from './SearchBar';
import CartDrawer from '../Layout/CartDrawer';
import { useState } from 'react';
const Navbar = () => {

    const [drawerOpen,setDrawerOpen] = useState(false);

    const toggleCartDrawer = () =>{
        setDrawerOpen(!drawerOpen);
    }

  return (
    <>
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
            {/* Logo Left */}
            <div className="px-6 mr-10">
                <Link 
                    to="/" 
                    className="text-2xl font-medium">
                        JENIL
                </Link>
            </div>
            {/* Center Navigation Link */}
            <div className="hidden md:flex space-x-6 ml-10">
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
            <div className="flex items-center space-x-4 mr-6">
                <Link to="/profile" className="text-gray-700 hover:text-black">
                    <HiOutlineUser className="text-gray-700 h-7 w-7" />
                </Link>
                <button onClick={toggleCartDrawer} 
                    className="h-7 w-8 text-gray-700">
                    <HiOutlineShoppingBag className="h-7 w-7 text-gray-700" />
                    <span className="absolute -top-1 bg-red-700 text-white text-xs rounded-full px-2 py-1 my-15">
                     4
                    </span>
                </button>
                {/* Search */}
                <div className="overflow-hidden mr-6">   
                    <SearchBar />
                </div>
                <button>
                    <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
                </button>
            </div>
        </nav>
        <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer}/>
    </>
  );
}

export default Navbar;
