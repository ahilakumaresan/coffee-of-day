function OrderHistory() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div className="container mt-4">
      <h2>Order History</h2>

      {orders.length === 0 && <p>No previous orders</p>}

      {orders.map((order, index) => (
        <div key={index} className="border p-3 mb-3">
          <h5>Order {index + 1}</h5>
          <p>Total: ₹{order.finalTotal}</p>
          <p>Date: {new Date(order.date).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

export default OrderHistory;