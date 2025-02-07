"use client"; // Required in App Router for useState/useEffect

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "../utils/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      localStorage.setItem("token", response.data.token);
      router.push("/dashboard");
    } catch (error) {
      alert("Login failed! Check your credentials.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className=" shadow-lg rounded-xl p-6 w-96">
        <h2 className="text-2xl font-bold text-center mb-4 text-white" >Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block text-white">Email</label>
            <input type="email" className="w-full p-2 border rounded" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="block text-white">Password</label>
            <input type="password" className="w-full p-2 border rounded" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded mt-4 hover:bg-blue-600">Login</button>
        </form>
      </div>
    </div>
  );
}
