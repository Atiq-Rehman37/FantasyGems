import { Link } from "react-router-dom";

const Gift = () => {
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
            Gift
          </h5>
        </div>

        {/* Content */}
        <div className="">
          {/* Gift Image */}
          <div className="text-center mb-4">
            <img
              src={"giftpage.webp"}
              alt="Gift"
              className="img-fluid"
              style={{ maxHeight: "250px", width: "100%" }}
            />
          </div>

          {/* Gift Form */}
          <div className="text-center mb-4">
            <p className="fw-semibold mb-1">Hi</p>
            <p className="text-muted">We have a gift for you</p>
            <label htmlFor="">Please Enter a Gift Code Below: </label>
            <br />
            <input
              type="text"
              placeholder="Please enter gift code"
              className="p-2 px-4 my-3"
              style={{
                backgroundColor: "#f1f3f4",
                outline: "none",
                border: "none",
              }}
            />
            <br />

            <button className="btn text-white fw-semibold px-4 py-2 btn-success">
              Receive
            </button>
          </div>

          {/* History */}
          <div className="mt-5 text-center">
            <h6 className="fw-bold">📜 History</h6>
            <div className="text-center text-muted">
              <i className="bi bi-inbox" style={{ fontSize: "2rem" }}></i>
              <p className="mt-2 py-5 text-white bg-secondary">No data</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gift;
