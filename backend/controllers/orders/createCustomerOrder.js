import Order from "../../models/orderModel/orderModel.js";

async function createCustomerOrder(req, res) {
  const { reference, customerInfo, CartSummary, cartItems } = req.body;

  if (!reference) {
    res.status(400).json({ message: "transaction reference missing" });
  }
  if (!customerInfo) {
    res.status(400).json({ message: "Customer info  missing" });
  }
  if (!CartSummary) {
    res.status(400).json({ message: "Cart summary  missing" });
  }

  if (!cartItems) {
    res.status(400).json({ message: "Cart items missing" });
  }

  try {
    const orderCreated = await Order.create({
      reference: {
        transaction: reference.transaction,
        message: reference.message,
        status: reference.status,
        trxref: reference.trxref,
      },
      customerInfo: customerInfo,
      CartSummary: CartSummary,
      cartItems: cartItems,
    });

    res.status(201).json({ stats: "success", data: "successfull" });
  } catch (error) {
    res.status(400).json({ stats: "failed", data: error });
  }
}
export { createCustomerOrder };
