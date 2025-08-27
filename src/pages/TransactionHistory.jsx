import React, { useState } from "react";
import { Link } from "react-router-dom";
const TransactionHistory = () => {
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
          className="p-3 border-bottom text-light py-4 bg-successs"
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
            Transaction history
          </h5>
        </div>

        {/* Filters */}
        <div className="d-flex justify-content-between px-3 my-3">
          <select className="form-select me-2">
            <option>All</option>
            <option>Deposit</option>
            <option>Withdrawal</option>
            <option>Bonus</option>
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
          <p className="text-muted">No transaction records found</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
