interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: "users" | "equipment") => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <aside className="w-64 bg-white shadow-md flex flex-col">
      <div className="p-6 text-xl font-bold border-b">HEMS</div>
      <nav className="flex-1 p-4">
        <button
          onClick={() => setActiveTab("users")}
          className={`block w-full text-left p-2 rounded mb-2 ${
            activeTab === "users" ? "bg-blue-500 text-white" : "hover:bg-gray-200"
          }`}
        >
          Users
        </button>
        <button
          onClick={() => setActiveTab("equipment")}
          className={`block w-full text-left p-2 rounded ${
            activeTab === "equipment" ? "bg-blue-500 text-white" : "hover:bg-gray-200"
          }`}
        >
          Equipment
        </button>
      </nav>
    </aside>
  );
}
