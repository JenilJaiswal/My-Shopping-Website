import { FiPhoneCall } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0 border-t border-black">
            <div>
                <h3 className="text-lg text-gray-800 mb-4 ml-6">Newsletter</h3>
                <p className="text-gray-500 mb-4 ml-6">
                    Be the first to hear about new products, exclusive events and online offers.
                </p>
                <p className="ml-6">Sign up to get 10% off on your 1st order</p>

                {/* News letter form */}

                <form className="flex mt-4 ml-6">
                    <input 
                        type="email" 
                        placeholder="Email Address..." 
                        className="p-3 w-full border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all" 
                        required 
                    />
                    <button type="submit" className="bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all">Subscribe</button>
                </form>
            </div>
            {/* Shop Links */}
            <div>
                <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
                <ul className="space-y-2 text-gray-600">
                    <li>
                        <Link to="#" className="hover:text-gray-500">
                            Men's Top Wear
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:text-gray-500 transition-colors" >Women's Top Wear</Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:text-gray-500 transition-colors" >Men's Bottom Wear</Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:text-gray-500 transition-colors" >Women's Bottom Wear</Link>
                    </li>
                </ul>
            </div>
            {/* Support Links */}
            <div>
                <h3 className="text-lg text-gray-800 mb-4">Support</h3>
                <ul className="space-y-2 text-gray-600">
                    <li>
                        <Link to="#" className="hover:text-gray-500">
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:text-gray-500 transition-colors">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:text-gray-500 transition-colors">
                            FAQs
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:text-gray-500 transition-colors">
                            Features
                        </Link>
                    </li>
                </ul>
            </div>
            {/* Follow us */}
            <div>
                <h3 className="text-lg text-gray-800 mb-4">
                    Follow Us
                </h3>
                <div className="flex items-center space-x-4 mb-6">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
                        <TbBrandMeta className="h-7 w-7"/>
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
                        <IoLogoInstagram className="h-7 w-7"/>
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
                        <RiTwitterXLine className="h-6 w-6"/>
                    </a>
                </div>
                <p className="text-gray-500">Call Us</p>
                <p>
                    <FiPhoneCall className="inline-block mr-2"/>
                    +91 90817 82582
                </p>
            </div>
        </div>
        <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-300 pt-6">
            <p className="text-gray-500 text-sm text-center tracking-tighter">© 2025, All rights were reserved</p>
        </div>
    </footer>
  );
}

export default Footer;
