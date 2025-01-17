import { useSelector, useDispatch } from "react-redux";
import { usePaystackPayment } from "react-paystack";
import { useNavigate } from "react-router";
import { clearUserCartItems } from "../../features/cart/cartSlice";
import { serverUrl } from "../../utils/helper";
import axios from "axios";

const paystack_secret_key = import.meta.env.VITE_PAYSTACK_TEST_KEY;

function Payment({ customerInfo }) {
  const { CartSummary, cartItems } = useSelector((state) => state.cart);

  const config = {
    reference: new Date().getTime().toString(),
    email: customerInfo.email,
    amount: CartSummary.totalPrice * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: paystack_secret_key,
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initializePayment = usePaystackPayment(config);

  // you can call this function anything
  const onSuccess = async (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    console.log(customerInfo);
    console.log(cartItems);
    console.log(CartSummary);

    try {
      if (reference) {
        const response = await axios.post(`${serverUrl}/order/create-order`, {
          reference: reference,
          customerInfo: customerInfo,
          CartSummary: CartSummary,
          cartItems: cartItems,
        });

        console.log(response);

        localStorage.removeItem("cartItems");
        localStorage.removeItem("cartSummary");
        dispatch(clearUserCartItems());

        alert("order placed");

        return navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  //

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  function handlePaystackPayment() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    //check if total cart amount is less than 1000

    if (CartSummary.totalPrice < 1000) {
      return alert("all orders must be above 1000");
    }

    // check if user entered valid email
    if (emailRegex.test(customerInfo.email) === false) {
      return alert("please enter a vaid mail");
    }

    console.log("hello word");

    //use paystack here
    initializePayment({ onSuccess, onClose });
  }

  return (
    <div>
      <button
        onClick={handlePaystackPayment}
        className="bg-sky-700 text-white p-2 rounded-md w-full"
      >
        Pay Now
      </button>
    </div>
  );
}

export default Payment;
