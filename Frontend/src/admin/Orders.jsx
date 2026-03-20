import { useEffect, useState } from "react";
import api from "../utils/api";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await api.get("/order/all");
        setOrders(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p>Loading orders...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">🧾 Orders & Receipts</h1>

      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order._id} className="card bg-base-100 shadow-lg">
            <div className="card-body">

              <div className="flex justify-between items-center">
                <h2 className="font-bold">Order ID</h2>
                <span className="text-sm">{order._id}</span>
              </div>

              <p className="text-sm text-gray-500">
                {new Date(order.createdAt).toLocaleString()}
              </p>

              <span className="badge badge-success w-fit mt-2">
                {order.status}
              </span>

              <div className="divider"></div>

              {/* ITEMS */}
              <div className="space-y-2">
                {order.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between text-sm"
                  >
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span>
                      ₹{item.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              <div className="divider"></div>

              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span className="text-success">
                  ₹{order.totalAmount}
                </span>
              </div>

              <p className="text-sm">
                <b>Payment:</b> {order.paymentMethod}
              </p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
