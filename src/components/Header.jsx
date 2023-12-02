import bookLogo from "../assets/books.png";
export default function Header() {
  const userKey = localStorage.getItem("current-user-key");
  function logOut() {
    localStorage.setItem("current-user-key", "");
    location.reload();
  }
  return (
    <div className="header">
      <h1>
        <img id="logo-image" src={bookLogo} />
        Library App
      </h1>
      {userKey && (
        <button onClick={logOut}>
          Logout
          <span class="material-symbols-outlined">logout</span>
        </button>
      )}
    </div>
  );
}
