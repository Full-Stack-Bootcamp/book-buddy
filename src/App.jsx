import { useState } from "react";
import bookLogo from "./assets/books.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigations";
import Account from "./components/Account";
import Books from "./components/Books";
import Login from "./components/Login";
import Register from "./components/Register";
import SingleBook from "./components/SingleBook";

function App() {
  return (
    <>
      <h1>
        <img id="logo-image" src={bookLogo} />
        Library App
      </h1>

      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<SingleBook />} />

          <Route path="/account" element={<Account />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
