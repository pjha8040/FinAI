import React, { useEffect, useState } from "react";
import axios from "axios";

const Market = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/top-stocks");
        setStocks(response.data);
      } catch (error) {
        console.error("Error fetching stocks", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStocks();
  }, []);

  const getChangeColor = (change) => {
    return change >= 0 ? "text-green-600" : "text-red-600";
  };

  const getCardStyle = (change) => {
    return change >= 0
      ? "bg-green-50 border-green-200"
      : "bg-red-50 border-red-200";
  };

  const getTrendIcon = (change) => {
    return change >= 0 ? "📈" : "📉";
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 rounded-xl shadow-md">
        📊 Market Overview
      </h2>

      {loading ? (
        <p className="text-center text-gray-500 text-lg">
          Loading stock data...
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stocks.map((stock, index) => (
            <div
              key={index}
              className={`rounded-2xl border p-6 shadow-sm hover:shadow-xl transition duration-300 ${getCardStyle(
                stock.regularMarketChange
              )}`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-semibold">
                  {stock.displayName || stock.symbol}
                </h3>
                <span className="text-2xl">
                  {getTrendIcon(stock.regularMarketChange)}
                </span>
              </div>

              <p className="text-gray-500 mb-2 uppercase text-sm tracking-widest">
                {stock.symbol}
              </p>

              <p className="text-3xl font-bold text-gray-900 mb-3">
                ₹{stock.regularMarketPrice}
              </p>

              <p
                className={`text-lg font-medium ${getChangeColor(
                  stock.regularMarketChange
                )}`}
              >
                {stock.regularMarketChange >= 0 ? "+" : ""}
                {stock.regularMarketChange.toFixed(2)} (
                {stock.regularMarketChangePercent.toFixed(2)}%)
              </p>

              <p className="text-sm text-gray-600 mt-3">
                Previous Close: ₹{stock.regularMarketPreviousClose}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Market;
