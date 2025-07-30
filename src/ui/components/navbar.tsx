import Button from "./button";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check token on load
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // true if token exists
  }, []);

  // Logout handler
  function handleLogout() {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/"); // redirect to signin page
  }

  return (
    <div className="flex border border-slate-100 justify-between rounded-md mt-4 mx-2 text-center items-center shadow-md  ">
 <Link to={'/'}> 
      <div className="text-2xl font-bold pl-2  text-black">ToPay</div>
      </Link>

      <div className="flex gap-3 pr-4">
        {isLoggedIn ? (
          <>
            <Button
              varient="primary"
              size="md"
              text="Logout"
              onClick={handleLogout}
            />
            
          </>
        ) : (
          <>
            <Link to="/signin">
              <Button varient="primary" size="md" text="Login" />
            </Link>
            <Link to="/signup">
              <Button varient="secondary" size="md" text="Signup" />
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
