/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Account() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      {loggedIn ? (
        <p>Account</p>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </>
  );
}
