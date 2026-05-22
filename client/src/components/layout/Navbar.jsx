import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="border-b border-zinc-200">

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-semibold tracking-tight"
        >
          SwapStack
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-6">

          <Link
            to="/matches"
            className="text-sm text-zinc-600 hover:text-black transition"
          >
            Matches
          </Link>

          <Link
            to="/profile"
            className="text-sm text-zinc-600 hover:text-black transition"
          >
            Profile
          </Link>

          <Link
            to="/login"
            className="text-sm text-zinc-600 hover:text-black transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition"
          >
            Get Started
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;