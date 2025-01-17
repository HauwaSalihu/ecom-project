import { useParams } from "react-router";
import { productData } from "../../constant/products";
import { useEffect, useState } from "react";
import { Button, message } from "antd";
import { formatCurrency } from "../../utils/helper";
import BakButton from "../ui/buttons/BackButton";
import { addToCart } from "../../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function ProductInfo() {
  const params = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    const product = productData.find(
      (item) => item.product_id === Number(params.product_id)
    );
    setSingleProduct(product);
    // console.log(product);
  }, []);

  if (singleProduct === null) {
    return (
      <div>
        <h1 className="text-4xl animate-pulse p-4 text-gray-500">
          Loading.....
        </h1>
      </div>
    );
  }
  console.log(singleProduct);

  const handleAddToCart = () => {
    //check if a product is already in cart

    const isProductInCart = cartItems.find(
      (item) => item.product_id === singleProduct.product_id
    );

    if (isProductInCart === undefined) {
      dispatch(addToCart(singleProduct));
      messageApi.success("Product addedd succesfully");
    } else {
      messageApi.error("Item already in cart");
    }
  };

  return (
    <section>
      {contextHolder}
      <BakButton />
      <div className="flex flex-col gap-6 border p-4 bg-gray-50 rounded-md max-w-[500px]">
        <img
          className="w-[500px] mx-auto"
          src={singleProduct.product_image}
          alt=""
        />
        <h1 className="text-4xl font-bold">{singleProduct.product_name}</h1>
        <p>{formatCurrency(singleProduct.product_price)}</p>
        <p className="text-lg text-gray-500">
          {singleProduct.product_description}
        </p>
        <Button onClick={handleAddToCart} type="primary" size="large" block>
          Add to Cart
        </Button>
      </div>
    </section>
  );
}

export default ProductInfo;
