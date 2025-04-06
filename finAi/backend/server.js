const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const yahooFinance = require("yahoo-finance2").default;

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

app.get("/top-stocks", async (req, res) => {
  try {
    const stockSymbols = [
      // 🔝 Indian Stocks
      "GOOGL",
      "^BSESN",
      "AAPL",
      "^NSEI",
      "^DJI",
      "RELIANCE.NS",
      "TCS.NS",
      "INFY.NS",
      "HDFCBANK.NS",
      "MRF.NS",
      "ITC.NS",
      "WIPRO.NS",
      "SBIN.NS",
      "HCLTECH.NS",
      "BAJFINANCE.NS",
      "KOTAKBANK.NS",
      "ASIANPAINT.NS",
      "ULTRACEMCO.NS",
      "TITAN.NS",
    ];

    const data = await Promise.all(
      stockSymbols.map((sym) => yahooFinance.quote(sym))
    );
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching stock data");
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
