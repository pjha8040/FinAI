import React from "react";
import { Link } from "react-router-dom";  // ✅ Ensure correct import

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-600">
      <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-8 max-w-sm w-full">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-white text-center mb-4">Welcome Back</h1>
        <p className="text-gray-300 text-center mb-6">Login to your account</p>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-white font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-white font-medium mb-1">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
          />
        </div>

        {/* Login Button */}
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg shadow-md transition">
          Login
        </button>

        {/* Forgot Password */}
        <p className="text-center text-gray-300 text-sm mt-3">
          <a href="#" className="hover:underline">Forgot Password?</a>
        </p>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-blue-600 px-2 text-gray-300">Or continue with</span>
          </div>
        </div>

        {/* Social Login Buttons */}
        <div className="flex space-x-4">
          <button className="w-full bg-white/20 hover:bg-white/30 text-white py-2 rounded-lg transition flex items-center justify-center space-x-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="Google" className="w-5 h-5" />
            <span>Google</span>
          </button>
          <button className="w-full bg-white/20 hover:bg-white/30 text-white py-2 rounded-lg transition flex items-center justify-center space-x-2">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="w-5 h-5" />
            <span>GitHub</span>
          </button>
        </div>

        {/* Signup Link */}
        <p className="text-center text-gray-300 text-sm mt-6">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
