// src/components/Departments.tsx
import { useEffect, useState } from "react";
import type { Department } from "../api";
import { api } from "../api";

export default function DepartmentsPage() {
  const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
    api.fetchDepartments().then(setDepartments).catch(console.error);
  }, []);

  return (
    <div className="card">
      <h2 className="card-title">Departments</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Description</th>
          </tr>
        </thead>
        <tbody>
          {departments.map(d => (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
