import { Link } from "react-router-dom"
import heroImg from "../../assets/home_img_1.webp"
const Hero = () => {
  return (
    <section className="relative">
        <img src={heroImg} alt="Home Image" className="mb-10 h-[400px] w-full md:h-[600px] lg:h-[750px] object-cover"/>
        <div className="absolute inset-0 flex items-center justify-center">
            <div className=" text-center text-white p-6">
                <h1 className="opacity-85 text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4 mt-20"> Vacation <br /> Ready </h1>
                <p className="opacity-85 mt-10 text-sm bg-orange-300 px-2 py-2 tracking-tighter md:text-4xl rounded-sm mb-6 text-white-600">
                    Explore our vacation-ready outfits with fast worldwide shipping
                </p>
                <Link to="#" className="bg-white font-bold text-gray-950 px-6 py-2 rounded-sm text-lg">Shop Now</Link>
            </div>
        </div>
    </section>
  )
}

export default Hero
