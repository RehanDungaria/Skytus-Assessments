import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">ShopSphere</Link>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/cart" className="cart-link">
          Cart
          <span className="cart-badge">
            {totalItems}
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;