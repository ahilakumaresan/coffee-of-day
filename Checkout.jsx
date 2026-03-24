import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [coupon, setCoupon] = useState("");
  const navigate = useNavigate();

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const gst = subtotal * 0.05;
  const total = subtotal + gst;
  const discount = coupon === "COFFEE10" ? total * 0.1 : 0;
  const finalTotal = total - discount;

  const placeOrder = () => {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push({ cart, finalTotal, date: new Date() });
    localStorage.setItem("orders", JSON.stringify(orders));

    clearCart();

    alert("Order Placed Successfully ☕");

    navigate("/orders");
  };

  return (
    <div className="container mt-5 pt-5">
      <h2>Checkout</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          className="d-flex justify-content-between border p-2 mb-2"
        >
          <div>{item.name} x {item.qty}</div>
          <div>
            ₹{item.price * item.qty}
            <button
              className="btn btn-danger btn-sm ms-2"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <hr />

      <p>Subtotal: ₹{subtotal}</p>
      <p>GST (5%): ₹{gst}</p>

      <input
        className="form-control my-2"
        placeholder="Enter Coupon (COFFEE10)"
        onChange={(e) => setCoupon(e.target.value)}
      />

      <p>Discount: ₹{discount}</p>
      <h4>Total: ₹{finalTotal}</h4>

      <button
        className="btn btn-success mt-2"
        onClick={placeOrder}
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;