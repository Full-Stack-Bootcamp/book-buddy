/* TODO - add your code to create a functional React component that renders a login form */

import { apiLogIn } from "../API/Index";
import { useState } from "react";

export default function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const user = {
    email: userEmail,
    password: userPassword,
  };

  async function handleSubmit(e) {
    console.log(user);
    e.preventDefault();
    const response = await apiLogIn(user);
    console.log(response);
  }

  return (
    <form onSubmit={handleSubmit}>
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
      <button>Log In</button>
    </form>
  );
}
