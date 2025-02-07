"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { logout } from "../utils/api";
import { FaUser, FaHome, FaCog, FaSignOutAlt, FaBriefcaseMedical } from "react-icons/fa";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <div className={`h-screen bg-gray-900 text-white p-4 ${collapsed ? "w-16" : "w-64"} transition-all duration-300`}>
      {/* Toggle Button */}
      <button className="absolute top-5 right-5 bg-gray-800 p-2 rounded-lg" onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? "👉" : "👈"}
      </button>

      {/* Sidebar Menu */}
      <div className="flex flex-col mt-10 space-y-4">
        <button onClick={() => router.push("/dashboard")} className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-700">
          <FaHome size={20} />
          {!collapsed && <span>Dashboard</span>}
        </button>
        <button onClick={() => router.push("/medical-services")} className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-700">
          <FaBriefcaseMedical size={20} />
          {!collapsed && <span>Medical Services</span>}
        </button>
        <button onClick={() => router.push("/update-profile")} className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-700">
          <FaUser size={20} />
          {!collapsed && <span>Profile</span>}
        </button>
        <button onClick={() => router.push("/settings")} className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-700">
          <FaCog size={20} />
          {!collapsed && <span>Settings</span>}
        </button>
        <button onClick={handleLogout} className="flex items-center gap-2 p-3 rounded-lg hover:bg-red-600">
          <FaSignOutAlt size={20} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
