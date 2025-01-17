import { Minus, Plus } from "lucide-react";
import { formatCurrency } from "../../utils/helper";
import { useDispatch } from "react-redux";
import {
  removeItem,
  increaseCartItem,
  decreaseCartItem,
} from "../../features/cart/cartSlice";

function CartItem({
  product_name,
  product_price,
  product_quantity,
  product_image,
  product_id,
}) {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-4 bg-gray-100 p-2 items-center">
      <img className="h-28" src={product_image} alt="" />
      <div>
        <div>
          <h2 className="text-base md:text-lg font-medium">{product_name}</h2>
          <p className="text-gray-500 font-light">
            <span className="ml-2"> {formatCurrency(product_price)} </span> X
            <span className="mr-2"> {product_quantity}</span>
          </p>
        </div>

        <div className="flex justify-between mt-6 gap-4">
          <div className="flex text-gray-600 items-center border p-2 gap-6 bg-white">
            <Minus onClick={() => dispatch(decreaseCartItem(product_id))} />
            <span>{product_quantity}</span>
            <Plus onClick={() => dispatch(increaseCartItem(product_id))} />
          </div>
          <button
            onClick={() => dispatch(removeItem(product_id))}
            className="underline-offset-[10px] underline text-gray-500 font-medium hover:text-black"
          >
            remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
