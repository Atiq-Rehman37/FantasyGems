import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaWallet, FaMobileAlt } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";

const WithdrawPage = () => {
  // Payment Methods Data
  const paymentMethods = [
    {
      id: 1,
      name: "Easypaisa",
      icon: <FaMobileAlt size={30} className="text-success" />,
    },
    {
      id: 2,
      name: "JazzCash",
      icon: <FaMobileAlt size={30} className="text-danger" />,
    },
    {
      id: 3,
      name: "USDT",
      icon: <TbCurrencyTaka size={30} className="text-info" />,
    },
  ];

  // Withdraw Instructions Data
  const instructions = [
    { id: 1, text: "Need to bet Rs.0.00 to be able to withdraw" },
    { id: 2, text: "Withdraw time: 00:00 – 23:59" },
    { id: 3, text: "Today Remaining Withdrawals: 3" },
    { id: 4, text: "Withdraw amount range: Rs.500 – Rs.50,000", danger: true },
    {
      id: 5,
      text: "Please confirm your account info before withdrawing. If wrong, company will not be responsible.",
    },
    {
      id: 6,
      text: "If your info is incorrect, please contact customer service.",
    },
  ];

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
            <Link
              to={"/account"}
              className="text-decoration-none text-dark me-2"
            >
              ⮜
            </Link>
            Withdraw
          </h5>
          <Link className="text-decoration-none text-primary small">
            Withdraw History
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
              Available Balance
            </span>
            <span className="fw-bold">Rs. 0.00</span>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="d-flex gap-3 justify-content-center mb-3">
          {paymentMethods.map((method) => (
            <div key={method.id} className="text-center">
              {method.icon}
              <p className="small mt-2 mb-0">{method.name}</p>
            </div>
          ))}
        </div>

        {/* Add Account */}
        <div className="text-center p-3 border rounded mb-3">
          <p className="mb-0 text-muted">+ Add Account</p>
        </div>

        {/* Withdraw Input */}
        <div className="mb-3">
          <h6 className="fw-bold mb-2">Withdraw Amount</h6>
          <div className="input-group">
            <span className="input-group-text">Rs</span>
            <input
              type="number"
              className="form-control"
              placeholder="Enter amount"
            />
            <button className="btn btn-outline-success">All</button>
          </div>
          <small className="text-muted">
            Withdrawable balance: Rs. 0.00 | Received: Rs. 0.00
          </small>
        </div>

        {/* Withdraw Button */}
        <button className="btn btn-success w-100 fw-bold py-2 mb-3">
          Withdraw
        </button>

        {/* Instructions */}
        <div className="bg-light p-3 rounded mb-3">
          <h6 className="fw-bold mb-2">Withdraw Instructions</h6>
          <ul className="small mb-0">
            {instructions.map((item) => (
              <li key={item.id} className={item.danger ? "text-danger" : ""}>
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Withdraw History */}
        <div className="text-center p-3 bg-light rounded mb-3">
          <p className="small mb-1 fw-bold">Withdraw History</p>
          <p className="small text-muted">No data</p>
        </div>

        {/* All History Button */}
        <button className="btn btn-outline-success w-100 fw-bold">
          All History
        </button>
      </div>
    </div>
  );
};

export default WithdrawPage;
