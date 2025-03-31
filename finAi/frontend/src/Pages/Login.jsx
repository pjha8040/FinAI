import React from "react";
import { Link } from "react-router-dom";  

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 text-base-content">
      <div className="bg-base-200 shadow-lg rounded-xl p-8 max-w-sm w-full">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-4">Welcome Back</h1>
        <p className="text-center opacity-70 mb-6">Login to your account</p>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            className="input input-bordered w-full"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Password</label>
          <input
            type="password"
            className="input input-bordered w-full"
            placeholder="Enter your password"
          />
        </div>

        {/* Login Button */}
        <button className="btn btn-primary w-full">Login</button>

        {/* Forgot Password */}
        <p className="text-center text-sm mt-3">
          <a href="#" className="link">Forgot Password?</a>
        </p>

        {/* Divider */}
        <div className="divider my-6">Or continue with</div>

        {/* Social Login Buttons */}
        <div className="flex gap-2">
          <button className="btn btn-outline flex-1 flex items-center justify-center gap-2">
            <img src="Google_Icons-09-512.webp" alt="Google" className="w-5 h-5" />
            Google
          </button>
          <button className="btn btn-outline flex-1 flex items-center justify-center gap-2">
            <img src="githublogo.png" alt="GitHub" className="w-5 h-5" />
            GitHub
          </button>
        </div>

        {/* Signup Link */}
        <p className="text-center text-sm mt-6">
          Don't have an account?{" "}
          <Link to="/signup" className="link link-primary">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
