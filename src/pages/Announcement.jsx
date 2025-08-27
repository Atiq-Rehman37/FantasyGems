import { Link } from "react-router-dom";

const Announcement = () => {
  const announce = [
    {
      id: 1,
      title: "✉️ WELCOME TO FANTASYGEMS",
      message:
        "Welcome to FANTASYGEMS, the most trusted and fastest site, you can play our games to get profit, not only playing games, you can also get profit from inviting your friends to join, and if you have any problems or want to ask, we also have customer service that is ready to serve you 24 hours, and FANTASYGEMS also provides several bonuses that you can check in the ACTIVITY menu on our site, So what are you waiting for, come check our available bonuses and invite your friend to JOIN now !!",
      date: new Date().toLocaleString(),
    },
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
            Announcement
          </h5>
        </div>

        {/* Notifications List */}
        <div className="p-3">
          {announce.map((n) => (
            <div key={n.id} className="p-4 shadow-sm mb-3 rounded">
              <h5 className="fw-semibold mb-1">{n.title}</h5>
              <small className="text-muted">{n.date}</small>
              <hr />
              <p className="fw-semibold text-muted">{n.message}</p>
            </div>
          ))}
        </div>

        <p className="text-center py-3 fw-semibold">No More</p>
      </div>
    </div>
  );
};

export default Announcement;
