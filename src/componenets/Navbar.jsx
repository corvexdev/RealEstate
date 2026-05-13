import { Link } from "react-router-dom";

function Navbar({ user, logout }) {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
       Real Estate
      </h1>

      <div className="flex gap-4 items-center">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>

        <Link to="/properties" className="hover:text-gray-300">
          Properties
        </Link>

        <Link to="/contact" className="hover:text-gray-300">
          Contact
        </Link>

        {user ? (
          <>
            <span className="text-gray-300">
              Welcome, {user.name}
            </span>

            <button
              onClick={logout}
              className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
            >
              Login
            </Link>

            <Link
              to="/regjister"
              className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;