import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaCloudSun } from "react-icons/fa";
import API from "../services/api";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await API.post("/auth/login", form);
      console.log(result);
      
      toast.success("Login successfull !!")
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed")
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">

      {/* LEFT SECTION */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-green-400 to-emerald-600 text-white items-center justify-center p-12">
        <div className="max-w-md">
          <div className="flex items-center mb-6">
            <FaCloudSun size={70} className="mr-4" />
            <h1 className="text-5xl font-bold">Weather AI</h1>
          </div>

          <h2 className="text-2xl font-semibold mb-4">
            Smart Weather Insights Powered by AI
          </h2>

          <p className="text-lg opacity-90 leading-relaxed">
            Get real-time weather updates and intelligent forecasts with
            AI-powered insights. Plan your day better with accurate
            predictions and smart recommendations tailored to you.
          </p>

        </div>
      </div>

      {/* RIGHT SECTION (LOGIN FORM) */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-green-50">
        <div className="w-full max-w-md overflow-hidden relative bg-white p-8 rounded-2xl shadow-xl border border-green-100">

          <div className="absolute -top-15 -left-15 w-40 h-40 rounded-full bg-green-400 animate-pulse" />

          <div className="flex items-center justify-center mb-6 text-green-600">
            <FaCloudSun size={40} />
          </div>

          <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

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
              className="w-full cursor-pointer bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg transition duration-300"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

          <p className="text-center mt-6 text-gray-600">
            Don’t have an account?{" "}
            <Link to="/register" className="text-green-600 font-semibold">
              Register
            </Link>
          </p>

        </div>
      </div>

    </div>
  );
};

export default Login;