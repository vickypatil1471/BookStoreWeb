import { useEffect, useState } from "react";
import axios from "axios";

export default function Contacts() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/admin/contacts")
      .then(res => setMessages(res.data));
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Messages</h1>
      {messages.map(m => (
        <div key={m._id} className="card bg-base-100 p-4 mb-3 shadow">
          <h3>{m.name}</h3>
          <p>{m.email}</p>
          <p>{m.message}</p>
        </div>
      ))}
    </>
  );
}
