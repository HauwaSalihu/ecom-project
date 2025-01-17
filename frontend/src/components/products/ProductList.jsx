import ProductCard from "./ProductCard";
import { productData } from "../../constant/products";

function ProductList() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 lg:gap-8 gap-4 p-4">
      {productData.map((item) => {
        return (
          <ProductCard
            key={item.product_id}
            product_id={item.product_id}
            product_image={item.product_image}
            product_name={item.product_name}
            product_price={item.product_price}
          />
        );
      })}
    </section>
  );
}

export default ProductList;
