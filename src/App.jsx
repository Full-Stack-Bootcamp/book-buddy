import bookLogo from "./assets/books.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigations";
import Books from "./components/Books";
import SingleBook from "./components/SingleBook";
import Homepage from "./Pages/Homepage";
import AccountPage from "./Pages/AccountPage";

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
          <Route path="/" element={<Homepage />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<SingleBook />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
