// Header.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import { FaDownload, FaHeadset } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-2 sticky-top">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          {/* Left: Logo */}
          <div className="d-flex align-items-center">
            <img
              src={"./logo.jpg"} // Replace with your logo path
              alt="Fantasy Gems Logo"
              style={{ maxHeight: "50px" }}
              className="me-2"
            />
          </div>

          {/* Right: Icons */}
          <div className="d-flex align-items-center">
            <button type="btn" className="btn btn-outline-success me-2">
              Login
            </button>
            <button type="btn" className="btn btn-success">
              Register
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
