import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    reference: {
      transaction: String,
      message: String,
      status: String,
      trxref: String,
    },
    customerInfo: {
      name: String,
      email: String,
      phhoneNumber: String,
      deelivertAddress: String,
    },
    CartSummary: {
      totalPrice: Number,
      totalItems: Number,
    },
    cartItems: [
      {
        product_id: Number,
        product_name: String,
        product_price: Number,
        product_quantity: Number,
        product_description: String,
        product_image: String,
      },
    ],
    orderStatus: {
      type: String,
      enum: ["Pending", "Completed", "Cancelled"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

const Order = new mongoose.model("Orders", orderSchema);
export default Order;
