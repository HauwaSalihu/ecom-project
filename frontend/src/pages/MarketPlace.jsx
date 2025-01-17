import AllProducts from "../components/products/AllProducts";

const MarketPlace = () => {
  return (
    <div className="container mx-auto p-4 py-24 lg:py-16">
      <h1 className="text-3xl text-slate-800 mb-8 font-semibold">
        Get Saby Dresses
      </h1>
      <AllProducts />
    </div>
  );
};

export default MarketPlace;
