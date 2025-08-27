import { Link } from "react-router-dom";

const GameStatistics = () => {
  const games = [
    { id: 1, name: "lottery", icon: "🎟️" },
    { id: 2, name: "video", icon: "📺" },
    { id: 3, name: "Slot", icon: "🎰" },
    { id: 4, name: "Fish", icon: "🐟" },
    { id: 5, name: "sport", icon: "⚽" },
    { id: 6, name: "ChessCard", icon: "♟️" },
  ];

  return (
    <div className="container-fluid d-flex justify-content-center py-4 min-vh-100">
      <div
        className="card shadow-lg"
        style={{
          maxWidth: "950px",
          width: "100%",
          backgroundColor: "white",
          borderRadius: "15px",
          minHeight: "50vh",
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
            <Link
              to={"/account"}
              className="text-white text-decoration-none me-3"
            >
              ⮜
            </Link>
            Game statistics
          </h5>
        </div>

        {/* Tabs */}
        <div
          className="d-flex overflow-auto px-3 py-2"
          style={{ gap: "20px", textWrap: "nowrap" }}
        >
          <button className="btn btn-success rounded py-1">Today</button>
          <button className="btn btn-light rounded  py-1 border">
            Yesterday
          </button>
          <button className="btn btn-light rounded  py-1 border">
            This week
          </button>
          <button className="btn btn-light rounded py-1 border">
            This month
          </button>
          <button className="btn btn-light rounded py-1 border">
            Last 3 months
          </button>
          <button className="btn btn-light rounded py-1 border">Year</button>
        </div>

        {/* Total Bet Box */}
        <div className="text-center py-4 shadow-sm m-3">
          <h3 className="text-warning fw-bold mb-1">Rs 0.00</h3>
          <p className="text-muted mb-0">Total bet</p>
        </div>

        {/* Game List */}
        <div className="p-3">
          {games.map((g) => (
            <div
              key={g.id}
              className="p-3 shadow-sm mb-3 rounded d-flex justify-content-between align-items-center"
            >
              <div>
                <h6 className="fw-bold mb-1">
                  {g.icon} {g.name}
                </h6>
                <small className="text-muted d-block">Total bet: Rs0.00</small>
                <small className="text-muted d-block">Number of bets: 0</small>
                <small className="text-muted d-block">
                  Winning amount: Rs0.00
                </small>
              </div>
              <div className="fw-bold text-success">Rs0.00</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameStatistics;
