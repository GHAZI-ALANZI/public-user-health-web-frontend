

export default function Home() {
  return (
<div className="h-screen welcome flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold magic-text">Welcome to Medical Services</h1>
      <p className="text-lg text-white mt-4">Providing the best healthcare solutions for you.</p>
      <a href="/register" className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
        Get Started
      </a>
    </div>  );
}
