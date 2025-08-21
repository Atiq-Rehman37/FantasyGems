import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaWallet } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const DepositPage = () => {
  return (
    <div
      className="container-fluid min-vh-100 d-flex justify-content-center align-items-center py-4"
      style={{
        backgroundImage: "url('heroimg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="card shadow-lg p-3 w-100"
        style={{ maxWidth: "700px", borderRadius: "15px" }}
      >
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="fw-bold mb-0">
            <Link to={"/account"} className="text-decoration-none text-dark">
              <h5>⮜ Deposit</h5>
            </Link>
          </h5>
          <Link className="text-decoration-none text-primary small">
            Deposit History
          </Link>
        </div>

        {/* Balance */}
        <div
          className="text-white p-4 rounded mb-3"
          style={{ background: "linear-gradient(135deg, #00b894, #019875)" }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-bold">
              <FaWallet className="me-2" color="yellow" />
              Balance
            </span>
            <span className="fw-bold">Rs. 0.00</span>
          </div>
        </div>

        {/* Payment Options */}
        <div className="d-flex gap-3 justify-content-center mb-3">
          <div className="text-center">
            <FaMobileAlt size={30} className="text-success" />
            <p className="small mt-2 mb-0">Easypaisa</p>
          </div>
          <div className="text-center">
            <FaMobileAlt size={30} className="text-danger" />
            <p className="small mt-2 mb-0">JazzCash</p>
          </div>
          <div className="text-center">
            <FaArrowDown size={30} className="text-info" />
            <p className="small mt-2 mb-0">USDT</p>
          </div>
        </div>

        {/* Select Channel */}
        <div className="mb-3">
          <h6 className="fw-bold mb-2">Select channel</h6>
          <div className="d-flex gap-2 flex-wrap">
            <button className="btn btn-outline-success flex-grow-1">
              PkPay-Easypaisa <br /> <small>301 - 50K | 3% Bonus</small>
            </button>
            <button className="btn btn-outline-primary flex-grow-1">
              All2Pay-Easypaisa <br /> <small>1000 - 50K | 3% Bonus</small>
            </button>
          </div>
        </div>

        {/* Deposit Amount */}
        <div className="mb-3">
          <h6 className="fw-bold mb-2">Deposit Amount</h6>
          <div className="d-flex flex-wrap gap-2">
            {["301", "500", "1K", "5K", "10K", "50K"].map((amt, i) => (
              <button key={i} className="btn btn-outline-secondary flex-grow-1">
                Rs {amt}
              </button>
            ))}
          </div>
          <input
            type="number"
            className="form-control mt-3"
            placeholder="Rs 301 - Rs 50,000"
          />
        </div>

        {/* Recharge Instructions */}
        <div className="bg-light p-3 rounded mb-3">
          <h6 className="fw-bold mb-2">Recharge Instructions</h6>
          <ul className="small mb-0">
            <li>If the transfer time is up, please fill out the form again.</li>
            <li>
              The transfer amount must match the order you created, otherwise it
              will fail.
            </li>
            <li>
              If you transfer the wrong amount, the company is not responsible
              for lost funds.
            </li>
            <li>
              <b>Note:</b> Do not cancel the deposit order after the money has
              been transferred.
            </li>
          </ul>
        </div>

        {/* Deposit History */}
        <div className="text-center p-3 bg-light rounded mb-3">
          <p className="small mb-1 fw-bold">Deposit History</p>
          <p className="small text-muted">No records yet</p>
        </div>

        {/* Submit Button */}
        <button className="btn btn-success w-100 fw-bold py-2">Deposit</button>
      </div>
    </div>
  );
};

export default DepositPage;
