import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm">
        <Link href="/login">
          <button className="w-full mb-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
            Login
          </button>
        </Link>
        <Link href="/register">
          <button className="w-full px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
            Register
          </button>
        </Link>
      </div>
    </main>
  );
}
