// // components/Navbar.jsx
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isSettingsOpen, setIsSettingsOpen] = useState(false);

//   return (
//     <nav className="bg-blue-800 bg-opacity-80 shadow-lg py-4 fixed w-full z-10 backdrop-blur-lg">
//       <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
//         <h1 className="text-2xl font-extrabold tracking-wide text-white">FinAI</h1>
//         <div className="relative text-white">
//           {/* <Link to="#" className="mx-4 hover:text-blue-300 transition">Features</Link>
//           <Link to="#" className="mx-4 hover:text-blue-300 transition">Pricing</Link>
//           <Link to="#" className="mx-4 hover:text-blue-300 transition">Contact</Link> */}

//           {/* Settings Dropdown */}
//           <div className="inline-block relative">
//             <button
//               onClick={() => setIsSettingsOpen(!isSettingsOpen)}
//               className="mx-4 hover:text-blue-300 transition focus:outline-none"
//             >
//               Settings ▼
//             </button>
//             {isSettingsOpen && (
//               <div className="absolute right-0 mt-2 w-40 bg-white text-blue-900 rounded-lg shadow-lg overflow-hidden">
//                 <Link to="/profile" className="block px-4 py-2 hover:bg-blue-100">Profile</Link>
//                 <Link to="/preferences" className="block px-4 py-2 hover:bg-blue-100">Preferences</Link>
//                 <Link to="/logout" className="block px-4 py-2 hover:bg-blue-100">Logout</Link>
//               </div>
//             )}
//           </div>

//           <Link to="/login" className="ml-6 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-400 transition shadow-md">
//             Login
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div className="navbar bg-base-200 shadow-lg fixed w-full z-10">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          FinAI
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/market" className="btn btn-ghost">
              Market Today
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="btn btn-ghost">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="#" className="btn btn-ghost">
              Contact
            </Link>
          </li>
          <li tabIndex={0} className="relative">
            <button
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className="btn btn-ghost"
            >
              Settings ▼
            </button>
            {isSettingsOpen && (
              <ul className="p-2 bg-base-200 shadow rounded-box absolute right-0 mt-2">
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/preferences">Preferences</Link>
                </li>
                <li>
                  <Link to="/logout">Logout</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
