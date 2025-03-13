import {TbBrandMeta} from "react-icons/tb"
import {IoLogoInstagram} from "react-icons/io"
import {RiTwitterXLine} from "react-icons/ri"
const Topbar = () => {
  return (
    <>
        <div className="bg-[#ea2e0e] text-white px-5">
            <div className="container mx-auto flex justify-between items-center py-3 px-5">
                <div className="hidden md:flex items-center space-x-4">
                    <a href="#" className="hover:text-gray-300">
                        <TbBrandMeta className="h-7 w-7"/> {/* h-7 w-7 */}
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        <IoLogoInstagram className="h-7 w-7"/> {/* h-7 w-7 */}
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        <RiTwitterXLine className="h-6 w-6"/> {/* h-7 w-7 */}
                    </a>
                </div>
                <div className="text-xl text-center flex-grow">
                    <span className="ml-20">We ship worldwide - Fast and reliable shipping!</span>
                </div>
                <div className="text-xl hidden md:block">
                    <a href="tel:+919081782582" className="hover:text-gray-300">+91 90817 82582</a>
                </div>
            </div>
        </div>
    </>
  );
}

export default Topbar;
