import Hero from "../Components/Layout/Hero"
import GenderCollectionSection from "../Components/Products/GenderCollectionSection"
import NewArrivals from "../Components/Products/NewArrivals"
import ProductDetails from "../Components/Products/ProductDetails"

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />
      {/* Best Seller */}
      <h2 className="text-3xl text-center mb-4 font-bold">Best Seller</h2>
      <ProductDetails />
    </div>
  )
}

export default Home
