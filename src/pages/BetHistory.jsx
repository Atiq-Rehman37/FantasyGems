import React, { useState } from "react";
import { Link } from "react-router-dom";

const games = [
  { name: "Lottery", icon: "🎱" },
  { name: "Casino", icon: "🎰" },
  { name: "Fishing", icon: "🎣" },
  { name: "Rummy", icon: "🃏" },
  { name: "Casino", icon: "🎰" },
];

const BetHistory = () => {
  const [activeGame, setActiveGame] = useState("Lottery");
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div
      className="container-fluid d-flex justify-content-center py-4 min-vh-100"
      style={{
        backgroundImage: `url("heroimg.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="card shadow-lg"
        style={{
          maxWidth: "700px",
          width: "100%",
          backgroundColor: "white",
          borderRadius: "15px",
          minHeight: "50vh",
        }}
      >
        {/* Header */}
        <div
          className="p-3 border-bottom py-4 text-light"
          style={{
            background: "linear-gradient(135deg, #00b894, #019875)",
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
            Bet history
          </h5>
        </div>

        {/* Games Navigation with Horizontal Scroll */}
        <div
          className="d-flex px-3 py-2"
          style={{
            overflowX: "auto",
            gap: "10px",
            scrollbarWidth: "none",
          }}
        >
          {games.map((game, index) => (
            <button
              key={index}
              className={`btn ${
                activeGame === game.name
                  ? "btn-success"
                  : "btn-outline-secondary"
              }`}
              style={{
                minWidth: "120px",
                flexShrink: 0,
              }}
              onClick={() => setActiveGame(game.name)}
            >
              {game.icon} {game.name}
            </button>
          ))}
        </div>

        {/* Hide scrollbar for Chrome/Safari */}
        <style>
          {`
            div::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        {/* Filters */}
        <div className="d-flex justify-content-between px-3 mb-3">
          <select className="form-select me-2">
            <option>Win Go</option>
            <option>Lucky Draw</option>
            <option>Spin</option>
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
          <p className="text-muted">No Bet records found</p>
        </div>
      </div>
    </div>
  );
};

export default BetHistory;
