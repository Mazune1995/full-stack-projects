// src/App.tsx
import { useState } from "react";
import UsersPage from "./components/Users";
import EquipmentPage from "./components/Equipment";
import DepartmentsPage from "./components/Departments";

export default function App() {
  const [page, setPage] = useState<"users" | "equipment" | "departments">("users");

  return (
    <div>
      <header style={{ background: "#2563eb", color: "white", padding: "1rem" }}>
        <h1>HEMS Dashboard</h1>
        <nav style={{ marginTop: "0.5rem" }}>
          <button onClick={() => setPage("users")} style={{ marginRight: "1rem" }}>Users</button>
          <button onClick={() => setPage("equipment")} style={{ marginRight: "1rem" }}>Equipment</button>
          <button onClick={() => setPage("departments")}>Departments</button>
        </nav>
      </header>

      <main style={{ padding: "1rem" }}>
        {page === "users" && <UsersPage />}
        {page === "equipment" && <EquipmentPage />}
        {page === "departments" && <DepartmentsPage />}
      </main>
    </div>
  );
}
