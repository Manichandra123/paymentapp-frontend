import Button from "./button";
import { Heading } from "./header";
import { InputBox } from "./input";
import { useLocation, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";

function Sendmoney() {
  const location = useLocation();
  const navigate = useNavigate();

  const toUserId = location.state?.toUserId;
  const username = location.state?.username;

  const amountRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const sendMoney = async () => {
    const amount = Number(amountRef.current?.value);
    setError("");
    setSuccess("");

    if (!amount || amount <= 0) {
      setError("💡 Please enter a valid amount.");
      return;
    }

    try {
      await axios.post(
        "https://paymentapp-backend-z8c0.onrender.com/api/v1/accounts/transfer",
        {
          amount,
          to: toUserId,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token") || "",
          },
        }
      );

      setSuccess("Money sent successfully!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (err: any) {
      console.error("Transfer failed", err);
      const message =
        err.response?.data?.message || " Transfer failed. Try again.";
      setError(message);
    }
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
      <div className="flex flex-col gap-6 border border-slate-200 rounded-2xl shadow-xl p-10 w-[400px] bg-white transition-all duration-300 ease-in-out">
        <Heading label={`Send Money to ${username || "User"}`} />

        <InputBox
          ref={amountRef}
          label="Amount"
          placeholder="Enter Amount (e.g., 500)"
        />

        <Button
          varient="primary"
          text="💸 Send Money"
          size="md"
          onClick={sendMoney}
        />

        {success && (
          <div className="text-green-600 text-sm font-medium text-center animate-pulse">
            {success}
          </div>
        )}
        {error && (
          <div className="text-red-600 text-sm font-medium text-center">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

export default Sendmoney;
