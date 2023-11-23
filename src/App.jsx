import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigations";
import SingleBook from "./components/SingleBook";
import Homepage from "./Pages/Homepage";
import AccountPage from "./Pages/AccountPage";
import BooksPage from "./Pages/BooksPage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
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
