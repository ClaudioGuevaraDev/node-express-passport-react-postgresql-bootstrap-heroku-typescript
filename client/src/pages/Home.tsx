import Navbar from "../components/Navbar";

import Zoro from "../assets/zoro.jpg";

function Home() {
  return (
    <>
      <Navbar />

      <div className="container p-4">
        <h2 className="h2 mb-4">
          <strong>Reviews</strong>
        </h2>

        <div className="row gy-3 gx-3">
          <div className="col-md-4">
            <div className="card w-full">
              <img src={Zoro} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <h5 className="card-title">Roronoa Zoro</h5>
                  <p>
                    <small className="text-muted">Claudio Guevara</small>
                  </p>
                </div>
                <p className="card-text" style={{ textAlign: "justify" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate, consequuntur.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card w-full">
              <img src={Zoro} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <h5 className="card-title">Roronoa Zoro</h5>
                  <p>
                    <small className="text-muted">Claudio Guevara</small>
                  </p>
                </div>
                <p className="card-text" style={{ textAlign: "justify" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate, consequuntur.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card w-full">
              <img src={Zoro} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <h5 className="card-title">Roronoa Zoro</h5>
                  <p>
                    <small className="text-muted">Claudio Guevara</small>
                  </p>
                </div>
                <p className="card-text" style={{ textAlign: "justify" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate, consequuntur.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card w-full">
              <img src={Zoro} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <h5 className="card-title">Roronoa Zoro</h5>
                  <p>
                    <small className="text-muted">Claudio Guevara</small>
                  </p>
                </div>
                <p className="card-text" style={{ textAlign: "justify" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate, consequuntur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
