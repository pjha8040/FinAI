import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear session
    localStorage.clear();

    // Show logout toast
    toast.success("🔒 Logged out successfully", {
      duration: 2000,
    });

    // Redirect after toast
    const timer = setTimeout(() => {
      navigate("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 text-base-content">
      <div className="text-center space-y-2">
        <span className="loading loading-spinner text-primary"></span>
        <p className="text-lg">Logging you out...</p>
      </div>
    </div>
  );
};

export default Logout;
