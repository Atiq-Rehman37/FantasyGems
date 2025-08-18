import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Phone");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // This will trigger HTML5 validation first
    if (e.target.checkValidity()) {
      // If valid, navigate to home/dashboard
      navigate("/dashboard");
    }
  };

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url("heroimg.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="col-md-5 bg-white shadow rounded my-4">
        {/* Header */}
        <div className="bg-success text-white p-4 rounded-top">
          <h5 className="fw-bold">Log in</h5>
          <p className="mb-0" style={{ fontSize: "0.9rem" }}>
            Please log in with your phone number or email. <br />
            If you forget your password, please contact customer service.
          </p>
        </div>

        {/* Tabs */}
        <div className="d-flex justify-content-around text-center border-bottom">
          <div
            className={`py-2 flex-fill fw-semibold ${
              activeTab === "Phone"
                ? "text-success border-bottom border-2 border-success"
                : "text-muted"
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => setActiveTab("Phone")}
          >
            Phone number
          </div>
          <div
            className={`py-2 flex-fill fw-semibold ${
              activeTab === "Email"
                ? "text-success border-bottom border-2 border-success"
                : "text-muted"
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => setActiveTab("Email")}
          >
            Email Login
          </div>
        </div>

        {/* Form */}
        <form className="p-4" onSubmit={handleSubmit}>
          {activeTab === "Phone" ? (
            <div className="mb-3">
              <label className="fw-semibold">Phone number</label>
              <div className="input-group">
                <span className="input-group-text">+92</span>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter phone number"
                  required
                />
              </div>
            </div>
          ) : (
            <div className="mb-3">
              <label className="fw-semibold">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email address"
                required
              />
            </div>
          )}

          {/* Password */}
          <div className="mb-3">
            <label className="fw-semibold">Password</label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Password"
                required
              />
              <span
                className="input-group-text"
                style={{ cursor: "pointer" }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>

          {/* Remember checkbox */}
          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="remember" />
            <label htmlFor="remember" className="form-check-label">
              Remember password
            </label>
          </div>

          {/* Buttons */}
          <button
            type="submit"
            className="btn btn-success w-100 rounded-pill fw-semibold"
          >
            Log in
          </button>
          <Link to="/register">
            <button
              type="button"
              className="btn btn-outline-success w-100 rounded-pill fw-semibold mt-2"
            >
              Register
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Login;
