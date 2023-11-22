import { Link } from "react-router-dom";

export default function BookPreview({ book }) {
  console.log(book);
  const { author, coverimage, title, id } = book;
  return (
    <li>
      <Link to={{ pathname: `/books/${id}` }} state={{ book }}>
        <h2>{title}</h2>
        <p>By {author}</p>
        <img src={coverimage} alt={`Cover of ${title}`} />
      </Link>
    </li>
  );
}
