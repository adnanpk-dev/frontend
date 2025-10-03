import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo / App name */}
        <h1 className="text-xl font-bold">AppName</h1>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-4">
          <Link to='/login' className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition">
            Login
          </Link>
          <Link to='/register'  className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition">
            Signup
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <nav className="flex flex-col p-4 space-y-2">
            <Link to='/login' className="w-full px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition">
              Login
            </Link>
            <Link to='/register' className="w-full px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition">
              Signup
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
