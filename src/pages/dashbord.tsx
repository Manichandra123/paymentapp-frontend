import Checkbalance from "../ui/components/checkbalance";
import Navbar from "../ui/components/navbar";
import User from "../ui/components/user";

function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 pt-6 px-4">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Your Account Balance
            </h2>
            <Checkbalance/>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Send Money to Other Users
            </h2>
            <User />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
