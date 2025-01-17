import DeliveryInfo from "../components/checkout/DeliveryInfo";
import Payment from "../components/checkout/Payment";
import { Navigate } from "react-router";
import { useSelector } from "react-redux";
import { useState } from "react";
function Checkout() {
  const { CartSummary } = useSelector((state) => state.cart);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    deliveryAddress: "",
  });

  if (CartSummary.totalItems < 1 || CartSummary.totalPrice < 1) {
    return <Navigate to={"/"} />;
  }

  // handle user input

  function handleInput(e) {
    const { name, value } = e.target;
    setCustomerInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  console.log(customerInfo);

  return (
    <div className="max-w-[1000px] mx-auto py-16 px-4">
      <DeliveryInfo
        name={customerInfo.name}
        email={customerInfo.email}
        phoneNumber={customerInfo.phoneNumber}
        deliveryAddress={customerInfo.deliveryAddress}
        handleInput={handleInput}
      />
      <Payment customerInfo={customerInfo} />
    </div>
  );
}

export default Checkout;
