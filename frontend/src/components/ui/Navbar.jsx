import { NavLink } from "react-router";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <nav className="p-2 shadow-md sticky top-0 z-[999] bg-white">
      <section className="container mx-auto flex justify-between items-center p-4">
        <NavLink to={"/"}>
          <h1 className="font-bold tracking-wide text-2xl">Saby</h1>
        </NavLink>
        <div className="flex gap-4 text-gray-500 font-medium">
          <NavLink
            className={"hover:text-black transition-colors duration-500"}
            to={"/products"}
          >
            MarketPlace
          </NavLink>
          <NavLink
            className={
              "hover:text-black relative transition-colors duration-500"
            }
            to={"/cart"}
          >
            <ShoppingCart strokeWidth={2.5} />
            <p className="bg-red-500 -top-1 -right-1 absolute text-white rounded-lg text-center px-1 text-xs">
              {cartItems.length}
            </p>
          </NavLink>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
