import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content flex items-center justify-center p-6">
      <div className="card w-full max-w-2xl shadow-xl bg-base-200">
        <div className="card-body">
          {/* Header */}
          <div className="flex flex-col items-center mb-6">
            <div className="avatar mb-4">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://api.dicebear.com/7.x/initials/svg?seed=User" alt="User Avatar" />
              </div>
            </div>
            <h2 className="text-2xl font-semibold">John Doe</h2>
            <p className="text-sm text-blue-300">john.doe@example.com</p>
          </div>

          {/* Form Fields */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input type="text" placeholder="John Doe" className="input input-bordered" />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="john.doe@example.com" className="input input-bordered" />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input type="tel" placeholder="+91 9876543210" className="input input-bordered" />
          </div>

          {/* Actions */}
          <div className="flex justify-between mt-6">
            <button className="btn btn-primary">Update Profile</button>
            <a href="/logout" className="btn btn-outline btn-error">Logout</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
