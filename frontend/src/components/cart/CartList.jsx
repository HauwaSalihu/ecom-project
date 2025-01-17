import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { Link } from "react-router";

function CartList() {
  const { cartItems } = useSelector((state) => state.cart);

  if (cartItems.length === 0) {
    return (
      <div>
        <h1 className="text-4xl animate-pulse p-4 text-gray-500 mb-10">
          No items in cart
        </h1>
        <Link
          to={"/products"}
          className="text-blue-500 text-xl underline-offset-[10px] hover:text-blue-700 underline"
        >
          Go to shop
        </Link>
      </div>
    );
  }

  return (
    <section>
      {cartItems.map((item) => {
        return (
          <CartItem
            key={item.product_id}
            product_id={item.product_id}
            product_name={item.product_name}
            product_quantity={item.product_quantity}
            product_price={item.product_price}
            product_image={item.product_image}
          />
        );
      })}
    </section>
  );
}

export default CartList;
