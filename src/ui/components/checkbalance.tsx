import axios from "axios";
import Button from "./button";
import { useState } from "react";

function Checkbalance() {
  const [balance, setBalance] = useState("");
  const [loading, setLoading] = useState(false); // Not loading by default
  const [error, setError] = useState("");

  async function checkBalance() {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(
        "https://paymentapp-backend-z8c0.onrender.com/api/v1/accounts/checkbalance",
        {
          headers: {
            Authorization: localStorage.getItem("token") || "",
          },
        }
      );
      setBalance(res.data.balance);
    } catch (err) {
      console.error("Balance fetch failed:", err);
      setError("Failed to fetch balance");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="w-full h-[100px] flex justify-between items-center p-4 bg-gray-50 shadow rounded-md">
        <div>
          {loading ? (
            <p className="text-gray-500">Checking balance...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : balance ? (
            <p className="text-green-600 font-semibold text-xl">₹ {balance}</p>
          ) : (
            <p className="text-gray-500">Click to check balance</p>
          )}
        </div>
        <div>
          <Button
            varient="primary"
            size="lg"
            text="Check Balance"
            onClick={checkBalance} 
          />
        </div>
      </div>
    </>
  );
}

export default Checkbalance;
