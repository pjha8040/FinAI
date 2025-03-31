import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 text-base-content">
      <div className="bg-base-200 shadow-lg rounded-xl p-8 max-w-sm w-full">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-4">Create Account</h1>
        <p className="text-center opacity-70 mb-6">Join us today!</p>

        {/* Name Input */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Full Name</label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Enter your full name"
          />
        </div>

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
            placeholder="Create a password"
          />
        </div>

        {/* Signup Button */}
        <button className="btn btn-primary w-full">Sign Up</button>

        {/* Divider */}
        <div className="divider my-6">Or sign up with</div>

        {/* Social Signup Buttons */}
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

        {/* Login Link */}
        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <Link to="/login" className="link link-primary">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
