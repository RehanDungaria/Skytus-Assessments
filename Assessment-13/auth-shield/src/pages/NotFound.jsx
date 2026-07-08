import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>

      <h2>Page Not Found</h2>

      <Link to="/login" className="back-btn">
        Back To Login
      </Link>
    </div>
  );
};

export default NotFound;