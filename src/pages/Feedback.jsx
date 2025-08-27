import { Link } from "react-router-dom";

const Feedback = () => {
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
            FeedBack
          </h5>
        </div>

        {/* Content */}
        <div className="p-3">
          <div className="mb-4">
            <textarea
              className="form-control shadow-sm"
              rows={12}
              placeholder="Write your feedback here..."
            ></textarea>
          </div>

          {/* History */}
          <div className="mt-5 text-center">
            <h6 className="fw-bold">
              Send helpfull feedback chance to win Mystery Rewards
            </h6>
            <div className="text-center text-muted">
              <img src={"feedimg.webp"} alt="" height={"200px"} /> <br />
              <button type="submit" className="btn-success btn my-3 px-3">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
