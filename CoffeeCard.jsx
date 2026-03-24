import React from "react";

function CoffeeCard({ coffee, onOrder }) {
  return (
    <div className="card h-100 shadow">
      <img
        src={coffee.image}
        className="card-img-top"
        alt={coffee.name}
        style={{ height: "200px", objectFit: "cover" }}
      />

      <div className="card-body text-center">
        <h5 className="card-title">{coffee.name}</h5>
        <p className="card-text">₹{coffee.price}</p>

        <button className="btn btn-dark" onClick={onOrder}>
          Order
        </button>
      </div>
    </div>
  );
}

export default CoffeeCard;