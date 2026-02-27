// src/components/Equipment.tsx
import { useEffect, useState } from "react";
import type { Equipment } from "../api";
import { api } from "../api";

export default function EquipmentPage() {
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const fetchData = () => api.fetchEquipment().then(setEquipment).catch(console.error);

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = async () => {
    if (!name || !type) return alert("Name and Type required");
    await api.addEquipment({ name, type });
    setName(""); setType("");
    fetchData();
  };

  const handleDelete = async (id: number) => {
    await api.deleteEquipment(id);
    fetchData();
  };

  return (
    <div className="card">
      <h2 className="card-title">Equipment</h2>

      <div className="form">
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input placeholder="Type" value={type} onChange={e => setType(e.target.value)} />
        <button onClick={handleAdd}>Add Equipment</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Type</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {equipment.map(e => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.type}</td>
              <td><button onClick={() => handleDelete(e.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
