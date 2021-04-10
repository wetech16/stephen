export const Projects = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <h1>PROJECTS</h1>
        {props.data?.map((i, index) => {
          return (
            <div key={index} style={{ marginTop: "58px" }}>
              <div className="section-title">
                <h2>{i.title}</h2>
                <p>{i.description}</p>
                <p>{i.function}</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <p style={{ color: "black", marginRight: "20px" }}>
                    My Role:
                  </p>
                  <p>{i.myRole}</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <p style={{ color: "black", marginRight: "20px" }}>
                    Features:
                  </p>
                  <p>{i.features}</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <p style={{ color: "black", marginRight: "20px" }}>
                    Technologies:
                  </p>
                  <p>{i.technologies}</p>
                </div>
              </div>
              <div className="row">
                <div className="portfolio-items">
                  {i.pics?.map((pic, ind) => {
                    return (
                      <div
                        key={ind}
                        className="col-sm-6 col-md-4 col-lg-4"
                      >
                        <div
                          className="portfolio-item"
                          style={{
                            border: "2px solid #ddd",
                          }}
                        >
                          <a
                            href={pic.href}
                            title={pic.title}
                            data-lightbox-gallery="gallery1"
                          >
                            <img
                              style={{
                                objectFit: "contain",
                                width: "385px",
                                height: "300px",
                              }}
                              src={pic.small || pic.href}
                              className="img-responsive"
                              alt={pic.title}
                            />
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
