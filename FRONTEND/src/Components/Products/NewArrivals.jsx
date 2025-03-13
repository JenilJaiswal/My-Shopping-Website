import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  
  const scrollRef = useRef(null);
  const [isDragging,setIsDragging] = useState(false);
  const [startX,setStartX]=useState(0);
  const [scrollLeft,setScrollLeft]=useState(false);
  const [canScrollLeft,setCanScrollLeft]=useState(false);
  const [canScrollRight,setCanScrollRight]=useState(true);
  const newArrivals = [
    { 
      _id: 1,
      name: "Stylish Jacket",
      price: 45,
      images: [
        {
          url: "https://picsum.photos/200?random=1:",
          altText: "Stylish Jacket",
        }
      ],
    },
    {
      _id: 2,
      name: "Stylish Jacket",
      price: 45,
      images: [
        {
          url: "https://picsum.photos/200?random=2:",
          altText: "Stylish Jacket",
        }
      ],
    },
    {
      _id: 3,
      name: "Stylish Jacket",
      price: 45,
      images: [
        {
          url: "https://picsum.photos/200?random=3:",
          altText: "Stylish Jacket",
        }
      ],
    },
    {
      _id: 4,
      name: "Stylish Jacket",
      price: 45,
      images: [
        {
          url: "https://picsum.photos/200?random=4",
          altText: "Stylish Jacket",
        }
      ],
    },
    {
      _id: 5,
      name: "Stylish Jacket",
      price: 45,
      images: [
        {
          url: "https://picsum.photos/200?random=5",
          altText: "Stylish Jacket",
        }
      ],
    },
    {
      _id: 6,
      name: "Stylish Jacket",
      price: 45,
      images: [
        {
          url: "https://picsum.photos/200?random=6",
          altText: "Stylish Jacket",
        }
      ],
    },
    {
      _id: 7,
      name: "Stylish Jacket",
      price: 45,
      images: [
        {
          url: "https://picsum.photos/200?random=7",
          altText: "Stylish Jacket",
        }
      ],
    },
    {
      _id: 8,
      name: "Stylish Jacket",
      price: 45,
      images: [
        {
          url: "https://picsum.photos/200?random=8",
          altText: "Stylish Jacket",
        },
      ],
    },
  ];

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({left: scrollAmount,behaviour : "smooth"});
  }

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    
    if(container){
      const leftScroll = container.scrollLeft;
      const rightScrollable = container.scrollWidth>leftScroll+container.clientWidth;

      setCanScrollLeft(leftScroll>0);
      setCanScrollRight(rightScrollable<1556);
    }
    
    console.log({
      scrollRight: container.scrollRight,
      scrollLeft:container.scrollLeft,
      clientWidth: container.clientWidth,
      scrollWidth: container.scrollWidth
    });
  };

  useEffect(() =>{
    const container = scrollRef.current;
    if(container){
      container.addEventListener("scroll",updateScrollButtons);
      updateScrollButtons();
      return () => container.removeEventListener("scroll",updateScrollButtons);
    }
  },[])

  return (
    <section>
      <div className="containe mx-auto mb-10 text-center relative">
        <h2 className="text-3xl font-bold mb-4">
          Explore New Arrivals
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight off the runway, freshly added to keep your wardrobe on the cutting edge of fashion. 
        </p>
        {/* Scroll Buttons */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2 px-8">
          <button 
            onClick={() => scroll("left")} 
            disabled={!canScrollLeft}
            className={`p-2 rounded border border-gray-300 ${canScrollLeft?"bg-white text-black" :"bg-gray-200 text-gray-400 cursor-not-allowed"}`}>
            <FiChevronLeft className="text-2xl " />
          </button>
          <button onClick={() => scroll("right")} 
            disabled={!canScrollRight}
            className={`p-2 rounded border border-gray-300 ${canScrollRight?"bg-white text-black" :"bg-gray-200 text-gray-400 cursor-not-allowed"}`}>
            <FiChevronRight className="text-2xl " />
          </button>
        </div>
      </div>
      {/* Scrollable Contents */}
      <div 
        ref={scrollRef}
        className="container px-2 fixed overflow-x-scroll flex space-x-6 relative">
        {newArrivals.map((product)=>(
          <div 
            key={product._id}
            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
          >  
            <img 
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className="w-full h-[500px] rounded-lg object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-lg text-white p-4 rounded-b-lg">
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">₹{product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default NewArrivals
