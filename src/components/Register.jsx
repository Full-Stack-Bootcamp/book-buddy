/* TODO - add your code to create a functional React component that renders a registration form */

import { useEffect, useState } from "react";
import { register } from "../API/Index";

export default function Register() {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [response, setResponse] = useState("");

  const user = {
    firstName: userFirstName,
    lastName: userLastName,
    email: userEmail,
    password: userPassword,
  };

  async function handleSubmit(e) {
    console.log(user);
    e.preventDefault();
    const response = await register(user);
    console.log(response);
    setResponse(response);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            id="first-name"
            onChange={(e) => setUserFirstName(e.target.value)}
            value={userFirstName}
          />
        </label>{" "}
        <label>
          Last Name:
          <input
            type="text"
            id="last-name"
            onChange={(e) => setUserLastName(e.target.value)}
            value={userLastName}
          />
        </label>{" "}
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
        <button>Register</button>
      </form>
      {response && <h1>{response.message}</h1>}
    </>
  );
}
