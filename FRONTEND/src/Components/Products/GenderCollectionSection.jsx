import { Link } from "react-router-dom";
import menCollImg from "../../assets/men_coll_1.webp";
import womenCollImg from "../../assets/women_coll_1.jpg";
const GenderCollectionSection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
            {/* Women Collection */}
            <div className="relative flex-1">
                <img src={womenCollImg} alt="Women's Collection" className="w-full h-[700px] object-cover pl-0.5" />
                <div className="absolute bottom-8 left-8 bg-white p-4 rounded-2xl">
                    <h2 className=" text-2xl font-bold text-gray-900 ">
                        Women's Collection
                    </h2>
                    <Link to="/collections/all?gender=Women" className="text-gray-900 underline text-center ml-14">
                        Wear My Style
                    </Link>
                </div>
            </div>
            {/* Men Collection */}
            <div className="relative flex-1">
                <img src={menCollImg} alt="Men's Collection" className="w-full h-[700px] object-cover pr-0.5" />
                <div className="absolute bottom-8 left-8 bg-white p-4 rounded-2xl">
                    <h2 className=" text-2xl font-bold text-gray-900 ">
                        Men's Collection
                    </h2>
                    <Link to="/collections/all?gender=Men" className="text-gray-900 underline text-center ml-10">
                        Wear My Style
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default GenderCollectionSection
