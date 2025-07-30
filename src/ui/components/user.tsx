import axios from "axios";
import { useEffect, useState } from "react";
import Button from "./button";
import { useNavigate } from "react-router-dom";

function User() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/v1/user/getusers", {
        headers: {
          Authorization: localStorage.getItem("token") || "",
        },
      })
      .then((res) => {
        console.log("Response from backend:", res.data);
        setUsers(res.data.users || []); // Defensive check
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading user", err);
        setError("Failed to load users. Please try again.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="h-full w-full bg-gray-100 py-10 flex justify-center mt-4 rounded-2xl">
      <div className="w-full max-w-3xl px-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">Users</h2>

          {loading && <p className="text-gray-500">Loading users...</p>}
          {error && <p className="text-red-500">{error}</p>}

          <div className="space-y-4">
            {users.map((user, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-50 p-4 rounded-md shadow hover:shadow-md transition"
              >
                <div className="text-lg font-medium text-gray-800">
                  {user.username}
                </div>
                <Button
                  varient="primary"
                  text="Send Money"
                  size="sm"
                  onClick={() =>
                    navigate("/sendmoney", {
                      state: { toUserId: user._id, username: user.username },
                    })
                  }
                />
              </div>
            ))}
          </div>

          {users.length === 0 && !loading && (
            <p className="text-gray-500 text-center mt-6">No users found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default User;
