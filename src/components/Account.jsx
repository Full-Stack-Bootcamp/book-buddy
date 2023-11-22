/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import { useEffect, useState } from "react";
import { getUserInfo } from "../API/Index";
import BookPreview from "./BookPreview";

export default function Account() {
  const [userInfoArray, setUserInfoArray] = useState([]);
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    async function retrieveUserInfo() {
      const userKey = localStorage.getItem("current-user-key");
      try {
        const userInfo = await getUserInfo(userKey);
        setUserInfoArray(userInfo);
        setBookList(userInfo.books);
        console.log(bookList);
      } catch (error) {
        console.log(error);
      }
    }
    retrieveUserInfo();
  }, []);

  function logOut() {
    localStorage.setItem("current-user-key", "");
    location.reload();
  }

  return (
    <>
      <p>{userInfoArray.firstname}</p>
      <p>{userInfoArray.lastname}</p>
      <p>{userInfoArray.email}</p>
      <ul id="book-preview">
        {bookList.map((book, index) => (
          <BookPreview book={book} key={index} />
        ))}
      </ul>

      <button onClick={logOut}>logout</button>
    </>
  );
}
