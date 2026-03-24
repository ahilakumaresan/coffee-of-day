import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import coffeeData from "../data/coffeeData";
import CoffeeCard from "./CoffeeCard";
import coffeeFacts from "../data/coffeeFacts";
import { CartContext } from "../context/CartContext";

function Menu() {
  const { cart, addToCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [currentFact, setCurrentFact] = useState("");
  const navigate = useNavigate();

  const handleOrder = (coffee) => {
    addToCart(coffee);

    // Pick random fact
    const randomIndex = Math.floor(Math.random() * coffeeFacts.length);
    setCurrentFact(coffeeFacts[randomIndex]);

    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);

    // Redirect to checkout after closing modal
    navigate("/checkout");
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="container my-5 pt-5">
      <h2 className="text-center mb-4">Our Menu</h2>

      <div className="row">
        {coffeeData.map((coffee) => (
          <div className="col-md-4 mb-4" key={coffee.id}>
            <CoffeeCard coffee={coffee} onOrder={() => handleOrder(coffee)} />
          </div>
        ))}
      </div>

      {/* THANK YOU MODAL */}
{showModal && (
  <div
    className="modal show d-block"
    tabIndex="-1"
    style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
  >
    <div className="modal-dialog modal-lg modal-dialog-centered">
      <div className="modal-content p-4">
        <h2 className="text-center">☕ Added to Cart!</h2>
        <p className="text-center lead">
          You can continue shopping or go to cart 😄
        </p>

        <hr />

        {/* BILL ITEMS */}
        <h4>🧾 Current Cart</h4>
        <table className="table align-middle">
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.image}
                    alt={item.name}
                    width="50"
                    className="me-2 rounded"
                  />
                  {item.name}
                </td>
                <td>{item.qty}</td>
                <td>₹{item.price * item.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <hr />

        <h4 className="text-end">💰 Total: ₹{totalPrice}</h4>

        <p className="text-muted mt-3 text-center">
          <i>💡 {currentFact}</i>
        </p>

        <div className="text-center mt-3">

          {/* Continue Shopping */}
          <button
            className="btn btn-secondary me-3"
            onClick={() => setShowModal(false)}
          >
            Continue Shopping
          </button>

          {/* Go To Cart */}
          <button
            className="btn btn-success"
            onClick={() => {
              setShowModal(false);
              navigate("/checkout");
            }}
          >
            Go To Cart
          </button>

        </div>
      </div>
    </div>
  </div>
)}
    </div>
  );
}

export default Menu;