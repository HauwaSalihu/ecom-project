import CartList from "../components/cart/CartList";
import BackButton from "../components/ui/buttons/BackButton";
import CartSummary from "../components/cart/CartSummary";

const Cart = () => {
  return (
    <section className="max-w-[1000px] mx-auto lg:py-24 py-16 px-4">
      <h1 className="text-3xl lg:text-5xl mb-4 ">Cart</h1>
      <div className="flex justify-start w-full">
        <BackButton />
      </div>
      <div className="flex w-full flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-[60%]">
          <CartList />
        </div>
        <div className="w-full lg:w-[40%]">
          <CartSummary />
        </div>
      </div>
    </section>
  );
};

export default Cart;
