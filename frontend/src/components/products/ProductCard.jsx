import { Button } from "antd";
import { Link } from "react-router";
import { formatCurrency } from "../../utils/helper";

// ProductCard component with destructured props
//this elimates the need to use props.product.product_id, props.product.product_name, etc.

function ProductCard({
  product_id,
  product_name,
  product_price,
  product_image,
}) {
  return (
    <div className="border p-1 rounded-md hover:shadow-2xl transition-all duration-500">
      <img src={product_image} alt="" />
      <div className="p-4">
        <h1 className="font-bold text-lg">{product_name}</h1>
        <p className="mb-1">{formatCurrency(product_price)}</p>

        <Link to={`/products/ ${product_id}`}>
          <Button block type="primary">
            View Product
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
