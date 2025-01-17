import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helper";
import { Button } from "antd";
import { useNavigate } from "react-router";

function CartSummary() {
  const { CartSummary } = useSelector((state) => state.cart);

  const navigate = useNavigate();

  function handleCheckout() {
    if (CartSummary.totalItems < 1 || CartSummary.totalPrice < 1) {
      return navigate("/products");
    }

    navigate("/checkout");
  }

  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <div className="flex justify-between mb-4">
        <p className="text-gray-500">Item total ({CartSummary.totalItems})</p>
        <p className="text-gray-500 font-semibold">
          {formatCurrency(CartSummary.totalPrice)}
        </p>
      </div>

      <div className="flex justify-between mb-4">
        <p className="text-gray-500">Discount</p>
        <p className="text-gray-500 font-semibold">%45</p>
      </div>

      <div className="text-xl font-semibold flex justify-between">
        <p>Subtotal</p>
        <h3>{formatCurrency(CartSummary.totalPrice)}</h3>
      </div>

      <Button type="primary" block onClick={handleCheckout}>
        Check Out
      </Button>
    </div>
  );
}

export default CartSummary;
