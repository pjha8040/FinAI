import React from "react";

const Pricing = () => {
  return (
    <div className="container mx-auto py-12 mt-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-white-900">Pricing Plans</h1>
        <p className="text-xl text-gray-700 mt-4">
          Choose the best plan for your needs.
        </p>
      </header>

      <main>
        <div className="flex justify-center gap-8">
          {/* Free Plan */}
          <div className="bg-white shadow-lg rounded-lg w-80">
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-800">
                Community
              </h2>
              <p className="text-xl font-bold text-blue-600 mt-2">$0 / month</p>
              <ul className="mt-6 space-y-4 text-gray-700">
                <li>100 credits per month</li>
                <li>10 Agent uses per month</li>
                <li>Email support</li>
              </ul>
              <button className="mt-8 bg-transparent border-2 border-blue-600 text-blue-600 py-2 px-6 rounded-full hover:bg-blue-600 hover:text-white">
                Sign Up
              </button>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-white shadow-lg rounded-lg w-80">
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-800">Pro</h2>
              <p className="text-xl font-bold text-blue-600 mt-2">
                $15 / month
              </p>
              <ul className="mt-6 space-y-4 text-gray-700">
                <li>1000 credits per month</li>
                <li>100 Agent use per month</li>
                <li>Priority email support & Expert Guidance</li>
              </ul>
              <button className="mt-8 bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700">
                Get Started
              </button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white shadow-lg rounded-lg w-80">
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-800">Student</h2>
              <p className="text-xl font-bold text-blue-600 mt-2">
                $4.99 / month
              </p>
              <ul className="mt-6 space-y-4 text-gray-700">
                <li>500 credit per month</li>
                <li>50 agent use per month</li>
                <li>Phone and email support</li>
              </ul>
              <button className="mt-8 bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;
