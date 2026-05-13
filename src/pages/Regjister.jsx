import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/auth";

function Regjister() {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let newErrors = {};

   
    if (!fullname.trim()) {
      newErrors.fullname = "Full name is required";
    } else if (fullname.trim().length < 3) {
      newErrors.fullname = "Name must be at least 3 characters";
    } else if (fullname.trim().length > 30) {
      newErrors.fullname = "Name cannot exceed 30 characters";
    } else if (!/^[a-zA-Z\s]+$/.test(fullname)) {
      newErrors.fullname = "Name can only contain letters";
    }

    // EMAIL VALIDATION
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
      newErrors.email = "Invalid email address";
    } else if (email.includes(" ")) {
      newErrors.email = "Email cannot contain spaces";
    }

    
    if (!password) {
      newErrors.password = "Password is required";
    } else {
      if (password.length < 8) {
        newErrors.password = "Password must be at least 8 characters";
      } else if (password.length > 45) {
        newErrors.password = "Password is too long";
      } else if (!/[A-Z]/.test(password)) {
        newErrors.password =
          "Password must contain at least 1 uppercase letter";
      } else if (!/[a-z]/.test(password)) {
        newErrors.password =
          "Password must contain at least 1 lowercase letter";
      } else if (!/[0-9]/.test(password)) {
        newErrors.password = "Password must contain at least 1 number";
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        newErrors.password =
          "Password must contain at least 1 special character";
      } else if (/\s/.test(password)) {
        newErrors.password = "Password cannot contain spaces";
      }
    }

    
    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validate()) return;

    const newUser = {
      name: fullname.trim(),
      email: email.trim().toLowerCase(),
      password,
    };

    try {
      setLoading(true);

      await register(newUser);

      alert("Registered successfully!");

      navigate("/login");
    } catch (error) {
      console.log(error);

      alert(
        error?.response?.data?.message ||
          "Something went wrong while registering"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-200">
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Join TriSoft today 🚀
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
         
          <div>
            <input
              type="text"
              placeholder="Full Name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className={`w-full border rounded-lg px-4 py-3 outline-none transition-all ${
                errors.fullname
                  ? "border-red-500 focus:ring-2 focus:ring-red-300"
                  : "border-gray-300 focus:ring-2 focus:ring-gray-400"
              }`}
            />

            {errors.fullname && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullname}
              </p>
            )}
          </div>

         
          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full border rounded-lg px-4 py-3 outline-none transition-all ${
                errors.email
                  ? "border-red-500 focus:ring-2 focus:ring-red-300"
                  : "border-gray-300 focus:ring-2 focus:ring-gray-400"
              }`}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

         
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full border rounded-lg px-4 py-3 outline-none transition-all ${
                errors.password
                  ? "border-red-500 focus:ring-2 focus:ring-red-300"
                  : "border-gray-300 focus:ring-2 focus:ring-gray-400"
              }`}
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password}
              </p>
            )}

            <div className="mt-3 space-y-1 text-sm">
              <p
                className={
                  password.length >= 8
                    ? "text-green-500"
                    : "text-gray-400"
                }
              >
                • 8+ characters
              </p>

              <p
                className={
                  /[A-Z]/.test(password)
                    ? "text-green-500"
                    : "text-gray-400"
                }
              >
                • Uppercase letter
              </p>

              <p
                className={
                  /[0-9]/.test(password)
                    ? "text-green-500"
                    : "text-gray-400"
                }
              >
                • Number
              </p>

              <p
                className={
                  /[!@#$%^&*(),.?":{}|<>]/.test(password)
                    ? "text-green-500"
                    : "text-gray-400"
                }
              >
                • Special character
              </p>
            </div>
          </div>

         
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`w-full border rounded-lg px-4 py-3 outline-none transition-all ${
                errors.confirmPassword
                  ? "border-red-500 focus:ring-2 focus:ring-red-300"
                  : "border-gray-300 focus:ring-2 focus:ring-gray-400"
              }`}
            />

            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

         
          <button
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold transition-all ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-gray-900 hover:bg-black"
            } text-white`}
          >
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Regjister;