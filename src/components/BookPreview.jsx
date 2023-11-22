import { Link } from "react-router-dom";

export default function BookPreview({ book }) {
  const { author, coverimage, title } = book;
  return (
    <li>
      <Link>
        <h2>{title}</h2>
        <p>By {author}</p>
        <img src={coverimage} alt={`Cover of ${title}`}></img>
      </Link>
    </li>
  );
}
