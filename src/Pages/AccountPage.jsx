import Login from "../components/Login";
import Register from "../components/Register";
import Account from "../components/Account";
import { useEffect, useState } from "react";

export default function AccountPage() {
  const [userKey, setUserKey] = useState(() =>
    localStorage.getItem("current-user-key")
  );

  useEffect(() => {
    setUserKey(localStorage.getItem("current-user-key"));
  }, []);

  return (
    <div className="account-section">
      {userKey ? (
        <Account />
      ) : (
        <>
          <Login />
          <Register />
        </>
      )}
    </div>
  );
}
