import { Link } from "react-router-dom";

const AboutUs = () => {
  const items = [
    {
      id: 1,
      title: "Confidentiality Agreement",
      icon: "bi bi-journal-text",
      link: "",
    },
    {
      id: 2,
      title: "Risk Disclosure Agreement",
      icon: "bi bi-bookmark",
      link: "",
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
          style={{ borderRadius: "15px 15px 0px 0px" }}
        >
          <h5 className="fw-bold mb-0">
            <Link
              to={"/account"}
              className="text-white text-decoration-none me-3"
            >
              ⮜
            </Link>
            About us
          </h5>
        </div>

        {/* Banner */}
        <div>
          <img
            src={"aboutbg.webp"}
            alt="About us banner"
            style={{
              width: "100%",
              borderBottom: "1px solid #eee",
            }}
          />
        </div>

        {/* Links List */}
        <div className="list-group list-group-flush">
          {items.map((item) => (
            <Link
              to={item.link}
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center py-3"
            >
              <div className="d-flex align-items-center">
                <i className={`${item.icon} text-success me-3 fs-5`}></i>
                <span className="fw-semibold">{item.title}</span>
              </div>
              <i className="bi bi-chevron-right text-muted"></i>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
