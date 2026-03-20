import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartprovider";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import toast from "react-hot-toast";





function Cart() {
  const { cart, removeFromCart, totalPrice } = useCart();
  const navigate = useNavigate();
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const { clearCart } = useCart();
  const [receipt, setReceipt] = useState(null);


  
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div className="min-h-screen bg-base-200 pt-28 pb-16">
        <div className="max-w-5xl mx-auto px-4">

          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">My Cart</h2>

            {/* Back Button */}
            <button
              onClick={() => navigate("/course")}
              className="btn btn-outline btn-sm"
            >
              ← ADD TO CART
            </button>
          </div>

          {/* Empty Cart */}
          {cart.length === 0 ? (
            <div className="text-center bg-base-100 p-12 rounded-2xl shadow-lg">
            <p className="text-2xl font-semibold mb-2">
                Your cart is empty 🛒
            </p>

            <p className="text-gray-500 mb-6">
                Looks like you haven’t added anything yet
            </p>

            <button
                className="btn btn-primary"
                onClick={() => navigate("/course")}
             >
                Browse Courses
            </button>
            </div>

            ) : (
            <div className="grid md:grid-cols-3 gap-6">

              {/* Cart Items */}
              <div className="md:col-span-2 space-y-4">
                {cart.map((item, index) => (
                  <div
                    key={item._id}
                        className="flex justify-between items-center bg-base-100 p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
                    >
                    <div className="space-y-1">
                    <h3 className="text-lg font-semibold">
                        {item.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                        ₹{item.price} × {item.quantity}
                    </p>

                    <p className="font-bold text-success">
                        ₹{item.price * item.quantity}
                    </p>
                    </div>

        <button
            className="btn btn-sm btn-outline btn-error"
            onClick={() => removeFromCart(index)}
        >
            Remove
        </button>
        </div>

                ))}
              </div>

              {/* Price Summary */}
              <div className="bg-base-100 p-6 rounded-2xl shadow-lg h-fit sticky top-28">
                <h3 className="text-xl font-bold mb-4">
                Order Summary
                </h3>

                <div className="flex justify-between mb-2 text-gray-600">
                <span>Total Items</span>
                <span>
                    {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
                </div>

                <div className="flex justify-between mb-2 text-gray-600">
                <span>Delivery</span>
                <span className="text-success">Free</span>
                </div>

                <div className="divider"></div>

            <div className="flex justify-between text-lg font-bold">
                <span>Total Amount</span>
                <span className="text-success">₹{totalPrice}</span>
            </div>

            <button
                className="btn btn-success w-full mt-6 text-lg"
                onClick={() => setShowPayment(true)}
            >
                Proceed to Pay
            </button>

            <p className="text-xs text-center text-gray-400 mt-3">
                100% Secure Checkout
            </p>
            </div>


            </div>
          )}
        </div>
      </div>
      {showPayment && (
  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="bg-base-100 payment-card p-6 rounded-2xl w-96 shadow-2xl">

      <h3 className="text-2xl font-bold mb-1 text-center">
        Secure Payment
      </h3>
      <p className="text-center text-gray-500 mb-5">
        Choose your preferred payment method
      </p>

      <div className="space-y-3">

        {/* UPI */}
        <label className="flex items-center justify-between p-3 border rounded-xl cursor-pointer hover:border-success">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="payment"
              value="UPI"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <span className="font-semibold">UPI</span>
          </div>
          <span className="text-sm text-gray-400">GPay / PhonePe</span>
        </label>

        {/* Card */}
        <label className="flex items-center justify-between p-3 border rounded-xl cursor-pointer hover:border-success">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="payment"
              value="Card"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <span className="font-semibold">Debit / Credit Card</span>
          </div>
          <span className="text-sm text-gray-400">Visa / MasterCard</span>
        </label>

        {/* Net Banking */}
        <label className="flex items-center justify-between p-3 border rounded-xl cursor-pointer hover:border-success">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="payment"
              value="NetBanking"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <span className="font-semibold">Net Banking</span>
          </div>
          <span className="text-sm text-gray-400">All banks</span>
        </label>

        {/* COD */}
        <label className="flex items-center justify-between p-3 border rounded-xl cursor-pointer hover:border-success">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="payment"
              value="COD"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <span className="font-semibold">Cash on Delivery</span>
          </div>
          <span className="text-sm text-gray-400">Pay later</span>
        </label>

      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-6">
        <button
          className="btn btn-outline w-1/2"
          onClick={() => setShowPayment(false)}
        >
          Cancel
        </button>

        <button
          className="btn btn-success w-1/2"
          disabled={!paymentMethod}
          onClick={async () => {
  try {
    const res = await fetch("http://localhost:5001/order/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: cart.map((item) => ({
          bookId: item._id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        totalAmount: totalPrice,
        paymentMethod,
      }),
    });

    const orderData = await res.json();

    setReceipt(orderData); // ⭐ save receipt
    toast.success(`Payment Successful via ${paymentMethod}`);
    setShowPayment(false);
    clearCart();
  } catch (error) {
    toast.error("Order failed"+error);
  }
}}

        >
          Pay ₹{totalPrice}
        </button>
      </div>

      <p className="text-xs text-center text-gray-400 mt-4">
        🔒 This is a demo payment. No real money involved.
      </p>

    </div>
  </div>
)}
{receipt && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-base-100 p-6 rounded-2xl w-96 shadow-2xl">

      <h2 className="text-xl font-bold text-center mb-1">
        🧾 Payment Receipt
      </h2>

      <p className="text-center text-sm text-gray-500 mb-4">
        FINOLEX KNOWLEDGE HUB
      </p>

      <div className="text-sm space-y-1 mb-3">
        <p><b>Order ID:</b> {receipt._id}</p>
        <p><b>Date:</b> {new Date(receipt.createdAt).toLocaleString()}</p>
        <p><b>Payment:</b> {receipt.paymentMethod}</p>
        <p>
          <b>Status:</b>{" "}
          <span className="text-success">{receipt.status}</span>
        </p>
      </div>

      <div className="divider"></div>

      <div className="space-y-2 text-sm">
        {receipt.items.map((item, index) => (
          <div key={index} className="flex justify-between">
            <span>
              {item.name} × {item.quantity}
            </span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}
      </div>

      <div className="divider"></div>

      <div className="flex justify-between font-bold text-lg">
        <span>Total</span>
        <span className="text-success">₹{receipt.totalAmount}</span>
      </div>

      <button
        className="btn btn-success w-full mt-4"
        onClick={() => {
          setReceipt(null);
          navigate("/");
        }}
      >
        Done
      </button>

      <p className="text-xs text-center text-gray-400 mt-2">
        Thank you for your purchase ❤️
      </p>

    </div>
  </div>
)}



      {/* Footer */}
      <Footer />
    </>
  );
}

export default Cart;
