import { Link } from "react-router";
import CTAButton from "../ui/buttons/CTAButton";

const Hero = () => {
  return (
    <section className="container mx-auto flex lg:flex-row flex-col items-center justify-center gap-8 p-4">
      <div className="max-w-[400px] flex flex-col gap-5">
        <h1 className="text-3xl lg:6xl text-slate-800 font-semibold mb-4">
          Ready Made and bespoke clothing{" "}
        </h1>
        <p className="text-lg font-light text-gray-500">
          Made For Africans, In africa by Africans
        </p>
        <Link to="/products">
          <CTAButton buttonText="Shop Our Latest Collection" />
        </Link>
      </div>
      <div>
        <img src="/hero.png" className="w-[700px]" alt="" />
      </div>
    </section>
  );
};

export default Hero;
