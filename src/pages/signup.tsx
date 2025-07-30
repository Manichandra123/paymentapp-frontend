import { useRef, useState } from "react";
import axios from "axios";
import Button from "../ui/components/button";
import { InputBox } from "../ui/components/input";
import { Heading } from "../ui/components/header";
import Navbar from "../ui/components/navbar";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
   
  const navigate = useNavigate();

  const UsernameRef = useRef<HTMLInputElement>(null);
  const EmailRef = useRef<HTMLInputElement>(null);
  const PasswordRef = useRef<HTMLInputElement>(null);

  async function signup() {
    const username = UsernameRef.current?.value?.trim();
    const email = EmailRef.current?.value?.trim();
    const password = PasswordRef.current?.value?.trim();

    setError("");
    setSuccess("");

    
    if (!username || !email || !password) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);  

    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/signup",
        { username, email, password }
      );

      setSuccess(response.data?.msg || "Signup successful!");
      setError("");
      navigate('/signin')
   
      if (UsernameRef.current) UsernameRef.current.value = "";
      if (EmailRef.current) EmailRef.current.value = "";
      if (PasswordRef.current) PasswordRef.current.value = "";

    } catch (error: any) {
      const message =
        error.response?.data?.msg ||
        "Something went wrong. Please try again.";
      setError(message);
    } finally {
      setLoading(false);  
    }
  }

  return (
    <> 
    <Navbar/> 
    <div className="w-screen h-screen flex justify-center items-center bg-gray-50 ">
      <div className="rounded-lg bg-white border border-slate-300 w-[400px] p-6 hover:border-slate-700 shadow-md">
        <Heading label="Sign Up" />

        <InputBox
          ref={UsernameRef}
          label="Username"
          placeholder="Enter username"
        />
        <InputBox
          ref={EmailRef}
          label="Email"
          placeholder="Enter email"
        />
        <InputBox
          ref={PasswordRef}
          label="Password"
          placeholder="Enter password"
        />

        <div className="mt-4">
          <Button
            varient="primary"
            size="md"
            text={loading ? "Signing Up..." : "Sign Up"}
            onClick={signup}
            
          />
          {error && (
          <div className="text-red-500 text-sm mt-2">{error}</div>
        )}

     
        {success && (
          <div className="text-green-600 text-sm mt-2">{success}</div>
        )}

        <p className="mt-4 text-sm">
          Already have an account?{" "}
          <a
            href="http://localhost:5173/signin"
            className="underline text-indigo-500"
          >
            Sign in
          </a>
        </p>
        </div>

        
         
      </div>
    </div>
    </>
  );
}
