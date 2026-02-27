// src/api.ts
export type User = {
  id: number;
  name: string;
  email: string;
};

export type Equipment = {
  id: number;
  name: string;
  type: string;
};

export type Department = {
  id: number;
  name: string;
  description?: string;
};

export const api = {
  // --- USERS ---
  fetchUsers: async (): Promise<User[]> => {
    const res = await fetch("https://medtainer-i03d.onrender.com/api/users");
    return res.json();
  },
  addUser: async (user: Omit<User, "id">) => {
    const res = await fetch("https://medtainer-i03d.onrender.com/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    return res.json();
  },
  updateUser: async (id: number, user: Partial<User>) => {
    const res = await fetch(`https://medtainer-i03d.onrender.com/api/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    return res.json();
  },
  deleteUser: async (id: number) => {
    return fetch(`https://medtainer-i03d.onrender.com/api/users/${id}`, { method: "DELETE" });
  },

  // --- EQUIPMENT ---
  fetchEquipment: async (): Promise<Equipment[]> => {
    const res = await fetch("https://medtainer-i03d.onrender.com/api/equipment");
    return res.json();
  },
  addEquipment: async (equipment: Omit<Equipment, "id">) => {
    const res = await fetch("https://medtainer-i03d.onrender.com/api/equipment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(equipment),
    });
    return res.json();
  },
  updateEquipment: async (id: number, equipment: Partial<Equipment>) => {
    const res = await fetch(`https://medtainer-i03d.onrender.com/api/equipment/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(equipment),
    });
    return res.json();
  },
  deleteEquipment: async (id: number) => {
    return fetch(`https://medtainer-i03d.onrender.com/api/equipment/${id}`, { method: "DELETE" });
  },

  // --- DEPARTMENTS ---
  fetchDepartments: async (): Promise<Department[]> => {
    const res = await fetch("https://medtainer-i03d.onrender.com/api/departments");
    return res.json();
  },
};
