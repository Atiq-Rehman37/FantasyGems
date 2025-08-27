import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowLeft, FaHistory } from "react-icons/fa";
import { Link } from "react-router-dom";

const SafePage = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-start py-4">
      <div
        className="card border-0 shadow-lg p-3 w-100"
        style={{ maxWidth: "950px", borderRadius: "20px" }}
      >
        {/* Header */}
        <div className="d-flex align-items-center mb-3">
          <Link
            to={"/account"}
            className="btn btn-light rounded-circle shadow-sm me-2"
          >
            <FaArrowLeft />
          </Link>
          <h5 className="m-0 fw-bold">Safe</h5>
        </div>

        {/* Interest Rate Banner */}
        <div className="text-center mb-3">
          <span className="badge bg-light text-danger border px-3 py-2 fs-6">
            Interest rate 0.10%
          </span>
        </div>

        {/* Balance Card */}
        <div
          className="card border-0 p-4 mb-3 shadow-sm bg-successs"
          style={{
            borderRadius: "15px",
          }}
        >
          <h6 className="text-start text-light fw-bold mb-3">💳 Balance</h6>
          <div className="text-center text-light">
            <h3 className="fw-bold mb-2">Rs0.00</h3>
            <p className="small mb-2">24-hour estimated revenue Rs0.00</p>
            <span className="badge bg-light text-dark">Financial security</span>
          </div>
        </div>

        {/* Revenue Section */}
        <div
          className="card border-0 text-center p-4 mb-3 shadow-sm"
          style={{ borderRadius: "15px" }}
        >
          <div className="row">
            <div className="col-6 border-end">
              <h6 className="text-danger fw-bold">Rs0.00</h6>
              <p className="small mb-1">Generated revenue</p>
              <span className="badge bg-light text-dark">
                My interest rate 0.1
              </span>
            </div>
            <div className="col-6">
              <h6 className="fw-bold">Rs0.00</h6>
              <p className="small mb-1">Accumulated revenue</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-around gap-3 mt-3">
            <button className="btn btn-outline-success px-3 rounded shadow-sm">
              Transfer Out
            </button>
            <button className="btn btn-success px-3 rounded shadow-sm">
              Transfer In
            </button>
          </div>

          <p className="text-danger small mt-3 mb-0">
            ⚠️ Funds are safe and secure, and can be transferred at any time
          </p>
        </div>

        {/* Historical Records */}
        <div
          className="card border-0 p-3 mb-3 shadow-sm"
          style={{ borderRadius: "15px" }}
        >
          <h6 className="fw-bold mb-3 d-flex align-items-center">
            <FaHistory className="me-2 text-primary" /> Historical records
          </h6>
          <button className="btn btn-outline-success w-100 rounded-pill">
            All history
          </button>
        </div>
      </div>
    </div>
  );
};

export default SafePage;
