import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaCloudSun } from "react-icons/fa";
import API from "../services/api";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await API.post("/auth/register", form);
      toast.success("Registration successfull !!");
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">

      {/* LEFT SECTION */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-emerald-500 to-green-700 text-white items-center justify-center p-12">
        <div className="max-w-md">
          <div className="flex items-center mb-6">
            <FaCloudSun size={70} className="mr-4" />
            <h1 className="text-5xl font-bold">Weather AI</h1>
          </div>

          <h2 className="text-2xl font-semibold mb-4">
            Join the Future of Smart Forecasting
          </h2>

          <p className="text-lg opacity-90 leading-relaxed">
            Create your account and unlock AI-powered weather insights,
            real-time forecasts, and intelligent daily recommendations.
            Stay ahead of the weather — every day.
          </p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-green-50">
        <div className="w-full overflow-hidden max-w-md relative bg-white p-8 rounded-2xl shadow-xl border border-green-100">

          <div className="absolute -top-15 -left-15 w-40 h-40 rounded-full bg-green-400 animate-pulse" />

          <div className="flex items-center justify-center mb-6 text-green-600">
            <FaCloudSun size={40} />
          </div>

          <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
            Create Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-green-400" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-green-400" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-green-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg transition duration-300"
            >
              {loading ? "Creating..." : "Register"}
            </button>

          </form>

          <p className="text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <Link to="/" className="text-green-600 font-semibold">
              Login
            </Link>
          </p>

        </div>
      </div>

    </div>
  );
};

export default Register;