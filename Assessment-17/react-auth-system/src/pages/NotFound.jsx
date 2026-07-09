import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found-page">

      <h1>404</h1>

      <h2>Oops!</h2>

      <p>
        The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="back-home-btn"
      >
        Go Home
      </Link>

    </div>
  );
}

export default NotFound;