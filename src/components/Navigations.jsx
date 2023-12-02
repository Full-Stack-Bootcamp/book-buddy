/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */

import { Link } from "react-router-dom";

export default function Navigation() {
  const userKey = localStorage.getItem("current-user-key");

  return (
    <nav>
      <Link to="/">
        <span className="material-symbols-outlined">search</span>
      </Link>
      <Link to="/books">See All Books</Link>
      {userKey ? (
        <>
          <Link to="/availablebooks">AvailableBooks</Link>
          <Link to="/account">Account</Link>
        </>
      ) : (
        <Link to="/account">Log In/Register</Link>
      )}
    </nav>
  );
}
