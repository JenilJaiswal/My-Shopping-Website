import { RiDeleteBin3Line } from "react-icons/ri";

const CartContents = () => {
    const cartProducts = [
        {
            productId : 1,
            name: "T-shirt",
            size : "M",
            color : "Red",
            quantity : 1,
            price : 15,
            image : "https://picsum.photos/200?random=1"
        },
        {
            productId : 2,
            name: "Shirt",
            size : "L",
            color : "Green",
            quantity : 1,
            price : 50,
            image : "https://picsum.photos/200?random=2"
        },
        {
            productId : 3,
            name: "Jeans",
            size : "S",
            color : "Blue",
            quantity : 1,
            price : 35,
            image : "https://picsum.photos/200?random=3"
        },
        {
            productId : 4,
            name: "One Piece",
            size : "M",
            color : "Red",
            quantity : 1,
            price : 15,
            image : "https://picsum.photos/200?random=1"
        },
        {
            productId : 5,
            name: "Top",
            size : "M",
            color : "Black",
            quantity : 1,
            price : 15, 
            image : "https://picsum.photos/200?random=1"
        }
    ]
  return (
    <div>
      {cartProducts.map((product,index)=>(
        <div key={index} className="flex items-start justify-between py-4 border-b border-gray-900">
            <div className="flex items-start">
                <img 
                    src={product.image}  
                    alt={product.name} 
                    className="w-20 h-24 object-cover mr-4 rounded-xl"
                /> 
                <div>
                    <h3>{product.name}</h3>
                    <p className="text-sm text-gray-500">Size: {product.size} | Color: {product.color}</p>
                    <div className="flex items-center mt-2">
                        <button className="border border-gray-200 rounded w-6 px-1 py-0.5 text-xl font-medium">
                            -
                        </button>
                        <span className="mx-4">{product.quantity}</span>
                        <button className="border border-gray-200 rounded w-6 px-1 py-0.5 text-xl font-medium">
                            +
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <p>₹{product.price.toLocaleString()}</p>
                <button>
                    <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600" />
                </button>
            </div>
        </div>
      ))}
    </div>
  );
}

export default CartContents;
