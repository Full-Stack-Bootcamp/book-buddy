/* TODO - add your code to create a functional React component that renders a login form */

import { apiLogIn } from "../API/Index";
import { useState } from "react";

export default function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const user = {
    email: userEmail,
    password: userPassword,
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await apiLogIn(user);
    if (response.message === "Login successful!") {
      const token = response?.token;
      localStorage.setItem("current-user-key", token);
      location.reload();
    } else {
      setErrorMessage(response?.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Log In</h3>
      <label>
        Email:
        <input
          type="email"
          id="email"
          onChange={(e) => setUserEmail(e.target.value)}
          value={userEmail}
        />
      </label>{" "}
      <label>
        Password:
        <input
          type="password"
          id="password"
          onChange={(e) => setUserPassword(e.target.value)}
          value={userPassword}
        />
      </label>
      <button>
        <span class="material-symbols-outlined">login</span>
      </button>
      <h4>{errorMessage}</h4>
    </form>
  );
}
