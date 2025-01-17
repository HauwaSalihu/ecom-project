import { Input } from "antd";

function DeliveryInfo({
  name,
  email,
  phoneNumber,
  deliveryAddress,
  handleInput,
}) {
  return (
    <section className="p-6 bg-gray-100 rounded-lg max-w-lg mx-auto">
      <h2 className="text-center text-2xl font-semibold mb-6 text-gray-800">
        Delivery Information
      </h2>
      <form className="flex flex-col gap-4">
        <Input
          placeholder="Your Name"
          name="name"
          value={name}
          onChange={handleInput}
          size="large"
          className="rounded-md p-2"
        />
        <Input
          placeholder="Your email Address"
          name="email"
          value={email}
          onChange={handleInput}
          size="large"
          className="rounded-md p-2"
        />
        <Input
          name="deliveryAddress"
          value={deliveryAddress}
          onChange={handleInput}
          placeholder="Your Adress"
          size="large"
          className="rounded-md p-2"
        />
        <Input
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleInput}
          placeholder="Your Phone Number"
          size="large"
          className="rounded-md p-2"
        />
      </form>
    </section>
  );
}

export default DeliveryInfo;
