// Header.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-2 sticky-top">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          {/* Left: Logo */}
          <div className="d-flex align-items-center">
            <Link to="/">
              <img
                src={"./logo.jpg"} // Replace with your logo path
                alt="Fantasy Gems Logo"
                style={{ maxHeight: "50px" }}
                className="me-2"
              />
            </Link>
          </div>

          {/* Right: Icons */}
          <div className="d-flex align-items-center">
            <Link to={"/login"}>
              <button type="btn" className="btn btn-outline-success me-2">
                Login
              </button>
            </Link>
            <Link to={"./register"}>
              <button type="btn" className="btn btn-success">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
