"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getUserProfile } from "../utils/api";
import Sidebar from "../components/Sidebar";

const medicalServices = [
  { name: "Cardiology", icon: "❤️", link: "https://www.google.com" },
  { name: "Neurology", icon: "🧠", link: "https://www.google.com" },
  { name: "Orthopedics", icon: "🦴", link: "https://www.google.com" },
  { name: "Dermatology", icon: "🩹", link: "https://www.google.com" },
  { name: "Pediatrics", icon: "👶", link: "https://www.google.com" },
];

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/login");
        return;
      }
      try {
        const response = await getUserProfile(token);
        setUser(response.data);
      } catch {
        router.push("/login");
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Dashboard Content */}
      <div className="flex-1 bg-gray-100 p-6">
        <h2 className="text-4xl font-bold text-gray-900">Dashboard</h2>
        {user && (
          <div className="bg-white shadow-lg rounded-xl p-6 mt-6">
            <h3 className="text-2xl font-semibold">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
          </div>
        )}

        {/* Medical Services Section */}
        <h3 className="text-2xl font-bold text-gray-800 mt-8">Medical Services</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {medicalServices.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl p-6 text-center transition-transform transform hover:scale-105 cursor-pointer"
                 onClick={() => window.open(service.link, "_blank")}>
              <div className="text-4xl">{service.icon}</div>
              <div className="text-xl font-semibold text-gray-800 mt-2">{service.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
