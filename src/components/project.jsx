export const Projects = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <h1>Projects</h1>
        <br />
        <br />
        {props.data?.map((i, index) => {
          return (
            <div key={index}>
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
                  {i.pics.map((pic, index) => {
                    return (
                      <div
                        key={index}
                        className="col-sm-6 col-md-4 col-lg-4"
                      >
                        <div className="portfolio-item">
                          <img
                            style={{
                              width: 400,
                              height: 400,
                              objectFit: "cover",
                            }}
                            src={pic.href}
                            className="img-responsive"
                            alt={pic.title}
                          />
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
