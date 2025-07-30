import Button from "../ui/components/button";
import { InputBox } from "../ui/components/input";
import { Heading } from "../ui/components/header";
import { useRef, useState } from "react";
import axios from "axios";
import Navbar from "../ui/components/navbar";
import { useNavigate } from "react-router-dom";

export function Signin() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
const navigate = useNavigate();

  const EmailRef = useRef<HTMLInputElement>(null);
  const PasswordRef = useRef<HTMLInputElement>(null);

  async function signin() {
    const email = EmailRef.current?.value?.trim();
    const password = PasswordRef.current?.value?.trim();

    setError("");
    setSuccess("");

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:3001/api/v1/user/signin",
        { email, password }
      );
    localStorage.setItem("token", response.data.token);
     
      if (response.status === 200) {
        setSuccess(response.data?.message || "Signin successful!");
        setError("");
         navigate('/dashboard')
          
        
      } else {
        setError("Signin failed. Please try again.");
      }
    } catch (error: any) {
      const message =
        error.response?.data?.message || "Invalid credentials or server error.";
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
    <Navbar></Navbar>
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-100">
         
        <div className="rounded-lg bg-white border border-slate-300 w-[400px] text-center p-6 shadow-md">
          <Heading label="Sign In" />

          <InputBox
            ref={EmailRef}
            label="Email"
            placeholder="Enter Email"
          />
          <InputBox
            ref={PasswordRef}
            label="Password"
            placeholder="Enter Password"
          />

          <div className="items-center mt-4">
            <Button
              varient="primary"
              size="md"
              text={loading ? "Signing in..." : "Sign In"}
              onClick={signin}
              
            />
          </div>
             

   
          {error && <div className="text-red-500 text-sm mt-3">{error}</div>}

         
          {success && (
            <div className="text-green-600 text-sm mt-3">{success}</div>
          )}

          <p className="mt-4 text-sm">
            Don't have an account?{" "}
            <a
              href="http://localhost:5173/signup"
              className="underline text-blue-500"
            >
              Sign up
            </a>
          </p>
       
        </div>
      </div>
    </>
  );
}
