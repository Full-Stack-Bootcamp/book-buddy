import bookLogo from "./assets/books.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigations";
import SingleBook from "./components/SingleBook";
import Homepage from "./Pages/Homepage";
import AccountPage from "./Pages/AccountPage";
import BooksPage from "./Pages/BooksPage";

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
          <Route path="/books" element={<BooksPage />} />
          <Route path="/books/:id" element={<SingleBook />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
