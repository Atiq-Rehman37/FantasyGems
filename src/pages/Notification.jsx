import { Link } from "react-router-dom";

const Notification = () => {
  const notifications = [
    {
      id: 1,
      title: "✉️ NEW MEMBER",
      message: "Welcome to our platform! 🎉",
      date: new Date().toLocaleString(),
    },
    {
      id: 2,
      title: "📢 Update",
      message: "No new notifications right now. Stay tuned for updates!",
      date: new Date().toLocaleString(),
    },
  ];

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
          className="p-3 border-bottom text-light py-4"
          style={{
            background: "linear-gradient(135deg, #00b894, #019875)",
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
            Notifications
          </h5>
        </div>

        {/* Notifications List */}
        <div className="p-3">
          {notifications.map((n) => (
            <div key={n.id} className="p-4 shadow-sm mb-3 rounded">
              <h5 className="fw-semibold mb-1">{n.title}</h5>
              <small className="text-muted">{n.date}</small>
              <hr />
              <p className="fw-semibold text-muted">{n.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notification;
