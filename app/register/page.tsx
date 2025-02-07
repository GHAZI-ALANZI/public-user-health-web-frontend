"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { register } from "../utils/api";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await register(form.name, form.email, form.password);
      alert("Registration successful! Redirecting...");
      router.push("/dashboard");
    } catch (error) {
      alert("Registration failed! Try again.");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className=" shadow-xl rounded-xl p-8 w-96 animate-fadeIn">
        <h2 className="text-3xl font-bold text-center text-white">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white">Full Name</label>
            <input type="text" className="w-full p-2 border rounded-lg" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          </div>
          <div className="mb-4">
            <label className="block text-white">Email</label>
            <input type="email" className="w-full p-2 border rounded-lg" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          </div>
          <div className="mb-4">
            <label className="block text-white">Password</label>
            <input type="password" className="w-full p-2 border rounded-lg" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
          </div>
          <div className="mb-4">
            <label className="block text-white">Confirm Password</label>
            <input type="password" className="w-full p-2 border rounded-lg" value={form.confirmPassword} onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })} required />
          </div>
          <button type="submit" className="w-full bg-cyan-500 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Register
          </button>
        </form>
        <p className="text-center mt-4 text-white">
          Already have an account? <a href="/login" className="text-yellow-400">Login</a>
        </p>
      </div>
    </div>
  );
}
