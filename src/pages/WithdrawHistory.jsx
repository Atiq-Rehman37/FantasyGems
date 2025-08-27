import React, { useState } from "react";
import { Link } from "react-router-dom";

const depositMethods = [
  { name: "All", icon: "ᰔ" },
  { name: "Easypaisa", icon: "📱" },
  { name: "JazzCash", icon: "💸" },
  { name: "USDT", icon: "💰" },
];
const WithdrawHistory = () => {
  const [activeMethod, setActiveMethod] = useState("All");
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div className="container-fluid d-flex justify-content-center py-4 min-vh-100">
      <div
        className="card shadow-lg"
        style={{
          maxWidth: "950px",
          width: "100%",
          backgroundColor: "white",
          borderRadius: "15px",
          minHeight: "70vh",
        }}
      >
        {/* Header */}
        <div
          className="p-3 border-bottom py-4 text-light bg-successs"
          style={{
            borderRadius: "15px 15px 0px 0px",
          }}
        >
          <h5 className="fw-bold mb-0">
            {" "}
            <Link
              to={"/account"}
              className="text-white text-decoration-none me-3"
            >
              ⮜
            </Link>
            Withdrawl history
          </h5>
        </div>

        {/* Deposit Methods Navigation */}
        <div className="d-flex overflow-auto px-3 py-2">
          {depositMethods.map((method, index) => (
            <button
              key={index}
              className={`btn me-2 ${
                activeMethod === method.name
                  ? "btn-success"
                  : "btn-outline-success"
              }`}
              style={{ minWidth: "140px", flexShrink: 0 }}
              onClick={() => setActiveMethod(method.name)}
            >
              {method.icon} {method.name}
            </button>
          ))}
          <div style={{ paddingRight: "12px" }}></div> {/* Space at end */}
        </div>

        {/* Filters */}
        <div className="d-flex justify-content-between px-3 my-3">
          <select className="form-select me-2">
            <option>All</option>
            <option>Successful</option>
            <option>Pending</option>
            <option>Failed</option>
          </select>
          <input
            type="date"
            className="form-control"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        {/* No Data Section */}
        <div className="text-center p-4">
          <img
            src={"nodata.webp"}
            alt="No Data"
            className="img-fluid mb-3 shadow rounded"
            style={{ maxHeight: "300px", width: "100%" }}
          />
          <p className="text-muted">
            No Withdraw records found for {activeMethod}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WithdrawHistory;
