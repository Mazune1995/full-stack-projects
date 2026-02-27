// src/components/Users.tsx
import { useEffect, useState } from "react";
import type { User } from "../api";
import { api } from "../api";

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const fetchData = () => {
    api.fetchUsers().then(setUsers).catch(console.error);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = async () => {
    if (!name || !email) return alert("Name and email required");
    await api.addUser({ name, email });
    setName(""); setEmail("");
    fetchData();
  };

  const handleDelete = async (id: number) => {
    await api.deleteUser(id);
    fetchData();
  };

  return (
    <div className="card">
      <h2 className="card-title">Users</h2>

      <div className="form">
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <button onClick={handleAdd}>Add User</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td><button onClick={() => handleDelete(u.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
