import { Link } from "react-router-dom";
import Button from "../ui/components/button";
import Navbar from "../ui/components/navbar";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 flex flex-col justify-between">
      {/* Hero Section */}
      <Navbar/>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center text-center px-4 py-12">
        <h1 className="text-5xl font-bold leading-tight text-gray-800 max-w-3xl">
          Simplify Your Payments <br /> With <span className="text-indigo-600">ToPay</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-xl">
          Seamlessly send, receive, and manage your money all in one place. Fast, secure, and beautifully simple.
        </p>
        <div className="mt-8 flex gap-4">
          <Link to="/signup">
            <Button text="Get Started" varient="primary" size="lg" />
          </Link>
          <Link to="/signin">
            <Button text="Login" varient="secondary" size="lg" />
          </Link>
        </div>
      </main>

      {/* Features Section */}
      <section className="bg-white py-16 px-8 text-center grid gap-10 md:grid-cols-3">
        <div className="shadow-lg p-6 rounded-xl border">
          <h3 className="text-xl font-semibold mb-2 text-indigo-700">Instant Transfers</h3>
          <p className="text-sm text-gray-600">Send and receive money in seconds with secure bank-level encryption.</p>
        </div>
        <div className="shadow-lg p-6 rounded-xl border">
          <h3 className="text-xl font-semibold mb-2 text-indigo-700">Track Expenses</h3>
          <p className="text-sm text-gray-600">Keep an eye on your balance and stay in control of your spending.</p>
        </div>
        <div className="shadow-lg p-6 rounded-xl border">
          <h3 className="text-xl font-semibold mb-2 text-indigo-700">24/7 Support</h3>
          <p className="text-sm text-gray-600">We’re always here to help. Chat with us anytime, anywhere.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
        © 2025 ToPay. All rights reserved.
      </footer>
    </div>
  );
}
