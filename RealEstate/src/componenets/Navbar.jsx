import { Link } from "react-router-dom";

function Navbar({ user, logout }) {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Real Estate</h1>

      <div className="flex items-center gap-6">
        <Link to="/" className="hover:text-yellow-400">
          Home
        </Link>

        <Link to="/properties" className="hover:text-yellow-400">
          Properties
        </Link>

        <Link to="/contact" className="hover:text-yellow-400">
          Contact
        </Link>

       
        {!user ? (
          <div className="flex gap-3">
            <Link
              to="/login"
              className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              Login
            </Link>

            <Link
              to="/regjister"
              className="border border-yellow-400 text-yellow-400 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition"
            >
              Register
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-300">
              Welcome, {user.name}
            </span>

            <Link
              to="/dashboard"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-400 transition"
            >
              Dashboard
            </Link>

            <button
              onClick={logout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-400 transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;