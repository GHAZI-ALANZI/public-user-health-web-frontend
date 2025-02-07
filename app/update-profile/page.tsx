"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { updateUserProfile } from "../utils/api";

export default function UpdateProfile() {
  const [form, setForm] = useState({ name: "", email: "" });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateUserProfile(form);
      alert("Profile updated successfully!");
      router.push("/dashboard");
    } catch (error) {
      alert("Error updating profile.");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-6 w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Update Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-lg"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
